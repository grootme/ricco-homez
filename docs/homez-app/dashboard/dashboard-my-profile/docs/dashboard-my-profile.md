# My Profile

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-my-profile
- **Page Title:** My Profile || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-my-profile`

---

## Page Overview

The My Profile page provides a comprehensive form for users to manage their account information. It includes profile photo upload, personal details, social media links, and password management. This page allows users to maintain their account information and customize their public profile.

### Primary Purpose

1. Display and edit user profile information
2. Upload and manage profile photo
3. Update personal and contact details
4. Manage social media links
5. Change account password

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
│  ├─Dashboard  │  │         "My Profile"                          │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │         PROFILE PHOTO SECTION                 │  │
│  ├─Add Prop   │  │  ┌───────────┐                                │  │
│  ├─My Props   │  │  │  Photo    │  [Upload Button]               │  │
│  ├─Favorites  │  │  │  Preview  │  Photo format info             │  │
│  ├─Saved Srch │  │  └───────────┘                                │  │
│  └─Reviews    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  ACCOUNT      │  │         PERSONAL INFORMATION FORM             │  │
│  ├─My Package │  │  Username │ Email │ Phone                     │  │
│  ├─My Profile ●│ │  First Name │ Last Name │ Position            │  │
│  └─Logout     │  │  Language │ Company │ Tax Number              │  │
│               │  │  Address (full width)                          │  │
│               │  │  About Me (textarea)                           │  │
│               │  │                    [Update Profile]            │  │
│               │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│               │  ┌───────────────────────────────────────────────┐  │
│               │  │         SOCIAL MEDIA FORM                     │  │
│               │  │  Facebook │ Pinterest │ Instagram             │  │
│               │  │  Twitter │ LinkedIn │ Website                │  │
│               │  │                    [Update Social]             │  │
│               │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│               │  ┌───────────────────────────────────────────────┐  │
│               │  │         CHANGE PASSWORD FORM                  │  │
│               │  │  Old Password                                  │  │
│               │  │  New Password │ Confirm Password               │  │
│               │  │                    [Change Password]           │  │
│               │  └───────────────────────────────────────────────┘  │
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
  <h2>My Profile</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Profile Photo Section

**Container:** `.profile-box`

```html
<div class="profile-box position-relative d-md-flex align-items-end mb50">
  <div class="profile-img new position-relative overflow-hidden bdrs12 mb20-sm">
    <img alt="profile avatar" class="w-100 cover h-100" src="/images/listings/profile-1.jpg">
    <button class="tag-del" style="border:none" data-tooltip-id="profile_del">
      <span class="fas fa-trash-can"></span>
    </button>
  </div>
  <div class="profile-content ml30 ml0-sm">
    <label class="upload-label pointer">
      <input type="file" accept="image/jpeg,image/png" style="display:none">
      <div class="ud-btn btn-white2 mb30">
        Upload Profile Files
        <i class="fal fa-arrow-right-long"></i>
      </div>
    </label>
    <p class="text">Photos must be JPEG or PNG format and at least 2048x768</p>
  </div>
