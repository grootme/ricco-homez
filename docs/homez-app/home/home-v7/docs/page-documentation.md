# Home V7 - Variante de Página Principal #7

## Información General

| Campo | Valor |
|-------|-------|
| **Página** | home-v7 |
| **Categoría** | home |
| **URL** | /(home)/home-v7 |
| **Tipo** | Server-rendered (Dynamic) |

## Descripción

Séptima variante con video background en hero, categorías de propiedades y testimonios.

## Recursos Disponibles

- **Video**: `videos/` - Grabación de la página en formato WebM
- **Imágenes**: `images/` - Capturas de pantalla de referencia
- **Datos JSON**: `docs/` - Archivos JSON con datos y estructura de la página

## Estructura de Componentes

### Layout
- Header (HeaderMain) con navegación, selector de idioma, botón de login y chat
- Contenido principal de la página
- Footer con enlaces, redes sociales y newsletter

### Components Principales
Los componentes se encuentran en `/src/components/` del proyecto homez-dev.

## Ruta de Código Fuente

`src/app/[locale]//(home)/home-v7/page.tsx`

## Notas de Implementación

- La página usa datos mock cuando `DATA_PROVIDER=mock`
- Los textos se cargan desde `public/locales/{locale}/common.json`
- El layout hereda de `src/app/[locale]/layout.tsx`

## Pasos para Reconstruir

1. Copiar la estructura desde `page.tsx`
2. Importar los componentes necesarios desde `@/components/`
3. Configurar los datos mock o conectar al API
4. Verificar la responsividad en móvil y desktop
5. Comparar con el video de referencia en `videos/`
6. Ajustar estilos según las capturas en `images/`
