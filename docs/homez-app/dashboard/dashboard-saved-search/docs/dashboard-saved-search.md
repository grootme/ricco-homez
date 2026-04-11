# Saved Search

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-saved-search
- **Page Title:** My Favourites || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-saved-search`

---

## Page Overview

The Saved Search page displays a list of property search criteria that users have saved for future reference. This feature allows users to quickly re-run searches without re-entering filter parameters, making it easier to monitor new listings that match their preferences.

### Primary Purpose

1. Display all saved search queries
2. Show search criteria and creation dates
3. Enable quick re-execution of searches
4. Allow editing and deletion of saved searches
5. Support pagination for large collections

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
│  ├─Dashboard  │  │         "My Favourites"                       │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │              SAVED SEARCH TABLE                │  │
│  ├─Add Prop   │  │  ┌─────────────────────────────────────────┐  │  │
│  ├─My Props   │  │  │ Title │ Date Created │ Actions          │  │  │
│  ├─Favorites  │  │  ├─────────────────────────────────────────┤  │  │
│  ├─Saved Srch ●│ │  │ Row 1                                    │  │  │
│  └─Reviews    │  │  │ Row 2                                    │  │  │
│               │  │  │ Row 3                                    │  │  │
│  MANAGE       │  │  │ ...                                      │  │  │
│  ACCOUNT      │  │  └─────────────────────────────────────────┘  │  │
│  ├─My Package │  │                                               │  │
│  ├─My Profile │  │              PAGINATION                        │  │
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
  <h2>My Favourites</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Saved Search Table

**Container:** `.packages_table` with `.table-responsive`

#### Table Header

```html
<thead class="t-head">
  <tr>
    <th scope="col">Listing title</th>
    <th scope="col">Date Created</th>
    <th scope="col">Action</th>
  </tr>
</thead>
```

#### Table Columns

| Column          | Content                        |
|-----------------|--------------------------------|
| Listing Title   | Search criteria name/title     |
| Date Created    | When search was saved          |
| Action          | View, Edit, Delete buttons     |

#### Table Row Structure

```html
<tr>
  <th scope="row">Equestrian Family Home</th>
  <td>December 31, 2022</td>
  <td>
    <div class="d-flex">
      <button class="icon" data-tooltip-id="full_screen-undefined">
        <span class="flaticon-fullscreen-1"></span>
      </button>
      <button class="icon" data-tooltip-id="edit-undefined">
        <span class="fas fa-pen fa"></span>
      </button>
      <button class="icon" data-tooltip-id="delete-undefined">
        <span class="flaticon-bin"></span>
      </button>
    </div>
  </td>
</tr>
```

### Sample Saved Searches Data

| # | Search Title                | Date Created    |
|---|----------------------------|-----------------|
| 1 | Equestrian Family Home     | December 31, 2022 |
| 2 | Luxury villa in Rego Park  | December 31, 2022 |
| 3 | Villa on Hollywood Boulevard | December 31, 2022 |
| 4 | Triple Story House for Rent | December 31, 2022 |
| 5 | Northwest Office Space      | December 31, 2022 |
| 6 | House on the beverly hills  | December 31, 2022 |
| 7 | Luxury villa called Elvado  | December 31, 2022 |
| 8 | House on the Northridge     | December 31, 2022 |
| 9 | Equestrian Family Home      | December 31, 2022 |
| 10| Luxury villa in Rego Park   | December 31, 2022 |
| 11| Villa on Hollywood Boulevard | December 31, 2022 |

### Action Buttons

| Icon Class              | Tooltip     | Function              |
|------------------------|-------------|-----------------------|
| flaticon-fullscreen-1  | View        | Execute saved search  |
| fas fa-pen             | Edit        | Edit search criteria  |
| flaticon-bin           | Delete      | Delete saved search   |

### Pagination

```html
<div class="mbp_pagination text-center">
  <ul class="page_navigation">
    <li class="page-item">
      <span class="page-link pointer"><span class="fas fa-angle-left"></span></span>
    </li>
    <li class="page-item"><span class="page-link pointer">1</span></li>
    <li class="page-item active"><span class="page-link pointer">2</span></li>
    <li class="page-item"><span class="page-link pointer">3</span></li>
    <li class="page-item"><span class="page-link pointer">4</span></li>
    <li class="page-item"><span class="page-link pointer">5</span></li>
    <li class="page-item pointer">
      <span class="page-link"><span class="fas fa-angle-right"></span></span>
    </li>
  </ul>
  <p class="mt10 pagination_page_count text-center">1-8 of 300+ property available</p>