</div>
```

**Photo Upload Specifications:**
| Parameter        | Value                    |
|------------------|--------------------------|
| Accepted Formats | JPEG, PNG                |
| Min Resolution   | 2048x768 pixels          |
| Image Size       | 240x220 display          |

### Personal Information Form

**Container:** `.form-style1`

#### Form Fields

| Field Label   | Input Type | CSS Class     | Column Width       | Required |
|---------------|------------|---------------|--------------------|----------|
| Username      | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| Email         | email      | form-control  | col-sm-6 col-xl-4  | Yes      |
| Phone         | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| First Name    | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| Last Name     | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| Position      | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| Language      | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| Company Name  | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| Tax Number    | text       | form-control  | col-sm-6 col-xl-4  | Yes      |
| Address       | text       | form-control  | col-xl-12          | Yes      |
| About me      | textarea   | textarea      | col-md-12          | No       |

**HTML Structure:**
```html
<form class="form-style1">
  <div class="row">
    <div class="col-sm-6 col-xl-4">
      <div class="mb20">
        <label class="heading-color ff-heading fw600 mb10">Username</label>
        <input type="text" class="form-control" placeholder="Your Name" required="">
      </div>
    </div>
    <!-- Additional fields... -->
    <div class="col-xl-12">
      <div class="mb20">
        <label class="heading-color ff-heading fw600 mb10">Address</label>
        <input type="text" class="form-control" placeholder="Your Name" required="">
      </div>
    </div>
    <div class="col-md-12">
      <div class="mb10">
        <label class="heading-color ff-heading fw600 mb10">About me</label>
        <textarea cols="30" rows="4" placeholder="There are many variations of passages."></textarea>
      </div>
    </div>
    <div class="col-md-12">
      <div class="text-end">
        <button type="submit" class="ud-btn btn-dark">
          Update Profile
          <i class="fal fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  </div>
</form>
```

### Social Media Form

**Container:** `.ps-widget`

**Section Title:** "Social Media"

#### Social Media Fields

| Field Label           | Input Type | Column Width       | Required |
|-----------------------|------------|--------------------|----------|
| Facebook Url          | text       | col-sm-6 col-xl-4  | Yes      |
| Pinterest Url         | text       | col-sm-6 col-xl-4  | Yes      |
| Instagram Url         | text       | col-sm-6 col-xl-4  | Yes      |
| Twitter Url           | text       | col-sm-6 col-xl-4  | Yes      |
| Linkedin Url          | text       | col-sm-6 col-xl-4  | Yes      |
| Website Url (without http) | text  | col-sm-6 col-xl-4  | No       |

**HTML Structure:**
```html
<div class="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30">
  <h4 class="title fz17 mb30">Social Media</h4>
  <form class="form-style1">
    <div class="row">
      <div class="col-sm-6 col-xl-4">
        <div class="mb20">
          <label class="heading-color ff-heading fw600 mb10">Facebook Url</label>
          <input type="text" class="form-control" placeholder="Your Name" required="">
        </div>
      </div>
      <!-- Additional social fields... -->
      <div class="col-md-12">
        <div class="text-end">
          <button type="submit" class="ud-btn btn-dark">
            Update Social
            <i class="fal fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
```

### Change Password Form

**Container:** `.ps-widget`

**Section Title:** "Change password"

#### Password Fields

| Field Label           | Input Type | Column Width       | Required |
|-----------------------|------------|--------------------|----------|
| Old Password          | password   | col-sm-6 col-xl-4  | Yes      |
| New Password          | password   | col-sm-6 col-xl-4  | Yes      |
| Confirm New Password  | password   | col-sm-6 col-xl-4  | Yes      |

**HTML Structure:**
```html
<div class="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30">
  <h4 class="title fz17 mb30">Change password</h4>
  <form class="form-style1">
    <div class="row">
      <div class="col-sm-6 col-xl-4">
        <div class="mb20">
          <label class="heading-color ff-heading fw600 mb10">Old Password</label>
          <input type="text" class="form-control" placeholder="Your Name" required="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-xl-4">
        <div class="mb20">
          <label class="heading-color ff-heading fw600 mb10">New Password</label>
          <input type="text" class="form-control" placeholder="Your Name" required="">
        </div>
      </div>
      <div class="col-sm-6 col-xl-4">
        <div class="mb20">
          <label class="heading-color ff-heading fw600 mb10">Confirm New Password</label>
          <input type="text" class="form-control" placeholder="Your Name" required="">
        </div>
      </div>
      <div class="col-md-12">
        <div class="text-end">
          <button type="submit" class="ud-btn btn-dark">
            Change Password
            <i class="fal fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
