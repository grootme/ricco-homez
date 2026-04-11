# Dashboard Home

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-home
- **Page Title:** Dashboard Home || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-home`

---

## Page Overview

The Dashboard Home page serves as the primary landing page for authenticated users within the Homez Real Estate platform's dashboard area. It provides a comprehensive overview of user activity, property statistics, and recent platform interactions. This page acts as a central hub where property managers, agents, and property owners can quickly assess their portfolio performance and stay informed about recent activities related to their listings.

### Primary Purpose

1. Display key performance metrics at a glance
2. Provide visual analytics through interactive charts
3. Show recent platform activities and notifications
4. Offer quick navigation to other dashboard sections
5. Present a personalized welcome message to users

---

## Layout Structure

### Overall Page Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          HEADER NAVIGATION                          │
│  Logo | Main Nav | User Dropdown | Notifications                   │
├───────────────┬─────────────────────────────────────────────────────┤
│               │                                                     │
│   SIDEBAR     │                  MAIN CONTENT AREA                  │
│   (Fixed)     │                                                     │
│               │  ┌───────────────────────────────────────────────┐  │
│  MAIN         │  │         Dashboard Title Area                  │  │
│  ├─Dashboard  │  │  "Howdy, Ali! We are glad to see you again!"  │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │           Statistics Cards Row                │  │
│  ├─Add Prop   │  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │  │
│  ├─My Props   │  │  │Stat │ │Stat │ │Stat │ │Stat │             │  │
│  ├─Favorites  │  │  │  1  │ │  2  │ │  3  │ │  4  │             │  │
│  ├─Saved Srch │  │  └─────┘ └─────┘ └─────┘ └─────┘             │  │
│  └─Reviews    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌─────────────────────────┬───────────────────┐   │
│  ACCOUNT      │  │                         │                   │   │
│  ├─My Package │  │    Property Views       │  Recent Activity  │   │
│  ├─My Profile │  │    (Chart Widget)       │     (List)        │   │
│  └─Logout     │  │                         │                   │   │
│               │  └─────────────────────────┴───────────────────┘   │
│               │                                                     │
├───────────────┴─────────────────────────────────────────────────────┤
│                          FOOTER                                      │
│  Copyright | Privacy | Terms | Sitemap                              │
└─────────────────────────────────────────────────────────────────────┘
```

### Sidebar Structure

The left sidebar is a fixed navigation component visible on desktop (hidden on mobile) with the following structure:

**CSS Class:** `.dashboard__sidebar`

#### Sidebar Sections:

1. **MAIN Section**
   - Dashboard (active state indicator)
   - Message

2. **MANAGE LISTINGS Section**
   - Add New Property
   - My Properties
   - My Favorites
   - Saved Search
   - Reviews

3. **MANAGE ACCOUNT Section**
   - My Package
   - My Profile
   - Logout

#### Sidebar CSS Classes:

```css
.dashboard__sidebar        /* Main container - d-none d-lg-block */
.dashboard_sidebar_list    /* Inner list container */
.sidebar_list_item         /* Individual menu item */
.items-center              /* Flex alignment */
.-is-active                /* Active state styling */
```

### Header Structure

**CSS Class:** `.header-nav`

The dashboard header includes:

1. **Logo Container**
   - `.dashboard_header_logo`
   - Links to home page (`/`)
   - Image: `/images/header-logo2.svg`

2. **Sidebar Toggle**
   - `.dashboard_sidebar_toggle_icon`
   - Data attributes: `data-bs-toggle="offcanvas"`, `data-bs-target="#SidebarPanel"`
   - Mobile hamburger menu trigger

3. **Navigation Menu**
   - `.ace-responsive-menu`
   - Dropdown menus for Home, Listing, Property, Blog, Pages

4. **User Widgets**
   - Email icon link (to `/login`)
   - Notification bell icon
   - User avatar dropdown with quick links

### Main Content Area

**CSS Class:** `.dashboard__main`

Contains:
- `.dashboard__content` with background color `bgc-f7`
- `.dashboard_title_area`
- Statistics cards row
- Property Views chart
- Recent Activities widget

---

## Data Content Structure

### Dashboard Title Area

