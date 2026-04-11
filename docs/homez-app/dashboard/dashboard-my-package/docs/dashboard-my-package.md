# My Package

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-my-package
- **Page Title:** My Package || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-my-package`

---

## Page Overview

The My Package page displays the user's current subscription plan details and usage information. It shows the active package, remaining quotas for various features, storage usage, and subscription expiry dates. This page helps users manage their subscription and understand their current plan limitations.

### Primary Purpose

1. Display current subscription plan
2. Show remaining property listing quota
3. Track featured listing allocation
4. Monitor storage space usage
5. Display subscription expiry date

---

## Layout Structure

### Overall Page Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          HEADER NAVIGATION                          │
├───────────────┬─────────────────────────────────────────────────────┤
│               │                                                     │
│   SIDEBAR     │                  MAIN CONTENT AREA                  │
│   (Fixed)     │                                                     │
│               │  ┌───────────────────────────────────────────────┐  │
│  MAIN         │  │         Dashboard Title Area                  │  │
│  ├─Dashboard  │  │         "My Package"                          │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │              PACKAGE TABLE                     │  │
│  ├─Add Prop   │  │  ┌─────────────────────────────────────────┐  │  │
│  ├─My Props   │  │  │Current│Props│Featured│Renewal│Storage│Exp│  │  │
│  ├─Favorites  │  │  │Package│Remain│Remain  │Remain │Space  │Date│  │  │
│  ├─Saved Srch │  │  ├─────────────────────────────────────────┤  │  │
│  └─Reviews    │  │  │ Row 1 (Free Plan)                        │  │  │
│               │  │  │ Row 2                                    │  │  │
│  MANAGE       │  │  │ Row 3                                    │  │  │
│  ACCOUNT      │  │  │ ...                                      │  │  │
│  ├─My Package ●│ │  └─────────────────────────────────────────┘  │  │
│  ├─My Profile │  │                                               │  │
│  └─Logout     │  └───────────────────────────────────────────────┘  │
│               │                                                     │
├───────────────┴─────────────────────────────────────────────────────┤
│                          FOOTER                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Data Content Structure

### Dashboard Title Area

```html
<div class="dashboard_title_area">
  <h2>My Package</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Package Table

**Container:** `.packages_table` with `.table-responsive`

#### Table Header

```html
<thead class="t-head">
  <tr>
    <th scope="col">Current Package</th>
    <th scope="col">Properties remaining</th>
    <th scope="col">Featured remaining</th>
    <th scope="col">Renewal remaining</th>
    <th scope="col">Storage Space</th>
    <th scope="col">Expiry Date</th>
  </tr>
</thead>
```

#### Table Columns

| Column                  | Description                          |
|-------------------------|--------------------------------------|
| Current Package         | Plan name (Free, Pro, Enterprise)    |
| Properties remaining    | Number of listings left to create    |
| Featured remaining      | Number of featured slots available   |
| Renewal remaining       | Days until renewal                   |
| Storage Space           | Used/Total storage in MB             |
| Expiry Date             | Subscription end date                |

#### Table Row Structure

```html
<tbody class="t-body">
  <tr>
    <th scope="row">Free</th>
    <td>3</td>
    <td>2</td>
    <td>7</td>
    <td>2 MB / 20 MB</td>
    <td>December 31, 2022</td>
  </tr>
</tbody>
```

### Sample Package Data

| Package | Properties | Featured | Renewal | Storage     | Expiry Date     |
|---------|------------|----------|---------|-------------|-----------------|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|
| Free    | 3          | 2        | 7       | 2 MB / 20 MB| December 31, 2022|

---

## Component Breakdown

### 1. Package Table Component

**CSS Classes:** `.packages_table`, `.table-style3`

**Props:**
```typescript
interface PackageTableProps {
  packages: Package[];
  isLoading?: boolean;
}

interface Package {
  id: string;
  name: string;
  propertiesRemaining: number;
  featuredRemaining: number;
  renewalRemaining: number;
  storageUsed: number;
  storageTotal: number;
  expiryDate: Date;
}
```

