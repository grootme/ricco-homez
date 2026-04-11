# Invoice Page - Documentation

## 1. Identificación

- **Nombre de la Página:** Invoice
- **URL:** `https://homez-appdir.vercel.app/invoice`
- **Título de Página:** `Invoice || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Billing/Invoice Page

---

## 2. Descripción General

La página Invoice muestra los detalles de una factura o recibo de transacción. Incluye información de la empresa, datos del cliente, desglose de servicios/planes, totales y opciones de descarga e impresión.

---

## 3. Estructura de la Página

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    INVOICE HEADER                                    │    │
│  │                                                                       │    │
│  │   ┌────────────────────────┐  ┌────────────────────────┐            │    │
│  │   │  COMPANY LOGO          │  │  INVOICE INFO          │            │    │
│  │   │  Homez                 │  │  Invoice #: INV-2024-001│           │    │
│  │   │  123 Real Estate Ave   │  │  Date: Dec 15, 2024    │            │    │
│  │   │  New York, NY 10001    │  │  Status: Paid          │            │    │
│  │   │  contact@homez.com     │  │  Due Date: Dec 20, 2024│            │    │
│  │   └────────────────────────┘  └────────────────────────┘            │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    BILL TO SECTION                                   │    │
│  │                                                                       │    │
│  │   Bill To:                                                           │    │
│  │   John Doe                                                           │    │
│  │   john.doe@email.com                                                 │    │
│  │   456 Main Street, Los Angeles, CA 90001                            │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    INVOICE ITEMS TABLE                               │    │
│  │                                                                       │    │
│  │   ┌──────┬─────────────────────┬──────────┬──────────┬──────────┐  │    │
│  │   │ #    │ Description         │ Price    │ Qty      │ Total    │  │    │
│  │   ├──────┼─────────────────────┼──────────┼──────────┼──────────┤  │    │
│  │   │ 1    │ Pro Plan (Monthly)  │ $59.00   │ 1        │ $59.00   │  │    │
│  │   │ 2    │ Featured Listing    │ $19.00   │ 2        │ $38.00   │  │    │
│  │   │ 3    │ Priority Support    │ $10.00   │ 1        │ $10.00   │  │    │
│  │   └──────┴─────────────────────┴──────────┴──────────┴──────────┘  │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    INVOICE TOTALS                                    │    │
│  │                                                                       │    │
│  │   Subtotal:                                    $107.00               │    │
│  │   Discount (10%):                              -$10.70               │    │
│  │   Tax (8%):                                    $7.66                 │    │
│  │   ────────────────────────────────────────────────────               │    │
│  │   Total:                                       $103.96               │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    PAYMENT INFO                                      │    │
│  │                                                                       │    │
│  │   Payment Method: Visa ending in 4242                               │    │
│  │   Payment Date: December 15, 2024                                    │    │
│  │   Transaction ID: txn_1234567890                                     │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    ACTIONS                                           │    │
│  │                                                                       │    │
│  │   [Download PDF]  [Print Invoice]  [Back to Dashboard]              │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Invoice Data Structure

```typescript
interface Invoice {
  id: string;
  invoiceNumber: string;
  status: 'draft' | 'pending' | 'paid' | 'overdue' | 'cancelled';
  createdAt: Date;
  dueDate: Date;
  paidAt?: Date;
  
  company: {
    name: string;
    logo: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    email: string;
    phone: string;
    taxId?: string;
  };
  
  customer: {
    id: string;
    name: string;
    email: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  };
  
  items: InvoiceItem[];
  
  totals: {
    subtotal: number;
    discount: number;
    discountType: 'percentage' | 'fixed';
    tax: number;
    taxRate: number;
    total: number;
    currency: string;
  };
  
  payment: {
    method: 'credit_card' | 'paypal' | 'bank_transfer' | 'other';
    methodDetails: string; // e.g., "Visa ending in 4242"
    transactionId: string;
    paidAt?: Date;
  };
  