</div>
```

---

## Component Breakdown

### 1. Saved Search Table Component

**CSS Classes:** `.packages_table`, `.table-style3`, `.at-savesearch`

**Props:**
```typescript
interface SavedSearchTableProps {
  searches: SavedSearch[];
  onView: (searchId: string) => void;
  onEdit: (searchId: string) => void;
  onDelete: (searchId: string) => void;
  isLoading?: boolean;
}
```

### 2. Action Buttons Component

**Props:**
```typescript
interface SearchActionsProps {
  searchId: string;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}
```

### 3. Saved Search Data Structure

```typescript
interface SavedSearch {
  id: string;
  title: string;
  createdAt: Date;
  criteria: SearchCriteria;
}

interface SearchCriteria {
  location?: string;
  propertyType?: string[];
  priceMin?: number;
  priceMax?: number;
  bedsMin?: number;
  bathsMin?: number;
  sqftMin?: number;
  sqftMax?: number;
  amenities?: string[];
  status?: 'For Sale' | 'For Rent';
}
```

---

## Interactive Elements

### Execute Search (View)

**Trigger:** Click fullscreen icon

**Behavior:**
- Navigate to listing page
- Apply saved search criteria
- Show filtered results

### Edit Search

**Trigger:** Click pen icon

**Behavior:**
- Open edit modal or navigate to edit page
- Pre-populate criteria form
- Save changes

### Delete Search

**Trigger:** Click bin icon

**Behavior:**
- Show confirmation modal
- Remove from list
- Show success notification

### Pagination

**Trigger:** Click page number or arrows

**Behavior:**
- Load next/previous page
- Update display

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
   - Compact padding

2. **Action Buttons:**
   - Remain accessible
   - Larger touch targets

---

## CSS Classes Reference

### Table Classes

```css
.packages_table            /* Table container */
.table-responsive          /* Responsive wrapper */
.table-style3              /* Table styling */
.at-savesearch             /* Saved search variant */
.t-head                    /* Table header */
.t-body                    /* Table body */
```

### Action Classes

```css
.icon                      /* Icon button */
.d-flex                    /* Flex container */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get Saved Searches:**
   ```
   GET /api/user/saved-searches
   Query: ?page=1&limit=10
   ```
   Returns: Paginated list of saved searches

2. **Execute Saved Search:**
   ```
   GET /api/properties/search?savedSearchId=:id
   ```
   Returns: Filtered property results

3. **Update Saved Search:**
   ```
   PUT /api/user/saved-searches/:id
   Body: SearchCriteria
   ```
   Returns: Updated search

4. **Delete Saved Search:**
   ```
   DELETE /api/user/saved-searches/:id
   ```
   Returns: Success confirmation

---

## State Management

### Page State

```typescript
interface SavedSearchState {
  searches: SavedSearch[];
  isLoading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}
```

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-saved-search/page.tsx` - Page component
- `/components/dashboard/SavedSearchTable.tsx` - Table component
- `/components/common/Pagination.tsx` - Pagination component

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
| `fade-in` | Fade in without movement | Action buttons |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Table Rows | background-color | 200ms | ease |
| Action Buttons | color, opacity | 200ms | ease |
| Pagination | all | 300ms | ease |

---

## Theme Variables

### Table Styling:
```css
.packages_table      /* Table container */
.table-style3        /* Table styling */
.at-savesearch       /* Saved search variant */
.t-head              /* Table header */
.t-body              /* Table body */
```

### Action Classes:
```css
.icon                /* Icon button */
.d-flex              /* Flex container */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Responsive table with horizontal scroll
- Compact padding for mobile

---

## NPM Libraries Required

### Data Table:
```json
{
  "@tanstack/react-table": "^8.11.0"
}
```

### Date Formatting:
```json
{
  "date-fns": "^3.0.0"
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

### Table Row Animations

```javascript
// Staggered entrance for table rows
const animateTableRows = () => {
  const rows = document.querySelectorAll('.packages_table tbody tr');

  gsap.from(rows, {
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.packages_table',
      start: 'top 80%'
    }
  });
};

// Row hover effect
const initTableRowHover = () => {
  const rows = document.querySelectorAll('.packages_table tbody tr');

  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
      gsap.to(row, {
        backgroundColor: 'rgba(227, 57, 97, 0.05)',
        x: 5,
        duration: 0.2,
        ease: 'power1.out'
      });
    });

    row.addEventListener('mouseleave', () => {
      gsap.to(row, {
        backgroundColor: 'transparent',
        x: 0,
        duration: 0.2,
        ease: 'power1.out'
      });
    });
  });
};
```

### Action Buttons Animation

```javascript
// Action button hover animations
const initActionButtons = () => {
  const actionButtons = document.querySelectorAll('.packages_table .icon');

  actionButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.15,
        backgroundColor: '#e33961',
        color: '#ffffff',
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        backgroundColor: '',
        color: '',
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('click', () => {
      gsap.to(btn, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    });
  });
};