### 2. Package Plan Types

| Plan        | Properties | Featured | Storage | Price      |
|-------------|------------|----------|---------|------------|
| Free        | 3          | 2        | 20 MB   | $0/mo      |
| Pro         | 25         | 10       | 500 MB  | $29/mo     |
| Enterprise  | Unlimited  | 50       | 5 GB    | $99/mo     |

---

## Interactive Elements

### Upgrade Plan

**Trigger:** (If implemented) Click upgrade button

**Behavior:**
- Navigate to pricing page
- Show upgrade options
- Process payment

### View Usage Details

**Trigger:** Click on specific row

**Behavior:**
- Expand row details
- Show usage breakdown
- Display usage history

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Layout Behavior                              |
|------------|------------|---------------------------------------------|
| xs         | < 576px    | Horizontal scroll for table                 |
| sm         | ≥ 576px    | Improved spacing                             |
| md         | ≥ 768px    | Full table visible                           |
| lg         | ≥ 992px    | Sidebar visible                              |

### Mobile Behavior

1. **Table Display:**
   - Horizontal scroll
   - Sticky first column
   - Compact cells

---

## CSS Classes Reference

### Table Classes

```css
.packages_table            /* Table container */
.table-responsive          /* Responsive wrapper */
.table-style3              /* Table styling */
.table                     /* Bootstrap table */
.t-head                    /* Table header */
.t-body                    /* Table body */
```

### Widget Classes

```css
.ps-widget                 /* Panel widget */
.bgc-white                 /* White background */
.bdrs12                    /* Border radius 12px */
.default-box-shadow2       /* Box shadow */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get User Package:**
   ```
   GET /api/user/package
   ```
   Returns: Current package details

   ```json
   {
     "package": {
       "id": "pkg-123",
       "name": "Free",
       "propertiesRemaining": 3,
       "featuredRemaining": 2,
       "renewalRemaining": 7,
       "storageUsed": 2,
       "storageTotal": 20,
       "expiryDate": "2022-12-31T00:00:00Z"
     }
   }
   ```

2. **Get Package History:**
   ```
   GET /api/user/package/history
   ```
   Returns: Previous packages/subscriptions

---

## State Management

### Page State

```typescript
interface PackageState {
  currentPackage: Package | null;
  packageHistory: Package[];
  isLoading: boolean;
  error: string | null;
}
```

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-my-package/page.tsx` - Page component
- `/components/dashboard/PackageTable.tsx` - Table component
- `/components/dashboard/PackageUsage.tsx` - Usage display

---

## Package Features Comparison

### Free Plan Features

| Feature                | Included | Limit       |
|------------------------|----------|-------------|
| Property Listings      | ✓        | 3           |
| Featured Listings      | ✓        | 2           |
| Photo Uploads          | ✓        | 20 MB       |
| Basic Analytics        | ✓        | Limited     |
| Email Support          | ✓        | Yes         |
| Priority Support       | ✗        | -           |
| Custom Branding        | ✗        | -           |
| API Access             | ✗        | -           |

### Pro Plan Features

| Feature                | Included | Limit       |
|------------------------|----------|-------------|
| Property Listings      | ✓        | 25          |
| Featured Listings      | ✓        | 10          |
| Photo Uploads          | ✓        | 500 MB      |
| Advanced Analytics     | ✓        | Full        |
| Priority Support       | ✓        | Yes         |
| Custom Branding        | ✓        | Yes         |
| API Access             | ✓        | Limited     |
| Virtual Tours          | ✗        | -           |

### Enterprise Plan Features

| Feature                | Included | Limit       |
|------------------------|----------|-------------|
| Property Listings      | ✓        | Unlimited   |
| Featured Listings      | ✓        | 50          |
| Photo Uploads          | ✓        | 5 GB        |
| Advanced Analytics     | ✓        | Full        |
| Priority Support       | ✓        | 24/7        |
| Custom Branding        | ✓        | Yes         |
| API Access             | ✓        | Full        |
| Virtual Tours          | ✓        | Unlimited   |
| Dedicated Manager      | ✓        | Yes         |

