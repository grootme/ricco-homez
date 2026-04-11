# Contact Page - Documentation

## 1. Identificación

- **Nombre de la Página:** Contact
- **URL:** `https://homez-appdir.vercel.app/contact`
- **Título de Página:** `Contact || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Contact Form Page

---

## 2. Descripción General

La página Contact proporciona múltiples formas de contacto con la empresa: formulario de contacto, información de ubicación, mapa interactivo, datos de contacto y horarios de atención. Es una página crítica para la generación de leads y atención al cliente.

---

## 3. Estructura de la Página

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     CONTACT INFO CARDS                               │    │
│  │   [Phone Card] | [Email Card] | [Address Card] | [Hours Card]      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌────────────────────────────────────────┬──────────────────────────────┐   │
│  │                                        │                              │   │
│  │        CONTACT FORM                    │      MAP & LOCATION         │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │   ┌────────────────────────┐ │   │
│  │   │ Name Input                      │ │   │                        │ │   │
│  │   ├─────────────────────────────────┤ │   │    Interactive Map     │ │   │
│  │   │ Email Input                     │ │   │    (Google Maps)       │ │   │
│  │   ├─────────────────────────────────┤ │   │                        │ │   │
│  │   │ Phone Input                     │ │   └────────────────────────┘ │   │
│  │   ├─────────────────────────────────┤ │                              │   │
│  │   │ Subject Input                   │ │   ┌────────────────────────┐ │   │
│  │   ├─────────────────────────────────┤ │   │ Address Details        │ │   │
│  │   │ Message Textarea                │ │   │ 123 Real Estate Ave    │ │   │
│  │   ├─────────────────────────────────┤ │   │ New York, NY 10001     │ │   │
│  │   │ Submit Button                   │ │   └────────────────────────┘ │   │
│  │   └─────────────────────────────────┘ │                              │   │
│  │                                        │                              │   │
│  └────────────────────────────────────────┴──────────────────────────────┘   │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     SOCIAL MEDIA LINKS                               │    │
│  │   [Facebook] | [Twitter] | [Instagram] | [LinkedIn] | [YouTube]    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Contact Info Cards

```typescript
interface ContactInfoCard {
  id: string;
  type: 'phone' | 'email' | 'address' | 'hours';
  title: string;
  value: string;
  icon: string;
  link?: string;
}

interface ContactInfoSection {
  cards: ContactInfoCard[];
}
```

**Sample Data:**
| Tipo | Title | Value | Icon | Link |
|------|-------|-------|------|------|
| phone | Phone | +(0) 123 050 945 02 | flaticon-phone | tel:+12305094502 |
| email | Email | hi@homez.com | flaticon-email | mailto:hi@homez.com |
| address | Office | 123 Real Estate Ave, New York, NY 10001 | flaticon-location | Google Maps link |
| hours | Hours | Mon-Fri: 9AM-6PM, Sat: 10AM-4PM | flaticon-clock | - |

### 4.2 Contact Form

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormValidation {
  name: {
    required: boolean;
    minLength: number;
  };
  email: {
    required: boolean;
    pattern: RegExp;
  };
  phone: {
    required: boolean;
    pattern: RegExp;
  };
  subject: {
    required: boolean;
    minLength: number;
  };
  message: {
    required: boolean;
    minLength: number;
    maxLength: number;
  };
}
```

**Form Fields:**
| Campo | Tipo | Requerido | Placeholder | Validación |
|-------|------|-----------|-------------|------------|
| Name | text | Sí | "Your Name" | Min 2 caracteres |
| Email | email | Sí | "Your Email" | Formato email válido |
| Phone | tel | Sí | "Your Phone" | Formato teléfono |
| Subject | text | Sí | "Subject" | Min 5 caracteres |
| Message | textarea | Sí | "Your Message" | Min 20, Max 1000 caracteres |

### 4.3 Location Data

```typescript
interface LocationData {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
}
```

**Sample Data:**
```json
{
  "address": {
    "street": "123 Real Estate Ave",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "country": "USA"
  },
  "coordinates": {
    "lat": 40.7128,
    "lng": -74.0060
  },
  "zoom": 15
}
```

### 4.4 Social Media Links

```typescript
interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}
```

---

## 5. Componentes UI

### 5.1 Contact Info Card

```typescript
interface ContactInfoCardProps {
  type: 'phone' | 'email' | 'address' | 'hours';
  title: string;
  value: string;
  icon: string;
  link?: string;
}
```

**CSS Classes:**
```css
.contact-info-card { /* Container */ }
.contact-info-icon { /* Icon container */ }
.contact-info-title { /* Card title */ }
.contact-info-value { /* Card value */ }
```

### 5.2 Contact Form

```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
}
```

**Form States:**
- Default: Empty fields
- Focused: Active field highlight
- Error: Red border, error message below
- Submitting: Disabled form, loading spinner
- Success: Confirmation message, reset form

### 5.3 Map Component

```typescript
interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
  marker?: {
    title: string;
    icon?: string;
  };
}
```

---

## 6. API Endpoints

