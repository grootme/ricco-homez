# About Page - Documentation

## 1. Identificación

- **Nombre de la Página:** About
- **URL:** `https://homez-appdir.vercel.app/about`
- **Título de Página:** `About || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Static Content Page

---

## 2. Descripción General

La página About presenta información sobre la empresa Homez, su historia, misión, visión, valores, equipo directivo y logros. Es una página estática diseñada para generar confianza y credibilidad con los usuarios del sitio.

### Propósito
- Presentar la identidad de la empresa
- Mostrar la historia y trayectoria
- Destacar el equipo de liderazgo
- Generar confianza en potenciales clientes
- Comunicar la misión y valores

---

## 3. Estructura de la Página

### 3.1 Layout General

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        HERO BANNER                                   │    │
│  │   Background Image | Title: "About Us" | Subtitle                   │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    OUR STORY SECTION                                 │    │
│  │   [Image Left] | [Title + Content Right]                            │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    MISSION & VISION                                  │    │
│  │   [Mission Card] | [Vision Card]                                    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    OUR VALUES                                        │    │
│  │   [Value 1] | [Value 2] | [Value 3] | [Value 4]                    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    STATISTICS COUNTER                                │    │
│  │   [Happy Clients] | [Properties] | [Agents] | [Years]              │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    LEADERSHIP TEAM                                   │    │
│  │   [Team Member 1] | [Team Member 2] | [Team Member 3] | ...        │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    CALL TO ACTION                                    │    │
│  │   "Ready to find your dream home?" | CTA Button                     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Hero Banner Data

```typescript
interface AboutHero {
  title: string;
  subtitle: string;
  backgroundImage: string;
}
```

**Sample Data:**
| Campo | Valor |
|-------|-------|
| Title | "About Us" |
| Subtitle | "Learn more about our journey and commitment to excellence" |
| Background Image | `/images/about/about-page-banner.jpg` |

### 4.2 Our Story Section

```typescript
interface OurStory {
  title: string;
  content: string;
  image: string;
  establishedYear: number;
}
```

**Sample Data:**
| Campo | Valor |
|-------|-------|
| Title | "Our Story" |
| Content | "Founded in 2010, Homez has grown from a small local agency..." |
| Image | `/images/about/our-story.jpg` |
| Established | 2010 |

### 4.3 Mission & Vision

```typescript
interface MissionVision {
  mission: {
    title: string;
    description: string;
    icon: string;
  };
  vision: {
    title: string;
    description: string;
    icon: string;
  };
}
```

**Sample Data:**
```
Mission:
- Title: "Our Mission"
- Description: "To connect people with their perfect homes through innovative technology and personalized service."
- Icon: "flaticon-target"

Vision:
- Title: "Our Vision"
- Description: "To be the most trusted real estate platform, empowering millions to achieve their property dreams."
- Icon: "flaticon-vision"
```

### 4.4 Core Values

```typescript
interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface CoreValuesSection {
  title: string;
  values: CoreValue[];
}
```

**Sample Values:**
| Value | Description | Icon |
|-------|-------------|------|
| Integrity | "We uphold the highest ethical standards in all our dealings" | flaticon-shield |
| Excellence | "We strive for excellence in every transaction" | flaticon-medal |
| Innovation | "We leverage technology to enhance the real estate experience" | flaticon-lightbulb |
| Client Focus | "Our clients' needs are at the heart of everything we do" | flaticon-heart |

### 4.5 Statistics Counter

```typescript
interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

