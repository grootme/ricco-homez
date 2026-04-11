# Register Page - Documentation

## 1. Identificación

- **Nombre de la Página:** Register
- **URL:** `https://homez-appdir.vercel.app/register`
- **Título de Página:** `Register || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Authentication Page

---

## 2. Descripción General

La página Register permite a nuevos usuarios crear una cuenta en la plataforma. Incluye formulario de registro completo con selección de tipo de cuenta, opciones de registro social y términos y condiciones.

---

## 3. Estructura de la Página

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                                                                       │    │
│  │   ┌────────────────────────────┐  ┌────────────────────────────┐    │    │
│  │   │                            │  │                            │    │    │
│  │   │     LEFT PANEL             │  │     REGISTER FORM          │    │    │
│  │   │     (Branding/Image)       │  │                            │    │    │
│  │   │                            │  │   Create an Account        │    │    │
│  │   │   "Join Homez Today"       │  │                            │    │    │
│  │   │                            │  │   Account Type Select      │    │    │
│  │   │   [Hero Image]             │  │   ○ User  ○ Agent  ○ Agency│    │    │
│  │   │                            │  │                            │    │    │
│  │   │   Features:                │  │   First Name Input         │    │    │
│  │   │   ✓ List Properties        │  │   Last Name Input          │    │    │
│  │   │   ✓ Save Favorites         │  │   Email Input              │    │    │
│  │   │   ✓ Contact Agents         │  │   Phone Input              │    │    │
│  │   │                            │  │   Password Input           │    │    │
│  │   │                            │  │   Confirm Password Input   │    │    │
│  │   │                            │  │   Terms Checkbox           │    │    │
│  │   │                            │  │   [Create Account Button]  │    │    │
│  │   │                            │  │                            │    │    │
│  │   │                            │  │   ─────── OR ───────       │    │    │
│  │   │                            │  │                            │    │    │
│  │   │                            │  │   [Google Button]          │    │    │
│  │   │                            │  │   [Facebook Button]        │    │    │
│  │   │                            │  │   [Apple Button]           │    │    │
│  │   │                            │  │                            │    │    │
│  │   │                            │  │   Already have an account? │    │    │
│  │   │                            │  │   [Sign In]                │    │    │
│  │   │                            │  │                            │    │    │
│  │   └────────────────────────────┘  └────────────────────────────┘    │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Register Form Data Structure

```typescript
interface RegisterFormData {
  accountType: 'user' | 'agent' | 'agency';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  newsletter: boolean;
}

interface RegisterValidation {
  firstName: ValidationRule;
  lastName: ValidationRule;
  email: ValidationRule;
  phone: ValidationRule;
  password: ValidationRule;
  confirmPassword: ValidationRule;
  acceptTerms: ValidationRule;
}
```

### 4.2 Form Fields

| Campo | Tipo | Requerido | Placeholder | Validación |
|-------|------|-----------|-------------|------------|
| Account Type | radio | Sí | - | user/agent/agency |
| First Name | text | Sí | "First Name" | Min 2 caracteres |
| Last Name | text | Sí | "Last Name" | Min 2 caracteres |
| Email | email | Sí | "Email Address" | Formato email válido |
| Phone | tel | Sí | "Phone Number" | Formato teléfono |
| Password | password | Sí | "Password" | Min 8 caracteres, mayús, minús, número |
| Confirm Password | password | Sí | "Confirm Password" | Debe coincidir |
| Accept Terms | checkbox | Sí | "I agree to Terms & Privacy Policy" | Boolean |
| Newsletter | checkbox | No | "Subscribe to newsletter" | Boolean |

### 4.3 Account Types

```typescript
interface AccountType {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

const accountTypes: AccountType[] = [
  {
    id: 'user',
    name: 'User',
    description: 'Browse and save properties',
    icon: 'flaticon-user',
    features: ['Browse listings', 'Save favorites', 'Contact agents', 'Get alerts']
  },
  {
    id: 'agent',
    name: 'Agent',
    description: 'List and manage properties',
    icon: 'flaticon-agent',
    features: ['All User features', 'List properties', 'Analytics dashboard', 'Lead management']
  },
  {
    id: 'agency',
    name: 'Agency',
    description: 'Manage team and listings',
    icon: 'flaticon-building',
    features: ['All Agent features', 'Team management', 'Agency profile', 'Priority support']
  }
];
```

---

## 5. Componentes UI

### 5.1 Register Form

```typescript
interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => Promise<void>;
  onSocialRegister: (provider: string) => Promise<void>;
  isSubmitting: boolean;
  error: string | null;
}
```

**CSS Classes:**
```css
.register-page { /* Page container */ }
.register-left-panel { /* Left branding panel */ }
.register-right-panel { /* Right form panel */ }
.register-form { /* Form container */ }
.account-type-selector { /* Radio group */ }
.account-type-option { /* Individual option */ }
.account-type-selected { /* Selected state */ }
.form-row { /* Two-column row */ }
.password-strength { /* Password strength indicator */ }
.terms-checkbox { /* Terms checkbox */ }
```

### 5.2 Password Strength Indicator

```typescript
interface PasswordStrengthProps {
  password: string;
}

