# 🚀 Instrucciones Rápidas - Demo

## 📍 Ubicación
```
C:\Projects\DEMOS\veruleríaLuna-demo
```

## 🎯 Credenciales de Acceso

### Usuario Principal
- **Usuario:** `demo`
- **Contraseña:** `demo123`
- **Rol:** Administrador (acceso completo)

### Usuario Alternativo
- **Usuario:** `vendedor`
- **Contraseña:** `vendedor123`
- **Rol:** Vendedor

---

## 🖥️ Comandos Esenciales

### Iniciar en Desarrollo
```bash
cd C:\Projects\DEMOS\veruleríaLuna-demo
npm run dev
```
Abre en: [http://localhost:5173](http://localhost:5173)

### Build para Producción
```bash
npm run build
```
Archivos en: `dist/`

### Vista Previa del Build
```bash
npm run preview
```

---

## ✨ Funcionalidades para Demostrar

### 1. Login
- Banner con credenciales visible
- Usa: `demo` / `demo123`
- Redirección automática al dashboard

### 2. Dashboard de Ventas ([http://localhost:5173/ventas](http://localhost:5173/ventas))
- 13 pedidos pre-cargados
- Filtros por cliente, estado, fechas
- Estadísticas en tiempo real
- Acciones: marcar como pago, eliminar

### 3. Nuevo Pedido ([http://localhost:5173/nuevopedido](http://localhost:5173/nuevopedido))
- Seleccionar de 7 clientes existentes
- Cálculo automático de estados
- Generación de link de WhatsApp
- Los pedidos se guardan en localStorage

### 4. Gestión de Clientes ([http://localhost:5173/clientes](http://localhost:5173/clientes))
- 7 clientes con datos completos
- Estadísticas por cliente
- Agregar, editar, eliminar
- Ver historial de pedidos

### 5. Detalle de Cliente
- Desde la lista de clientes, click en cualquier card
- Muestra historial completo de compras
- Estadísticas específicas del cliente

---

## 📊 Datos Pre-cargados

### Clientes (7)
1. Restaurant El Buen Sabor
2. Panadería La Espiga Dorada
3. Supermercado Los Andes ⭐ (mayor facturación)
4. Café Literario
5. Hotel Bella Vista
6. Pastelería Sweet Dreams
7. Bar La Esquina (inactivo)

### Pedidos (13)
- Fechas: últimos 30 días
- Mix de estados: Pago (8) / Impago (5)
- Algunos con abonos parciales
- Rango de precios: $3,200 - $22,400

---

## 🎨 Puntos Clave a Destacar

### Arquitectura
- **Sin backend**: Funciona 100% en el navegador
- **Datos simulados**: API mock con delays realistas
- **Persistencia**: localStorage (datos sobreviven recargas)
- **TypeScript**: Código fuertemente tipado
- **React 18**: Con hooks y Context API

### Optimizaciones
- **Lazy Loading**: Componentes cargados bajo demanda
- **Code Splitting**: Bundle inicial de solo 47.61 KB
- **Error Boundary**: Manejo robusto de errores
- **Responsive**: Funciona en mobile, tablet, desktop

### UX/UI
- **Bootstrap 5**: Diseño profesional y responsive
- **SweetAlert2**: Alertas elegantes
- **Loading states**: Feedback visual en todas las acciones
- **Validación**: Formularios validados

---

## 🔄 Resetear Datos

Si quieres volver a los datos originales:

1. Abrir consola del navegador (F12)
2. Ejecutar:
```javascript
localStorage.clear();
location.reload();
```

---

## 📦 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Build: `npm run build`
2. Subir carpeta `dist/` a GitHub
3. Configurar Pages para usar esa carpeta

---

## 📱 Links Directos (Desarrollo)

- **Login**: [http://localhost:5173/login](http://localhost:5173/login)
- **Dashboard**: [http://localhost:5173/ventas](http://localhost:5173/ventas)
- **Nuevo Pedido**: [http://localhost:5173/nuevopedido](http://localhost:5173/nuevopedido)
- **Clientes**: [http://localhost:5173/clientes](http://localhost:5173/clientes)
- **Home Público**: [http://localhost:5173/](http://localhost:5173/)

---

## 💡 Tips para Presentación

1. **Mostrar el banner de credenciales** en el login
2. **Filtrar pedidos** para demostrar funcionalidad
3. **Crear un pedido nuevo** en vivo
4. **Mostrar el link de WhatsApp** generado
5. **Navegar al detalle de un cliente** para ver historial
6. **Marcar un pedido como pago** para mostrar actualización en tiempo real
7. **Mencionar que todo funciona sin backend** para destacar la arquitectura

---

## 🐛 Troubleshooting

### Servidor no inicia
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build falla
```bash
# Verificar tipos de TypeScript
npm run type-check

# Si hay errores, revisar la salida
```

### LocalStorage lleno (raro)
```javascript
localStorage.clear();
```

---

## 📞 Contacto

Para cualquier consulta sobre la demo:
- Revisar el archivo [README.demo.md](README.demo.md) completo
- Documentación técnica detallada incluida

---

<div align="center">
  <p><strong>¡Listo para demostrar! 🚀</strong></p>
  <p>La aplicación está completamente funcional y lista para presentación</p>
</div>
