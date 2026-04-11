## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/list-all-style-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# List All Style - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | List All Style |
| **URL** | `/list-all-style` |
| **Ruta Archivo** | `app/(listing)/(list-view)/list-all-style/page.tsx` |
| **Tipo de Layout** | List View Multiple Styles |
| **Title** | List All Style \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Container |

---

## 2. Estructura de la Pagina

### 2.1 Multiple List Styles

Esta pagina demuestra diferentes estilos de list view que el usuario puede alternar:

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                               │
├────────────────────────────────────────────────────────────────────────┤
│ [Style Toggle: Style 1 | Style 2 | Style 3 | Style 4]                 │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [SELECTED STYLE CONTENT]                                              │
│                                                                        │
│  Style 1: Horizontal Classic (Same as List V1)                        │
│  Style 2: Horizontal Compact                                          │
│  Style 3: Vertical Card                                               │
│  Style 4: Two Column List                                             │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ [Pagination]                                                           │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Style Switcher

```typescript
interface ListStyle {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const listStyles: ListStyle[] = [
  { id: 'horizontal-classic', name: 'Style 1', description: 'Horizontal Classic', icon: 'list' },
  { id: 'horizontal-compact', name: 'Style 2', description: 'Horizontal Compact', icon: 'list-ul' },
  { id: 'vertical-card', name: 'Style 3', description: 'Vertical Card', icon: 'square' },
  { id: 'two-column', name: 'Style 4', description: 'Two Column', icon: 'columns' }
];
```

---

## 3. Estilos Disponibles

### 3.1 Style 1: Horizontal Classic

Mismo que List V1 - Layout horizontal con imagen a la izquierda.

```
┌────────────────────────────────────────────────────────────────────────┐
│ ┌──────────┐  Property Title                               $Price     │
│ │  Image   │  Address, City, State                                     │
│ │  (300px) │  🛏4 🛁3 ▢2500sqft 🚗2 │ Description preview...          │
│ └──────────┘  [Agent] Agent Name              [♥][⚖][→]              │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Style 2: Horizontal Compact

Version mas compacta con menos padding y descripcion oculta.

```
┌────────────────────────────────────────────────────────────────────────┐
│ ┌────────┐ Property Title                              $Price         │
│ │ Image  │ Address │ 🛏4 🛁3 ▢2500 │ [Agent] Name    [♥][→]          │
│ │(200px) │                                                         │
└────────┴────────────────────────────────────────────────────────────────┘
```

### 3.3 Style 3: Vertical Card

Card vertical con imagen arriba (similar a grid card pero mas alto).

```
┌────────────────────────────────────┐
│ [Image - Full Width]               │
│ Status │ $Price                    │
│ Property Title                     │
│ Address, City                      │
│ 🛏4 🛁3 ▢2500sqft                  │
│ Description text...                │
│ [Agent Avatar] Agent Name          │
│ [♥] [⚖] [→]                       │
└────────────────────────────────────┘
```

### 3.4 Style 4: Two Column List

Dos cards verticales por fila.

```
┌────────────────────────────┐ ┌────────────────────────────┐
│ [Image]                    │ │ [Image]                    │
│ Status │ $Price            │ │ Status │ $Price            │
│ Property Title             │ │ Property Title             │
│ Location                   │ │ Location                   │
│ 🛏4 🛁3 ▢2500              │ │ 🛏3 🛁2 ▢1800              │
│ [Agent] Name    [♥][→]    │ │ [Agent] Name    [♥][→]    │
└────────────────────────────┘ └────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Unified Property Data

```typescript
interface UnifiedListProperty {
  id: string;
  slug: string;
  images: string[];
  thumbnail: string;
  status: 'sale' | 'rent';
  featured: boolean;
  price: number;
  priceFormatted: string;
  title: string;
  address: string;
  city: string;
  state: string;
  beds: number;
  baths: number;
  area: number;
  garages?: number;
  description?: string;
  agent: {
    id: string;
    name: string;
    avatar: string;
  };
}
```

### 4.2 Style Configurations

```typescript
interface ListStyleConfig {
  style: 'horizontal-classic' | 'horizontal-compact' | 'vertical-card' | 'two-column';
  imageSize: {
    width: number;
    height: number;
  };
  showDescription: boolean;
  showAgent: boolean;
  columns: 1 | 2;
  gap: number;
  itemsPerPage: number;
}

const styleConfigs: Record<string, ListStyleConfig> = {
  'horizontal-classic': {
    style: 'horizontal-classic',
    imageSize: { width: 300, height: 220 },
    showDescription: true,
    showAgent: true,
    columns: 1,
    gap: 30,
    itemsPerPage: 10
  },
  'horizontal-compact': {
    style: 'horizontal-compact',
    imageSize: { width: 200, height: 140 },
    showDescription: false,
    showAgent: true,
    columns: 1,
    gap: 20,
    itemsPerPage: 15
  },
  'vertical-card': {
    style: 'vertical-card',
    imageSize: { width: '100%', height: 280 },
    showDescription: true,
    showAgent: true,
    columns: 1,
    gap: 25,
    itemsPerPage: 8
  },
  'two-column': {
    style: 'two-column',
    imageSize: { width: '100%', height: 200 },
    showDescription: false,
    showAgent: true,
    columns: 2,
    gap: 25,
    itemsPerPage: 12
  }
};
```

---

## 5. Componentes UI

### 5.1 ListAllStyle

```typescript
interface ListAllStyleProps {
  properties: UnifiedListProperty[];
  activeStyle: string;
  onStyleChange: (style: string) => void;
  loading?: boolean;
}

// Uso
<ListAllStyle
  properties={properties}
  activeStyle={activeStyle}
  onStyleChange={handleStyleChange}
/>
```

### 5.2 StyleSwitcher

```typescript
interface StyleSwitcherProps {
  styles: ListStyle[];
  activeStyle: string;
  onStyleChange: (styleId: string) => void;
}

// Uso
<StyleSwitcher
  styles={listStyles}
  activeStyle={activeStyle}
  onStyleChange={setActiveStyle}
/>
```

### 5.3 AdaptiveListItem

```typescript
interface AdaptiveListItemProps {
  property: UnifiedListProperty;
  style: ListStyleConfig;
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
}

// Uso
<AdaptiveListItem
  property={property}
  style={styleConfigs[activeStyle]}
  onFavorite={handleFavorite}
/>
```

---

## 6. API Endpoints

### 6.1 Obtener Propiedades

```http
GET /api/properties?limit=15&include=description,agent
```

El limite se ajusta dinamicamente segun el estilo seleccionado.

---

## 7. Responsive Design

| Breakpoint | Style Adaptation |
|------------|------------------|
| ≥992px | Todos los estilos disponibles |
| 768-991px | horizontal-compact, vertical-card |
| <768px | Solo vertical-card |

---

## 8. Ventajas del Multi-Style

1. **Flexibilidad**: Usuario elige su preferido
2. **Demostracion**: Muestra capacidades del template
3. **A/B Testing**: Comparar estilos con usuarios
4. **Personalizacion**: Guardar preferencia del usuario

---

## 9. Persistencia de Preferencia

```typescript
// Guardar estilo preferido en localStorage
const savePreferredStyle = (styleId: string) => {
  localStorage.setItem('preferredListStyle', styleId);
};

// Recuperar estilo preferido
const getPreferredStyle = (): string => {
  return localStorage.getItem('preferredListStyle') || 'horizontal-classic';
};
```

---

*Documento generado para Homez - Real Estate NextJS Template*