---

## Storage Usage Details

### Storage Allocation by File Type

| File Type     | Free    | Pro     | Enterprise |
|---------------|---------|---------|------------|
| Property Photos| 15 MB  | 400 MB  | 4 GB       |
| Documents     | 3 MB    | 50 MB   | 500 MB     |
| Videos        | 2 MB    | 50 MB   | 500 MB     |
| Total         | 20 MB   | 500 MB  | 5 GB       |

### Storage Management

**Current Usage Display:**
```
Storage: 2 MB / 20 MB (10% used)
```

**Usage Breakdown:**
- Property Images: 1.5 MB
- Documents: 0.3 MB
- Videos: 0.2 MB

---

## Renewal Information

### Renewal Cycle

| Plan        | Billing Cycle | Auto-Renew | Grace Period |
|-------------|---------------|------------|--------------|
| Free        | Never         | N/A        | N/A          |
| Pro         | Monthly       | Yes        | 7 days       |
| Enterprise  | Annually      | Yes        | 14 days      |

### Renewal Status

The "Renewal remaining" column shows:
- **For Free Plan:** Days until next credit refresh
- **For Paid Plans:** Days until next billing date

---

## Interactive Elements

### Upgrade Plan

**Trigger:** (If implemented) Click upgrade button

**Behavior:**
- Navigate to pricing page
- Show upgrade options
- Display feature comparison
- Process payment
- Update current package

### Cancel Subscription

**Trigger:** (If implemented) Click cancel button

**Behavior:**
- Show confirmation modal
- Warn about feature loss
- Schedule cancellation at period end
- Retain access until expiry

### View Invoice History

**Trigger:** Click view invoices link

**Behavior:**
- Navigate to invoice page
- Show payment history
- Download invoice PDFs

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Layout Behavior                              |
|------------|------------|---------------------------------------------|
| xs         | < 576px    | Horizontal scroll for table                 |
| sm         | ≥ 576px    | Improved spacing                             |
| md         | ≥ 768px    | Full table visible                           |
| lg         | ≥ 992px    | Sidebar visible                              |

### Mobile Behavior

1. **Table Display:**
   - Horizontal scroll
   - Sticky first column
   - Compact cells

2. **Feature Comparison:**
   - Accordion-style sections
   - Expandable rows

---

## CSS Classes Reference

### Table Classes

```css
.packages_table            /* Table container */
.table-responsive          /* Responsive wrapper */
.table-style3              /* Table styling */
.table                     /* Bootstrap table */
.t-head                    /* Table header */
.t-body                    /* Table body */
```

### Widget Classes

```css
.ps-widget                 /* Panel widget */
.bgc-white                 /* White background */
.bdrs12                    /* Border radius 12px */
.default-box-shadow2       /* Box shadow */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get User Package:**
   ```
   GET /api/user/package
   ```
   Returns: Current package details

   ```json
   {
     "package": {
       "id": "pkg-123",
       "name": "Free",
       "propertiesRemaining": 3,
       "featuredRemaining": 2,
       "renewalRemaining": 7,
       "storageUsed": 2,
       "storageTotal": 20,
       "expiryDate": "2022-12-31T00:00:00Z"
     }
   }
   ```

2. **Get Package History:**
   ```
   GET /api/user/package/history
   ```
   Returns: Previous packages/subscriptions

3. **Upgrade Package:**
   ```
   POST /api/user/package/upgrade
   Body: { planId: string, paymentMethod: string }
   ```
   Returns: Updated package details

4. **Cancel Subscription:**
   ```
   POST /api/user/package/cancel
   ```
   Returns: Cancellation confirmation

---

## State Management

### Page State

```typescript
interface PackageState {
  currentPackage: Package | null;
  packageHistory: Package[];
  availablePlans: Plan[];
  isLoading: boolean;
  isUpgrading: boolean;
  error: string | null;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  features: PlanFeature[];
  recommended?: boolean;
}
```

---

## Accessibility Considerations

1. **Table Headers:**
   - Proper `<th>` elements with scope
   - Column headers are descriptive

2. **Upgrade Actions:**
   - Clear button labels
   - Confirmation dialogs
   - Keyboard accessible

---

## Performance Considerations

1. **Data Caching:**
   - Cache package data locally
   - Refresh on subscription changes

2. **Lazy Loading:**
   - Load history on demand
   - Defer non-critical data

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-my-package/page.tsx` - Page component
- `/components/dashboard/PackageTable.tsx` - Table component
- `/components/dashboard/PackageUsage.tsx` - Usage display
- `/components/dashboard/PlanComparison.tsx` - Feature comparison
- `/components/dashboard/UpgradeModal.tsx` - Upgrade dialog

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0
- zod: ^3.22.0 for validation