```html
<div class="dashboard_title_area">
  <h2>Howdy, Ali!</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

**Data Fields:**
- User's first name: Dynamically displayed in welcome message
- Subtitle text: Static greeting message

### Statistics Cards (Stats Funfacts)

Located in a 4-column grid (`col-sm-6 col-xxl-3`):

| Card # | Label                | Value | Icon Class                |
|--------|---------------------|-------|---------------------------|
| 1      | All Properties      | 583   | `flaticon-home`           |
| 2      | Total Views         | 192   | `flaticon-search-chart`   |
| 3      | Total Visitor Reviews| 438  | `flaticon-review`         |
| 4      | Total Favorites     | 67    | `flaticon-like`           |

**HTML Structure:**
```html
<div class="d-flex justify-content-between statistics_funfact">
  <div class="details">
    <div class="text fz25">All Properties</div>
    <div class="title">583</div>
  </div>
  <div class="icon text-center">
    <i class="flaticon-home"></i>
  </div>
</div>
```

### Property Views Chart Widget

**Container:** `.ps-widget` with white background

**Title:** "Property Views"

**Tab Navigation:**
| Tab ID      | Label    | State   |
|-------------|----------|---------|
| hourly-tab  | Hours    | Active  |
| weekly-tab  | Weekly   | Inactive|
| monthly-tab | Monthly  | Inactive|

**Chart Container:**
```html
<div class="recharts-responsive-container" style="width:100%;height:100%">
  <!-- Recharts chart component renders here -->
</div>
```

**Data Structure Expected:**
```typescript
interface ChartData {
  name: string;      // e.g., "Page A", "Page B"
  pv: number;        // Page views
  uv: number;        // Unique visitors
}
```

**Chart Features:**
- Height: 500px
- Responsive width (100%)
- Uses Recharts library
- Displays pv (page views) and uv (unique visitors) data

### Recent Activities Widget

**Container:** `.ps-widget` (col-xl-4)

**Title:** "Recent Activities"

**Activity Items Structure:**

Each activity item has:
- Icon (status indicator)
- Message text
- Property name (highlighted with `.fw600`)

**Sample Activities:**

| Icon Class          | Message Pattern                                      |
|---------------------|-----------------------------------------------------|
| `flaticon-home`     | Your listing [Property Name] has been approved      |
| `flaticon-review`   | [User Name] left a review on [Property Name]        |
| `flaticon-like`     | Someone favorites your [Property Name] listing      |

**HTML Structure:**
```html
<div class="recent-activity d-sm-flex align-items-center mb20">
  <span class="icon me-3 flaticon-home flex-shrink-0"></span>
  <p class="text mb-0 flex-grow-1">
    Your listing <span class="fw600">House on the Beverly Hills</span> has been approved
  </p>
</div>
```

**View More Button:**
```html
<div class="d-grid">
  <a href="#" class="ud-btn btn-white2">
    View More<i class="fal fa-arrow-right-long"></i>
  </a>
</div>
```

---

## Component Breakdown

### 1. Header Component

**File Location:** Shared layout component

**Props:**
- `isAuthenticated`: boolean
- `user`: User object
- `notifications`: Notification[]

**Sub-components:**
- Logo
- Navigation Menu
- User Dropdown
- Notification Bell
- Mobile Menu Toggle

### 2. Sidebar Component

**CSS Classes:**
- `.dashboard__sidebar` - Main container
- `.dashboard_sidebar_list` - Menu list
- `.sidebar_list_item` - Individual items

**Active State:** Applied via `.-is-active` class

**Behavior:**
- Fixed position on desktop
- Hidden on mobile (d-none d-lg-block)
- Responsive collapse

### 3. Statistics Card Component

**Props:**
```typescript
interface StatCardProps {
  label: string;
  value: number | string;
  icon: string;  // Flaticon class name
}
```

**Features:**
- Flex layout for icon/value alignment
- Responsive grid (4 cols on desktop, 2 on tablet, 1 on mobile)

### 4. Property Views Chart Component

**Technology:** Recharts (React charting library)

**Props:**
```typescript
interface PropertyViewsChartProps {
  data: ChartData[];
  period: 'hours' | 'weekly' | 'monthly';
}
```

**Dependencies:**
- recharts
- React Tabs for period selection

### 5. Recent Activities Component

**Props:**
```typescript
interface RecentActivity {
  id: string;
  icon: string;
  message: string;
  propertyName: string;
  timestamp: Date;
}

