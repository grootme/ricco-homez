# Home v9 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v9-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home V9 - Especificación de Ingeniería Detallada

## 1. Identificación

| Campo | Valor |
|-------|-------|
| **Nombre** | Home V9 - Video Hero Section |
| **URL** | `/home-v9` |
| **URL Completa** | `https://homez-appdir.vercel.app/home-v9` |
| **Versión** | 9 |
| **Tipo de Plantilla** | Homepage - Video Hero |
| **Título de Página** | `Home v9 \|\| Homez - Real Estate NextJS Template` |

---

## 2. Estructura de la Página

### 2.1 Secciones Principales

| # | Sección | Clase CSS | Descripción |
|---|---------|-----------|-------------|
| 1 | Video Hero | `pb90 pb30-md` | Hero con video de fondo |
| 2 | Apartment Types | `pt-0 pb90 pb50-md` | Tipos de apartamentos |
| 3 | Featured Listings | `pb90 pb30-md bgc-dark` | Propiedades destacadas (dark theme) |
| 4 | Pricing Options | - | Planes de precios |
| 5 | Properties by Cities | - | Propiedades por ciudad |
| 6 | CTA Section | - | Call to action |
| 7 | Footer | - | Información y enlaces |

### 2.2 Componentes de Navegación

```
Header Class: header-nav nav-homepage-style at-home2 main-menu
```

**Estilo de Header:** Standard con logo a la izquierda

---

## 3. Contenido de Datos Detallado

### 3.1 Video Hero Section

#### Estructura TypeScript
```typescript
interface VideoHeroSection {
  type: 'video-background';
  variant: 'style9';
  video: VideoConfig;
  overlay: VideoOverlay;
  content: HeroContent;
}

interface VideoConfig {
  src: string;                    // "/videos/hero-video.mp4"
  poster: string;                 // "/images/video-poster.jpg"
  formats: VideoFormat[];
  autoplay: boolean;              // true
  muted: boolean;                 // true (default)
  loop: boolean;                  // true
  playsInline: boolean;           // true (mobile)
  controls: boolean;              // false (no visible controls)
  preload: 'auto' | 'metadata' | 'none';
  playbackRate: number;           // 1.0
}

interface VideoFormat {
  src: string;
  type: 'video/mp4' | 'video/webm' | 'video/ogg';
}

interface VideoOverlay {
  enabled: boolean;
  type: 'gradient' | 'solid' | 'image';
  opacity: number;                // 0.4 - 0.6
  gradient?: {
    from: string;
    to: string;
    direction: 'to-bottom' | 'to-top' | 'to-right' | 'to-left';
  };
  color?: string;                 // rgba(0, 0, 0, 0.5)
}

interface HeroContent {
  position: 'center' | 'bottom' | 'top';
  headline: string;
  subheadline?: string;
  searchForm?: SearchFormConfig;
  cta?: CTAButton;
  scrollIndicator?: boolean;
}
```

### 3.2 Video Configuration

#### Especificaciones Técnicas de Video

```typescript
const videoSpecs = {
  recommended: {
    format: ['MP4 (H.264)', 'WebM (VP9)'],
    resolution: '1920x1080 (1080p)',
    fileSize: '< 10MB para hero',
    bitrate: '2-5 Mbps',
    frameRate: '24-30 fps',
    audio: 'AAC (muted default)'
  },
  mobile: {
    resolution: '1280x720 (720p)',
    fileSize: '< 5MB',
    format: 'MP4'
  },
  fallback: {
    posterImage: 'JPG/PNG',
    posterResolution: '2560x1440',
    posterSize: '< 500KB'
  }
};
```

### 3.3 Video Implementation

```tsx
// components/VideoHero/VideoHero.tsx
interface VideoHeroProps {
  video: VideoConfig;
  overlay: VideoOverlay;
  content: HeroContent;
  onVideoLoad?: () => void;
  onVideoError?: () => void;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  video,
  overlay,
  content
}) => {
  return (
    <section className="video-hero">
      <video
        autoPlay={video.autoplay}
        muted={video.muted}
        loop={video.loop}
        playsInline={video.playsInline}
        poster={video.poster}
        className="hero-video"
      >
        {video.formats.map((format, i) => (
          <source key={i} src={format.src} type={format.type} />
        ))}
      </video>
      {overlay.enabled && (
        <div className="video-overlay" />
      )}
      <div className="hero-content">
        {/* Content overlay */}
      </div>
    </section>
  );
};
```