interface StatisticsSection {
  statistics: Statistic[];
}
```

**Sample Statistics:**
| Stat | Value | Suffix | Icon |
|------|-------|--------|------|
| Happy Clients | 15000 | + | flaticon-happy |
| Properties Listed | 8500 | + | flaticon-home |
| Expert Agents | 250 | + | flaticon-team |
| Years Experience | 14 | + | flaticon-calendar |

### 4.6 Leadership Team

```typescript
interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
}
```

**Sample Team Members:**
| Name | Position | Photo |
|------|----------|-------|
| John Smith | CEO & Founder | /images/team/ceo.jpg |
| Sarah Johnson | COO | /images/team/coo.jpg |
| Michael Brown | CTO | /images/team/cto.jpg |
| Emily Davis | Head of Sales | /images/team/sales-head.jpg |

### 4.7 Call to Action

```typescript
interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
```

---

## 5. Componentes UI

### 5.1 Hero Banner

```typescript
interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}
```

**CSS Classes:**
```css
.about-hero { /* Container */ }
.about-hero-bg { /* Background image */ }
.about-hero-content { /* Text content */ }
.about-hero-title { /* Main title h1 */ }
.about-hero-subtitle { /* Subtitle text */ }
```

### 5.2 Story Section

```typescript
interface StorySectionProps {
  title: string;
  content: string;
  image: string;
  establishedYear: number;
  reverse?: boolean;
}
```

### 5.3 Value Card

```typescript
interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}
```

### 5.4 Statistic Counter

```typescript
interface StatisticCounterProps {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
  animated: boolean;
}
```

### 5.5 Team Member Card

```typescript
interface TeamMemberCardProps {
  name: string;
  position: string;
  photo: string;
  socialLinks: SocialLinks;
}
```

---

## 6. API Endpoints

### 6.1 Get About Page Content

```
Endpoint: /api/pages/about
Method: GET

Response:
{
  "hero": AboutHero,
  "story": OurStory,
  "missionVision": MissionVision,
  "values": CoreValue[],
  "statistics": Statistic[],
  "team": TeamMember[],
  "cta": CTASection
}
```

---

## 7. Estructuras TypeScript

```typescript
interface AboutPageData {
  hero: AboutHero;
  story: OurStory;
  missionVision: MissionVision;
  values: CoreValue[];
  statistics: Statistic[];
  team: TeamMember[];
  cta: CTASection;
}

interface AboutPageState {
  data: AboutPageData | null;
  isLoading: boolean;
  error: string | null;
}
```

---

## 8. Elementos Interactivos

### 8.1 Animated Counter

| Elemento | Efecto |
|----------|--------|
| Statistics | Conteo animado al hacer scroll |
| Trigger | Intersection Observer |
| Duration | 2000ms |

### 8.2 Team Card Hover

| Elemento | Efecto |
|----------|--------|
| Photo | Zoom suave |
| Social Links | Fade in desde abajo |

---

## 9. Comportamiento Responsivo

| Breakpoint | Layout |
|------------|--------|
| Mobile | Single column, image arriba |
| Tablet | Two columns para story |
| Desktop | Full layout, 4 valores por fila |

---

## 10. SEO y Meta Information

```html
<title>About || Homez - Real Estate NextJS Template</title>
<meta name="description" content="Learn about Homez - your trusted real estate partner. Discover our story, mission, values, and meet our expert team.">

<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Homez",
  "description": "Full-service real estate platform",
  "foundingDate": "2010",
  "numberOfEmployees": "250"
}
</script>
```

---

## Technical Implementation

### Static Content Management
- Content stored in CMS or static files
- Multi-language support (i18n)
- SEO optimization with meta tags

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state

### Key Dependencies
- framer-motion: ^10.16.0 for animations
- react-countup: ^6.5.0 for statistics counter
- react-intersection-observer: ^9.5.0 for scroll animations

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 7 | Hero, story, values, stats, team sections |
| `fade-left` | 2 | Left-aligned content blocks |
| `fade-right` | 1 | Right-aligned content blocks |
| `aos-delay="100"` | 1 | First stagger |
| `aos-delay="300"` | 6 | Main stagger delay |

### AOS Configuration
```javascript
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100
});
```

### Animation Pattern
- Multi-section animations with directional fades
- Statistics counter with scroll trigger
- Team cards with cascade effect

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

The About page benefits from several coordinated animations that enhance the storytelling experience and highlight key metrics.

#### 1. Statistics Counter Animation

Animated counting effect for statistics section with scroll trigger activation.

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Stats counter animation
const statCounters = document.querySelectorAll('.statistic-counter');

statCounters.forEach(counter => {
  const target = parseInt(counter.dataset.target);
  const suffix = counter.dataset.suffix || '';
  
  gsap.from(counter, {
    textContent: 0,
    duration: 2,
    ease: 'power1.inOut',
    snap: { textContent: 1 },
    scrollTrigger: {
      trigger: counter,
      start: 'top 90%',
      once: true
    },
    onUpdate: function() {
      counter.textContent = Math.round(this.targets()[0].textContent) + suffix;
    }
  });
});
```

