# Home V1 - Página Principal (Landing Page)

## Información General

| Campo | Valor |
|-------|-------|
| **Página** | home-v1 (página principal /) |
| **Categoría** | home |
| **URL** | / (raíz) o /(home)/ |
| **Tipo** | Server-rendered (Dynamic) |

## Descripción

Página principal del sitio Homez, también accesible desde la raíz `/`. Es la primera variante de la landing page con diseño de buscador integrado en hero section, propiedades destacadas, secciones informativas y call-to-action. Incluye header con navegación principal, selector de idioma, botón de login y chat IA.

## Recursos Disponibles

- **Video**: `videos/` - Grabación de la página en formato WebM
- **Imágenes**: `images/` - Capturas de pantalla y secciones desglosadas
- **Documentación**: `docs/` - MD detallados, JSON de contenido y estructura

## Ruta de Código Fuente

`src/app/[locale]/page.tsx` (redirige al home principal)
`src/app/[locale]/(home)/layout.tsx`

## Pasos para Reconstruir

1. Copiar la estructura desde `page.tsx`
2. Importar los componentes necesarios desde `@/components/`
3. Configurar los datos mock o conectar al API
4. Verificar la responsividad en móvil y desktop
5. Comparar con el video de referencia en `videos/`
6. Ajustar estilos según las capturas en `images/`
