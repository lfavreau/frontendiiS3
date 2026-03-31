# vehiculo-luciano-favreau-pfy2202

Proyecto desarrollado para la actividad sumativa 3 de **Desarrollo Frontend II (PFY2202)**.

## Tecnologías utilizadas

- React
- React Router DOM
- Tailwind CSS
- Vite
- useReducer + Context API
- localStorage

## Requerimientos cubiertos

### Semana 1
- Home del sitio
- Navegación con React Router
- Dos páginas adicionales:
  - Quiénes somos
  - Cómo comprar

### Semana 2
- Estado global para inventario
- Formulario para agregar vehículos
- Página de listado del inventario
- Framework CSS con Tailwind

### Semana 3
- Filtro dinámico por marca, categoría, año y precio
- Pantalla de detalle por vehículo
- Acción para marcar como "posible compra"
- Pantalla de posible compra
- Devolver vehículo al inventario
- Código modular y reutilizable

## Estructura del proyecto

```bash
src/
  components/
  context/
  data/
  layouts/
  pages/
  routes/
```

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Publicación en GitHub Pages

1. Crea un repositorio en GitHub con este mismo nombre.
2. Sube todos los archivos.
3. Ejecuta:

```bash
npm install
npm run deploy
```

> Si usas GitHub Pages en un repositorio con nombre distinto o bajo una subruta, ajusta `homepage` y `base` en la configuración de Vite si fuera necesario.

## Observaciones

- El estado se persiste en `localStorage` para no perder el inventario al recargar.
- La pantalla de detalle usa una ruta dinámica: `/vehiculo/:id`.
- El filtro cambia solo la vista, no modifica el inventario original.
