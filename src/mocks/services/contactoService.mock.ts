import { mockContactoApi } from '../mockApi';
import { ApiResponse } from '../../types';

interface ContactoData {
  nombre: string;
  telefono: string;
  email: string;
  asunto: string;
  mensaje: string;
}

interface SolicitudMayoristaData {
  nombre: string;
  comercio: string;
  telefono: string;
  email: string;
  productos: string;
  mensaje: string;
}

const contactoServiceMock = {
  async enviarContacto(data: ContactoData): Promise<ApiResponse> {
    return mockContactoApi.enviarContacto(data);
  },

  async enviarSolicitudMayorista(data: SolicitudMayoristaData): Promise<ApiResponse> {
    return mockContactoApi.enviarSolicitudMayorista(data);
  }
};

export default contactoServiceMock;
