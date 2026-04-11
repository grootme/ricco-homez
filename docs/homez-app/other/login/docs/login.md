# Login Page - Documentation

## 1. Identificación

- **Nombre de la Página:** Login
- **URL:** `https://homez-appdir.vercel.app/login`
- **Título de Página:** `Login || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Authentication Page

---

## 2. Descripción General

La página Login permite a los usuarios existentes autenticarse en la plataforma. Incluye formulario de login, opciones de login social, enlace a registro y recuperación de contraseña.

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
│  │   │     LEFT PANEL             │  │     LOGIN FORM             │    │    │
│  │   │     (Branding/Image)       │  │                            │    │    │
│  │   │                            │  │   Welcome Back!            │    │    │
│  │   │   "Find Your Dream Home"   │  │                            │    │    │
│  │   │                            │  │   Email Input              │    │    │
│  │   │   [Hero Image]             │  │   Password Input           │    │    │
│  │   │                            │  │   Remember Me Checkbox     │    │    │
│  │   │                            │  │   Forgot Password Link     │    │    │
│  │   │                            │  │   [Sign In Button]         │    │    │
│  │   │                            │  │                            │    │    │
│  │   │                            │  │   ─────── OR ───────       │    │    │
│  │   │                            │  │                            │    │    │
│  │   │                            │  │   [Google Button]          │    │    │
│  │   │                            │  │   [Facebook Button]        │    │    │
│  │   │                            │  │   [Apple Button]           │    │    │
│  │   │                            │  │                            │    │    │
│  │   │                            │  │   Don't have an account?   │    │    │
│  │   │                            │  │   [Create Account]         │    │    │
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

### 4.1 Login Form Data Structure

```typescript
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginValidation {
  email: {
    required: boolean;
    pattern: RegExp;
    message: string;
  };
  password: {
    required: boolean;
    minLength: number;
    message: string;
  };
}
```

### 4.2 Form Fields

| Campo | Tipo | Requerido | Placeholder | Validación |
|-------|------|-----------|-------------|------------|
| Email | email | Sí | "Enter Email" | Formato email válido |
| Password | password | Sí | "Enter Password" | Min 6 caracteres |
| Remember Me | checkbox | No | - | Boolean |

### 4.3 Social Login Providers

```typescript
interface SocialAuthProvider {
  id: string;
  name: string;
  icon: string;
  className: string;
}

const socialProviders: SocialAuthProvider[] = [
  { id: 'google', name: 'Google', icon: 'fab fa-google', className: 'btn-white' },
  { id: 'facebook', name: 'Facebook', icon: 'fab fa-facebook-f', className: 'btn-fb' },
  { id: 'apple', name: 'Apple', icon: 'fab fa-apple', className: 'btn-apple' },
];
```

---

## 5. Componentes UI

### 5.1 Login Form

```typescript
interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<void>;
  onForgotPassword: () => void;
  onSocialLogin: (provider: string) => Promise<void>;
  isSubmitting: boolean;
  error: string | null;
}
```

**CSS Classes:**
```css
.login-page { /* Page container */ }
.login-left-panel { /* Left branding panel */ }
.login-right-panel { /* Right form panel */ }
.login-form { /* Form container */ }
.login-title { /* Welcome heading */ }
.form-group { /* Input group */ }
.form-control { /* Input fields */ }
.login-remember { /* Remember me row */ }
.login-forgot { /* Forgot password link */ }
.login-submit { /* Submit button */ }
.login-divider { /* OR divider */ }
.social-login-btn { /* Social buttons */ }
.login-register-link { /* Register link */ }
```

### 5.2 Social Login Button

```typescript
interface SocialLoginButtonProps {
  provider: SocialAuthProvider;
  onClick: () => void;
  disabled: boolean;
}
```

---

## 6. API Endpoints

### 6.1 Login

```
Endpoint: /api/auth/login
Method: POST
Request Body:
{
  "email": string,
  "password": string,
  "rememberMe": boolean
}

