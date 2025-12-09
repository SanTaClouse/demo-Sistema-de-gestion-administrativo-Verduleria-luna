import { mockClientesApi } from '../mockApi';
import { Cliente, ClienteData, Pedido, ApiResponse } from '../../types';

const clientesServiceMock = {
  async getAll(): Promise<ApiResponse<Cliente[]>> {
    return mockClientesApi.getAll();
  },

  async getById(id: string): Promise<ApiResponse<Cliente>> {
    return mockClientesApi.getById(id);
  },

  async create(clienteData: ClienteData): Promise<ApiResponse<Cliente>> {
    return mockClientesApi.create(clienteData);
  },

  async update(id: string, clienteData: Partial<Cliente>): Promise<ApiResponse<Cliente>> {
    return mockClientesApi.update(id, clienteData);
  },

  async delete(id: string): Promise<ApiResponse> {
    return mockClientesApi.delete(id);
  },

  async getPedidos(clienteId: string): Promise<ApiResponse<Pedido[]>> {
    return mockClientesApi.getPedidos(clienteId);
  }
};

export default clientesServiceMock;
