# New Property (Add Property)

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-add-property
- **Page Title:** Add New Property || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-add-property`

---

## Page Overview

The New Property page is a comprehensive multi-step form for adding new property listings to the Homez Real Estate platform. It provides a structured wizard-style interface with five distinct sections: Description, Media, Location, Detail, and Amenities. This page enables property owners, agents, and managers to create detailed listings with all necessary information for potential buyers or renters.

### Primary Purpose

1. Collect property description and basic information
2. Enable media uploads (photos and videos)
3. Capture property location details
4. Record detailed property specifications
5. Select property amenities and features

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
│  ├─Dashboard  │  │         "Add New Property"                    │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │              TAB NAVIGATION                   │  │
│  ├─Add Prop ● │  │  [1.Description][2.Media][3.Location]        │  │
│  ├─My Props   │  │  [4.Detail][5.Amenities]                     │  │
│  ├─Favorites  │  └───────────────────────────────────────────────┘  │
│  ├─Saved Srch │                                                     │
│  └─Reviews    │  ┌───────────────────────────────────────────────┐  │
│               │  │                                              │  │
│  MANAGE       │  │              FORM CONTENT AREA               │  │
│  ACCOUNT      │  │                                              │  │
│  ├─My Package │  │  (Content varies by active tab)              │  │
│  ├─My Profile │  │                                              │  │
│  └─Logout     │  │                                              │  │
│               │  │                                              │  │
│               │  └───────────────────────────────────────────────┘  │
│               │                                                     │
├───────────────┴─────────────────────────────────────────────────────┤
│                          FOOTER                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Form Tab Navigation

The page uses a 5-step tab navigation system:

```
┌────────────────────────────────────────────────────────────────────┐
│  [1. Description] [2. Media] [3. Location] [4. Detail] [5. Amenities] │
│     ─────────                                                         │
└────────────────────────────────────────────────────────────────────┘
```

---

## Data Content Structure

### Dashboard Title Area

```html
<div class="dashboard_title_area">
  <h2>Add New Property</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Tab 1: Description

**Tab ID:** `nav-item1`

**Form Fields:**

#### Basic Information

| Field Label       | Input Type    | CSS Class       | Placeholder     | Required |
|-------------------|---------------|-----------------|-----------------|----------|
| Title             | text          | form-control    | "Your Name"     | Yes      |
| Description       | textarea      | textarea        | "There are many variations..." | Yes |

#### Category Selection

| Field Label       | Input Type    | Default Value   | Component       |
|-------------------|---------------|-----------------|-----------------|
| Select Category   | multi-select  | "Bungalow"      | React Select    |
| Listed in         | multi-select  | "Active"        | React Select    |
| Property Status   | multi-select  | "Pending"       | React Select    |

#### Pricing Information

| Field Label       | Input Type    | CSS Class       | Placeholder     | Column Width |
|-------------------|---------------|-----------------|-----------------|--------------|
| Price in $        | text          | form-control    | "Your Name"     | col-sm-6 col-xl-4 |
| Yearly Tax Rate   | text          | form-control    | "Your Name"     | col-sm-6 col-xl-4 |
| After Price Label | text          | form-control    | "Your Name"     | col-sm-6 col-xl-4 |

**HTML Structure:**

```html
<div class="tab-pane fade show active" id="nav-item1">
  <div class="ps-widget bgc-white bdrs12 p30">
    <h4 class="title fz17 mb30">Property Description</h4>
    <form class="form-style1">
      <div class="row">
        <div class="col-sm-12">
          <div class="mb20">
            <label class="heading-color ff-heading fw600 mb10">Title</label>
            <input type="text" class="form-control" placeholder="Your Name">
          </div>
        </div>
        <div class="col-sm-12">
          <div class="mb20">
            <label class="heading-color ff-heading fw600 mb10">Description</label>
            <textarea cols="30" rows="5" placeholder="There are many variations of passages."></textarea>
          </div>
        </div>
        <!-- Category selects -->
        <div class="col-sm-6 col-xl-4">
          <label>Select Category</label>
          <div class="select-custom pl-0 css-b62m3t-container">
            <!-- React Select component -->
          </div>
        </div>
        <!-- Additional fields... -->
      </div>
    </form>
  </div>
</div>
```