### 3.4 Property Cards

#### Datos de Ejemplo Extraídos
```json
{
  "prices": ["$82,000", "$14,000", "$199", "$399", "$10", "$20", "$1"],
  "priceRanges": {
    "sale": { "min": 82000 },
    "pricing": { "plans": [199, 399] }
  },
  "propertyTypes": ["Apartment", "House", "Villa", "Office", "Townhome", "Land"],
  "features": ["Garden", "Security"]
}
```

### 3.5 Apartment Types Section

#### Estructura TypeScript
```typescript
interface ApartmentTypesSection {
  title: string; // "Explore Apartment Types"
  types: ApartmentType[];
  layout: 'grid' | 'carousel';
  columns: number;
}

interface ApartmentType {
  id: string;
  name: string;
  image: string;
  count: number;
  link: string;
  icon?: string;
}

const apartmentTypes: ApartmentType[] = [
  { id: 'studio', name: 'Studio', count: 124 },
  { id: 'loft', name: 'Loft', count: 85 },
  { id: 'penthouse', name: 'Penthouse', count: 42 },
  { id: 'duplex', name: 'Duplex', count: 67 },
  { id: 'garden', name: 'Garden Apartment', count: 93 },
  { id: 'penthouse', name: 'Penthouse', count: 28 }
];
```

### 3.6 Pricing Plans Section

#### Estructura TypeScript
```typescript
interface PricingSectionV9 {
  title: string; // "Let's find the right selling option for you"
  plans: PricingPlan[];
  layout: 'cards' | 'table';
  highlightPopular: boolean;
}

interface PricingPlan {
  id: string;
  name: string;           // "Basic", "Professional", "Business"
  price: {
    amount: number;
    formatted: string;     // "$199.95" or "Free"
    period?: 'mo' | 'yr';
  };
  features: string[];
  isPopular: boolean;
  cta: {
    text: string;
    link: string;
    variant: 'primary' | 'secondary' | 'outline';
  };
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: { amount: 0, formatted: 'Free' },
    features: ['5 listings', 'Basic analytics'],
    isPopular: false
  },
  {
    id: 'professional',
    name: 'Professional',
    price: { amount: 199.95, formatted: '$199.95', period: 'mo' },
    features: ['Unlimited listings', 'Advanced analytics', 'Priority support'],
    isPopular: true
  },
  {
    id: 'business',
    name: 'Business',
    price: { amount: 399.95, formatted: '$399.95', period: 'mo' },
    features: ['Everything in Professional', 'API access', 'Custom branding'],
    isPopular: false
  }
];
```

---

## 4. Componentes UI

### 4.1 Video Player Component

```typescript
interface VideoPlayerProps {
  src: string;
  poster: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
  className?: string;
}
```

### 4.2 Video Overlay Component

```typescript
interface VideoOverlayProps {
  type: 'gradient' | 'solid' | 'image';
  opacity: number;
  gradient?: {
    from: string;
    to: string;
    direction: string;
  };
  color?: string;
}
```

### 4.3 Scroll Indicator Component

```typescript
interface ScrollIndicatorProps {
  show: boolean;
  text?: string; // "Scroll to explore"
  position: 'bottom-center' | 'bottom-left' | 'bottom-right';
  animation: 'bounce' | 'fade' | 'none';
}
```

---

## 5. API Endpoints

### 5.1 Video Configuration

```typescript
// GET /api/config/video-hero
interface VideoHeroConfigResponse {
  video: VideoConfig;
  overlay: VideoOverlay;
  content: HeroContent;
}
```

### 5.2 Apartment Types

```typescript
// GET /api/property-types
interface PropertyTypesResponse {
  data: ApartmentType[];
}
```

---

## 6. Configuración

### 6.1 Variables de Entorno

```env
# Video Configuration
NEXT_PUBLIC_VIDEO_FALLBACK_IMAGE=/images/video-poster.jpg
NEXT_PUBLIC_VIDEO_AUTOPLAY=true
NEXT_PUBLIC_VIDEO_MUTED=true

# Performance
NEXT_PUBLIC_VIDEO_LAZY_LOAD=true
NEXT_PUBLIC_VIDEO_MOBILE_COMPRESS=true
```

### 6.2 Video Hero Styles

```css
/* Video hero container */
.video-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

/* Video element */
.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

/* Video overlay */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 1;
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  text-align: center;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  max-width: 600px;
}
```

### 6.3 Scroll Indicator Styles

```css
/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}
```

---