// Row delete animation
const animateRowDelete = (row) => {
  gsap.to(row, {
    opacity: 0,
    x: -50,
    height: 0,
    padding: 0,
    margin: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      row.remove();
    }
  });
};
```

### Search Title Animation

```javascript
// Search title hover effect
const initSearchTitleHover = () => {
  const titles = document.querySelectorAll('.packages_table th[scope="row"]');

  titles.forEach((title) => {
    title.addEventListener('mouseenter', () => {
      gsap.to(title, {
        color: '#e33961',
        x: 3,
        duration: 0.2
      });
    });

    title.addEventListener('mouseleave', () => {
      gsap.to(title, {
        color: '',
        x: 0,
        duration: 0.2
      });
    });
  });
};
```

### Date Column Animation

```javascript
// Date fade in
const animateDates = () => {
  const dates = document.querySelectorAll('.packages_table td:nth-child(2)');

  gsap.from(dates, {
    opacity: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: 'power2.out',
    delay: 0.2
  });
};
```

### Pagination Animation

```javascript
// Pagination entrance
const animatePagination = () => {
  const pagination = document.querySelector('.mbp_pagination');

  if (pagination) {
    gsap.from(pagination, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pagination,
        start: 'top 90%'
      }
    });
  }
};

// Page link hover animation
const initPaginationHover = () => {
  const pageLinks = document.querySelectorAll('.page_navigation .page-link');

  pageLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        scale: 1.05,
        backgroundColor: '#e33961',
        color: '#ffffff',
        duration: 0.2
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        scale: 1,
        backgroundColor: '',
        color: '',
        duration: 0.2
      });
    });
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
};
```

### Complete Saved Search Animation Init

```javascript
// Initialize all animations
const initSavedSearchAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animateTitleArea();
  animateTableRows();
  initTableRowHover();
  initActionButtons();
  initSearchTitleHover();
  animateDates();
  animatePagination();
  initPaginationHover();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initSavedSearchAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useSavedSearchAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useSavedSearchAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Table row stagger
    gsap.from('.packages_table tbody tr', {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.packages_table',
        start: 'top 80%'
      }
    });

    // Action button hover effects
    const buttons = document.querySelectorAll('.packages_table .icon');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.15, backgroundColor: '#e33961', duration: 0.2 });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, backgroundColor: '', duration: 0.2 });
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
- Table shows saved search name and creation date
- View action executes search with saved criteria
- Edit allows modifying search parameters
- Delete removes from saved searches list
- Pagination similar to other dashboard pages
- Search criteria stored for quick re-execution
- Useful for monitoring new listings matching preferences
- Email alerts can be configured for each saved search

---

## Search Criteria Details

### Stored Search Parameters

When a user saves a search, the following criteria may be stored:

| Parameter        | Type       | Description                        |
|------------------|------------|------------------------------------|
| location         | string     | City, neighborhood, or address     |
| propertyType     | string[]   | House, Apartment, Villa, etc.      |
| minPrice         | number     | Minimum price filter               |
| maxPrice         | number     | Maximum price filter               |
| minBeds          | number     | Minimum bedrooms                   |
| maxBeds          | number     | Maximum bedrooms                   |
| minBaths         | number     | Minimum bathrooms                  |
| maxBaths         | number     | Maximum bathrooms                  |
| minSqft          | number     | Minimum square footage             |
| maxSqft          | number     | Maximum square footage             |
| status           | string     | For Sale, For Rent                 |
| amenities        | string[]   | Required amenities list            |
| yearBuilt        | object     | Min/max year built range           |
| keywords         | string     | Search keywords                    |

### Search Criteria Display

**Compact View:**
```
Equestrian Family Home
Location: New York | Type: House | $500k-$1M | 3+ beds
Created: December 31, 2022
```

**Expanded View:**
```
Equestrian Family Home
━━━━━━━━━━━━━━━━━━━━━━
Location: New York City, NY
Property Type: House, Villa
Price Range: $500,000 - $1,000,000
Bedrooms: 3+
Bathrooms: 2+
Square Feet: 1,500 - 3,000
Status: For Sale
Amenities: Pool, Garage, AC
Created: December 31, 2022
```

---

## Create Saved Search

### Save Search Flow

