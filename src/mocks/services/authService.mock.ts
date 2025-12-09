import { mockAuthApi } from '../mockApi';
import { User, LoginResult, VerifyTokenResult } from '../../types';

/**
 * AUTH SERVICE MOCK
 * Versión demo que usa mockAuthApi en lugar de llamadas HTTP reales
 */

const authServiceMock = {
  /**
   * Iniciar sesión
   */
  async login(usuario: string, password: string): Promise<LoginResult> {
    const result = await mockAuthApi.login(usuario, password);

    if (result.success && result.data) {
      const { user, token } = result.data;

      // Guardar en localStorage
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user', JSON.stringify(user));

      return { success: true, user, token };
    }

    return { success: false, error: result.error || 'Error al iniciar sesión' };
  },

  /**
   * Cerrar sesión
   */
  async logout(): Promise<void> {
    await mockAuthApi.logout();
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },

  /**
   * Obtener usuario actual del localStorage
   */
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  },

  /**
   * Verificar si hay sesión activa
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  },

  /**
   * Obtener token actual
   */
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  },

  /**
   * Verificar token con el servidor
   */
  async verifyToken(): Promise<VerifyTokenResult> {
    const token = this.getToken();
    if (!token) {
      return { valid: false, user: undefined };
    }

    const result = await mockAuthApi.verifyToken(token);

    if (result.success && result.data) {
      return { valid: true, user: result.data.user };
    }

    return { valid: false, user: undefined };
  }
};

export default authServiceMock;