**Select Options (Category):**
- Bungalow (default selected)
- Apartment
- House
- Villa
- Office
- Townhome
- Loft

**Select Options (Listed in):**
- Active (default selected)
- Pending
- Expired

**Select Options (Property Status):**
- Pending (default selected)
- For Sale
- For Rent

### Tab 2: Media

**Tab ID:** `nav-item2`

**Section Title:** "Upload photos of your property"

#### Photo Upload Area

```html
<div class="upload-img position-relative overflow-hidden bdrs12 text-center mb30 px-2">
  <div class="icon mb30">
    <span class="flaticon-upload"></span>
  </div>
  <h4 class="title fz17 mb10">Upload/Drag photos of your property</h4>
  <p class="text mb25">Photos must be JPEG or PNG format and at least 2048x768</p>
  <label class="ud-btn btn-white">
    Browse Files
    <input id="fileInput" type="file" multiple class="ud-btn btn-white" style="display:none">
  </label>
</div>
```

**Upload Specifications:**
| Parameter        | Value                    |
|------------------|--------------------------|
| Accepted Formats | JPEG, PNG                |
| Min Resolution   | 2048x768 pixels          |
| Max Files        | Multiple allowed         |
| Upload Method    | Click or Drag & Drop     |

#### Video Options Section

**Section Title:** "Video Option"

| Field Label      | Input Type    | Default Value | Component       |
|------------------|---------------|---------------|-----------------|
| Video from       | multi-select  | "Facebook"    | React Select    |
| Embed Video id   | text          | -             | form-control    |

**Video Platform Options:**
- Facebook (default)
- YouTube
- Vimeo
- Custom URL

### Tab 3: Location

**Tab ID:** `nav-item3`

#### Location Form Fields

| Field Label           | Input Type    | Column Width          |
|-----------------------|---------------|-----------------------|
| Address               | text          | col-sm-12             |
| Country               | select        | col-sm-6 col-xl-4     |
| State/County          | select        | col-sm-6 col-xl-4     |
| City                  | select        | col-sm-6 col-xl-4     |
| Zip/Post Code         | text          | col-sm-6 col-xl-4     |
| Neighborhood          | text          | col-sm-6 col-xl-4     |

#### Map Integration

```html
<div class="map-outer">
  <div class="map-canvas">
    <!-- Google Maps or similar integration -->
  </div>
</div>
```

**Map Features:**
- Interactive map for location selection
- Drag pin to adjust location
- Address autocomplete
- Coordinate display

### Tab 4: Detail

**Tab ID:** `nav-item4`

#### Property Details Fields

| Field Label           | Input Type    | Column Width          |
|-----------------------|---------------|-----------------------|
| Property ID           | text          | col-sm-6 col-xl-4     |
| Property Size (sqft)  | text          | col-sm-6 col-xl-4     |
| Bedrooms              | select/number | col-sm-6 col-xl-4     |
| Bathrooms             | select/number | col-sm-6 col-xl-4     |
| Garages               | select/number | col-sm-6 col-xl-4     |
| Garage Size           | text          | col-sm-6 col-xl-4     |
| Year Built            | text          | col-sm-6 col-xl-4     |
| Property Type         | select        | col-sm-6 col-xl-4     |

#### Additional Details

| Field Label           | Input Type    | Column Width          |
|-----------------------|---------------|-----------------------|
| Property Status       | select        | col-sm-6 col-xl-4     |
| Available from        | date          | col-sm-6 col-xl-4     |
| External link         | text          | col-sm-6 col-xl-4     |

### Tab 5: Amenities

**Tab ID:** `nav-item5`

#### Amenities Categories

**Interior Features:**
| Amenity              | Type     |
|----------------------|----------|
| Air Conditioning     | checkbox |
| Heating              | checkbox |
| Central Air          | checkbox |
| Ceiling Fans         | checkbox |
| Washer/Dryer         | checkbox |
| Dishwasher           | checkbox |
| Microwave            | checkbox |
| Refrigerator         | checkbox |
| Fireplace            | checkbox |