  notes?: string;
  terms?: string;
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}
```

### 4.2 Sample Invoice Data

```typescript
const sampleInvoice: Invoice = {
  id: 'inv_123456',
  invoiceNumber: 'INV-2024-001',
  status: 'paid',
  createdAt: new Date('2024-12-15'),
  dueDate: new Date('2024-12-20'),
  paidAt: new Date('2024-12-15'),
  
  company: {
    name: 'Homez',
    logo: '/images/header-logo2.svg',
    address: {
      street: '123 Real Estate Ave',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA'
    },
    email: 'contact@homez.com',
    phone: '+(0) 123 050 945 02',
    taxId: 'US123456789'
  },
  
  customer: {
    id: 'user_789',
    name: 'John Doe',
    email: 'john.doe@email.com',
    address: {
      street: '456 Main Street',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001'
    }
  },
  
  items: [
    {
      id: 'item_1',
      description: 'Pro Plan Subscription (Monthly)',
      quantity: 1,
      unitPrice: 59.00,
      total: 59.00
    },
    {
      id: 'item_2',
      description: 'Featured Listing Add-on',
      quantity: 2,
      unitPrice: 19.00,
      total: 38.00
    },
    {
      id: 'item_3',
      description: 'Priority Support Package',
      quantity: 1,
      unitPrice: 10.00,
      total: 10.00
    }
  ],
  
  totals: {
    subtotal: 107.00,
    discount: 10.70,
    discountType: 'percentage',
    tax: 7.66,
    taxRate: 8,
    total: 103.96,
    currency: 'USD'
  },
  
  payment: {
    method: 'credit_card',
    methodDetails: 'Visa ending in 4242',
    transactionId: 'txn_1234567890',
    paidAt: new Date('2024-12-15')
  },
  
  notes: 'Thank you for your business!',
  terms: 'Payment is due within 5 days of invoice date.'
};
```

---

## 5. Componentes UI

### 5.1 Invoice Header

```typescript
interface InvoiceHeaderProps {
  company: Invoice['company'];
  invoiceNumber: string;
  status: InvoiceStatus;
  createdAt: Date;
  dueDate: Date;
}
```

**Status Badges:**
| Status | Color | Badge Style |
|--------|-------|-------------|
| draft | gray | `.badge-secondary` |
| pending | yellow | `.badge-warning` |
| paid | green | `.badge-success` |
| overdue | red | `.badge-danger` |
| cancelled | gray | `.badge-dark` |

### 5.2 Bill To Section

```typescript
interface BillToProps {
  customer: Invoice['customer'];
}
```

### 5.3 Invoice Items Table

```typescript
interface InvoiceItemsTableProps {
  items: InvoiceItem[];
  currency: string;
}
```

**CSS Classes:**
```css
.invoice-table { /* Table container */ }
.invoice-table-header { /* Header row */ }
.invoice-table-row { /* Data row */ }
.invoice-table-cell { /* Table cell */ }
.invoice-table-number { /* Row number */ }
.invoice-table-description { /* Description */ }
.invoice-table-amount { /* Price/Total */ }
```

### 5.4 Invoice Totals

```typescript
interface InvoiceTotalsProps {
  totals: Invoice['totals'];
}
```

### 5.5 Payment Info

```typescript
interface PaymentInfoProps {
  payment: Invoice['payment'];
  status: InvoiceStatus;
}
```

### 5.6 Action Buttons

```typescript
interface InvoiceActionsProps {
  invoiceId: string;
  onDownload: () => void;
  onPrint: () => void;
  onBack: () => void;
}
```

---

## 6. API Endpoints

### 6.1 Get Invoice

```
Endpoint: /api/invoices/:id
Method: GET

Response:
{
  "invoice": Invoice
}
```

### 6.2 Download Invoice PDF

```
Endpoint: /api/invoices/:id/pdf
Method: GET

Response:
Content-Type: application/pdf
Content-Disposition: attachment; filename="invoice-INV-2024-001.pdf"

[PDF Binary Data]
```

### 6.3 Get User Invoices

```
Endpoint: /api/invoices
Method: GET
Query Parameters:
  - page: number
  - limit: number
  - status: string (optional)

Response:
{
  "invoices": Invoice[],
  "pagination": PaginationState
}
```

---

## 7. Estructuras TypeScript

```typescript
interface InvoicePageState {
  invoice: Invoice | null;
  isLoading: boolean;
  error: string | null;
  isDownloading: boolean;
}

interface InvoicePageProps {
  params: {
    id: string;
  };
}

