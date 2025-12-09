import { User, Cliente, Pedido } from '../types';

/**
 * MOCK DATA - Demo Version
 * Este archivo contiene datos de demostración para la versión standalone del frontend
 */

// ========== USUARIOS MOCK ==========
export const MOCK_USERS: User[] = [
  {
    id: '1',
    usuario: 'demo',
    nombre: 'Usuario Demo',
    email: 'demo@verdluna.com',
    rol: 'admin'
  },
  {
    id: '2',
    usuario: 'vendedor',
    nombre: 'Vendedor Demo',
    email: 'vendedor@verdluna.com',
    rol: 'vendedor'
  }
];

// Credenciales válidas para login demo
export const VALID_CREDENTIALS = [
  { usuario: 'demo', password: 'demo123' },
  { usuario: 'vendedor', password: 'vendedor123' }
];

// ========== CLIENTES MOCK ==========
export const MOCK_CLIENTES: Cliente[] = [
  {
    id: '1',
    nombre: 'Restaurant El Buen Sabor',
    direccion: 'Av. Principal 123, Centro',
    descripcion: 'Restaurant especializado en comida tradicional',
    telefono: '555-0101',
    email: 'contacto@elbuensabor.com',
    totalFacturado: 45800,
    cantidadPedidos: 12,
    ultimoPedido: '2024-12-08',
    fechaRegistro: '2024-01-15',
    estado: 'activo'
  },
  {
    id: '2',
    nombre: 'Panadería La Espiga Dorada',
    direccion: 'Calle Comercio 456',
    descripcion: 'Panadería artesanal con más de 20 años',
    telefono: '555-0102',
    email: 'info@espigarada.com',
    totalFacturado: 38500,
    cantidadPedidos: 15,
    ultimoPedido: '2024-12-07',
    fechaRegistro: '2024-02-10',
    estado: 'activo'
  },
  {
    id: '3',
    nombre: 'Supermercado Los Andes',
    direccion: 'Av. Los Andes 789',
    descripcion: 'Supermercado de barrio',
    telefono: '555-0103',
    email: 'gerencia@losandes.com',
    totalFacturado: 62300,
    cantidadPedidos: 18,
    ultimoPedido: '2024-12-09',
    fechaRegistro: '2024-01-05',
    estado: 'activo'
  },
  {
    id: '4',
    nombre: 'Café Literario',
    direccion: 'Plaza Central 12',
    descripcion: 'Cafetería con ambiente cultural',
    telefono: '555-0104',
    email: 'cafe@literario.com',
    totalFacturado: 28900,
    cantidadPedidos: 9,
    ultimoPedido: '2024-12-05',
    fechaRegistro: '2024-03-20',
    estado: 'activo'
  },
  {
    id: '5',
    nombre: 'Hotel Bella Vista',
    direccion: 'Malecón 234',
    descripcion: 'Hotel boutique frente al mar',
    telefono: '555-0105',
    email: 'reservas@bellavista.com',
    totalFacturado: 52400,
    cantidadPedidos: 11,
    ultimoPedido: '2024-12-06',
    fechaRegistro: '2024-02-28',
    estado: 'activo'
  },
  {
    id: '6',
    nombre: 'Pastelería Sweet Dreams',
    direccion: 'Calle Dulces 567',
    descripcion: 'Especialistas en pasteles y postres',
    telefono: '555-0106',
    email: 'pedidos@sweetdreams.com',
    totalFacturado: 19800,
    cantidadPedidos: 7,
    ultimoPedido: '2024-11-28',
    fechaRegistro: '2024-04-15',
    estado: 'activo'
  },
  {
    id: '7',
    nombre: 'Bar La Esquina',
    direccion: 'Esquina Norte s/n',
    telefono: '555-0107',
    email: 'bar@laesquina.com',
    totalFacturado: 8500,
    cantidadPedidos: 3,
    ultimoPedido: '2024-10-15',
    fechaRegistro: '2024-05-10',
    estado: 'inactivo'
  }
];

