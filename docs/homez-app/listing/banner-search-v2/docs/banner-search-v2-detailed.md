## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/banner-search-v2-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Banner Search V2 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Banner Search V2 |
| **URL** | `/banner-search-v2` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/banner-search-v2/page.tsx` |
| **Tipo de Layout** | Grid con Banner Hero de Busqueda Avanzada |
| **Title** | Banner Search v2 \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Container |

---

## 2. Estructura de la Pagina

### 2.1 Diferencias con V1

| Aspecto | V1 | V2 |
|---------|----|----|
| Banner Height | 500px | 600px (mas alto) |
| Search Form | Inline | Expansible (Advanced) |
| Campos Visibles | 4 | 6 + toggle advanced |
| Estilo | Classic | Modern con tabs |
| Filtros Rapidos | No | Si (chips) |

### 2.2 Configuracion del Banner V2

```css
.banner-hero-v2 {
  position: relative;
  height: 600px;
  background-size: cover;
  background-position: center;
}

.banner-search-form-v2 {
  max-width: 1000px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 80px rgba(0,0,0,0.25);
}

/* Tabs para Sale/Rent */
.search-tabs {
  display: flex;
  border-bottom: 1px solid #eee;
}

.search-tab {
  flex: 1;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.search-tab.active {
  border-bottom: 3px solid var(--primary-color);
  color: var(--primary-color);
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Search Tabs

```typescript
interface SearchTab {
  id: 'sale' | 'rent';
  label: string;
  icon?: string;
}

const searchTabs: SearchTab[] = [
  { id: 'sale', label: 'For Sale', icon: 'tag' },
  { id: 'rent', label: 'For Rent', icon: 'key' }
];
```

### 3.2 Search Form Fields V2

```typescript
interface AdvancedSearchForm {
  mainFields: SearchField[];
  advancedFields: SearchField[];
  quickFilters: QuickFilter[];
}

// Campos principales (siempre visibles)
const mainFields: SearchField[] = [
  {
    name: 'location',
    type: 'autocomplete',
    placeholder: 'Enter city, neighborhood, or ZIP',
    icon: 'search',
    width: '40%'
  },
  {
    name: 'type',
    type: 'select',
    placeholder: 'Property Type',
    width: '25%'
  },
  {
    name: 'price',
    type: 'range',
    placeholder: 'Price Range',
    width: '25%'
  }
];

// Campos avanzados (toggle)
const advancedFields: SearchField[] = [
  { name: 'beds', type: 'button-group', label: 'Bedrooms' },
  { name: 'baths', type: 'button-group', label: 'Bathrooms' },
  { name: 'areaMin', type: 'number', placeholder: 'Min Sqft' },
  { name: 'areaMax', type: 'number', placeholder: 'Max Sqft' },
  { name: 'yearBuilt', type: 'select', placeholder: 'Year Built' },
  { name: 'amenities', type: 'multiselect', placeholder: 'Amenities' }
];

// Filtros rapidos (chips)
const quickFilters: QuickFilter[] = [
  { id: 'pool', label: 'Pool', icon: 'swimming-pool' },
  { id: 'garage', label: 'Garage', icon: 'car' },
  { id: 'new', label: 'New Construction', icon: 'building' },
  { id: 'pet-friendly', label: 'Pet Friendly', icon: 'paw' },
  { id: 'waterfront', label: 'Waterfront', icon: 'water' }
];
```

### 3.3 Property Grid

Misma estructura que Grid Default con paginacion.

---

## 4. Componentes UI

### 4.1 BannerHeroV2

```typescript
interface BannerHeroV2Props {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: number;
  overlayStyle?: 'gradient' | 'solid' | 'blur';
  showStats?: boolean;
  stats?: BannerStat[];
}

interface BannerStat {
  label: string;
  value: string | number;
}

// Uso
<BannerHeroV2
  title="Find Your Perfect Property"
  backgroundImage="/images/banner/search-banner-2.jpg"
  height={600}
  showStats={true}
  stats={[
    { label: 'Properties', value: '10,000+' },
    { label: 'Agents', value: '500+' },
    { label: 'Cities', value: '150+' }
  ]}
>
  <AdvancedSearchForm />
</BannerHeroV2>
```

### 4.2 AdvancedSearchForm

```typescript
interface AdvancedSearchFormProps {
  mainFields: SearchField[];
  advancedFields?: SearchField[];
  quickFilters?: QuickFilter[];
  showTabs?: boolean;
  defaultTab?: 'sale' | 'rent';
  onSubmit: (values: AdvancedSearchValues) => void;
}

interface AdvancedSearchValues extends SearchValues {
  beds?: number;
  baths?: number;
  areaMin?: number;
  areaMax?: number;
  yearBuilt?: string;
  amenities?: string[];
  quickFilters?: string[];
}

// Uso
<AdvancedSearchForm
  mainFields={mainFields}
  advancedFields={advancedFields}
  quickFilters={quickFilters}
  showTabs={true}
  defaultTab="sale"
  onSubmit={handleAdvancedSearch}
/>
```

### 4.3 QuickFilterChips

```typescript
interface QuickFilterChipsProps {
  filters: QuickFilter[];
  selected: string[];
  onChange: (selected: string[]) => void;
  variant?: 'filled' | 'outlined';
}

// Uso
<QuickFilterChips
  filters={quickFilters}
  selected={selectedQuickFilters}
  onChange={setSelectedQuickFilters}
  variant="outlined"
/>
```

---

## 5. API Endpoints

### 5.1 Busqueda Avanzada

```http
POST /api/properties/search/advanced
```

**Body:**
```json
{
  "location": "malibu",
  "type": "house",
  "status": "sale",
  "priceMin": 500000,
  "priceMax": 2000000,
  "beds": 3,
  "baths": 2,
  "areaMin": 2000,
  "areaMax": 5000,
  "amenities": ["pool", "garage"],
  "quickFilters": ["waterfront", "new"],
  "page": 1,
  "limit": 12
}
```

---

## 6. Estructuras TypeScript

```typescript
interface BannerSearchV2PageProps {
  initialProperties?: Property[];
  bannerContent?: BannerContentV2;
  searchConfig?: AdvancedSearchForm;
  initialFilters?: AdvancedSearchValues;
}

interface BannerContentV2 extends BannerContent {
  showStats: boolean;
  stats: BannerStat[];
}
```

---

## 7. Responsive Design

| Breakpoint | Banner Height | Search Form Layout |
|------------|--------------|-------------------|
| ≥1200px | 600px | Inline + toggle |
| 992-1199px | 500px | 2 rows |
| 768-991px | 450px | Stacked |
| <768px | 400px | Stacked + drawer |

---

## 8. Ventajas sobre V1

1. **Busqueda mas potente**: Mas campos y filtros
2. **UX mejorada**: Tabs y chips para seleccion rapida
3. **Estadisticas**: Social proof en el banner
4. **Advanced toggle**: No abruma al usuario

---

*Documento generado para Homez - Real Estate NextJS Template*