1. **From Search Results:**
   - User performs property search
   - Clicks "Save Search" button
   - Enters name for saved search
   - Confirms save action

2. **From Dashboard:**
   - Navigate to Saved Search page
   - Click "Create New Search" button
   - Fill in search criteria form
   - Save with custom name

### Save Search Modal

```html
<div class="save-search-modal">
  <h4>Save Search</h4>
  <div class="form-group">
    <label>Search Name</label>
    <input type="text" placeholder="e.g., Downtown Apartments">
  </div>
  <div class="form-group">
    <label>Email Alerts</label>
    <select>
      <option>None</option>
      <option>Daily</option>
      <option>Weekly</option>
      <option>Instant</option>
    </select>
  </div>
  <div class="criteria-preview">
    <!-- Shows summary of search criteria -->
  </div>
  <button class="ud-btn btn-thm">Save Search</button>
</div>
```

---

## Edit Saved Search

### Edit Form Fields

| Field                | Input Type    | Description                    |
|----------------------|---------------|--------------------------------|
| Search Name          | text          | Custom name for the search     |
| Location             | text/select   | Location filter                |
| Property Type        | multi-select  | Types to include               |
| Price Range          | range inputs  | Min and max price              |
| Bedrooms             | select        | Minimum bedrooms               |
| Bathrooms            | select        | Minimum bathrooms              |
| Square Feet          | range inputs  | Size range                     |
| Property Status      | select        | For Sale/Rent                  |
| Amenities            | checkboxes    | Required features              |
| Alert Frequency      | select        | Email notification setting     |

### Edit Modal Behavior

1. Opens modal with current criteria pre-populated
2. User modifies fields as needed
3. Preview updates in real-time
4. Save updates stored criteria
5. Success notification shown

---

## Email Alert Settings

### Alert Frequency Options

| Frequency | Description                              |
|-----------|------------------------------------------|
| None      | No email notifications                   |
| Daily     | One email per day with new matches       |
| Weekly    | Weekly digest of new matching listings   |
| Instant   | Email immediately when new match appears |

### Alert Email Template

```
Subject: New listings matching "Equestrian Family Home"

Hi [User Name],

We found 3 new properties matching your saved search:

1. [Property Title] - $750,000
   3 bed, 2 bath | [Location]
   [View Property Link]

2. [Property Title] - $825,000
   4 bed, 3 bath | [Location]
   [View Property Link]

3. [Property Title] - $695,000
   3 bed, 2 bath | [Location]
   [View Property Link]

View all matching properties: [Link]

Manage your saved searches: [Link]
```

---

## Advanced Features

### Bulk Actions

| Action           | Description                              |
|------------------|------------------------------------------|
| Select All       | Select all saved searches                |
| Delete Selected  | Remove multiple searches at once         |
| Export           | Download search criteria as file         |

### Search Statistics

```html
<div class="search-stats">
  <h6>Search Performance</h6>
  <div class="stat-row">
    <span class="label">Total Matches</span>
    <span class="value">247</span>
  </div>
  <div class="stat-row">
    <span class="label">New This Week</span>
    <span class="value">12</span>
  </div>
  <div class="stat-row">
    <span class="label">Last Run</span>
    <span class="value">2 hours ago</span>
  </div>
</div>
```

---

## Accessibility Considerations

1. **Table Navigation:**
   - Proper table headers with scope
   - Row navigation via keyboard
   - Action buttons labeled

2. **Modal Dialogs:**
   - Focus trap when open
   - Escape to close
   - Announce to screen readers

3. **Action Confirmations:**
   - Clear confirmation messages
   - Undo option available
   - Status announcements

---

## Performance Considerations

1. **Lazy Loading:**
   - Load searches on demand
   - Defer criteria details

2. **Caching:**
   - Cache search results
   - Store criteria locally

3. **Debouncing:**
   - Debounce edit changes
   - Auto-save drafts

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-saved-search/page.tsx` - Page component
- `/components/dashboard/SavedSearchTable.tsx` - Table component
- `/components/dashboard/SaveSearchModal.tsx` - Save modal
- `/components/dashboard/EditSearchModal.tsx` - Edit modal
- `/components/common/Pagination.tsx` - Pagination component
- `/hooks/useSavedSearch.ts` - Custom hook for search management

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0
- zod: ^3.22.0 for validation

### Saved Search Features
- Save search criteria with custom names
- Email alert configuration (daily, weekly, instant)
- Execute saved searches
- Edit and delete functionality

### Key Dependencies
- @tanstack/react-table: ^8.11.0 for data tables
- react-hot-toast: ^2.4.0 for notifications
- date-fns: ^3.0.0 for date formatting
