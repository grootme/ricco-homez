## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/grid-full-1-col-v2-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Grid Full 1 Column V2 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Grid Full 1 Column V2 |
| **URL** | `/grid-full-1-col-v2` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/grid-full-1-col-v2/page.tsx` |
| **Tipo de Layout** | Grid Single Column V2 |
| **Title** | Gird Full 1 Column V2 \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Full-width, centrado |

---

## 2. Estructura de la Pagina

### 2.1 Diferencias con V1

| Aspecto | V1 | V2 |
|---------|----|----|
| Card Layout | Horizontal | Vertical (imagen arriba) |
| Imagen | Ancho fijo 400px | Full width |
| Descripcion | Visible | Expansible |
| Galeria | Carousel en card | Galeria grande |
| Detalles | Inline | Grid layout |

### 2.2 Configuracion del Grid

```css
.full-width-1col-v2 {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.full-width-1col-v2 .property-card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.full-width-1col-v2 .property-card .image-gallery {
  width: 100%;
  height: 500px;
}

.full-width-1col-v2 .property-card .content {
  padding: 30px;
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Property Card Vertical V2

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Image Gallery - Full Width - 500px height]                           │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                              │
│ │  ●  │ │  ○  │ │  ○  │ │  ○  │ │  ○  │                              │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                              │
│                                          [Featured] [For Sale]        │
├────────────────────────────────────────────────────────────────────────┤
│ Property Title                                              $850,000 │
│ 456 Ocean Boulevard, Santa Monica, CA 90401                           │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────┬────────────┬────────────┬────────────┬────────────┐    │
│ │ 🛏 5 Beds  │ 🛁 4 Baths │ ▢ 3,200 ft │ 🚗 3 Gar   │ 📅 2022    │    │
│ └────────────┴────────────┴────────────┴────────────┴────────────┘    │
├────────────────────────────────────────────────────────────────────────┤
│ Description                                                            │
│ Stunning oceanfront property with breathtaking panoramic views...     │
│ [Read More ▼]                                                         │
├────────────────────────────────────────────────────────────────────────┤
│ Key Features                                                           │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│ │ Pool        │ │ Ocean View  │ │ Smart Home  │ │ Wine Cellar │       │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘       │
├────────────────────────────────────────────────────────────────────────┤
│ [Agent Avatar] John Smith │ Premium Realty │ 📞 (310) 555-0123        │
│                            [♥ Save] [⚖ Compare] [📅 Schedule Tour]   │
└────────────────────────────────────────────────────────────────────────┘
```

**Interface:**
```typescript
interface VerticalPropertyCardV2 {
  id: string;
  slug: string;
  images: string[]; // 5+ images for gallery
  status: 'sale' | 'rent';
  featured: boolean;
  price: number;
  priceFormatted: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  beds: number;
  baths: number;
  area: number;
  garages?: number;
  yearBuilt?: number;
  description: string;
  descriptionExpanded?: boolean;
  keyFeatures: string[]; // Top 4-6 features
  agent: {
    id: string;
    name: string;
    avatar: string;
    agency?: string;
    phone?: string;
  };
  listedDate: string;
  virtualTour?: string;
}
```

---

## 4. Componentes UI

### 4.1 Grid1ColV2

```typescript
interface Grid1ColV2Props {
  properties: VerticalPropertyCardV2[];
  maxContainerWidth?: number;
  gap?: number;
  loading?: boolean;
  imageHeight?: number;
  onPropertyClick?: (property: VerticalPropertyCardV2) => void;
}
```

### 4.2 VerticalPropertyCardV2

```typescript
interface VerticalPropertyCardV2Props {
  property: VerticalPropertyCardV2;
  imageHeight?: number; // Default: 500
  showKeyFeatures?: boolean;
  showAgentPhone?: boolean;
  showVirtualTour?: boolean;
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
  onScheduleTour?: (property: VerticalPropertyCardV2) => void;
}
```

### 4.3 ImageGallery

```typescript
interface ImageGalleryProps {
  images: string[];
  height: number;
  showThumbnails?: boolean;
  showCounter?: boolean;
  enableZoom?: boolean;
}
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades

```http
GET /api/properties?limit=6&include=description,amenities,agent,virtualTour
```

---

## 6. Responsive Design

| Breakpoint | Image Height | Layout |
|------------|-------------|--------|
| ≥992px | 500px | Full width |
| 768-991px | 400px | Full width |
| <768px | 300px | Full width |

---

## 7. Ventajas sobre V1

1. **Imagenes mas grandes**: Mejor showcase visual
2. **Galeria integrada**: Navegacion de fotos directa
3. **Features destacados**: Iconos de amenidades
4. **CTAs mas claros**: Boton de Schedule Tour

---

*Documento generado para Homez - Real Estate NextJS Template*