**Exterior Features:**
| Amenity              | Type     |
|----------------------|----------|
| Swimming Pool        | checkbox |
| Hot Tub/Spa          | checkbox |
| Barbeque             | checkbox |
| Outdoor Shower       | checkbox |
| Lawn                 | checkbox |
| Garden               | checkbox |
| Patio/Deck           | checkbox |
| Balcony              | checkbox |

**Community Features:**
| Amenity              | Type     |
|----------------------|----------|
| Gym/Fitness Center   | checkbox |
| Tennis Courts        | checkbox |
| Basketball Court     | checkbox |
| Clubhouse            | checkbox |
| Playground           | checkbox |
| Security System      | checkbox |
| WiFi                 | checkbox |

**Parking & Storage:**
| Amenity              | Type     |
|----------------------|----------|
| Attached Garage      | checkbox |
| Detached Garage      | checkbox |
| Covered Parking      | checkbox |
| Storage Unit         | checkbox |

---

## Component Breakdown

### 1. Tab Navigation Component

**CSS Classes:** `.nav-tabs`, `.nav-link`

**Props:**
```typescript
interface TabNavProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

interface TabItem {
  id: string;
  label: string;
  isComplete: boolean;
}
```

**Features:**
- Horizontal tab layout
- Active state indicator
- Step numbering
- Disabled state for incomplete steps

### 2. Form Field Components

#### Text Input Component

```typescript
interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
}
```

#### Textarea Component

```typescript
interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  required?: boolean;
}
```

#### Select Component (React Select)

```typescript
interface SelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  value: SelectOption | SelectOption[];
  onChange: (value: SelectOption) => void;
  isMulti?: boolean;
  required?: boolean;
}

interface SelectOption {
  value: string;
  label: string;
}
```

### 3. File Upload Component

**CSS Classes:** `.upload-img`, `.flaticon-upload`

**Props:**
```typescript
interface FileUploadProps {
  accept: string[];
  multiple: boolean;
  maxSize: number; // in MB
  minResolution?: { width: number; height: number };
  onUpload: (files: File[]) => void;
  onError: (error: string) => void;
}
```

**Features:**
- Drag and drop support
- Click to browse
- File type validation
- File size validation
- Preview thumbnails
- Remove uploaded files

### 4. Map Location Component

**Props:**
```typescript
interface MapLocationProps {
  address: string;
  coordinates: { lat: number; lng: number };
  onLocationChange: (location: LocationData) => void;
  zoom?: number;
}

interface LocationData {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  coordinates: { lat: number; lng: number };
}
```

### 5. Amenities Selector Component

**Props:**
```typescript
interface AmenitiesSelectorProps {
  categories: AmenityCategory[];
  selectedAmenities: string[];
  onChange: (amenities: string[]) => void;
}

interface AmenityCategory {
  name: string;
  amenities: Amenity[];
}

interface Amenity {
  id: string;
  name: string;
  icon?: string;
}
```

---

## Interactive Elements

### Tab Navigation

**Behavior:**
- Click tab to navigate between steps
- Visual indicator for active tab
- Optional: Prevent navigation if current step invalid
- Optional: Auto-save on tab change

### Form Submission

**Validation:**
- Required field validation
- Format validation (email, phone, etc.)
- Custom validation rules
- Error message display

**Submit Actions:**
- Save as Draft
- Publish Listing
- Preview Listing

### File Upload

**Drag & Drop:**
- Drag files over upload area
- Visual feedback during drag
- Drop to initiate upload

**Progress Indicator:**
- Upload progress bar
- Success/error states
- Retry failed uploads

### Map Interaction

**Features:**
- Click to place marker
- Drag marker to adjust position
- Search address autocomplete
- Geolocation button

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Layout Behavior                              |
|------------|------------|---------------------------------------------|
| xs         | < 576px    | Single column, stacked fields               |
| sm         | ≥ 576px    | 2-column form fields                        |
| md         | ≥ 768px    | Improved spacing                             |
| lg         | ≥ 992px    | Sidebar visible                              |
| xl         | ≥ 1200px   | 3-column form rows                           |
| xxl        | ≥ 1400px   | Optimized spacing                             |