### Package Management Features
- Current subscription display
- Usage tracking (properties, storage, featured listings)
- Upgrade/downgrade functionality
- Payment history integration

### Key Dependencies
- @stripe/stripe-js: ^2.2.0 for payments
- @stripe/react-stripe-js: ^2.4.0 for payment UI
- react-hot-toast: ^2.4.0 for notifications

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
| `fade-up` | Fade in from bottom | Table rows |
| `fade-in` | Fade in without movement | Content sections |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Table Rows | background-color | 200ms | ease |
| Upgrade Button | background-color | 200ms | ease |
| Storage Progress | width | 500ms | ease-out |

---

## Theme Variables

### Table Styling:
```css
.packages_table      /* Table container */
.table-style3        /* Table styling */
.t-head              /* Table header */
.t-body              /* Table body */
```

### Widget Classes:
```css
.ps-widget           /* Panel widget */
.bgc-white           /* White background */
.bdrs12              /* Border radius 12px */
.default-box-shadow2 /* Box shadow */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Responsive table with horizontal scroll
- Sticky first column for mobile

---

## NPM Libraries Required

### Payments:
```json
{
  "@stripe/stripe-js": "^2.2.0",
  "@stripe/react-stripe-js": "^2.4.0"
}
```

### Notifications:
```json
{
  "react-hot-toast": "^2.4.0"
}
```

### Animation:
```json
{
  "aos": "^2.3.4"
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

gsap.registerPlugin(ScrollTrigger);
```

### Package Table Animation

```javascript
// Staggered entrance for table rows
const animatePackageRows = () => {
  const rows = document.querySelectorAll('.packages_table tbody tr');

  gsap.from(rows, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.packages_table',
      start: 'top 80%'
    }
  });
};