Response (Success):
{
  "success": true,
  "user": {
    "id": string,
    "email": string,
    "name": string,
    "avatar": string,
    "role": string
  },
  "token": string,
  "refreshToken": string,
  "redirectUrl": string
}

Response (Error):
{
  "success": false,
  "error": "Invalid credentials" | "Account not found" | "Account locked"
}
```

### 6.2 Social Login

```
Endpoint: /api/auth/social/:provider
Method: GET
Redirects to: OAuth provider

Callback Endpoint: /api/auth/social/:provider/callback
Method: GET
Response: Redirect to dashboard with token
```

### 6.3 Refresh Token

```
Endpoint: /api/auth/refresh
Method: POST
Request Body:
{
  "refreshToken": string
}

Response:
{
  "token": string,
  "refreshToken": string
}
```

---

## 7. Estructuras TypeScript

```typescript
interface LoginPageState {
  formData: LoginFormData;
  errors: Partial<Record<keyof LoginFormData, string>>;
  isSubmitting: boolean;
  submitError: string | null;
  socialLoading: string | null; // provider id
}

interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  refreshToken?: string;
  redirectUrl?: string;
  error?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: 'user' | 'agent' | 'agency' | 'admin';
  createdAt: Date;
}
```

---

## 8. Validaciones de Formulario

### 8.1 Validation Rules

```typescript
const loginValidation: LoginValidation = {
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Please enter a valid email address'
  },
  password: {
    required: true,
    minLength: 6,
    message: 'Password must be at least 6 characters'
  }
};
```

### 8.2 Error Messages

| Error Type | Message |
|------------|---------|
| Invalid email | "Please enter a valid email address" |
| Empty password | "Password is required" |
| Wrong credentials | "Invalid email or password" |
| Account locked | "Your account has been locked. Please contact support." |
| Network error | "Unable to connect. Please try again." |

---

## 9. Elementos Interactivos

### 9.1 Form Actions

| Action | Handler |
|--------|---------|
| Submit | `onSubmit(formData)` |
| Forgot Password | `navigateTo('/forgot-password')` |
| Social Login | `onSocialLogin(provider)` |
| Register | `navigateTo('/register')` |

### 9.2 Form States

| State | UI |
|-------|-----|
| Default | Normal form |
| Focused | Active field highlight |
| Error | Error message below field |
| Submitting | Button loading, form disabled |
| Success | Redirect to dashboard |

---

## 10. Comportamiento Responsivo

| Breakpoint | Layout |
|------------|--------|
| Mobile | Single column, form only |
| Tablet | Two columns, left panel smaller |
| Desktop | Two columns, equal width |

---

## 11. Seguridad

- Password fields enmascarados
- Rate limiting en endpoint de login
- Tokens JWT con expiración
- HTTPS obligatorio
- CSRF protection
- Remember Me: Token de larga duración
- Password visible toggle

---

## 12. Redirects After Login

| User Role | Redirect URL |
|-----------|--------------|
| User | /dashboard-home |
| Agent | /dashboard-home |
| Agency | /dashboard-home |
| Admin | /admin/dashboard |
| Pending redirect | Saved URL from session |

---

## Technical Implementation

### Authentication
- Social login (Google, Facebook, Apple)
- Form validation with zod: ^3.22.0
- JWT token management with refresh tokens
- Protected routes with middleware

### State Management
- zustand: ^4.4.0 for global auth state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls with interceptors

### Form Handling
- react-hook-form: ^7.48.0 for form state
- zod: ^3.22.0 for validation schemas
- Real-time validation feedback

### Key Dependencies
- next-auth: ^4.24.0 for OAuth providers
- jwt-decode: ^4.0.0 for token handling
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
| `fade-right` | 1 | Login form |
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

The Login page animations focus on form entrance effects and interactive feedback for better user experience.

#### 1. Form Entrance Animation

Sequential reveal animation for login form elements.

```javascript
import { gsap } from 'gsap';

// Login form entrance animation
const loginTl = gsap.timeline();