### Mobile Behavior

1. **Tab Navigation:**
   - Scrollable horizontal tabs
   - Step indicator dots
   - Swipe between steps

2. **Form Fields:**
   - Full-width inputs
   - Stacked layout
   - Large touch targets

3. **File Upload:**
   - Touch-friendly upload area
   - Camera access for photos

---

## CSS Classes Reference

### Layout Classes

```css
.property-page              /* Page-specific styling */
.navtab-style1              /* Tab navigation container */
.nav-tabs                   /* Bootstrap tab list */
.nav-link                   /* Tab button */
.tab-pane                   /* Tab content panel */
.tab-content                /* Tab content wrapper */
```

### Form Classes

```css
.form-style1                /* Form styling container */
.form-control               /* Input field styling */
.mb20                       /* Margin bottom 20px */
.mb30                       /* Margin bottom 30px */
.heading-color              /* Label color */
.ff-heading                 /* Heading font family */
.fw600                      /* Font weight 600 */
```

### Widget Classes

```css
.ps-widget                  /* Panel widget */
.bgc-white                  /* White background */
.bdrs12                     /* Border radius 12px */
.default-box-shadow2        /* Box shadow */
.overflow-hidden            /* Hide overflow */
```

### Upload Classes

```css
.upload-img                 /* Upload area container */
.position-relative          /* Relative positioning */
.text-center                /* Center text */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get Property (for editing):**
   ```
   GET /api/properties/:id
   ```
   Returns: Property object with all fields

2. **Create Property:**
   ```
   POST /api/properties
   Body: PropertyFormData
   ```
   Returns: Created property with ID

3. **Update Property:**
   ```
   PUT /api/properties/:id
   Body: PropertyFormData
   ```
   Returns: Updated property

4. **Upload Media:**
   ```
   POST /api/upload
   Body: FormData with files
   ```
   Returns: Array of uploaded file URLs

5. **Get Categories:**
   ```
   GET /api/categories
   ```
   Returns: List of property categories

6. **Get Amenities:**
   ```
   GET /api/amenities
   ```
   Returns: List of available amenities

### Form Data Structure

```typescript
interface PropertyFormData {
  // Description
  title: string;
  description: string;
  category: string;
  listingType: string;
  status: string;
  price: number;
  yearlyTaxRate?: number;
  priceLabel?: string;

  // Media
  images: string[];
  videoPlatform?: string;
  videoId?: string;

  // Location
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  neighborhood?: string;
  coordinates: {
    lat: number;
    lng: number;
  };

  // Details
  propertyId?: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  garageSize?: number;
  yearBuilt: number;
  propertyType: string;
  availableFrom?: Date;
  externalLink?: string;

