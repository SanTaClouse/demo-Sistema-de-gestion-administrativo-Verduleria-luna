// ============= DEMO MODE - STANDALONE VERSION =============
// Esta versión usa datos mock y NO requiere backend

// Exportar servicios mock (standalone, sin backend)
export { default as authService } from '../mocks/services/authService.mock';
export { default as clientesService } from '../mocks/services/clientesService.mock';
export { default as pedidosService } from '../mocks/services/pedidosService.mock';
export { default as contactoService } from '../mocks/services/contactoService.mock';

// Los siguientes exports no se usan en modo demo pero se mantienen para compatibilidad
export { default as apiClient } from '../client/client';
export { default as API_CONFIG, ENDPOINTS } from '../config/config';