type InvoiceStatus = 'draft' | 'pending' | 'paid' | 'overdue' | 'cancelled';
```

---

## 8. Elementos Interactivos

### 8.1 Actions

| Action | Handler |
|--------|---------|
| Download PDF | `onDownloadPDF()` |
| Print Invoice | `window.print()` |
| Back to Dashboard | `navigateTo('/dashboard-home')` |
| Pay Now (if pending) | `navigateTo('/checkout?invoice=[id]')` |

### 8.2 Print Stylesheet

```css
@media print {
  .no-print { display: none !important; }
  .invoice-page { box-shadow: none; }
  .invoice-actions { display: none; }
  header, footer { display: none; }
}
```

---

## 9. Formato de Números

```typescript
// Currency formatting
const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Date formatting
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
```

---

## 10. Comportamiento Responsivo

| Breakpoint | Layout |
|------------|--------|
| Mobile | Stacked layout, smaller text |
| Tablet | Standard invoice layout |
| Desktop | Full width, optimized for print |

---

## 11. Notas Técnicas

- PDF generation con html2pdf o similar
- Print-specific CSS
- LocalStorage para guardar última factura vista
- Opción de enviar por email
- URL firmada para acceso seguro

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### PDF Generation
- html2pdf.js: ^0.10.1 for PDF export
- Print-specific CSS with @media print
- Server-side PDF generation option

### Key Dependencies
- html2pdf.js: ^0.10.1 for client-side PDF
- date-fns: ^3.0.0 for date formatting
- react-hot-toast: ^2.4.0 for notifications

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 1 | Invoice content |
| `aos-delay="300"` | 1 | Staggered delay |

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

The Invoice page animations focus on document reveal effects and structured content presentation.

#### 1. Invoice Document Entrance Animation

Sequential reveal for invoice sections.

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Invoice entrance animation
const invoiceTl = gsap.timeline();

invoiceTl
  .from('.invoice-page', {
    opacity: 0,
    y: 30,
    duration: 0.5,
    ease: 'power3.out'
  })
  .from('.invoice-header', {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.company-logo', {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: 'back.out(1.7)'
  }, '-=0.2')
  .from('.invoice-info', {
    x: 30,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.3')
  .from('.bill-to-section', {
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.invoice-table', {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out'
  }, '-=0.2')
  .from('.invoice-totals', {
    x: 30,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2')
  .from('.invoice-actions', {
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.1');
```

#### 2. Status Badge Animation

Animated status indicator with color transition.

```javascript
// Status badge animation
const animateStatusBadge = (status) => {
  const badge = document.querySelector('.status-badge');
  const colors = {
    'paid': '#28a745',
    'pending': '#ffc107',
    'overdue': '#dc3545',
    'cancelled': '#6c757d',
    'draft': '#6c757d'
  };
  
  gsap.fromTo(badge,
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }
  );
  
  gsap.to(badge, {
    backgroundColor: colors[status] || '#6c757d',
    boxShadow: `0 4px 15px ${colors[status]}40`,
    duration: 0.3
  });
  
  // Pulse effect for pending status
  if (status === 'pending') {
    gsap.to(badge, {
      boxShadow: `0 4px 20px ${colors[status]}60`,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
};
```

#### 3. Invoice Items Table Animation

Sequential reveal for table rows.

```javascript
// Table header animation
gsap.from('.invoice-table-header th', {
  y: -15,
  opacity: 0,
  stagger: 0.05,
  duration: 0.3,
  ease: 'power3.out',
  delay: 0.5
});

// Table rows stagger
gsap.from('.invoice-table-row', {
  x: -30,
  opacity: 0,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power3.out',
  delay: 0.6
});

// Row number highlight
gsap.from('.invoice-table-number', {
  scale: 0,
  stagger: 0.05,
  duration: 0.3,
  ease: 'back.out(2)',
  delay: 0.8
});
```

#### 4. Totals Section Animation

Animated calculation reveal.

```javascript
// Totals animation
const animateTotals = () => {
  const totalsTl = gsap.timeline({ delay: 0.8 });
  
  totalsTl
    .from('.subtotal-row', { x: 50, opacity: 0, duration: 0.3, ease: 'power3.out' })
    .from('.discount-row', { x: 50, opacity: 0, duration: 0.3, ease: 'power3.out' }, '-=0.1')
    .from('.tax-row', { x: 50, opacity: 0, duration: 0.3, ease: 'power3.out' }, '-=0.1')
    .from('.total-row', {
      x: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: 'back.out(1.5)'
    }, '-=0.1');
  
  // Total amount count animation
  const totalAmount = document.querySelector('.total-amount');
  const targetValue = parseFloat(totalAmount.dataset.value);
  
  gsap.from(totalAmount, {
    textContent: 0,
    duration: 1.5,
    ease: 'power1.out',
    snap: { textContent: 0.01 },
    delay: 1.2,
    onUpdate: function() {
      totalAmount.textContent = '$' + parseFloat(this.targets()[0].textContent).toFixed(2);
    }
  });
};
```

#### 5. Payment Info Animation

Animated payment details reveal.

```javascript
// Payment info animation
gsap.from('.payment-info-item', {
  y: 15,
  opacity: 0,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power3.out',
  delay: 1
});

// Card icon animation
gsap.from('.payment-card-icon', {
  scale: 0,
  rotation: -90,
  duration: 0.5,
  ease: 'back.out(1.7)',
  delay: 1.1
});
```

#### 6. Action Buttons Animation

Interactive buttons for download, print, etc.