```

---

## Component Breakdown

### 1. Profile Photo Upload Component

**CSS Classes:** `.profile-box`, `.profile-img`, `.profile-content`

**Props:**
```typescript
interface ProfilePhotoProps {
  currentPhotoUrl: string;
  onUpload: (file: File) => void;
  onDelete: () => void;
  acceptFormats: string[];
  minResolution: { width: number; height: number };
}
```

**Features:**
- Photo preview
- Upload button
- Delete button
- Format information

### 2. Personal Information Form Component

**CSS Classes:** `.form-style1`

**Props:**
```typescript
interface PersonalInfoFormProps {
  initialValues: PersonalInfo;
  onSubmit: (values: PersonalInfo) => void;
  isSubmitting: boolean;
}

interface PersonalInfo {
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  position: string;
  language: string;
  companyName: string;
  taxNumber: string;
  address: string;
  aboutMe: string;
}
```

### 3. Social Media Form Component

**Props:**
```typescript
interface SocialMediaFormProps {
  initialValues: SocialMedia;
  onSubmit: (values: SocialMedia) => void;
  isSubmitting: boolean;
}

interface SocialMedia {
  facebook: string;
  pinterest: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  website: string;
}
```

### 4. Change Password Form Component

**Props:**
```typescript
interface ChangePasswordFormProps {
  onSubmit: (values: PasswordChange) => void;
  isSubmitting: boolean;
}

interface PasswordChange {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
```

---

## Interactive Elements

### Profile Photo Upload

**Trigger:** Click "Upload Profile Files" button

**Behavior:**
- Open file picker
- Validate file format
- Validate image dimensions
- Show preview
- Upload to server

### Delete Profile Photo

**Trigger:** Click trash icon on photo

**Behavior:**
- Show confirmation
- Remove photo
- Reset to default avatar

### Update Profile

**Trigger:** Click "Update Profile" button

**Behavior:**
- Validate all fields
- Submit form data
- Show success/error notification
- Update UI with new data

### Update Social

**Trigger:** Click "Update Social" button

**Behavior:**
- Validate URLs
- Submit social links
- Show success notification

### Change Password

**Trigger:** Click "Change Password" button

**Behavior:**
- Validate password match
- Check password strength
- Submit to server
- Show success notification
- Clear form

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Layout Behavior                              |
|------------|------------|---------------------------------------------|
| xs         | < 576px    | Single column, stacked fields               |
| sm         | ≥ 576px    | 2-column form fields                        |
| md         | ≥ 768px    | Profile photo and upload side-by-side       |
| lg         | ≥ 992px    | Sidebar visible                              |
| xl         | ≥ 1200px   | 3-column form rows                           |

### Mobile Behavior

1. **Profile Photo:**
   - Full width preview
   - Upload button stacked below

2. **Form Fields:**
   - Full-width inputs
   - Stacked layout

3. **Submit Buttons:**
   - Full width on small screens

---

## CSS Classes Reference

### Profile Section Classes

```css
.profile-box               /* Profile container */
.profile-img               /* Image container */
.profile-content           /* Content beside image */
.new                       /* New/upload state */
.upload-label              /* Upload button label */
.tag-del                   /* Delete button */
```

### Form Classes

```css
.form-style1               /* Form styling container */
.form-control              /* Input field styling */
.mb20                      /* Margin bottom 20px */
.mb10                      /* Margin bottom 10px */
.heading-color             /* Label color */
.ff-heading                /* Heading font family */
.fw600                     /* Font weight 600 */
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

1. **Get User Profile:**
   ```
   GET /api/user/profile
   ```
   Returns: User profile data