#### 2. Team Cards Stagger Animation

Cascade effect for team member cards on scroll.

```javascript
// Team cards stagger animation
gsap.from('.team-member-card', {
  scrollTrigger: {
    trigger: '.team-section',
    start: 'top 75%',
    once: true
  },
  opacity: 0,
  y: 60,
  stagger: 0.15,
  duration: 0.7,
  ease: 'power3.out'
});
```

#### 3. Value Cards Animation

Animated entrance for core values section.

```javascript
// Value cards animation
gsap.from('.value-card', {
  scrollTrigger: {
    trigger: '.values-section',
    start: 'top 80%',
    once: true
  },
  opacity: 0,
  y: 40,
  scale: 0.95,
  stagger: {
    each: 0.12,
    from: 'start'
  },
  duration: 0.6,
  ease: 'back.out(1.2)'
});
```

#### 4. Mission & Vision Cards

Split reveal animation for mission and vision cards.

```javascript
// Mission and Vision cards
const missionVisionTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.mission-vision-section',
    start: 'top 70%',
    once: true
  }
});

missionVisionTl
  .from('.mission-card', {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.vision-card', {
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5');
```

#### 5. Our Story Section Parallax

Subtle parallax effect for the story image.

```javascript
// Story section parallax
gsap.to('.story-image', {
  scrollTrigger: {
    trigger: '.story-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  },
  y: -30,
  ease: 'none'
});
```

#### 6. Hero Section Entrance

Initial page load animation sequence.

```javascript
// Hero entrance animation
const heroTl = gsap.timeline();

heroTl
  .from('.about-hero-title', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.about-hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.about-hero-bg', {
    scale: 1.1,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.8');
```

### Complete Implementation Example

```javascript
// about-animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = () => {
  // Hero entrance
  const heroTl = gsap.timeline();
  heroTl
    .from('.about-hero-title', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from('.about-hero-subtitle', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');

  // Stats counter
  document.querySelectorAll('.statistic-counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    gsap.from(counter, {
      textContent: 0,
      duration: 2,
      ease: 'power1.inOut',
      snap: { textContent: 1 },
      scrollTrigger: { trigger: counter, start: 'top 90%', once: true },
      onUpdate: function() {
        counter.textContent = Math.round(this.targets()[0].textContent) + suffix;
      }
    });
  });

  // Team cards
  gsap.from('.team-member-card', {
    scrollTrigger: { trigger: '.team-section', start: 'top 75%', once: true },
    opacity: 0, y: 60, stagger: 0.15, duration: 0.7, ease: 'power3.out'
  });

  // Value cards
  gsap.from('.value-card', {
    scrollTrigger: { trigger: '.values-section', start: 'top 80%', once: true },
    opacity: 0, y: 40, scale: 0.95, stagger: 0.12, duration: 0.6, ease: 'back.out(1.2)'
  });

  // Mission & Vision
  const mvTl = gsap.timeline({
    scrollTrigger: { trigger: '.mission-vision-section', start: 'top 70%', once: true }
  });
  mvTl
    .from('.mission-card', { x: -60, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from('.vision-card', { x: 60, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
};
```

---

## Theme Variables & CSS Analysis

### Color System (Utility Classes)
| Class | Usage | Description |
|-------|-------|-------------|
| `bgc-white` | Background | White background |
| `bgc-f7` | Background | Light gray background |
| `text-white` | Text | White text color |
| `text-gray` | Text | Gray text color |

### Component Classes
```css
.about-hero { /* Hero section */ }
.about-hero-bg { /* Background image */ }
.about-hero-content { /* Text content */ }
.story-section { /* Our story */ }
.value-card { /* Value item */ }
.statistic-counter { /* Animated counter */ }
.team-member-card { /* Team card */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "framer-motion": "^10.16.0",
  "react-countup": "^6.5.0",
  "react-intersection-observer": "^9.5.0",
  "zustand": "^4.4.0",
  "@tanstack/react-query": "^5.8.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - About Page*
*Última actualización: Abril 2025*