### 6.1 Submit Contact Form

```
Endpoint: /api/contact
Method: POST
Request Body:
{
  "name": string,
  "email": string,
  "phone": string,
  "subject": string,
  "message": string
}

Response:
{
  "success": true,
  "message": "Thank you for contacting us. We will get back to you shortly.",
  "ticketId": string
}
```

### 6.2 Get Contact Info

```
Endpoint: /api/contact/info
Method: GET

Response:
{
  "infoCards": ContactInfoCard[],
  "location": LocationData,
  "socialLinks": SocialLinks
}
```

---

## 7. Estructuras TypeScript

```typescript
interface ContactPageData {
  infoCards: ContactInfoCard[];
  location: LocationData;
  socialLinks: SocialLinks;
}

interface ContactPageState {
  formData: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string>>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  data: ContactPageData | null;
}
```

---

## 8. Validaciones de Formulario

### 8.1 Validation Rules

```typescript
const validationRules = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    }
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    }
  },
  phone: {
    required: 'Phone is required',
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: 'Invalid phone number'
    }
  },
  subject: {
    required: 'Subject is required',
    minLength: {
      value: 5,
      message: 'Subject must be at least 5 characters'
    }
  },
  message: {
    required: 'Message is required',
    minLength: {
      value: 20,
      message: 'Message must be at least 20 characters'
    },
    maxLength: {
      value: 1000,
      message: 'Message must not exceed 1000 characters'
    }
  }
};
```

---

## 9. Elementos Interactivos

### 9.1 Form Actions

| Action | Handler |
|--------|---------|
| Submit | `onSubmit(formData)` |
| Reset | `onReset()` |
| Field Change | `onFieldChange(field, value)` |

### 9.2 Map Interactions

| Action | Result |
|--------|--------|
| Click marker | Info popup |
| Drag | Pan map |
| Scroll | Zoom |
| Get Directions | Open Google Maps |

---

## 10. Comportamiento Responsivo

| Breakpoint | Layout |
|------------|--------|
| Mobile | Form arriba, mapa abajo |
| Tablet | Two columns, form left |
| Desktop | Two columns, form left, map right |

---

## 11. Integraciones

### 11.1 Google Maps

```typescript
interface GoogleMapsConfig {
  apiKey: string;
  mapId?: string;
  styles?: MapStyle[];
}
```

### 11.2 Email Service

- Contact form envía email a equipo de soporte
- Auto-responder al usuario
- Integración con servicio de email (SendGrid, etc.)

---

## 12. SEO y Meta Information

```html
<title>Contact || Homez - Real Estate NextJS Template</title>
<meta name="description" content="Get in touch with Homez. Contact us for property inquiries, support, or partnership opportunities.">

<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Homez",
  "telephone": "+(0) 123 050 945 02",
  "email": "hi@homez.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Real Estate Ave",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "USA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00"
}
</script>
```

---

## Technical Implementation

### Form Handling
- react-hook-form: ^7.48.0 for form state
- zod: ^3.22.0 for validation
- Email service integration (SendGrid, Resend)

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Map Integration
- @googlemaps/js-api-loader: ^1.16.0
- Google Maps or Mapbox integration
- Custom map styles

### Key Dependencies
- react-hook-form: ^7.48.0 for forms
- zod: ^3.22.0 for validation
- react-hot-toast: ^2.4.0 for notifications
- @react-google-maps/api: ^2.19.0 for maps

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 2 | Info cards, form section |
| `fade-left` | 1 | Contact form |
| `fade-right` | 1 | Map section |
| `aos-delay="100"` | 1 | First stagger |
| `aos-delay="300"` | 1 | Second stagger |

### AOS Configuration
```javascript
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100
});
```

---

## GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### Dependencies to Add

```json
{
  "gsap": "^3.12.0"
}
```

### Page-Specific GSAP Animations

The Contact page animations focus on form interactions and map reveal effects to create an engaging user experience.

#### 1. Form Fields Entrance Animation