## 7. Estructura de Archivos

```
app/(home)/home-v9/
├── page.tsx
└── components/
    ├── VideoHero/
    │   ├── VideoHero.tsx
    │   ├── VideoPlayer.tsx
    │   ├── VideoOverlay.tsx
    │   ├── ScrollIndicator.tsx
    │   └── index.ts
    ├── ApartmentTypes/
    │   ├── ApartmentTypes.tsx
    │   ├── TypeCard.tsx
    │   └── index.ts
    ├── FeaturedListings/
    │   ├── FeaturedListingsDark.tsx
    │   └── index.ts
    ├── PricingSection/
    │   ├── PricingSection.tsx
    │   ├── PricingCard.tsx
    │   └── index.ts
    ├── PropertiesByCity/
    │   ├── PropertiesByCity.tsx
    │   ├── CityCard.tsx
    │   └── index.ts
    └── index.ts
```

---

## 8. Video Performance Optimization

### 8.1 Loading Strategy

```typescript
const videoLoadingStrategy = {
  // Load poster immediately
  posterPreload: true,
  
  // Lazy load video after LCP
  videoLazyLoad: true,
  
  // Detect connection speed
  adaptiveLoading: true,
  
  // Mobile fallback
  mobileFallback: {
    enabled: true,
    showPosterOnly: false,
    reducedQuality: true
  }
};
```

### 8.2 Connection-Aware Loading

```typescript
// utils/video-loader.ts
const getConnectionSpeed = () => {
  const connection = (navigator as any).connection;
  if (!connection) return 'unknown';
  
  return connection.effectiveType; // '4g', '3g', '2g', 'slow-2g'
};

export const shouldLoadVideo = (): boolean => {
  const speed = getConnectionSpeed();
  
  // Don't load video on slow connections
  if (speed === '2g' || speed === 'slow-2g') {
    return false;
  }
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  return !prefersReducedMotion;
};
```

### 8.3 Mobile Optimization

```typescript
const mobileVideoConfig = {
  // Use poster instead of video on mobile
  showPosterOnMobile: false,
  
  // Compressed video for mobile
  mobileVideoSrc: '/videos/hero-mobile.mp4',
  
  // Lower resolution for mobile
  mobileResolution: '720p',
  
  // Pause video when not in viewport
  pauseOnHidden: true
};
```

---

## 9. Accessibility

### 9.1 Video Accessibility

```typescript
interface VideoAccessibility {
  // Alternative content
  altText: string;
  
  // Captions available
  captions?: {
    src: string;
    lang: string;
    label: string;
  };
  
  // Keyboard controls
  keyboardControls: {
    play: 'Space';
    mute: 'M';
    fullscreen: 'F';
  };
  
  // Reduced motion
  respectReducedMotion: boolean;
}
```

---

## 10. CTA Sections

**Cantidad de CTA Sections detectadas:** 2

### Tipos de CTA
1. **Agent CTA** - Para agentes interesados
2. **Pricing CTA** - Planes y precios

---

## 11. Dependencias JavaScript

```json
{
  "chunks": [
    "fd9d1056-b2f3258e1394957b.js",
    "8069-227fb7adbd03ac2f.js",
    "main-app-5c0f9b95fd3d20ef.js",
    "46170725-631baa44c8a31d2a.js",
    "9647-bf8b9f0c9adac23a.js",
    "2260-cad6d505618a37df.js",
    "7309-6559f8e04db685b2.js",
    "3580-a37c92de5cc3e360.js",
    "296-a9ec62dd979ef674.js",
    "5753-36477383f04b32ab.js",
    "app/(home)/home-v9/page-bd0cd59d78345eee.js"
  ]
}
```

---

## 12. Video Hero Variants

| Variante | Descripción | Caso de Uso |
|----------|-------------|-------------|
| Autoplay Muted | Auto-reproduce silenciado | Impresión de marca |
| Click to Play | Usuario inicia | Control del usuario |
| YouTube Embed | Video externo | Gestión fácil |
| Vimeo Embed | Video profesional | Alta calidad |
| Self-hosted | Archivo MP4 local | Control total |

---

## 13. Páginas Relacionadas

- [Home V8](./home-v8-detailed.md) - Map integration focus
- [Home V10](./home-v10-detailed.md) - Full-width design
- [Property Single V9](../property-single-pages/single-v9.md) - Video tour emphasis

---

*Documentación generada para Homez - Real Estate NextJS Template*
*Versión de documento: 1.0.0*