interface PasswordStrengthResult {
  score: number; // 0-4
  label: string; // Weak, Fair, Good, Strong
  color: string;
  suggestions: string[];
}
```

---

## 6. API Endpoints

### 6.1 Register

```
Endpoint: /api/auth/register
Method: POST
Request Body:
{
  "accountType": "user" | "agent" | "agency",
  "firstName": string,
  "lastName": string,
  "email": string,
  "phone": string,
  "password": string,
  "acceptTerms": boolean,
  "newsletter": boolean
}

Response (Success):
{
  "success": true,
  "message": "Account created successfully. Please verify your email.",
  "user": {
    "id": string,
    "email": string,
    "name": string
  },
  "requiresVerification": true
}

Response (Error):
{
  "success": false,
  "error": "Email already exists" | "Invalid data" | "Password requirements not met"
}
```

### 6.2 Verify Email

```
Endpoint: /api/auth/verify-email
Method: POST
Request Body:
{
  "token": string
}

Response:
{
  "success": true,
  "message": "Email verified successfully",
  "redirectUrl": "/dashboard-home"
}
```

### 6.3 Resend Verification

```
Endpoint: /api/auth/resend-verification
Method: POST
Request Body:
{
  "email": string
}

Response:
{
  "success": true,
  "message": "Verification email sent"
}
```

---

## 7. Estructuras TypeScript

```typescript
interface RegisterPageState {
  formData: RegisterFormData;
  errors: Partial<Record<keyof RegisterFormData, string>>;
  isSubmitting: boolean;
  submitError: string | null;
  passwordStrength: PasswordStrengthResult;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

interface ValidationRule {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
}
```

---

## 8. Validaciones de Formulario

### 8.1 Validation Rules

```typescript
const registerValidation: RegisterValidation = {
  firstName: {
    required: true,
    minLength: 2,
    message: 'First name must be at least 2 characters'
  },
  lastName: {
    required: true,
    minLength: 2,
    message: 'Last name must be at least 2 characters'
  },
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Please enter a valid email address'
  },
  phone: {
    required: true,
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    message: 'Please enter a valid phone number'
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    message: 'Password must be at least 8 characters with uppercase, lowercase, and number'
  },
  confirmPassword: {
    required: true,
    custom: (value, formData) => value === formData.password,
    message: 'Passwords do not match'
  },
  acceptTerms: {
    required: true,
    custom: (value) => value === true,
    message: 'You must accept the terms and conditions'
  }
};
```

---

## 9. Password Strength Rules

| Score | Label | Requirements |
|-------|-------|--------------|
| 0 | Very Weak | Empty or < 4 characters |
| 1 | Weak | 4+ characters |
| 2 | Fair | 6+ characters with lowercase |
| 3 | Good | 8+ characters with upper and lower |
| 4 | Strong | 8+ characters with upper, lower, number, and special |

---

## 10. Elementos Interactivos

### 10.1 Account Type Selection

| Action | Effect |
|--------|--------|
| Click option | Highlight selection, update form if needed |

### 10.2 Password Field

| Action | Effect |
|--------|--------|
| Type | Update strength indicator |
| Toggle visibility | Show/hide password |

### 10.3 Form Submission

| State | UI |
|-------|-----|
| Submitting | Button loading, form disabled |
| Success | Show verification message or redirect |
| Error | Show error message |

---

## 11. Post-Registration Flow

```
1. Submit form
2. Create account (unverified)
3. Send verification email
4. Show success message
5. User clicks email link
6. Verify account
7. Redirect to dashboard
```

---

## 12. Comportamiento Responsivo

| Breakpoint | Layout |
|------------|--------|
| Mobile | Single column, form only |
| Tablet | Two columns, left smaller |
| Desktop | Two columns, equal |

---

## Technical Implementation

### Authentication
- Social login (Google, Facebook, Apple)
- Form validation with zod: ^3.22.0
- JWT token management with email verification
- Protected routes with middleware

### State Management
- zustand: ^4.4.0 for global auth state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls with interceptors

### Form Handling
- react-hook-form: ^7.48.0 for form state
- zod: ^3.22.0 for validation schemas
- Password strength indicator
- Account type selection

### Key Dependencies
- next-auth: ^4.24.0 for OAuth providers
- zxcvbn: ^4.4.2 for password strength
- react-hot-toast: ^2.4.0 for notifications
- bcryptjs: ^2.4.0 for password hashing (server)

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-left` | 1 | Left panel/branding |
| `fade-right` | 1 | Register form |
| `aos-delay="300"` | 2 | Staggered delays |

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

