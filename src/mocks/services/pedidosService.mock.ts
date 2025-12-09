import { mockPedidosApi } from '../mockApi';
import { Pedido, PedidoData, FiltrosPedidos, ApiResponse } from '../../types';

/**
 * PEDIDOS SERVICE MOCK
 * Versión demo que usa mockPedidosApi en lugar de llamadas HTTP reales
 */

const pedidosServiceMock = {
  /**
   * Obtener todos los pedidos
   */
  async getAll(filtros: Partial<FiltrosPedidos> = {}): Promise<ApiResponse<Pedido[]>> {
    return mockPedidosApi.getAll(filtros);
  },

  /**
   * Obtener pedido por ID
   */
  async getById(id: string | number): Promise<ApiResponse<Pedido>> {
    return mockPedidosApi.getById(id);
  },

  /**
   * Crear nuevo pedido
   */
  async create(pedidoData: PedidoData): Promise<ApiResponse<{ pedido: Pedido; whatsappLink: string }>> {
    return mockPedidosApi.create(pedidoData);
  },

  /**
   * Actualizar pedido
   */
  async update(id: string | number, pedidoData: Partial<PedidoData>): Promise<ApiResponse<Pedido>> {
    return mockPedidosApi.update(id, pedidoData);
  },

  /**
   * Marcar pedido como pagado
   */
  async marcarComoPago(id: string | number): Promise<ApiResponse<Pedido>> {
    return mockPedidosApi.marcarComoPago(id);
  },

  /**
   * Actualizar abono parcial (añade el monto al precio abonado existente)
   */
  async actualizarPrecioAbonado(id: string | number, monto: number): Promise<ApiResponse<Pedido>> {
    // En mock, usar actualizarAbono directamente
    return mockPedidosApi.actualizarAbono(id, monto);
  },

  /**
   * Actualizar abono parcial (reemplaza el precio abonado completo)
   */
  async actualizarAbono(id: string | number, nuevoAbono: number): Promise<ApiResponse<Pedido>> {
    return mockPedidosApi.actualizarAbono(id, nuevoAbono);
  },

  /**
   * Eliminar pedido
   */
  async delete(id: string | number): Promise<ApiResponse> {
    return mockPedidosApi.delete(id);
  },

  /**
   * Obtener pedidos de un cliente específico
   */
  async getByCliente(clienteId: string): Promise<ApiResponse<Pedido[]>> {
    return mockPedidosApi.getByCliente(clienteId);
  },

  /**
   * Obtener link de WhatsApp para un pedido
   */
  async getWhatsappLink(id: string | number): Promise<ApiResponse<{ whatsappLink: string }>> {
    return mockPedidosApi.getWhatsappLink(id);
  },

  /**
   * Marcar link de WhatsApp como enviado
   */
  async marcarWhatsappEnviado(id: string | number): Promise<ApiResponse<Pedido>> {
    return mockPedidosApi.marcarWhatsappEnviado(id);
  }
};

export default pedidosServiceMock;