interface RecentActivitiesProps {
  activities: RecentActivity[];
  limit?: number;
}
```

### 6. Dashboard Footer

**CSS Class:** `.dashboard_footer`

**Content:**
- Copyright text with dynamic year
- Link to ib-themes (themeforest author)
- Privacy, Terms, Sitemap links

---

## Interactive Elements

### Tab Navigation (Property Views)

**Implementation:** Bootstrap tabs

**Tabs:**
1. Hours (default active)
2. Weekly
3. Monthly

**Behavior:**
- Click tab to switch chart data
- Active tab styling changes
- Chart re-renders with new data

### View More Button (Recent Activities)

**CSS Class:** `.ud-btn .btn-white2`

**Action:** Navigate to full activities list (link TBD)

### Sidebar Navigation

**Active State Indicator:**
- Current page highlighted with `.-is-active` class
- Color change on active item

### User Dropdown Menu

**Trigger:** Click on user avatar

**Dropdown Content:**

**MAIN Section:**
- Dashboard
- Message

**MANAGE LISTINGS Section:**
- Add New Property
- My Properties
- My Favorites
- Saved Search
- Reviews

**MANAGE ACCOUNT Section:**
- My Package
- My Profile
- Logout

---

## Responsive Behavior

### Breakpoints

| Breakpoint   | Width        | Behavior                                    |
|--------------|--------------|---------------------------------------------|
| xs           | < 576px      | Single column, sidebar hidden               |
| sm           | ≥ 576px      | 2-column stats grid                         |
| md           | ≥ 768px      | Sidebar toggle visible                      |
| lg           | ≥ 992px      | Sidebar always visible                      |
| xl           | ≥ 1200px     | Full layout                                 |
| xxl          | ≥ 1400px     | 4-column stats, optimized spacing           |

### Mobile Behavior (d-lg-none)

1. **Sidebar:**
   - Hidden by default
   - Accessible via hamburger menu
   - Opens as offcanvas/dropdown

2. **Dashboard Navigation Bar:**
   ```html
   <div class="dashboard_navigationbar d-block d-lg-none">
     <div class="dropdown">
       <button class="dropbtn">
         <i class="fa fa-bars pr10"></i> Dashboard Navigation
       </button>
       <!-- Dropdown content mirrors sidebar -->
     </div>
   </div>
   ```

3. **Statistics Cards:**
   - Stack vertically on small screens
   - 2-column on medium screens

4. **Property Views & Recent Activities:**
   - Stack vertically on mobile
   - Side-by-side on xl screens

### Tablet Behavior

1. Stats cards display in 2x2 grid
2. Sidebar hidden, accessible via toggle
3. Chart and activities stack vertically

### Desktop Behavior (lg+)

1. Fixed sidebar visible
2. 4-column stats row
3. Chart (8 cols) and Activities (4 cols) side-by-side

---

## CSS Classes Reference

### Layout Classes

```css
.dashboard_content_wrapper  /* Main wrapper for dashboard */
.dashboard                  /* Dashboard container */
.dashboard_wrapper          /* Padding adjustments */
.dashboard__sidebar         /* Left sidebar */
.dashboard__main            /* Main content area */
.dashboard__content         /* Content container */
.dashboard_title_area       /* Title section */
.dashboard_footer           /* Footer section */
```

### Widget Classes

```css
.ps-widget                  /* Generic widget container */
.bgc-white                  /* White background */
.bdrs12                     /* Border radius 12px */
.default-box-shadow2        /* Box shadow styling */
```

### Statistics Classes

```css
.statistics_funfact         /* Stats card container */
.details                    /* Text container */
.text.fz25                  /* Label styling */
.title                      /* Value styling */
.icon                       /* Icon container */
```

### Navigation Classes

```css
.sidebar_list_item          /* Menu item */
.items-center               /* Flex center alignment */
.-is-active                 /* Active state */
.mr15                       /* Margin right 15px */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **User Profile:**
   - `GET /api/user/profile`
   - Returns: User name, avatar, preferences

2. **Dashboard Statistics:**
   - `GET /api/dashboard/stats`
   - Returns:
     ```json
     {
       "totalProperties": 583,
       "totalViews": 192,
       "totalReviews": 438,
       "totalFavorites": 67
     }
     ```

3. **Property Views Chart:**
   - `GET /api/dashboard/views?period=hours|weekly|monthly`
   - Returns: Chart data array

4. **Recent Activities:**
   - `GET /api/dashboard/activities?limit=7`
   - Returns: Activity array

---

## Accessibility Considerations

1. **ARIA Labels:**
   - Tab list properly labeled
   - Dropdown menus have aria-expanded states

2. **Keyboard Navigation:**
   - Tab through sidebar items
   - Enter to activate links

3. **Color Contrast:**
   - Text on backgrounds meets WCAG standards
   - Active states clearly distinguishable

---