The Register page animations focus on form entrance effects, account type selection, and password strength feedback.

#### 1. Form Entrance Animation

Sequential reveal animation for registration form elements.

```javascript
import { gsap } from 'gsap';

// Register form entrance animation
const registerTl = gsap.timeline();

registerTl
  .from('.register-title', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  })
  .from('.account-type-selector', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.out'
  }, '-=0.3')
  .from('.form-group', {
    y: 30,
    opacity: 0,
    stagger: 0.08,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.password-strength', {
    x: -20,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.terms-checkbox', {
    y: 15,
    opacity: 0,
    duration: 0.3,
    ease: 'power3.out'
  }, '-=0.1')
  .from('.register-submit', {
    scale: 0.9,
    opacity: 0,
    duration: 0.4,
    ease: 'back.out(1.7)'
  }, '-=0.1')
  .from('.social-register-btn', {
    x: -20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2');
```

#### 2. Account Type Selection Animation

Interactive selection animation for account types.

```javascript
// Account type cards animation
gsap.from('.account-type-option', {
  y: 40,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power3.out',
  delay: 0.3
});

// Selection animation
document.querySelectorAll('.account-type-option').forEach(option => {
  option.addEventListener('click', () => {
    // Reset all options
    document.querySelectorAll('.account-type-option').forEach(opt => {
      gsap.to(opt, {
        borderColor: '#e0e0e0',
        backgroundColor: 'transparent',
        scale: 1,
        duration: 0.2
      });
      gsap.to(opt.querySelector('.option-radio'), {
        borderColor: '#ccc',
        backgroundColor: 'transparent',
        duration: 0.2
      });
    });
    
    // Highlight selected
    gsap.to(option, {
      borderColor: '#4A90D9',
      backgroundColor: 'rgba(74, 144, 217, 0.05)',
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
    gsap.to(option.querySelector('.option-radio'), {
      borderColor: '#4A90D9',
      backgroundColor: '#4A90D9',
      duration: 0.2
    });
    
    // Checkmark pop
    gsap.from(option.querySelector('.option-radio .checkmark'), {
      scale: 0,
      duration: 0.3,
      ease: 'back.out(2)'
    });
  });
});
```

#### 3. Password Strength Indicator Animation

Animated strength meter based on password complexity.

```javascript
// Password strength animation
const updateStrengthIndicator = (score) => {
  const meter = document.querySelector('.strength-meter');
  const label = document.querySelector('.strength-label');
  
  const colors = ['#ff4444', '#ffaa00', '#ffff00', '#88cc00', '#00cc44'];
  const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const widths = ['20%', '40%', '60%', '80%', '100%'];
  
  gsap.to(meter, {
    width: widths[score],
    backgroundColor: colors[score],
    duration: 0.4,
    ease: 'power2.out'
  });
  
  gsap.to(label, {
    textContent: labels[score],
    color: colors[score],
    duration: 0.3
  });
};

// Animated strength bar on input
const passwordInput = document.querySelector('input[name="password"]');
passwordInput.addEventListener('input', (e) => {
  const strength = calculatePasswordStrength(e.target.value);
  updateStrengthIndicator(strength);
});

const calculatePasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
  return Math.min(score, 4);
};
```

#### 4. Password Match Validation Animation

Visual feedback for password confirmation.

```javascript
// Password match animation
const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');
const matchIndicator = document.querySelector('.password-match-indicator');

confirmPasswordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  
  if (confirmPassword === '') {
    gsap.to(matchIndicator, { opacity: 0, duration: 0.2 });
    return;
  }
  
  const isMatch = password === confirmPassword;
  
  gsap.to(matchIndicator, {
    opacity: 1,
    x: isMatch ? 0 : -5,
    duration: 0.2
  });
  
  gsap.to(confirmPasswordInput, {
    borderColor: isMatch ? '#00cc44' : '#ff4444',
    duration: 0.2
  });
  
  if (!isMatch) {
    gsap.to(confirmPasswordInput, {
      x: [-3, 3, -3, 3, 0],
      duration: 0.3
    });
  }
});
```

#### 5. Input Field Focus Animation

Interactive focus states with floating labels.

```javascript
// Floating label animation
document.querySelectorAll('.form-group').forEach(group => {
  const input = group.querySelector('.form-control');
  const label = group.querySelector('label');
  
  if (input && label) {
    input.addEventListener('focus', () => {
      gsap.to(label, {
        y: -24,
        scale: 0.85,
        color: '#4A90D9',
        duration: 0.2,
        ease: 'power2.out'
      });
      gsap.to(input, {
        borderColor: '#4A90D9',
        boxShadow: '0 0 0 3px rgba(74, 144, 217, 0.1)',
        duration: 0.2
      });
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        gsap.to(label, {
          y: 0,
          scale: 1,
          color: '#666',
          duration: 0.2
        });
      }
      gsap.to(input, {
        borderColor: '#e0e0e0',
        boxShadow: 'none',
        duration: 0.2
      });
    });
  }
});
```