Sequential reveal animation for form input fields.

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Form fields stagger animation
gsap.from('.contact-form .form-group', {
  scrollTrigger: {
    trigger: '.contact-form',
    start: 'top 80%',
    once: true
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power3.out'
});
```

#### 2. Contact Info Cards Animation

Cascade effect for contact information cards.

```javascript
// Contact info cards
gsap.from('.contact-info-card', {
  scrollTrigger: {
    trigger: '.contact-info-section',
    start: 'top 85%',
    once: true
  },
  opacity: 0,
  y: 40,
  scale: 0.95,
  stagger: {
    each: 0.15,
    from: 'start'
  },
  duration: 0.6,
  ease: 'back.out(1.4)'
});
```

#### 3. Map Reveal Animation

Smooth reveal effect for the map section.

```javascript
// Map reveal animation
gsap.from('.map-container', {
  scrollTrigger: {
    trigger: '.map-section',
    start: 'top 75%',
    once: true
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: 'power2.out'
});

// Map pin bounce animation
gsap.from('.map-marker', {
  scrollTrigger: {
    trigger: '.map-container',
    start: 'top 70%',
    once: true
  },
  scale: 0,
  duration: 0.5,
  ease: 'back.out(2)',
  delay: 0.3
});
```

#### 4. Form Focus Animations

Interactive animations for form field focus states.

```javascript
// Form field focus animation
const formInputs = document.querySelectorAll('.form-control');

formInputs.forEach(input => {
  const wrapper = input.closest('.form-group');
  const label = wrapper.querySelector('label');
  
  input.addEventListener('focus', () => {
    gsap.to(wrapper, {
      scale: 1.02,
      duration: 0.2,
      ease: 'power2.out'
    });
    gsap.to(label, {
      color: '#4A90D9',
      duration: 0.2
    });
  });
  
  input.addEventListener('blur', () => {
    gsap.to(wrapper, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out'
    });
    gsap.to(label, {
      color: 'inherit',
      duration: 0.2
    });
  });
});
```

#### 5. Submit Button Animation

Hover and click animations for the submit button.

```javascript
// Submit button hover effect
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('mouseenter', () => {
  gsap.to(submitBtn, {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(74, 144, 217, 0.3)',
    duration: 0.3,
    ease: 'power2.out'
  });
});

submitBtn.addEventListener('mouseleave', () => {
  gsap.to(submitBtn, {
    scale: 1,
    boxShadow: 'none',
    duration: 0.3,
    ease: 'power2.out'
  });
});

// Submit success animation
const animateSubmitSuccess = () => {
  const tl = gsap.timeline();
  tl.to(submitBtn, {
    scale: 0.95,
    duration: 0.1
  })
  .to(submitBtn, {
    scale: 1,
    backgroundColor: '#28a745',
    duration: 0.3,
    ease: 'back.out(2)'
  });
  return tl;
};
```

#### 6. Social Links Animation

Animated appearance for social media links.

```javascript
// Social links stagger
gsap.from('.social-link', {
  scrollTrigger: {
    trigger: '.social-links-section',
    start: 'top 90%',
    once: true
  },
  opacity: 0,
  y: 20,
  rotation: -10,
  stagger: 0.08,
  duration: 0.4,
  ease: 'back.out(1.7)'
});
```

### Complete Implementation Example

```javascript
// contact-animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initContactAnimations = () => {
  // Contact info cards
  gsap.from('.contact-info-card', {
    scrollTrigger: { trigger: '.contact-info-section', start: 'top 85%', once: true },
    opacity: 0, y: 40, scale: 0.95, stagger: 0.15, duration: 0.6, ease: 'back.out(1.4)'
  });

  // Form fields
  gsap.from('.contact-form .form-group', {
    scrollTrigger: { trigger: '.contact-form', start: 'top 80%', once: true },
    opacity: 0, y: 30, stagger: 0.1, duration: 0.5, ease: 'power3.out'
  });

  // Map reveal
  gsap.from('.map-container', {
    scrollTrigger: { trigger: '.map-section', start: 'top 75%', once: true },
    opacity: 0, scale: 0.95, duration: 0.8, ease: 'power2.out'
  });

  // Map marker
  gsap.from('.map-marker', {
    scrollTrigger: { trigger: '.map-container', start: 'top 70%', once: true },
    scale: 0, duration: 0.5, ease: 'back.out(2)', delay: 0.3
  });

  // Social links
  gsap.from('.social-link', {
    scrollTrigger: { trigger: '.social-links-section', start: 'top 90%', once: true },
    opacity: 0, y: 20, rotation: -10, stagger: 0.08, duration: 0.4, ease: 'back.out(1.7)'
  });

  // Form interactions
  initFormInteractions();
};

const initFormInteractions = () => {
  const formInputs = document.querySelectorAll('.form-control');
  
  formInputs.forEach(input => {
    const wrapper = input.closest('.form-group');
    const label = wrapper?.querySelector('label');
    
    input.addEventListener('focus', () => {
      gsap.to(wrapper, { scale: 1.02, duration: 0.2 });
      if (label) gsap.to(label, { color: '#4A90D9', duration: 0.2 });
    });
    
    input.addEventListener('blur', () => {
      gsap.to(wrapper, { scale: 1, duration: 0.2 });
      if (label) gsap.to(label, { color: 'inherit', duration: 0.2 });
    });
  });
};
```

---

## Theme Variables & CSS Analysis

### Color System (Utility Classes)
| Class | Usage | Description |
|-------|-------|-------------|
| `bgc-white` | Background | White background |
| `text-white` | Text | White text color |
| `text-gray` | Text | Gray text color |

### Component Classes
```css
.contact-info-card { /* Info card */ }
.contact-info-icon { /* Icon container */ }
.contact-form { /* Form container */ }
.form-group { /* Input group */ }
.form-control { /* Input field */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "react-hook-form": "^7.48.0",
  "zod": "^3.22.0",
  "@react-google-maps/api": "^2.19.0",
  "@googlemaps/js-api-loader": "^1.16.0",
  "react-hot-toast": "^2.4.0",
  "zustand": "^4.4.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Contact Page*
*Última actualización: Abril 2025*