   ```json
   {
     "id": "user-123",
     "username": "ali_tufan",
     "email": "ali@example.com",
     "phone": "+1234567890",
     "firstName": "Ali",
     "lastName": "Tufan",
     "position": "Real Estate Agent",
     "language": "English",
     "companyName": "Homez Realty",
     "taxNumber": "TAX123456",
     "address": "123 Main Street, New York",
     "aboutMe": "Experienced real estate agent...",
     "avatar": "/images/listings/profile-1.jpg",
     "socialMedia": {
       "facebook": "https://facebook.com/ali",
       "pinterest": "",
       "instagram": "https://instagram.com/ali",
       "twitter": "https://twitter.com/ali",
       "linkedin": "https://linkedin.com/in/ali",
       "website": "ali-realty.com"
     }
   }
   ```

2. **Update Profile:**
   ```
   PUT /api/user/profile
   Body: PersonalInfo
   ```
   Returns: Updated profile

3. **Upload Avatar:**
   ```
   POST /api/user/avatar
   Body: FormData with file
   ```
   Returns: New avatar URL

4. **Delete Avatar:**
   ```
   DELETE /api/user/avatar
   ```
   Returns: Success confirmation

5. **Update Social Media:**
   ```
   PUT /api/user/social-media
   Body: SocialMedia
   ```
   Returns: Updated social links

6. **Change Password:**
   ```
   PUT /api/user/password
   Body: PasswordChange
   ```
   Returns: Success confirmation

---

## Validation Rules

### Personal Information

| Field       | Validation                                    |
|-------------|-----------------------------------------------|
| Username    | Required, min 3 characters, alphanumeric      |
| Email       | Required, valid email format                  |
| Phone       | Required, valid phone format                  |
| First Name  | Required, min 2 characters                    |
| Last Name   | Required, min 2 characters                    |
| Address     | Required                                      |
| About Me    | Max 500 characters                            |

### Social Media URLs

| Field       | Validation                                    |
|-------------|-----------------------------------------------|
| All URLs    | Valid URL format (optional)                   |
| Website     | Without http:// prefix                        |

### Password Change

| Field               | Validation                                    |
|---------------------|-----------------------------------------------|
| Old Password        | Required                                      |
| New Password        | Required, min 8 characters, complexity rules  |
| Confirm Password    | Must match new password                       |

---

## State Management

### Page State

```typescript
interface ProfileState {
  profile: UserProfile | null;
  isLoading: boolean;
  isSubmitting: boolean;
  error: string | null;
  activeSection: 'personal' | 'social' | 'password';
}

interface UserProfile {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  position: string;
  language: string;
  companyName: string;
  taxNumber: string;
  address: string;
  aboutMe: string;
  avatar: string;
  socialMedia: SocialMedia;
}
```

---

## Accessibility Considerations

1. **Form Labels:**
   - All inputs have associated labels
   - Required fields marked

2. **Error Handling:**
   - Error messages linked to fields
   - Aria-invalid for error states

3. **Keyboard Navigation:**
   - Tab through all fields
   - Enter to submit

4. **File Upload:**
   - Accessible file input
   - Alternative upload method

---

## Security Considerations

1. **Password Fields:**
   - Should use type="password"
   - Mask input characters

2. **Sensitive Data:**
   - Tax number should be masked
   - Phone number validation

3. **CSRF Protection:**
   - Forms should include CSRF tokens

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-my-profile/page.tsx` - Page component
- `/components/dashboard/ProfilePhoto.tsx` - Photo upload component
- `/components/dashboard/PersonalInfoForm.tsx` - Personal info form
- `/components/dashboard/SocialMediaForm.tsx` - Social links form
- `/components/dashboard/ChangePasswordForm.tsx` - Password form
- `/components/common/FileUpload.tsx` - Shared upload component

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0 for form state management
- zod: ^3.22.0 for validation schemas
- Multiple form sections with individual submit

### Profile Features
- Avatar upload with preview
- Personal information management
- Social media links
- Password change with validation
- Form auto-save on field change

### Key Dependencies
- react-dropzone: ^14.2.0 for avatar upload
- react-hook-form: ^7.48.0 for forms
- zod: ^3.22.0 for validation
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
| `fade-up` | Fade in from bottom | Form sections |
| `fade-in` | Fade in without movement | Profile photo section |
| `zoom-in` | Scale from 0.6 to 1 | Avatar upload preview |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Form Inputs | border-color, box-shadow | 200ms | ease |
| Upload Button | background-color | 200ms | ease |
| Profile Photo | opacity | 300ms | ease-out |
| Submit Buttons | background-color | 200ms | ease |

---

## Theme Variables

### Profile Section Classes:
```css
.profile-box           /* Profile container */
.profile-img           /* Image container */
.profile-content       /* Content beside image */
.new                    /* New/upload state */
.upload-label          /* Upload button label */
.tag-del               /* Delete button */
```

### Form Classes:
```css
.form-style1           /* Form styling container */
.form-control          /* Input field styling */
.mb20                  /* Margin bottom 20px */
.mb10                  /* Margin bottom 10px */
.heading-color         /* Label color */
.ff-heading            /* Heading font family */
.fw600                 /* Font weight 600 */
```

### Widget Classes:
```css
.ps-widget             /* Panel widget */
.bgc-white             /* White background */
.bdrs12                /* Border radius 12px */
.default-box-shadow2   /* Box shadow */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- 3-column form grid on desktop (xl)
- 2-column on tablet (sm)
- Single column on mobile

### Responsive Grid:
```css
.col-sm-6 col-xl-4     /* 3 columns on desktop */
.col-xl-12             /* Full width for address */
.col-md-12             /* Full width for textarea */
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

### File Upload:
```json
{
  "react-dropzone": "^14.2.0"
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

### Profile Photo Animation

```javascript
// Profile photo entrance animation
const animateProfilePhoto = () => {
  const profileImg = document.querySelector('.profile-img.new');
  const uploadBtn = document.querySelector('.profile-content .ud-btn');

  gsap.from(profileImg, {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    ease: 'back.out(1.7)'
  });

  gsap.from(uploadBtn, {
    opacity: 0,
    x: -20,
    duration: 0.4,
    delay: 0.3,
    ease: 'power2.out'
  });
};

// Delete button hover on profile photo
const initProfilePhotoHover = () => {
  const profileContainer = document.querySelector('.profile-box');
  const deleteBtn = profileContainer?.querySelector('.tag-del');

  profileContainer?.addEventListener('mouseenter', () => {
    gsap.to(deleteBtn, {
      opacity: 1,
      scale: 1,
      duration: 0.2
    });
  });

  profileContainer?.addEventListener('mouseleave', () => {
    gsap.to(deleteBtn, {
      opacity: 0.7,
      scale: 0.9,
      duration: 0.2
    });
  });
};
```

### Form Sections Animation

```javascript
// Staggered entrance for form sections
const animateFormSections = () => {
  const sections = document.querySelectorAll('.ps-widget');

  gsap.from(sections, {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.ps-widget',
      start: 'top 80%'
    }
  });
};

// Section title animation
const animateSectionTitles = () => {
  const titles = document.querySelectorAll('.ps-widget .title.fz17');

  gsap.from(titles, {
    opacity: 0,
    x: -20,
    stagger: 0.1,
    duration: 0.4,
    ease: 'power2.out',
    delay: 0.2
  });
};
```

### Form Field Animations

```javascript
// Stagger entrance for form fields
const animateFormFields = () => {
  const fields = document.querySelectorAll('.form-style1 .mb20');

  gsap.from(fields, {
    opacity: 0,
    y: 15,
    stagger: 0.03,
    duration: 0.3,
    ease: 'power2.out',
    delay: 0.4
  });
};

// Input focus animation
const initInputFocusAnimations = () => {
  const inputs = document.querySelectorAll('.form-control, textarea');

  inputs.forEach((input) => {
    const label = input.closest('.mb20')?.querySelector('label');

    input.addEventListener('focus', () => {
      gsap.to(input, {
        borderColor: '#e33961',
        boxShadow: '0 0 0 3px rgba(227, 57, 97, 0.1)',
        duration: 0.2
      });

      if (label) {
        gsap.to(label, {
          color: '#e33961',
          scale: 1.02,
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
          scale: 1,
          duration: 0.2
        });
      }
    });
  });
};
```

### Submit Button Animations

```javascript
// Submit button hover and click animations
const initSubmitButtonAnimations = () => {
  const submitBtns = document.querySelectorAll('.ud-btn.btn-dark');

  submitBtns.forEach((btn) => {
    const icon = btn.querySelector('i');

    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.02,
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        duration: 0.25
      });

      if (icon) {
        gsap.to(icon, {
          x: 5,
          duration: 0.25
        });
      }
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: '',
        duration: 0.25
      });

      if (icon) {
        gsap.to(icon, {
          x: 0,
          duration: 0.25
        });
      }
    });

    btn.addEventListener('click', () => {
      gsap.to(btn, {
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    });
  });
};
```

### Social Media Icons Animation

```javascript
// Social media form field entrance
const animateSocialFields = () => {
  const socialFields = document.querySelectorAll('.ps-widget:has(h4:contains("Social")) .mb20');

  gsap.from(socialFields, {
    opacity: 0,
    x: 20,
    stagger: 0.05,
    duration: 0.3,
    ease: 'power2.out'
  });
};
```

### Password Section Animation

```javascript
// Password fields entrance
const animatePasswordSection = () => {
  const passwordSection = document.querySelector('.ps-widget:has(h4:contains("password"))');

  if (passwordSection) {
    gsap.from(passwordSection, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: passwordSection,
        start: 'top 80%'
      }
    });
  }
};

// Password strength indicator animation
const animatePasswordStrength = (strength) => {
  const indicator = document.querySelector('.password-strength-bar');

  gsap.to(indicator, {
    width: `${strength}%`,
    backgroundColor: strength > 75 ? '#22c55e' : strength > 50 ? '#eab308' : '#ef4444',
    duration: 0.3
  });
};
```

### Success/Error Feedback Animation

```javascript
// Success notification animation
const showSuccessAnimation = (element) => {
  gsap.from(element, {
    opacity: 0,
    y: -20,
    scale: 0.9,
    duration: 0.4,
    ease: 'back.out(1.7)'
  });

  gsap.to(element, {
    boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.3)',
    duration: 0.3
  });
};

// Error shake animation
const showErrorAnimation = (field) => {
  gsap.to(field, {
    x: -5,
    duration: 0.05,
    yoyo: true,
    repeat: 5,
    ease: 'power1.inOut',
    onComplete: () => {
      gsap.to(field, { x: 0, duration: 0.1 });
    }
  });

  gsap.to(field, {
    borderColor: '#ef4444',
    duration: 0.2
  });
};
```

### Complete My Profile Animation Init

```javascript
// Initialize all animations
const initMyProfileAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animateProfilePhoto();
  initProfilePhotoHover();
  animateFormSections();
  animateSectionTitles();
  animateFormFields();
  initInputFocusAnimations();
  initSubmitButtonAnimations();
  animatePasswordSection();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initMyProfileAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useProfileAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useProfileAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Profile photo entrance
    gsap.from('.profile-img.new', {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });

    // Form sections stagger
    gsap.from('.ps-widget', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.ps-widget',
        start: 'top 80%'
      }
    });

    // Form fields stagger
    gsap.from('.form-style1 .mb20', {
      opacity: 0,
      y: 15,
      stagger: 0.03,
      duration: 0.3,
      ease: 'power2.out',
      delay: 0.4
    });

    // Input focus animations
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        gsap.to(input, { borderColor: '#e33961', duration: 0.2 });
      });
      input.addEventListener('blur', () => {
        gsap.to(input, { borderColor: '', duration: 0.2 });
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
- Form uses 3-column layout on desktop (xl)
- Profile photo section has delete and upload options
- Social media URLs should be entered without http prefix
- Password fields are in separate section
- Each section has its own submit button
- Success notifications after each update
- Auto-save functionality on field change (optional)
- Profile photo must be JPEG or PNG format
- Minimum resolution for profile photo: 2048x768