// ========== PEDIDOS MOCK ==========
export const MOCK_PEDIDOS: Pedido[] = [
  // Pedidos recientes
  {
    id: 1,
    clienteId: '3',
    cliente: {
      id: '3',
      nombre: 'Supermercado Los Andes',
      direccion: 'Av. Los Andes 789',
      telefono: '555-0103'
    },
    descripcion: '50kg Harina 0000, 20kg Azúcar, 10L Aceite Girasol',
    precio: 8500,
    precioAbonado: 8500,
    estado: 'Pago',
    fecha: '2024-12-09',
    timestamp: '2024-12-09T10:30:00.000Z',
    whatsappEnviado: true,
    creadoPor: {
      id: '1',
      usuario: 'demo',
      nombre: 'Usuario Demo'
    }
  },
  {
    id: 2,
    clienteId: '1',
    cliente: {
      id: '1',
      nombre: 'Restaurant El Buen Sabor',
      direccion: 'Av. Principal 123, Centro',
      telefono: '555-0101'
    },
    descripcion: '30kg Arroz, 15kg Fideos variados, 5L Salsa de tomate',
    precio: 4200,
    precioAbonado: 2000,
    estado: 'Impago',
    fecha: '2024-12-08',
    timestamp: '2024-12-08T14:20:00.000Z',
    whatsappEnviado: true,
    creadoPor: {
      id: '1',
      usuario: 'demo',
      nombre: 'Usuario Demo'
    }
  },
  {
    id: 3,
    clienteId: '2',
    cliente: {
      id: '2',
      nombre: 'Panadería La Espiga Dorada',
      direccion: 'Calle Comercio 456',
      telefono: '555-0102'
    },
    descripcion: '100kg Harina leudante, 30kg Levadura fresca, 20L Leche',
    precio: 12500,
    precioAbonado: 12500,
    estado: 'Pago',
    fecha: '2024-12-07',
    timestamp: '2024-12-07T09:15:00.000Z',
    whatsappEnviado: true,
    creadoPor: {
      id: '2',
      usuario: 'vendedor',
      nombre: 'Vendedor Demo'
    }
  },
  {
    id: 4,
    clienteId: '5',
    cliente: {
      id: '5',
      nombre: 'Hotel Bella Vista',
      direccion: 'Malecón 234',
      telefono: '555-0105'
    },
    descripcion: '40kg Carne vacuna, 30kg Pollo, 20kg Pescado fresco',
    precio: 18900,
    precioAbonado: 10000,
    estado: 'Impago',
    fecha: '2024-12-06',
    timestamp: '2024-12-06T16:45:00.000Z',
    whatsappEnviado: true,
    creadoPor: {
      id: '1',
      usuario: 'demo',
      nombre: 'Usuario Demo'
    }
  },
  {
    id: 5,
    clienteId: '4',
    cliente: {
      id: '4',
      nombre: 'Café Literario',
      direccion: 'Plaza Central 12',
      telefono: '555-0104'
    },
    descripcion: '10kg Café en grano premium, 5kg Té variado, Dulces surtidos',
    precio: 6800,
    precioAbonado: 6800,
    estado: 'Pago',
    fecha: '2024-12-05',
    timestamp: '2024-12-05T11:30:00.000Z',
    whatsappEnviado: true,
    creadoPor: {
      id: '1',
      usuario: 'demo',
      nombre: 'Usuario Demo'
    }
  },
  // Pedidos de días anteriores
  {
    id: 6,
    clienteId: '3',
    cliente: {
      id: '3',
      nombre: 'Supermercado Los Andes',
      direccion: 'Av. Los Andes 789',
      telefono: '555-0103'
    },
    descripcion: '80kg Arroz, 40kg Azúcar, 20L Aceite',
    precio: 9200,
    precioAbonado: 9200,
    estado: 'Pago',
    fecha: '2024-12-02',
    timestamp: '2024-12-02T10:00:00.000Z',
    whatsappEnviado: true
  },
  {
    id: 7,
    clienteId: '1',
    cliente: {
      id: '1',
      nombre: 'Restaurant El Buen Sabor',
      direccion: 'Av. Principal 123, Centro',
      telefono: '555-0101'
    },
    descripcion: '25kg Carne, 15kg Verduras frescas, Condimentos',
    precio: 8900,
    precioAbonado: 0,
    estado: 'Impago',
    fecha: '2024-11-30',
    timestamp: '2024-11-30T15:20:00.000Z',
    whatsappEnviado: false
  },
  {
    id: 8,
    clienteId: '2',
    cliente: {
      id: '2',
      nombre: 'Panadería La Espiga Dorada',
      direccion: 'Calle Comercio 456',
      telefono: '555-0102'
    },
    descripcion: '50kg Harina integral, 15kg Miel, 10kg Frutos secos',
    precio: 7600,
    precioAbonado: 7600,
    estado: 'Pago',
    fecha: '2024-11-28',
    timestamp: '2024-11-28T08:45:00.000Z',
    whatsappEnviado: true
  },
  {
    id: 9,
    clienteId: '5',
    cliente: {
      id: '5',
      nombre: 'Hotel Bella Vista',
      direccion: 'Malecón 234',
      telefono: '555-0105'
    },
    descripcion: '60kg Carnes variadas, 30kg Pescados, Mariscos frescos',
    precio: 22400,
    precioAbonado: 22400,
    estado: 'Pago',
    fecha: '2024-11-25',
    timestamp: '2024-11-25T13:00:00.000Z',
    whatsappEnviado: true
  },
  {
    id: 10,
    clienteId: '4',
    cliente: {
      id: '4',
      nombre: 'Café Literario',
      direccion: 'Plaza Central 12',
      telefono: '555-0104'
    },
    descripcion: '8kg Café especial, Pastelería variada, Leche y cremas',
    precio: 5400,
    precioAbonado: 3000,
    estado: 'Impago',
    fecha: '2024-11-22',
    timestamp: '2024-11-22T10:15:00.000Z',
    whatsappEnviado: true
  },
  {
    id: 11,
    clienteId: '6',
    cliente: {
      id: '6',
      nombre: 'Pastelería Sweet Dreams',
      direccion: 'Calle Dulces 567',
      telefono: '555-0106'
    },
    descripcion: '40kg Harina pastelera, 20kg Chocolate, Esencias y colorantes',
    precio: 11200,
    precioAbonado: 11200,
    estado: 'Pago',
    fecha: '2024-11-20',
    timestamp: '2024-11-20T09:30:00.000Z',
    whatsappEnviado: true
  },
  {
    id: 12,
    clienteId: '3',
    cliente: {
      id: '3',
      nombre: 'Supermercado Los Andes',
      direccion: 'Av. Los Andes 789',
      telefono: '555-0103'
    },
    descripcion: 'Productos de limpieza variados, Papel higiénico, Jabones',
    precio: 5800,
    precioAbonado: 5800,
    estado: 'Pago',
    fecha: '2024-11-18',
    timestamp: '2024-11-18T14:00:00.000Z',
    whatsappEnviado: true
  },
  {
    id: 13,
    clienteId: '1',
    cliente: {
      id: '1',
      nombre: 'Restaurant El Buen Sabor',
      direccion: 'Av. Principal 123, Centro',
      telefono: '555-0101'
    },
    descripcion: 'Verduras frescas del día, Frutas de estación',
    precio: 3200,
    precioAbonado: 3200,
    estado: 'Pago',
    fecha: '2024-11-15',
    timestamp: '2024-11-15T11:00:00.000Z',
    whatsappEnviado: true
  }
];

// IDs autoincrementales
let nextPedidoId = MOCK_PEDIDOS.length + 1;
let nextClienteId = MOCK_CLIENTES.length + 1;

export const getNextPedidoId = (): number => nextPedidoId++;
export const getNextClienteId = (): string => String(nextClienteId++);