loginTl
  .from('.login-title', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  })
  .from('.form-group', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power3.out'
  }, '-=0.3')
  .from('.login-remember-row', {
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.login-submit', {
    scale: 0.9,
    opacity: 0,
    duration: 0.4,
    ease: 'back.out(1.7)'
  }, '-=0.2')
  .from('.login-divider', {
    scaleX: 0,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out'
  }, '-=0.1')
  .from('.social-login-btn', {
    x: -20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.login-register-link', {
    y: 15,
    opacity: 0,
    duration: 0.3,
    ease: 'power3.out'
  }, '-=0.1');
```

#### 2. Left Panel Animation

Branding panel entrance with parallax-like effect.

```javascript
// Left panel animation
gsap.from('.login-left-panel', {
  x: -100,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
});

// Hero image subtle zoom
gsap.from('.login-left-panel .hero-image', {
  scale: 1.1,
  opacity: 0,
  duration: 1,
  ease: 'power2.out'
});

// Brand tagline animation
gsap.from('.login-left-panel .tagline', {
  y: 40,
  opacity: 0,
  duration: 0.6,
  delay: 0.3,
  ease: 'power3.out'
});
```

#### 3. Input Field Focus Animation

Interactive focus states for form inputs.

```javascript
// Input focus animations
document.querySelectorAll('.form-control').forEach(input => {
  const wrapper = input.closest('.form-group');
  const label = wrapper.querySelector('label');
  const icon = wrapper.querySelector('.input-icon');
  
  input.addEventListener('focus', () => {
    gsap.to(wrapper, {
      scale: 1.02,
      duration: 0.2,
      ease: 'power2.out'
    });
    
    gsap.to(input, {
      borderColor: '#4A90D9',
      boxShadow: '0 0 0 3px rgba(74, 144, 217, 0.1)',
      duration: 0.2
    });
    
    if (label) {
      gsap.to(label, {
        color: '#4A90D9',
        y: -2,
        duration: 0.2
      });
    }
    
    if (icon) {
      gsap.to(icon, {
        color: '#4A90D9',
        scale: 1.1,
        duration: 0.2
      });
    }
  });
  
  input.addEventListener('blur', () => {
    gsap.to(wrapper, {
      scale: 1,
      duration: 0.2
    });
    
    gsap.to(input, {
      borderColor: '#e0e0e0',
      boxShadow: 'none',
      duration: 0.2
    });
    
    if (label) {
      gsap.to(label, {
        color: '#666',
        y: 0,
        duration: 0.2
      });
    }
    
    if (icon) {
      gsap.to(icon, {
        color: '#999',
        scale: 1,
        duration: 0.2
      });
    }
  });
});
```

#### 4. Submit Button Animation

Hover and loading states for the login button.

```javascript
// Submit button interactions
const submitBtn = document.querySelector('.login-submit');

submitBtn.addEventListener('mouseenter', () => {
  gsap.to(submitBtn, {
    scale: 1.03,
    y: -2,
    boxShadow: '0 8px 25px rgba(74, 144, 217, 0.3)',
    duration: 0.2,
    ease: 'power2.out'
  });
});

submitBtn.addEventListener('mouseleave', () => {
  gsap.to(submitBtn, {
    scale: 1,
    y: 0,
    boxShadow: 'none',
    duration: 0.2
  });
});