```javascript
// Action buttons entrance
gsap.from('.invoice-action-btn', {
  y: 20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power3.out',
  delay: 1.2
});

// Button hover effects
document.querySelectorAll('.invoice-action-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      y: -3,
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
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
});

// Download button special animation
const downloadBtn = document.querySelector('.download-pdf-btn');
downloadBtn.addEventListener('click', () => {
  const icon = downloadBtn.querySelector('.download-icon');
  gsap.to(icon, {
    y: 5,
    duration: 0.15,
    yoyo: true,
    repeat: 1
  });
});
```

#### 7. Print Preparation Animation

Smooth transition for print view.

```javascript
// Print preparation animation
const prepareForPrint = () => {
  gsap.to('.no-print', {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      window.print();
      gsap.to('.no-print', { opacity: 1, duration: 0.3 });
    }
  });
  
  // Scale invoice for better print
  gsap.to('.invoice-page', {
    scale: 0.98,
    boxShadow: 'none',
    duration: 0.2
  });
};
```

### Complete Implementation Example

```javascript
// invoice-animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initInvoiceAnimations = () => {
  // Document entrance
  const tl = gsap.timeline();
  tl
    .from('.invoice-page', { opacity: 0, y: 30, duration: 0.5, ease: 'power3.out' })
    .from('.invoice-header', { opacity: 0, y: -20, duration: 0.4, ease: 'power3.out' }, '-=0.2')
    .from('.company-logo', { scale: 0.8, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.2')
    .from('.invoice-info', { x: 30, opacity: 0, duration: 0.4, ease: 'power3.out' }, '-=0.3')
    .from('.bill-to-section', { y: 20, opacity: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2');

  // Table rows
  gsap.from('.invoice-table-row', {
    x: -30, opacity: 0, stagger: 0.08, duration: 0.4, ease: 'power3.out', delay: 0.6
  });

  // Totals
  animateTotals();

  // Status badge
  animateStatusBadge();

  // Action buttons
  gsap.from('.invoice-action-btn', { y: 20, opacity: 0, stagger: 0.1, duration: 0.4, ease: 'power3.out', delay: 1.2 });

  // Initialize interactions
  initButtonInteractions();
};

const animateTotals = () => {
  const totalsTl = gsap.timeline({ delay: 0.8 });
  totalsTl
    .from('.subtotal-row', { x: 50, opacity: 0, duration: 0.3, ease: 'power3.out' })
    .from('.discount-row', { x: 50, opacity: 0, duration: 0.3, ease: 'power3.out' }, '-=0.1')
    .from('.tax-row', { x: 50, opacity: 0, duration: 0.3, ease: 'power3.out' }, '-=0.1')
    .from('.total-row', { x: 50, opacity: 0, scale: 0.95, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.1');

  // Animate total count
  const totalAmount = document.querySelector('.total-amount');
  if (totalAmount && totalAmount.dataset.value) {
    gsap.from(totalAmount, {
      textContent: 0,
      duration: 1.5,
      ease: 'power1.out',
      snap: { textContent: 0.01 },
      delay: 1.2,
      onUpdate: function() {
        totalAmount.textContent = '$' + parseFloat(this.targets()[0].textContent).toFixed(2);
      }
    });
  }
};

const animateStatusBadge = () => {
  const badge = document.querySelector('.status-badge');
  if (badge) {
    gsap.fromTo(badge,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }
    );
  }
};

const initButtonInteractions = () => {
  document.querySelectorAll('.invoice-action-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => gsap.to(btn, { y: -3, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)', duration: 0.2 }));
    btn.addEventListener('mouseleave', () => gsap.to(btn, { y: 0, boxShadow: 'none', duration: 0.2 }));
  });
};

export const prepareForPrint = () => {
  gsap.to('.no-print', {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      window.print();
      gsap.to('.no-print', { opacity: 1, duration: 0.3 });
    }
  });
};
```

---

## Theme Variables & CSS Analysis

### Color System (Utility Classes)
| Class | Usage | Description |
|-------|-------|-------------|
| `bgc-white` | Background | White background |
| `text-gray` | Text | Gray text color |

### Status Badge Colors
| Status | Color | Badge Class |
|--------|-------|-------------|
| draft | gray | `.badge-secondary` |
| pending | yellow | `.badge-warning` |
| paid | green | `.badge-success` |
| overdue | red | `.badge-danger` |
| cancelled | gray | `.badge-dark` |

### Component Classes
```css
.invoice-page { /* Page container */ }
.invoice-header { /* Header section */ }
.invoice-table { /* Items table */ }
.invoice-totals { /* Totals section */ }
.invoice-actions { /* Action buttons */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "html2pdf.js": "^0.10.1",
  "date-fns": "^3.0.0",
  "react-hot-toast": "^2.4.0",
  "zustand": "^4.4.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Invoice Page*
*Última actualización: Abril 2025*
