import {
  MOCK_USERS,
  MOCK_CLIENTES,
  MOCK_PEDIDOS,
  VALID_CREDENTIALS,
  getNextPedidoId,
  getNextClienteId
} from './mockData';
import { User, Cliente, Pedido, PedidoData, ClienteData, ApiResponse } from '../types';

/**
 * MOCK API - Simula respuestas del backend
 * Todas las operaciones se realizan en memoria (no persisten después de recargar)
 */

// Simular delay de red (configurable)
const NETWORK_DELAY = 300; // ms

const delay = (ms: number = NETWORK_DELAY) =>
  new Promise(resolve => setTimeout(resolve, ms));

// ========== STORAGE LOCAL (simula persistencia entre sesiones) ==========
const STORAGE_KEYS = {
  PEDIDOS: 'demo_pedidos',
  CLIENTES: 'demo_clientes',
  USER: 'demo_user',
  TOKEN: 'demo_token'
};

// Inicializar datos en localStorage si no existen
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.PEDIDOS)) {
    localStorage.setItem(STORAGE_KEYS.PEDIDOS, JSON.stringify(MOCK_PEDIDOS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CLIENTES)) {
    localStorage.setItem(STORAGE_KEYS.CLIENTES, JSON.stringify(MOCK_CLIENTES));
  }
};

// Obtener datos de localStorage
const getStoredPedidos = (): Pedido[] => {
  const data = localStorage.getItem(STORAGE_KEYS.PEDIDOS);
  return data ? JSON.parse(data) : [...MOCK_PEDIDOS];
};

const getStoredClientes = (): Cliente[] => {
  const data = localStorage.getItem(STORAGE_KEYS.CLIENTES);
  return data ? JSON.parse(data) : [...MOCK_CLIENTES];
};

// Guardar datos en localStorage
const saveStoredPedidos = (pedidos: Pedido[]) => {
  localStorage.setItem(STORAGE_KEYS.PEDIDOS, JSON.stringify(pedidos));
};

const saveStoredClientes = (clientes: Cliente[]) => {
  localStorage.setItem(STORAGE_KEYS.CLIENTES, JSON.stringify(clientes));
};

// Inicializar al importar
initializeStorage();

// ========== AUTH MOCK API ==========
export const mockAuthApi = {
  async login(usuario: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
    await delay();

    const credential = VALID_CREDENTIALS.find(
      c => c.usuario === usuario && c.password === password
    );

    if (credential) {
      const user = MOCK_USERS.find(u => u.usuario === usuario)!;
      const token = `mock-token-${Date.now()}`;

      return {
        success: true,
        data: { user, token }
      };
    }

    return {
      success: false,
      error: 'Usuario o contraseña incorrectos'
    };
  },

  async logout(): Promise<void> {
    await delay(100);
    // No hace nada en mock, el AuthProvider limpia localStorage
  },

  async verifyToken(token: string): Promise<ApiResponse<{ user: User }>> {
    await delay(100);

    // En demo, cualquier token es válido si existe
    if (token && token.startsWith('mock-token-')) {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        return { success: true, data: { user } };
      }
    }

    return { success: false, error: 'Token inválido' };
  },

  async getMe(): Promise<ApiResponse<{ user: User }>> {
    await delay(100);

    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      return { success: true, data: { user } };
    }

    return { success: false, error: 'No autenticado' };
  }
};