// Loading state animation
const showLoadingState = () => {
  const tl = gsap.timeline();
  
  tl.to(submitBtn, {
    width: submitBtn.offsetWidth,
    duration: 0
  })
  .to(submitBtn, {
    width: 50,
    padding: 0,
    borderRadius: '50%',
    duration: 0.3,
    ease: 'power2.inOut'
  })
  .to(submitBtn.querySelector('.btn-text'), {
    opacity: 0,
    duration: 0.2
  }, 0)
  .to(submitBtn.querySelector('.spinner'), {
    opacity: 1,
    rotation: 360,
    duration: 0.8,
    ease: 'none',
    repeat: -1
  }, '-=0.2');
  
  return tl;
};
```

#### 5. Social Login Buttons Animation

Interactive social login buttons.

```javascript
// Social buttons hover
document.querySelectorAll('.social-login-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      y: -3,
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
      duration: 0.2,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      y: 0,
      boxShadow: 'none',
      duration: 0.2
    });
  });
  
  btn.addEventListener('click', () => {
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  });
});
```

#### 6. Error/Success Message Animation

Animated feedback for form validation.

```javascript
// Error message shake animation
const showError = (message) => {
  const errorEl = document.querySelector('.error-message');
  errorEl.textContent = message;
  
  gsap.fromTo(errorEl,
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
  );
  
  // Shake effect
  gsap.to('.login-form', {
    x: [-5, 5, -5, 5, 0],
    duration: 0.4,
    ease: 'power2.out'
  });
};

// Success animation
const showSuccess = () => {
  gsap.to('.login-form', {
    opacity: 0,
    scale: 0.95,
    duration: 0.3,
    onComplete: () => {
      // Redirect or show success state
    }
  });
};
```

### Complete Implementation Example

```javascript
// login-animations.js
import { gsap } from 'gsap';

export const initLoginAnimations = () => {
  // Form entrance
  const tl = gsap.timeline();
  tl
    .from('.login-left-panel', { x: -100, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0)
    .from('.login-title', { y: -30, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.2)
    .from('.form-group', { y: 30, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .from('.login-submit', { scale: 0.9, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.2')
    .from('.social-login-btn', { x: -20, opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power3.out' }, '-=0.2');

  // Input interactions
  initInputAnimations();
  
  // Button interactions
  initButtonAnimations();
};

const initInputAnimations = () => {
  document.querySelectorAll('.form-control').forEach(input => {
    const wrapper = input.closest('.form-group');
    
    input.addEventListener('focus', () => {
      gsap.to(wrapper, { scale: 1.02, duration: 0.2 });
      gsap.to(input, { borderColor: '#4A90D9', boxShadow: '0 0 0 3px rgba(74, 144, 217, 0.1)', duration: 0.2 });
    });
    
    input.addEventListener('blur', () => {
      gsap.to(wrapper, { scale: 1, duration: 0.2 });
      gsap.to(input, { borderColor: '#e0e0e0', boxShadow: 'none', duration: 0.2 });
    });
  });
};

const initButtonAnimations = () => {
  const submitBtn = document.querySelector('.login-submit');
  
  submitBtn?.addEventListener('mouseenter', () => {
    gsap.to(submitBtn, { scale: 1.03, y: -2, boxShadow: '0 8px 25px rgba(74, 144, 217, 0.3)', duration: 0.2 });
  });
  
  submitBtn?.addEventListener('mouseleave', () => {
    gsap.to(submitBtn, { scale: 1, y: 0, boxShadow: 'none', duration: 0.2 });
  });

  document.querySelectorAll('.social-login-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => gsap.to(btn, { y: -3, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)', duration: 0.2 }));
    btn.addEventListener('mouseleave', () => gsap.to(btn, { y: 0, boxShadow: 'none', duration: 0.2 }));
  });
};

export const showError = (message) => {
  const errorEl = document.querySelector('.error-message');
  if (errorEl) {
    errorEl.textContent = message;
    gsap.fromTo(errorEl, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
    gsap.to('.login-form', { x: [-5, 5, -5, 5, 0], duration: 0.4 });
  }
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
.login-page { /* Page container */ }
.login-left-panel { /* Left branding */ }
.login-right-panel { /* Right form */ }
.login-form { /* Form container */ }
.login-title { /* Welcome heading */ }
.form-control { /* Input fields */ }
.social-login-btn { /* Social buttons */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "react-hook-form": "^7.48.0",
  "zod": "^3.22.0",
  "next-auth": "^4.24.0",
  "jwt-decode": "^4.0.0",
  "react-hot-toast": "^2.4.0",
  "zustand": "^4.4.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Login Page*
*Última actualización: Abril 2025*