  // Amenities
  amenities: string[];
}
```

---

## State Management

### Form State

```typescript
interface PropertyFormState {
  currentStep: number;
  formData: PropertyFormData;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isDraft: boolean;
}
```

### Actions

- `nextStep()`
- `prevStep()`
- `goToStep(stepId)`
- `updateField(field, value)`
- `validateStep(stepId)`
- `saveDraft()`
- `submitForm()`

---

## Validation Rules

### Required Fields

| Field           | Validation                                    |
|-----------------|-----------------------------------------------|
| Title           | Required, min 5 characters                    |
| Description     | Required, min 50 characters                   |
| Category        | Required, must be valid category              |
| Price           | Required, must be positive number             |
| Address         | Required                                      |
| City            | Required                                      |
| State           | Required                                      |
| Country         | Required                                      |

### Optional Validations

| Field           | Validation                                    |
|-----------------|-----------------------------------------------|
| Images          | Min 1 image, max 20 images                    |
| Video ID        | Valid video URL/ID format                     |
| Year Built      | Must be valid year (1800-current)             |
| Size            | Must be positive number                       |
| Zip Code        | Valid postal code format                      |

---

## Accessibility Considerations

1. **Form Labels:**
   - All inputs have associated labels
   - Required fields marked with asterisk

2. **Error Handling:**
   - Error messages linked to fields
   - Aria-invalid for error states

3. **Keyboard Navigation:**
   - Tab through form fields
   - Enter to submit
   - Arrow keys for selects

4. **Screen Reader:**
   - Announce step changes
   - Read validation errors
   - Describe upload progress

---

## Performance Considerations

1. **Image Upload:**
   - Compress images before upload
   - Show preview thumbnails
   - Lazy load previews

2. **Form Handling:**
   - Debounce auto-save
   - Validate on blur
   - Progressive loading for selects

3. **Map Integration:**
   - Lazy load map component
   - Cache geocoding results

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-add-property/page.tsx` - Page component
- `/components/dashboard/AddPropertyForm.tsx` - Main form component
- `/components/dashboard/PropertyTabs/DescriptionTab.tsx` - Step 1
- `/components/dashboard/PropertyTabs/MediaTab.tsx` - Step 2
- `/components/dashboard/PropertyTabs/LocationTab.tsx` - Step 3
- `/components/dashboard/PropertyTabs/DetailTab.tsx` - Step 4
- `/components/dashboard/PropertyTabs/AmenitiesTab.tsx` - Step 5
- `/components/common/FileUpload.tsx` - Upload component
- `/components/common/MapPicker.tsx` - Map location picker

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0 for form state
- zod: ^3.22.0 for validation
- Multi-step wizard pattern with step validation

### Property Management Features
- Auto-save draft functionality
- Image upload with drag & drop
- Map integration for location selection
- Amenities selector with categories

### Key Dependencies
- react-dropzone: ^14.2.0 for file uploads
- react-select: ^5.8.0 for multi-select
- @googlemaps/js-api-loader: ^1.16.0 for maps
- react-image-crop: ^11.0.0 for image editing

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
| `fade-up` | Fade in from bottom | Form sections |
| `fade-in` | Fade in without movement | Tab content |
| `zoom-in` | Scale from 0.6 to 1 | Upload area |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Tab Navigation | all | 300ms | ease |
| Form Inputs | border-color, box-shadow | 200ms | ease |
| Upload Area | border-color, background | 200ms | ease |
| Buttons | background-color | 200ms | ease |

---

## Theme Variables

### CSS Custom Properties:
```css
/* Font Families */
--title-font-family: "__Poppins_85583a", "__Poppins_Fallback_85583a";
--body-font-family: "__DM_Sans_e47c01", "__DM_Sans_Fallback_e47c01";
```

### Form Styling:
```css
.form-style1        /* Form container styling */
.form-control       /* Input field styling */
.bdrs12             /* 12px border radius */
.default-box-shadow2  /* Box shadow for cards */
```