#### 6. Terms Checkbox Animation

Animated acceptance of terms.

```javascript
// Terms checkbox animation
const termsCheckbox = document.querySelector('.terms-checkbox input');
const customCheckbox = document.querySelector('.custom-checkbox');

termsCheckbox.addEventListener('change', () => {
  if (termsCheckbox.checked) {
    gsap.to(customCheckbox, {
      backgroundColor: '#4A90D9',
      borderColor: '#4A90D9',
      duration: 0.2
    });
    gsap.from(customCheckbox.querySelector('.checkmark'), {
      scale: 0,
      rotation: -45,
      duration: 0.3,
      ease: 'back.out(2)'
    });
  } else {
    gsap.to(customCheckbox, {
      backgroundColor: 'transparent',
      borderColor: '#ccc',
      duration: 0.2
    });
  }
});
```

#### 7. Left Panel Feature List Animation

Animated list of features in the branding panel.

```javascript
// Feature list stagger
gsap.from('.register-left-panel .feature-item', {
  x: -30,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: 0.5,
  ease: 'power3.out'
});

// Check icons pop
gsap.from('.register-left-panel .feature-check', {
  scale: 0,
  stagger: 0.08,
  duration: 0.3,
  delay: 0.7,
  ease: 'back.out(2)'
});
```

### Complete Implementation Example

```javascript
// register-animations.js
import { gsap } from 'gsap';

export const initRegisterAnimations = () => {
  // Form entrance
  const tl = gsap.timeline();
  tl
    .from('.register-left-panel', { x: -100, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0)
    .from('.register-title', { y: -30, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.2)
    .from('.account-type-option', { y: 40, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .from('.form-group', { y: 30, opacity: 0, stagger: 0.08, duration: 0.4, ease: 'power3.out' }, '-=0.2')
    .from('.register-submit', { scale: 0.9, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.1');

  // Feature list
  gsap.from('.register-left-panel .feature-item', { x: -30, opacity: 0, stagger: 0.1, duration: 0.5, delay: 0.5, ease: 'power3.out' });

  // Initialize interactions
  initAccountTypeSelection();
  initPasswordStrength();
  initInputAnimations();
};

const initAccountTypeSelection = () => {
  document.querySelectorAll('.account-type-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.account-type-option').forEach(opt => {
        gsap.to(opt, { borderColor: '#e0e0e0', backgroundColor: 'transparent', scale: 1, duration: 0.2 });
      });
      gsap.to(option, {
        borderColor: '#4A90D9', backgroundColor: 'rgba(74, 144, 217, 0.05)', scale: 1.02, duration: 0.3, ease: 'power2.out'
      });
    });
  });
};

const initPasswordStrength = () => {
  const passwordInput = document.querySelector('input[name="password"]');
  const meter = document.querySelector('.strength-meter');
  
  const colors = ['#ff4444', '#ffaa00', '#ffff00', '#88cc00', '#00cc44'];
  const widths = ['20%', '40%', '60%', '80%', '100%'];
  
  passwordInput?.addEventListener('input', (e) => {
    const strength = calculatePasswordStrength(e.target.value);
    gsap.to(meter, { width: widths[strength], backgroundColor: colors[strength], duration: 0.4 });
  });
};

const calculatePasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
  return Math.min(score, 4);
};

const initInputAnimations = () => {
  document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, { borderColor: '#4A90D9', boxShadow: '0 0 0 3px rgba(74, 144, 217, 0.1)', duration: 0.2 });
    });
    input.addEventListener('blur', () => {
      gsap.to(input, { borderColor: '#e0e0e0', boxShadow: 'none', duration: 0.2 });
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
| `btn-thm` | Button | Primary theme button |
| `btn-white` | Button | White button |
| `btn-fb` | Button | Facebook button |
| `btn-apple` | Button | Apple button |

### Component Classes
```css
.register-page { /* Page container */ }
.register-left-panel { /* Left branding */ }
.register-right-panel { /* Right form */ }
.account-type-selector { /* Radio group */ }
.password-strength { /* Strength indicator */ }
.form-control { /* Input fields */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "react-hook-form": "^7.48.0",
  "zod": "^3.22.0",
  "next-auth": "^4.24.0",
  "zxcvbn": "^4.4.2",
  "react-hot-toast": "^2.4.0",
  "zustand": "^4.4.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Register Page*
*Última actualización: Abril 2025*