// ========== PEDIDOS MOCK API ==========
export const mockPedidosApi = {
  async getAll(filtros?: any): Promise<ApiResponse<Pedido[]>> {
    await delay();

    let pedidos = getStoredPedidos();

    // Aplicar filtros si existen
    if (filtros) {
      if (filtros.cliente && filtros.cliente !== 'todos') {
        pedidos = pedidos.filter(p =>
          (typeof p.cliente === 'object' ? p.cliente.nombre : p.cliente) === filtros.cliente
        );
      }
      if (filtros.estado && filtros.estado !== 'todos') {
        pedidos = pedidos.filter(p => p.estado === filtros.estado);
      }
      if (filtros.fechaDesde) {
        pedidos = pedidos.filter(p => p.fecha >= filtros.fechaDesde);
      }
      if (filtros.fechaHasta) {
        pedidos = pedidos.filter(p => p.fecha <= filtros.fechaHasta);
      }
    }

    // Ordenar por fecha descendente
    pedidos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

    return {
      success: true,
      data: pedidos
    };
  },

  async getById(id: string | number): Promise<ApiResponse<Pedido>> {
    await delay();

    const pedidos = getStoredPedidos();
    const pedido = pedidos.find(p => String(p.id) === String(id));

    if (pedido) {
      return { success: true, data: pedido };
    }

    return { success: false, error: 'Pedido no encontrado' };
  },

  async create(pedidoData: PedidoData): Promise<ApiResponse<{ pedido: Pedido; whatsappLink: string }>> {
    await delay();

    const clientes = getStoredClientes();
    const cliente = clientes.find(c => c.id === pedidoData.clienteId);

    if (!cliente) {
      return { success: false, error: 'Cliente no encontrado' };
    }

    const currentUser = localStorage.getItem('user');
    const user = currentUser ? JSON.parse(currentUser) : null;

    const nuevoPedido: Pedido = {
      id: getNextPedidoId(),
      clienteId: pedidoData.clienteId,
      cliente: {
        id: cliente.id,
        nombre: cliente.nombre,
        direccion: cliente.direccion,
        telefono: cliente.telefono
      },
      descripcion: pedidoData.descripcion,
      precio: pedidoData.precio,
      precioAbonado: pedidoData.precioAbonado || 0,
      estado: pedidoData.precioAbonado === pedidoData.precio ? 'Pago' : 'Impago',
      fecha: pedidoData.fecha,
      timestamp: new Date().toISOString(),
      whatsappEnviado: false,
      creadoPor: user ? {
        id: user.id,
        usuario: user.usuario,
        nombre: user.nombre
      } : undefined
    };

    const pedidos = getStoredPedidos();
    pedidos.unshift(nuevoPedido);
    saveStoredPedidos(pedidos);

    // Actualizar estadísticas del cliente
    cliente.cantidadPedidos++;
    cliente.totalFacturado += nuevoPedido.precio;
    cliente.ultimoPedido = nuevoPedido.fecha;
    saveStoredClientes(clientes);

    // Generar link de WhatsApp simulado
    const mensaje = `Hola ${cliente.nombre}! 🌿

Tu pedido ha sido registrado:

📦 *Detalle:*
${nuevoPedido.descripcion}

💰 *Total:* $${nuevoPedido.precio.toLocaleString()}
${nuevoPedido.precioAbonado > 0 ? `✅ *Abonado:* $${nuevoPedido.precioAbonado.toLocaleString()}\n⏳ *Pendiente:* $${(nuevoPedido.precio - nuevoPedido.precioAbonado).toLocaleString()}` : ''}

📅 *Fecha:* ${nuevoPedido.fecha}

¡Gracias por tu compra! 🙌`;

    const whatsappLink = `https://wa.me/${cliente.telefono.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;

    return {
      success: true,
      data: { pedido: nuevoPedido, whatsappLink }
    };
  },

  async update(id: string | number, updates: Partial<PedidoData>): Promise<ApiResponse<Pedido>> {
    await delay();

    const pedidos = getStoredPedidos();
    const index = pedidos.findIndex(p => String(p.id) === String(id));

    if (index === -1) {
      return { success: false, error: 'Pedido no encontrado' };
    }

    pedidos[index] = { ...pedidos[index], ...updates };
    saveStoredPedidos(pedidos);

    return { success: true, data: pedidos[index] };
  },

  async marcarComoPago(id: string | number): Promise<ApiResponse<Pedido>> {
    await delay();

    const pedidos = getStoredPedidos();
    const index = pedidos.findIndex(p => String(p.id) === String(id));

    if (index === -1) {
      return { success: false, error: 'Pedido no encontrado' };
    }

    pedidos[index].estado = 'Pago';
    pedidos[index].precioAbonado = pedidos[index].precio;
    saveStoredPedidos(pedidos);

    return { success: true, data: pedidos[index] };
  },

  async actualizarAbono(id: string | number, nuevoAbono: number): Promise<ApiResponse<Pedido>> {
    await delay();

    const pedidos = getStoredPedidos();
    const index = pedidos.findIndex(p => String(p.id) === String(id));

    if (index === -1) {
      return { success: false, error: 'Pedido no encontrado' };
    }

    pedidos[index].precioAbonado = nuevoAbono;
    pedidos[index].estado = nuevoAbono >= pedidos[index].precio ? 'Pago' : 'Impago';
    saveStoredPedidos(pedidos);

    return { success: true, data: pedidos[index] };
  },

  async delete(id: string | number): Promise<ApiResponse> {
    await delay();

    const pedidos = getStoredPedidos();
    const filtrados = pedidos.filter(p => String(p.id) !== String(id));

    if (filtrados.length === pedidos.length) {
      return { success: false, error: 'Pedido no encontrado' };
    }

    saveStoredPedidos(filtrados);
    return { success: true };
  },

  async getByCliente(clienteId: string): Promise<ApiResponse<Pedido[]>> {
    await delay();

    const pedidos = getStoredPedidos();
    const pedidosCliente = pedidos.filter(p => p.clienteId === clienteId);

    return { success: true, data: pedidosCliente };
  },

  async getWhatsappLink(id: string | number): Promise<ApiResponse<{ whatsappLink: string }>> {
    await delay();

    const pedidos = getStoredPedidos();
    const pedido = pedidos.find(p => String(p.id) === String(id));

    if (!pedido) {
      return { success: false, error: 'Pedido no encontrado' };
    }

    const cliente = typeof pedido.cliente === 'object' ? pedido.cliente : { telefono: '555-0000' };

    const mensaje = `Hola! Tu pedido #${pedido.id} está listo.`;
    const whatsappLink = `https://wa.me/${cliente.telefono?.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;

    return { success: true, data: { whatsappLink } };
  },

  async marcarWhatsappEnviado(id: string | number): Promise<ApiResponse<Pedido>> {
    await delay();

    const pedidos = getStoredPedidos();
    const index = pedidos.findIndex(p => String(p.id) === String(id));

    if (index === -1) {
      return { success: false, error: 'Pedido no encontrado' };
    }

    pedidos[index].whatsappEnviado = true;
    saveStoredPedidos(pedidos);

    return { success: true, data: pedidos[index] };
  }
};

// ========== CLIENTES MOCK API ==========
export const mockClientesApi = {
  async getAll(): Promise<ApiResponse<Cliente[]>> {
    await delay();

    const clientes = getStoredClientes();
    return { success: true, data: clientes };
  },

  async getById(id: string): Promise<ApiResponse<Cliente>> {
    await delay();

    const clientes = getStoredClientes();
    const cliente = clientes.find(c => c.id === id);

    if (cliente) {
      return { success: true, data: cliente };
    }

    return { success: false, error: 'Cliente no encontrado' };
  },

  async create(clienteData: ClienteData): Promise<ApiResponse<Cliente>> {
    await delay();

    const nuevoCliente: Cliente = {
      id: getNextClienteId(),
      nombre: clienteData.nombre,
      direccion: clienteData.direccion,
      descripcion: clienteData.descripcion,
      telefono: clienteData.telefono,
      email: clienteData.email,
      totalFacturado: 0,
      cantidadPedidos: 0,
      ultimoPedido: null,
      fechaRegistro: new Date().toISOString().split('T')[0],
      estado: 'activo'
    };

    const clientes = getStoredClientes();
    clientes.unshift(nuevoCliente);
    saveStoredClientes(clientes);

    return { success: true, data: nuevoCliente };
  },

  async update(id: string, updates: Partial<Cliente>): Promise<ApiResponse<Cliente>> {
    await delay();

    const clientes = getStoredClientes();
    const index = clientes.findIndex(c => c.id === id);

    if (index === -1) {
      return { success: false, error: 'Cliente no encontrado' };
    }

    clientes[index] = { ...clientes[index], ...updates };
    saveStoredClientes(clientes);

    return { success: true, data: clientes[index] };
  },

  async delete(id: string): Promise<ApiResponse> {
    await delay();

    const clientes = getStoredClientes();
    const filtrados = clientes.filter(c => c.id !== id);

    if (filtrados.length === clientes.length) {
      return { success: false, error: 'Cliente no encontrado' };
    }

    saveStoredClientes(filtrados);
    return { success: true };
  },

  async getPedidos(clienteId: string): Promise<ApiResponse<Pedido[]>> {
    return mockPedidosApi.getByCliente(clienteId);
  }
};

// ========== CONTACTO MOCK API ==========
export const mockContactoApi = {
  async enviarContacto(data: any): Promise<ApiResponse> {
    await delay(500);

    // Simular envío exitoso
    console.log('📧 [DEMO] Mensaje de contacto recibido:', data);

    return {
      success: true,
      message: 'Tu mensaje ha sido enviado. Te responderemos pronto.'
    };
  },

  async enviarSolicitudMayorista(data: any): Promise<ApiResponse> {
    await delay(500);

    // Simular envío exitoso
    console.log('📧 [DEMO] Solicitud mayorista recibida:', data);

    return {
      success: true,
      message: 'Tu solicitud ha sido recibida. Nos pondremos en contacto contigo.'
    };
  }
};
