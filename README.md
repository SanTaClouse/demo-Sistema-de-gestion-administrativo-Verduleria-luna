# 🌙 Verdulería La Luna - Demo Interactiva

> **Versión Demo Standalone** - Sistema de gestión completo sin necesidad de backend

[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 📋 Descripción

Esta es la **versión demo interactiva** del sistema de gestión BackOffice Luna, diseñada específicamente para demostración y presentación. Funciona completamente **sin backend**, utilizando datos simulados que se almacenan en el navegador.

### 🎯 Características Principales

✅ **Sistema Completo de Gestión**
- Gestión de pedidos (crear, editar, eliminar, marcar como pagado)
- Gestión de clientes con historial completo
- Generación de links de WhatsApp
- Dashboard con estadísticas en tiempo real
- Sistema de autenticación

✅ **Experiencia Realista**
- Datos de demostración pre-cargados
- Simulación de delays de red
- Persistencia de datos en localStorage
- Interfaz responsive y profesional

✅ **Sin Dependencias Externas**
- No requiere backend
- No requiere base de datos
- Funciona offline después de la primera carga

---

## 🚀 Inicio Rápido

### Credenciales de Acceso

| Usuario | Contraseña | Descripción |
|---------|------------|-------------|
| `demo` | `demo123` | Usuario admin con permisos completos |
| `vendedor` | `vendedor123` | Usuario vendedor |

### Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

### Build para Producción

```bash
# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

El build generará archivos optimizados en la carpeta `dist/` listos para ser desplegados en cualquier servicio de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

---

## 📁 Estructura del Proyecto

```
src/
├── mocks/                    # Sistema de datos mock
│   ├── mockData.ts          # Datos de demostración
│   ├── mockApi.ts           # API simulada
│   └── services/            # Servicios mock
│       ├── authService.mock.ts
│       ├── pedidosService.mock.ts
│       ├── clientesService.mock.ts
│       └── contactoService.mock.ts
│
├── views/                    # Páginas de la aplicación
│   ├── auth/                # Login
│   ├── backoffice/          # Panel administrativo
│   └── public/              # Páginas públicas
│
├── context/                  # Context API (React)
│   ├── AuthProvider.tsx
│   ├── PedidosProvider.tsx
│   └── ClientesProvider.tsx
│
├── components/               # Componentes reutilizables
└── services/                 # Configuración de servicios (ahora apunta a mocks)
```

---

## 🎨 Funcionalidades Demo

### 1. **Dashboard de Ventas**
- Visualización de todos los pedidos
- Filtros por cliente, estado y fecha
- Estadísticas en tiempo real
- Acciones rápidas (marcar como pago, eliminar)

### 2. **Gestión de Pedidos**
- Crear nuevos pedidos
- Selección de cliente existente
- Cálculo automático de estados de pago
- Generación automática de mensaje para WhatsApp

### 3. **Gestión de Clientes**
- Lista completa de clientes
- Estadísticas por cliente (facturación total, cantidad de pedidos)
- Vista detallada con historial de compras
- Agregar, editar y eliminar clientes

### 4. **Características Técnicas**
- **Lazy Loading**: Carga optimizada de componentes
- **Code Splitting**: Reducción del bundle inicial
- **Error Boundary**: Manejo robusto de errores
- **Responsive Design**: Funciona en móviles, tablets y desktop
- **Tests**: Configurado con Vitest + Testing Library

---

## 💾 Persistencia de Datos

Los datos se almacenan en `localStorage` del navegador:

```javascript
// Datos persistidos:
- demo_pedidos      // Lista de pedidos
- demo_clientes     // Lista de clientes
- auth_token        // Token de sesión
- user              // Usuario actual
```

### Resetear Datos

Para volver a los datos iniciales, abre la consola del navegador y ejecuta:

```javascript
localStorage.clear();
location.reload();
```

---

## 🛠️ Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en modo watch |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run type-check` | Verifica tipos de TypeScript |
| `npm test` | Ejecuta tests en modo watch |
| `npm run test:run` | Ejecuta tests una vez |
| `npm run test:coverage` | Genera reporte de cobertura |

---

## 📊 Datos de Demostración

### Clientes Pre-cargados (7)
- Restaurant El Buen Sabor
- Panadería La Espiga Dorada
- Supermercado Los Andes
- Café Literario
- Hotel Bella Vista
- Pastelería Sweet Dreams
- Bar La Esquina (inactivo)

### Pedidos Pre-cargados (13)
- Rango de fechas: últimos 30 días
- Mix de estados: Pago / Impago
- Abonos parciales incluidos
- Links de WhatsApp generados

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Build y deploy
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Build del proyecto:
```bash
npm run build
```

2. Configurar GitHub Pages para usar la carpeta `dist`

---

## 🎯 Casos de Uso de la Demo

Esta demo es perfecta para:

✅ Presentar el sistema a potenciales clientes
✅ Mostrar capacidades técnicas en entrevistas
✅ Documentar arquitectura y patrones de código
✅ Pruebas de concepto y validaciones de UX
✅ Portfolio de proyectos

---

## 🔧 Tecnologías Utilizadas

### Frontend Core
- **React 18** - Librería UI
- **TypeScript 5.9** - Tipado estático
- **React Router 6** - Enrutamiento
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes UI

### Estado y Datos
- **Context API** - Gestión de estado global
- **LocalStorage** - Persistencia de datos

### Optimización
- **Vite** - Build tool ultra-rápido
- **Lazy Loading** - Carga diferida de componentes
- **Code Splitting** - División de bundles

### Testing
- **Vitest** - Framework de testing
- **Testing Library** - Testing de componentes React

### Otras
- **React Helmet Async** - Meta tags dinámicos
- **SweetAlert2** - Alertas y modales elegantes
- **React Error Boundary** - Manejo de errores

---

## 📝 Notas Importantes

### ⚠️ Limitaciones de la Demo

- Los datos NO se sincronizan entre dispositivos
- Los datos se pierden si se limpia el localStorage
- No hay autenticación real (solo simulada)
- Los links de WhatsApp son válidos pero los números son ficticios
- No hay conexión a backend real

### 🎯 Para Versión Producción

Si deseas conectar a un backend real:

1. Modificar `src/services/index.ts` para usar servicios reales
2. Configurar variables de entorno en `.env`
3. Actualizar `src/config/config.ts` con la URL del backend

---

## 📄 Licencia

Este proyecto está bajo licencia MIT.

---

## 👨‍💻 Autor

**Santiago (Portfolio Demo)**

---

## 🔗 Links Relacionados

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Bootstrap Docs](https://getbootstrap.com/docs/)

---

<div align="center">
  <p>⭐ Si te gustó este proyecto, dale una estrella en GitHub!</p>
  <p>Hecho con ❤️ usando React + TypeScript</p>
</div>