## Performance Considerations

1. **Chart Rendering:**
   - Uses Recharts for optimized SVG rendering
   - Data should be memoized to prevent re-renders

2. **Sidebar:**
   - Rendered once, cached between page navigations
   - Collapsible on mobile for reduced DOM

3. **Images:**
   - Next.js Image component for optimization
   - Lazy loading for offscreen content

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-home/page.tsx` - Page component
- `/components/dashboard/Sidebar.tsx` - Sidebar component
- `/components/dashboard/StatsCard.tsx` - Statistics card
- `/components/dashboard/PropertyViewsChart.tsx` - Chart component
- `/components/dashboard/RecentActivities.tsx` - Activity list

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0
- zod: ^3.22.0 for validation

### Dashboard Features
- Statistics charts with Recharts
- Property management CRUD
- Message system
- Favorites system
- Reviews system

### Key Dependencies
- recharts: ^2.10.0 for charts
- react-tabs: ^6.0.0 for tab navigation
- @tanstack/react-table: ^8.11.0 for data tables

---

## GSAP Animations Used

**Note**: This template uses **AOS (Animate On Scroll)** library, NOT GSAP.

### Animation Library
```json
{
  "aos": "^2.3.4"
}
```

### AOS Animation Types Used:
| Animation | Description | Usage |
|-----------|-------------|-------|
| `fade-up` | Fade in from bottom | Statistics cards |
| `fade-in` | Fade in without movement | Content sections |
| `zoom-in` | Scale from 0.6 to 1 | Chart container |

### Animation Configuration:
```javascript
AOS.init({
  duration: 800,      // Animation duration in ms
  easing: 'ease-out', // Easing function
  once: true,         // Only animate once
  offset: 50          // Offset from viewport
});
```

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Stats Cards | opacity, transform | 300ms | ease-out |
| Chart Tabs | all | 300ms | ease |
| Buttons | background, color | 200ms | ease |

---

## Theme Variables

### CSS Custom Properties:
```css
/* Font Families */
--title-font-family: "__Poppins_85583a", "__Poppins_Fallback_85583a";
--body-font-family: "__DM_Sans_e47c01", "__DM_Sans_Fallback_e47c01";
```

### Color Variables:
```css
/* Background Colors */
.bgc-white    /* #ffffff */
.bgc-f7       /* #f7f7f7 - Dashboard background */

/* Text Colors */
.dark-color      /* Primary text color */
.heading-color   /* Heading color */
.text-thm1       /* Theme accent color */

/* Border Colors */
.bdrt1           /* Border color #efefef */
.bdrb1           /* Border bottom color */
```

### Border Radius:
```css
.bdrs6   /* 6px border radius */
.bdrs12  /* 12px border radius */
```

### Box Shadows:
```css
.default-box-shadow2  /* Card shadow: 0 4px 20px rgba(0,0,0,0.08) */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Grid system with responsive breakpoints
- Utility classes for spacing and display
- Components: nav-tabs, dropdown, offcanvas

### Utility Classes Pattern:
```css
/* Spacing */
.mr10, .mr15, .mr20   /* Margin right: 10px, 15px, 20px */
.mb10, .mb20, .mb30   /* Margin bottom: 10px, 20px, 30px */
.pl30, .pr30          /* Padding left/right: 30px */
.mt30, .mt60          /* Margin top: 30px, 60px */

/* Font Size */
.fz14, .fz17, .fz25   /* Font size: 14px, 17px, 25px */

/* Font Weight */
.fw400, .fw600        /* Font weight: 400, 600 */
```

### BEM-like Naming:
```css
.dashboard__sidebar      /* Block__Element */
.dashboard__main
.dashboard__content
.statistics_funfact      /* Component class */
```

---

## NPM Libraries Required

### Charts (Dashboard Home Specific):
```json
{
  "recharts": "^2.10.0"
}
```
Used for Property Views chart with:
- ResponsiveContainer
- LineChart / AreaChart
- XAxis, YAxis, CartesianGrid
- Tooltip, Legend

### Animation:
```json
{
  "aos": "^2.3.4"
}
```

### UI Components:
```json
{
  "react-tabs": "^6.0.0",
  "react-tooltip": "^5.25.0"
}
```

---

## GSAP Animation Implementation

### NPM Dependencies

```json
{
  "gsap": "^3.12.0"
}
```

### Installation

```bash
npm install gsap
```