### Upload Area:
```css
.upload-img         /* Upload container */
.flaticon-upload    /* Upload icon */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Multi-step wizard with tabs
- 3-column form grid on desktop

### Tab Styling:
```css
.navtab-style1      /* Tab navigation container */
.nav-tabs           /* Bootstrap tabs */
.nav-link           /* Tab button */
.tab-pane           /* Tab content panel */
.tab-content        /* Tab content wrapper */
```

---

## NPM Libraries Required

### Form Handling:
```json
{
  "react-hook-form": "^7.48.0",
  "zod": "^3.22.0"
}
```

### Multi-select:
```json
{
  "react-select": "^5.8.0"
}
```

### File Upload:
```json
{
  "react-dropzone": "^14.2.0",
  "react-image-crop": "^11.0.0"
}
```

### Map Integration:
```json
{
  "@googlemaps/js-api-loader": "^1.16.0"
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

### Tab Navigation Animation

```javascript
// Tab switch animation with timeline
const animateTabSwitch = (fromTab, toTab) => {
  const tl = gsap.timeline();

  // Fade out current tab
  tl.to(fromTab, {
    opacity: 0,
    x: -20,
    duration: 0.25,
    ease: 'power2.in'
  })

  // Fade in new tab
  .from(toTab, {
    opacity: 0,
    x: 20,
    duration: 0.25,
    ease: 'power2.out'
  }, '-=0.1');

  return tl;
};

// Tab button active state animation
const animateTabButton = (activeTab) => {
  const tabs = document.querySelectorAll('.nav-tabs .nav-link');

  tabs.forEach((tab) => {
    if (tab === activeTab) {
      gsap.to(tab, {
        color: '#e33961',
        borderBottomWidth: '2px',
        duration: 0.3
      });
    } else {
      gsap.to(tab, {
        color: '',
        borderBottomWidth: '0px',
        duration: 0.3
      });
    }
  });
};
```

### Form Field Animations

```javascript
// Stagger entrance for form fields
const animateFormFields = () => {
  const formFields = document.querySelectorAll('.form-style1 .mb20');

  gsap.from(formFields, {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.4,
    ease: 'power2.out',
    delay: 0.2
  });
};

// Input focus animation
const initInputAnimations = () => {
  const inputs = document.querySelectorAll('.form-control, textarea');

  inputs.forEach((input) => {
    const parent = input.closest('.mb20');
    const label = parent?.querySelector('label');

    input.addEventListener('focus', () => {
      gsap.to(input, {
        borderColor: '#e33961',
        boxShadow: '0 0 0 3px rgba(227, 57, 97, 0.1)',
        duration: 0.2
      });

      if (label) {
        gsap.to(label, {
          color: '#e33961',
          duration: 0.2
        });
      }
    });

    input.addEventListener('blur', () => {
      gsap.to(input, {
        borderColor: '',
        boxShadow: 'none',
        duration: 0.2
      });

      if (label) {
        gsap.to(label, {
          color: '',
          duration: 0.2
        });
      }
    });
  });
};
```

### Select Dropdown Animation

```javascript
// React Select custom animation
const animateSelectDropdown = () => {
  const selectContainers = document.querySelectorAll('.select-custom');

  selectContainers.forEach((container) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const menu = container.querySelector('[class*="menu"]');
        if (menu && mutation.attributeName === 'class') {
          gsap.from(menu, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            ease: 'power2.out'
          });
        }
      });
    });

    observer.observe(container, { attributes: true, subtree: true });
  });
};

// Select option hover animation
const initSelectOptionHover = () => {
  const options = document.querySelectorAll('[class*="option"]');

  options.forEach((option) => {
    option.addEventListener('mouseenter', () => {
      gsap.to(option, {
        backgroundColor: 'rgba(227, 57, 97, 0.1)',
        x: 3,
        duration: 0.15
      });
    });

    option.addEventListener('mouseleave', () => {
      gsap.to(option, {
        backgroundColor: '',
        x: 0,
        duration: 0.15
      });
    });
  });
};
```

### File Upload Animation

```javascript
// Upload area hover animation
const initUploadAreaAnimation = () => {
  const uploadArea = document.querySelector('.upload-img');

  uploadArea?.addEventListener('dragover', () => {
    gsap.to(uploadArea, {
      borderColor: '#e33961',
      backgroundColor: 'rgba(227, 57, 97, 0.05)',
      scale: 1.02,
      duration: 0.2
    });
  });

  uploadArea?.addEventListener('dragleave', () => {
    gsap.to(uploadArea, {
      borderColor: '',
      backgroundColor: '',
      scale: 1,
      duration: 0.2
    });
  });

  uploadArea?.addEventListener('drop', () => {
    gsap.to(uploadArea, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  });
};

// Upload icon animation
const animateUploadIcon = () => {
  const uploadIcon = document.querySelector('.upload-img .flaticon-upload');

  gsap.to(uploadIcon, {
    y: -5,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut'
  });
};

// File preview entrance animation
const animateFilePreviews = (previewElement) => {
  gsap.from(previewElement, {
    opacity: 0,
    scale: 0.8,
    duration: 0.3,
    ease: 'back.out(1.7)'
  });
};
```

### Map Location Animation

```javascript
// Map container entrance
const animateMapContainer = () => {
  const mapContainer = document.querySelector('.map-outer');

  if (mapContainer) {
    gsap.from(mapContainer, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: mapContainer,
        start: 'top 80%'
      }
    });
  }
};

// Map marker drop animation
const animateMapMarker = (marker) => {
  gsap.from(marker, {
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: 'bounce.out'
  });
};
```

### Amenities Checkbox Animation

```javascript
// Checkbox selection animation
const initAmenityAnimations = () => {
  const checkboxes = document.querySelectorAll('.amenities input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const label = checkbox.closest('label') || checkbox.nextElementSibling;

      if (checkbox.checked) {
        gsap.to(label, {
          backgroundColor: 'rgba(227, 57, 97, 0.1)',
          borderColor: '#e33961',
          duration: 0.2
        });

        // Checkmark pop animation
        gsap.from(checkbox, {
          scale: 0,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      } else {
        gsap.to(label, {
          backgroundColor: '',
          borderColor: '',
          duration: 0.2
        });
      }
    });
  });
};
```

### Submit Button Animation

```javascript
// Submit button hover and loading states
const initSubmitButtonAnimations = () => {
  const submitBtns = document.querySelectorAll('.ud-btn.btn-dark');

  submitBtns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.02,
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        duration: 0.25
      });

      gsap.to(btn.querySelector('i'), {
        x: 5,
        duration: 0.25
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: '',
        duration: 0.25
      });

      gsap.to(btn.querySelector('i'), {
        x: 0,
        duration: 0.25
      });
    });
  });
};

// Loading state animation
const showLoadingState = (btn) => {
  gsap.to(btn, {
    opacity: 0.7,
    duration: 0.2
  });

  // Add spinner
  const spinner = document.createElement('span');
  spinner.className = 'spinner';
  btn.appendChild(spinner);

  gsap.from(spinner, {
    opacity: 0,
    scale: 0,
    duration: 0.2
  });
};
```

### Step Progress Indicator

```javascript
// Step progress animation
const animateStepProgress = (currentStep, totalSteps) => {
  const progress = (currentStep / totalSteps) * 100;

  gsap.to('.step-progress-bar', {
    width: `${progress}%`,
    duration: 0.5,
    ease: 'power2.out'
  });

  // Step number animation
  const stepNumbers = document.querySelectorAll('.step-number');
  stepNumbers.forEach((num, index) => {
    if (index < currentStep) {
      gsap.to(num, {
        backgroundColor: '#e33961',
        color: '#ffffff',
        duration: 0.3
      });
    } else {
      gsap.to(num, {
        backgroundColor: '',
        color: '',
        duration: 0.3
      });
    }
  });
};
```

### Complete Add Property Animation Init

```javascript
// Initialize all animations
const initAddPropertyAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animateFormFields();
  initInputAnimations();
  animateSelectDropdown();
  initUploadAreaAnimation();
  animateMapContainer();
  initAmenityAnimations();
  initSubmitButtonAnimations();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initAddPropertyAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useAddPropertyAnimations.ts
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useAddPropertyAnimations = (currentTab: string) => {
  const prevTabRef = useRef<string>(currentTab);

  useEffect(() => {
    // Tab transition animation
    if (prevTabRef.current !== currentTab) {
      gsap.from('.tab-pane.active', {
        opacity: 0,
        x: 20,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    prevTabRef.current = currentTab;
  }, [currentTab]);

  useEffect(() => {
    // Form fields stagger
    gsap.from('.form-style1 .mb20', {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.4,
      ease: 'power2.out',
      delay: 0.2
    });

    // Input focus handlers
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        gsap.to(input, { borderColor: '#e33961', duration: 0.2 });
      });
      input.addEventListener('blur', () => {
        gsap.to(input, { borderColor: '', duration: 0.2 });
      });
    });
  }, []);
};
```

---

## Notes

- This template uses AOS (Animate On Scroll) for animations, not GSAP
- Form uses multi-step wizard pattern with 5 tabs
- Auto-save draft functionality available
- Preview mode before publishing
- Edit existing properties using same form
- Category and amenity lists fetched from API
- React Select used for multi-select fields
- File upload supports drag & drop
- Map integration for location selection