// Row hover effect
const initRowHover = () => {
  const rows = document.querySelectorAll('.packages_table tbody tr');

  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
      gsap.to(row, {
        backgroundColor: 'rgba(227, 57, 97, 0.05)',
        duration: 0.2
      });
    });

    row.addEventListener('mouseleave', () => {
      gsap.to(row, {
        backgroundColor: 'transparent',
        duration: 0.2
      });
    });
  });
};
```

### Package Name Animation

```javascript
// Package name highlight animation
const animatePackageNames = () => {
  const packageNames = document.querySelectorAll('.packages_table th[scope="row"]');

  packageNames.forEach((name) => {
    gsap.from(name, {
      opacity: 0,
      x: -20,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
};

// Package name hover
const initPackageNameHover = () => {
  const names = document.querySelectorAll('.packages_table th[scope="row"]');

  names.forEach((name) => {
    name.addEventListener('mouseenter', () => {
      gsap.to(name, {
        color: '#e33961',
        scale: 1.02,
        duration: 0.2
      });
    });

    name.addEventListener('mouseleave', () => {
      gsap.to(name, {
        color: '',
        scale: 1,
        duration: 0.2
      });
    });
  });
};
```

### Counter Animation for Values

```javascript
// Animate numeric values with counting effect
const animateCounters = () => {
  const valueCells = document.querySelectorAll('.packages_table td');

  valueCells.forEach((cell) => {
    const value = parseInt(cell.textContent, 10);

    if (!isNaN(value)) {
      gsap.from(cell, {
        textContent: 0,
        duration: 1.5,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: cell,
          start: 'top 90%'
        }
      });
    }
  });
};
```

### Storage Progress Bar Animation

```javascript
// Storage usage progress bar
const animateStorageBar = () => {
  const storageCells = document.querySelectorAll('.packages_table td:nth-child(5)');

  storageCells.forEach((cell) => {
    const text = cell.textContent;
    const match = text.match(/(\d+)\s*MB\s*\/\s*(\d+)\s*MB/);

    if (match) {
      const used = parseInt(match[1], 10);
      const total = parseInt(match[2], 10);
      const percentage = (used / total) * 100;

      // Create progress bar element if not exists
      const progressBar = document.createElement('div');
      progressBar.className = 'storage-progress';
      progressBar.style.cssText = 'height: 4px; background: #e5e7eb; border-radius: 2px; margin-top: 5px; overflow: hidden;';
      cell.appendChild(progressBar);

      const progressFill = document.createElement('div');
      progressFill.className = 'storage-fill';
      progressFill.style.cssText = 'height: 100%; background: #e33961; border-radius: 2px;';
      progressBar.appendChild(progressFill);

      gsap.from(progressFill, {
        width: '0%',
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
      });

      gsap.to(progressFill, {
        width: `${percentage}%`,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
      });
    }
  });
};
```

### Expiry Date Animation

```javascript
// Expiry date entrance
const animateExpiryDates = () => {
  const dates = document.querySelectorAll('.packages_table td:last-child');

  gsap.from(dates, {
    opacity: 0,
    x: 20,
    stagger: 0.1,
    duration: 0.4,
    ease: 'power2.out',
    delay: 0.3
  });
};
```

### Dashboard Title Animation

```javascript
// Title area entrance
const animateTitleArea = () => {
  const titleArea = document.querySelector('.dashboard_title_area');

  gsap.from(titleArea, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: 'power2.out'
  });

  gsap.from('.dashboard_title_area h2', {
    opacity: 0,
    y: 20,
    duration: 0.4,
    delay: 0.2,
    ease: 'power2.out'
  });
};
```

### Widget Container Animation

```javascript
// Widget entrance animation
const animateWidget = () => {
  const widget = document.querySelector('.ps-widget');

  if (widget) {
    gsap.from(widget, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: widget,
        start: 'top 80%'
      }
    });
  }
};
```

### Complete Package Animation Init

```javascript
// Initialize all animations
const initPackageAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animateTitleArea();
  animateWidget();
  animatePackageRows();
  initRowHover();
  animatePackageNames();
  initPackageNameHover();
  animateCounters();
  animateStorageBar();
  animateExpiryDates();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initPackageAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/usePackageAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const usePackageAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Table row stagger
    gsap.from('.packages_table tbody tr', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.packages_table',
        start: 'top 80%'
      }
    });

    // Counter animation for numeric values
    const valueCells = document.querySelectorAll('.packages_table td');
    valueCells.forEach((cell) => {
      const value = parseInt(cell.textContent, 10);
      if (!isNaN(value)) {
        gsap.from(cell, {
          textContent: 0,
          duration: 1.5,
          ease: 'power1.out',
          snap: { textContent: 1 }
        });
      }
    });

    // Row hover effects
    const rows = document.querySelectorAll('.packages_table tbody tr');
    rows.forEach((row) => {
      row.addEventListener('mouseenter', () => {
        gsap.to(row, { backgroundColor: 'rgba(227, 57, 97, 0.05)', duration: 0.2 });
      });
      row.addEventListener('mouseleave', () => {
        gsap.to(row, { backgroundColor: 'transparent', duration: 0.2 });
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

- This template uses AOS (Animate On Scroll) for animations, not GSAP
- Table displays package details in columns
- Multiple rows shown (possibly for history or multiple subscriptions)
- Storage shows used/total format
- Expiry date shows when subscription ends
- No pagination shown (limited data)
- Upgrade options likely available elsewhere
- Feature comparison helps users understand plan differences
- Renewal tracking helps manage subscription timing