### GSAP Plugin Registration

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
```

### Dashboard Statistics Counter Animation

```javascript
// Animate stat values with counting effect
const animateStatsCounter = () => {
  const statValues = document.querySelectorAll('.statistics_funfact .title');

  statValues.forEach((stat) => {
    const targetValue = parseInt(stat.textContent, 10);

    gsap.from(stat, {
      textContent: 0,
      duration: 2,
      ease: 'power1.inOut',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      onUpdate: function () {
        stat.textContent = Math.round(this.targets()[0].textContent);
      }
    });
  });
};
```

### Statistics Cards Stagger Animation

```javascript
// Stagger entrance for statistics cards
const animateStatsCards = () => {
  gsap.from('.statistics_funfact', {
    opacity: 0,
    y: 40,
    scale: 0.9,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.statistics_funfact',
      start: 'top 80%'
    }
  });
};
```

### Sidebar Navigation Animations

```javascript
// Sidebar menu item hover effects
const initSidebarAnimations = () => {
  const menuItems = document.querySelectorAll('.sidebar_list_item');

  menuItems.forEach((item) => {
    const icon = item.querySelector('i, span.flaticon');
    const text = item.querySelector('span:not(.flaticon)');

    // Hover animation
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        x: 8,
        duration: 0.25,
        ease: 'power2.out'
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          color: '#e33961',
          duration: 0.25
        });
      }
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        x: 0,
        duration: 0.25,
        ease: 'power2.out'
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1,
          color: '',
          duration: 0.25
        });
      }
    });
  });
};
```

### Chart Widget Animation

```javascript
// Animate chart container on load
const animateChart = () => {
  const chartContainer = document.querySelector('.recharts-responsive-container');

  if (chartContainer) {
    gsap.from(chartContainer, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.3
    });
  }
};

// Tab switch animation for chart periods
const animateChartTabs = () => {
  const tabs = document.querySelectorAll('.nav-tabs .nav-link');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      gsap.to('.recharts-responsive-container', {
        opacity: 0,
        scale: 0.98,
        duration: 0.2,
        onComplete: () => {
          gsap.to('.recharts-responsive-container', {
            opacity: 1,
            scale: 1,
            duration: 0.3
          });
        }
      });
    });
  });
};
```

### Recent Activities Animation

```javascript
// Stagger animation for activity items
const animateRecentActivities = () => {
  const activities = document.querySelectorAll('.recent-activity');

  gsap.from(activities, {
    opacity: 0,
    x: -20,
    stagger: 0.1,
    duration: 0.4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.ps-widget',
      start: 'top 80%'
    }
  });
};

// Activity icon pulse animation
const pulseActivityIcon = (iconElement) => {
  gsap.to(iconElement, {
    scale: 1.2,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: 'power1.inOut'
  });
};
```

### Dashboard Title Animation

```javascript
// Welcome message entrance
const animateDashboardTitle = () => {
  const titleArea = document.querySelector('.dashboard_title_area');

  gsap.from(titleArea, {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: 'power2.out'
  });

  gsap.from('.dashboard_title_area h2', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    delay: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.dashboard_title_area .text', {
    opacity: 0,
    y: 15,
    duration: 0.5,
    delay: 0.4,
    ease: 'power2.out'
  });
};
```

### Complete Dashboard Animation Init

```javascript
// Initialize all dashboard animations
const initDashboardAnimations = () => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Run animations
  animateDashboardTitle();
  animateStatsCards();
  animateStatsCounter();
  animateChart();
  animateChartTabs();
  animateRecentActivities();
  initSidebarAnimations();

  // Refresh ScrollTrigger after page load
  ScrollTrigger.refresh();
};

// Run on DOM ready
if (typeof window !== 'undefined') {
  window.addEventListener('load', initDashboardAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useDashboardAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useDashboardAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stats counter animation
    const statValues = document.querySelectorAll('.statistics_funfact .title');
    statValues.forEach((stat) => {
      gsap.from(stat, {
        textContent: 0,
        duration: 2,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 90%'
        }
      });
    });

    // Sidebar hover effects
    const menuItems = document.querySelectorAll('.sidebar_list_item');
    menuItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { x: 5, duration: 0.2, ease: 'power1.out' });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { x: 0, duration: 0.2, ease: 'power1.out' });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
```

---

## Notes

- The dashboard uses AOS (Animate On Scroll) for animations, not GSAP
- All interactive elements have hover and focus states
- The layout uses CSS Grid and Flexbox for responsive design
- Chart data is loaded client-side after initial page render
- User authentication required for dashboard access
- Recharts is used for the property views visualization
