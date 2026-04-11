# Reviews

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-reviews
- **Page Title:** Reviews || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-reviews`

---

## Page Overview

The Reviews page displays reviews received by the user on their property listings. It shows review content, ratings, reviewer information, and allows the user to see feedback from potential buyers or renters. This page helps property owners understand how their listings are perceived.

### Primary Purpose

1. Display all received reviews
2. Show overall rating summary
3. Enable sorting of reviews
4. Allow response to reviews (optional)
5. Show helpful/not helpful feedback

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
│  ├─Dashboard  │  │              "Reviews"                        │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │         Rating Summary & Sort                 │  │
│  ├─Add Prop   │  │  ⭐ 5.0 · 3 reviews    | Sort by: [Dropdown]  │  │
│  ├─My Props   │  └───────────────────────────────────────────────┘  │
│  ├─Favorites  │                                                     │
│  ├─Saved Srch │  ┌───────────────────────────────────────────────┐  │
│  └─Reviews ●  │  │              REVIEWS LIST                     │  │
│               │  │  ┌─────────────────────────────────────────┐  │  │
│  MANAGE       │  │  │ Review 1                                │  │  │
│  ACCOUNT      │  │  │ [Avatar] Name | Date | ⭐⭐⭐⭐⭐         │  │  │
│  ├─My Package │  │  │ Review text...                          │  │  │
│  ├─My Profile │  │  │ [Images]                                │  │  │
│  └─Logout     │  │  │ 👍 Helpful | 👎 Not helpful             │  │  │
│               │  │  ├─────────────────────────────────────────┤  │  │
│               │  │  │ Review 2                                │  │  │
│               │  │  │ ...                                     │  │  │
│               │  │  └─────────────────────────────────────────┘  │  │
│               │  │                                               │  │
│               │  │  [Show all 134 reviews →]                     │  │
│               │  │                                               │  │
│               │  │              PAGINATION                        │  │
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
  <h2>Reviews</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Rating Summary and Sort

```html
<div class="total_review d-flex align-items-center justify-content-between mb20 mt60">
  <h6 class="fz17 mb15">
    <i class="fas fa-star fz12 pe-2"></i>5.0 · 3 reviews
  </h6>
  <div class="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
    <div class="pcs_dropdown mb15 d-flex align-items-center">
      <span style="min-width:60px">Sort by</span>
      <select class="form-select">
        <option>Newest</option>
        <option>Best Seller</option>
        <option>Best Match</option>
        <option>Price Low</option>
        <option>Price High</option>
      </select>
    </div>
  </div>
</div>
```

**Sort Options:**
| Option       | Description                    |
|--------------|--------------------------------|
| Newest       | Most recent first              |
| Best Seller  | Sort by popularity             |
| Best Match   | Sort by relevance              |
| Price Low    | Sort by price ascending        |
| Price High   | Sort by price descending       |

### Review Item Structure

```html
<div class="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
  <img alt="comments-2.png" class="mr-3" src="/images/blog/comments-2.png">
  <div class="ml20">
    <h6 class="mt-0 mb-0">Bessie Cooper</h6>
    <div>
      <span class="fz14">12 March 2022</span>
      <div class="blog-single-review">
        <ul class="mb0 ps-0">
          <li class="list-inline-item me-0"><a href="#"><i class="fas fa-star review-color2 fz10"></i></a></li>
          <li class="list-inline-item me-0"><a href="#"><i class="fas fa-star review-color2 fz10"></i></a></li>
          <li class="list-inline-item me-0"><a href="#"><i class="fas fa-star review-color2 fz10"></i></a></li>
          <li class="list-inline-item me-0"><a href="#"><i class="fas fa-star review-color2 fz10"></i></a></li>
          <li class="list-inline-item me-0"><a href="#"><i class="fas fa-star review-color2 fz10"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<p class="text mt20 mb20">
  The second bedroom is a corner room with double windows. The kitchen has fabulous space, 
  new appliances, and a laundry area. Other features include rich herringbone floors. 
  Fully furnished. Elegantly appointed condominium unit situated on premier location. 
  PS6. The wide entry hall leads to a large living room with dining area.
</p>
```

### Review Images

```html
<ul class="mb20 ps-0">
  <li class="list-inline-item mb5-xs">
    <img alt="review-img" class="bdrs6" src="/images/blog/blog-single-3.jpg">
  </li>
  <li class="list-inline-item mb5-xs">
    <img alt="review-img" class="bdrs6" src="/images/blog/blog-single-4.jpg">
  </li>
  <li class="list-inline-item mb5-xs">
    <img alt="review-img" class="bdrs6" src="/images/blog/blog-single-5.jpg">
  </li>
  <li class="list-inline-item mb5-xs">
    <img alt="review-img" class="bdrs6" src="/images/blog/blog-single-6.jpg">
  </li>
</ul>
```

### Helpful/Not Helpful Actions

```html
<div class="review_cansel_btns d-flex bdrb1 pb30">
  <a href="#"><i class="fas fa-thumbs-up"></i>Helpful</a>
  <a href="#"><i class="fas fa-thumbs-down"></i>Not helpful</a>
</div>
```

### Show All Reviews Button

```html
<div class="position-relative bdrb1 pt30 pb20">
  <a href="#" class="ud-btn btn-white2">
    Show all 134 reviews
    <i class="fal fa-arrow-right-long"></i>
  </a>
</div>
```

### Sample Reviews Data

| # | Reviewer        | Date          | Rating | Has Images |
|---|-----------------|---------------|--------|------------|
| 1 | Bessie Cooper   | 12 March 2022 | 5.0    | Yes (4)    |
| 2 | Darrell Steward | 12 March 2022 | 5.0    | No         |
| 3 | Darrell Steward | 12 March 2022 | 5.0    | No         |

---

## Component Breakdown

### 1. Review Summary Component

**Props:**
```typescript
interface ReviewSummaryProps {
  averageRating: number;
  totalReviews: number;
  sortValue: string;
  onSortChange: (value: string) => void;
}
```

### 2. Review Item Component

**CSS Classes:** `.mbp_first`

**Props:**
```typescript
interface ReviewItemProps {
  id: string;
  reviewer: {
    name: string;
    avatar: string;
  };
  date: string;
  rating: number;
  content: string;
  images?: string[];
  helpfulCount: number;
  notHelpfulCount: number;
  onHelpful: () => void;
  onNotHelpful: () => void;
}
```

### 3. Star Rating Component

**CSS Classes:** `.blog-single-review`

**Props:**
```typescript
interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
}
```

### 4. Review Images Component

**Props:**
```typescript
interface ReviewImagesProps {
  images: string[];
  maxVisible?: number;
}
```

---

## Interactive Elements

### Sort Reviews

**Trigger:** Select from dropdown

**Behavior:**
- Reorder reviews list
- Update display

### Mark Helpful/Not Helpful

**Trigger:** Click thumbs up/down

**Behavior:**
- Increment counter
- Visual feedback
- One action per user

### Show All Reviews

**Trigger:** Click "Show all X reviews" button

**Behavior:**
- Navigate to full reviews page
- Or expand current list

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Layout Behavior                              |
|------------|------------|---------------------------------------------|
| xs         | < 576px    | Stacked layout, smaller images              |
| sm         | ≥ 576px    | Improved spacing                             |
| md         | ≥ 768px    | Side-by-side elements                        |
| lg         | ≥ 992px    | Sidebar visible                              |

---

## CSS Classes Reference

### Review Classes

```css
.mbp_first                 /* Review item container */
.mbp_pagination_comments   /* Comments container */
.product_single_content    /* Content wrapper */
.total_review              /* Summary container */
.blog-single-review        /* Star rating */
.review-color2             /* Star color */
.review_cansel_btns        /* Helpful buttons */
```

### Image Classes

```css
.list-inline-item          /* Image list item */
.mb5-xs                    /* Margin bottom on xs */
.bdrs6                     /* Border radius 6px */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get Reviews:**
   ```
   GET /api/user/reviews
   Query: ?page=1&limit=10&sort=newest
   ```
   Returns: Paginated list of reviews

2. **Mark Helpful:**
   ```
   POST /api/reviews/:id/helpful
   ```
   Returns: Updated counts

3. **Mark Not Helpful:**
   ```
   POST /api/reviews/:id/not-helpful
   ```
   Returns: Updated counts

---

## State Management

### Page State

```typescript
interface ReviewsState {
  reviews: Review[];
  summary: {
    averageRating: number;
    totalReviews: number;
  };
  isLoading: boolean;
  error: string | null;
  sortBy: string;
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}

interface Review {
  id: string;
  reviewer: {
    name: string;
    avatar: string;
  };
  date: string;
  rating: number;
  content: string;
  images?: string[];
  helpfulCount: number;
  notHelpfulCount: number;
  userVote?: 'helpful' | 'not-helpful';
}
```

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-reviews/page.tsx` - Page component
- `/components/dashboard/ReviewsList.tsx` - Reviews list
- `/components/dashboard/ReviewItem.tsx` - Individual review
- `/components/common/StarRating.tsx` - Rating display

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
| `fade-up` | Fade in from bottom | Review items |
| `fade-in` | Fade in without movement | Images gallery |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Review Items | opacity, transform | 300ms | ease-out |
| Star Rating | color | 200ms | ease |
| Helpful Buttons | background-color | 200ms | ease |
| Sort Dropdown | all | 300ms | ease |

---

## Theme Variables

### Review Styling:
```css
.mbp_first              /* Review item container */
.mbp_pagination_comments /* Comments container */
.product_single_content /* Content wrapper */
.total_review           /* Summary container */
.blog-single-review     /* Star rating */
.review-color2          /* Star color (gold) */
.review_cansel_btns     /* Helpful buttons */
```

### Image Classes:
```css
.list-inline-item       /* Image list item */
.mb5-xs                 /* Margin bottom on xs */
.bdrs6                  /* Border radius 6px */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Stacked layout for reviews
- Flexbox for header and meta info

---

## NPM Libraries Required

### Star Rating:
```json
{
  "react-stars": "^2.2.5"
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
  "aos": "^2.3.4",
  "framer-motion": "^10.16.0"
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

### Review Items Animation

```javascript
// Staggered entrance for review items
const animateReviewItems = () => {
  const reviews = document.querySelectorAll('.mbp_first');

  gsap.from(reviews, {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.mbp_pagination_comments',
      start: 'top 80%'
    }
  });
};

// Review item hover effect
const initReviewHover = () => {
  const reviews = document.querySelectorAll('.mbp_first');

  reviews.forEach((review) => {
    review.addEventListener('mouseenter', () => {
      gsap.to(review, {
        x: 5,
        backgroundColor: 'rgba(227, 57, 97, 0.02)',
        duration: 0.2,
        ease: 'power1.out'
      });
    });

    review.addEventListener('mouseleave', () => {
      gsap.to(review, {
        x: 0,
        backgroundColor: 'transparent',
        duration: 0.2,
        ease: 'power1.out'
      });
    });
  });
};
```

### Star Rating Animation

```javascript
// Star rating entrance animation
const animateStarRatings = () => {
  const starContainers = document.querySelectorAll('.blog-single-review ul');

  starContainers.forEach((container) => {
    const stars = container.querySelectorAll('li');

    gsap.from(stars, {
      scale: 0,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: container,
        start: 'top 90%'
      }
    });
  });
};

// Star hover animation
const initStarHover = () => {
  const stars = document.querySelectorAll('.blog-single-review li');

  stars.forEach((star) => {
    star.addEventListener('mouseenter', () => {
      gsap.to(star, {
        scale: 1.2,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    star.addEventListener('mouseleave', () => {
      gsap.to(star, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
};
```

### Avatar Animation

```javascript
// Reviewer avatar entrance
const animateAvatars = () => {
  const avatars = document.querySelectorAll('.mbp_first img');

  gsap.from(avatars, {
    scale: 0,
    borderRadius: '0%',
    stagger: 0.08,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.mbp_first',
      start: 'top 80%'
    }
  });
};

// Avatar hover effect
const initAvatarHover = () => {
  const avatars = document.querySelectorAll('.mbp_first img');

  avatars.forEach((avatar) => {
    avatar.addEventListener('mouseenter', () => {
      gsap.to(avatar, {
        scale: 1.1,
        boxShadow: '0 4px 15px rgba(227, 57, 97, 0.3)',
        duration: 0.2
      });
    });

    avatar.addEventListener('mouseleave', () => {
      gsap.to(avatar, {
        scale: 1,
        boxShadow: 'none',
        duration: 0.2
      });
    });
  });
};
```

### Review Images Gallery Animation

```javascript
// Review images stagger entrance
const animateReviewImages = () => {
  const images = document.querySelectorAll('.list-inline-item img');

  gsap.from(images, {
    opacity: 0,
    scale: 0.8,
    stagger: 0.05,
    duration: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: images[0],
      start: 'top 85%'
    }
  });
};

// Image hover zoom effect
const initImageHover = () => {
  const images = document.querySelectorAll('.list-inline-item img');

  images.forEach((img) => {
    img.addEventListener('mouseenter', () => {
      gsap.to(img, {
        scale: 1.1,
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        duration: 0.3
      });
    });

    img.addEventListener('mouseleave', () => {
      gsap.to(img, {
        scale: 1,
        boxShadow: 'none',
        duration: 0.3
      });
    });
  });
};
```

### Helpful/Not Helpful Buttons Animation

```javascript
// Helpful buttons entrance
const animateHelpfulButtons = () => {
  const buttons = document.querySelectorAll('.review_cansel_btns a');

  gsap.from(buttons, {
    opacity: 0,
    y: 10,
    stagger: 0.1,
    duration: 0.3,
    ease: 'power2.out',
    delay: 0.3
  });
};

// Button hover and click animation
const initHelpfulButtonAnimations = () => {
  const buttons = document.querySelectorAll('.review_cansel_btns a');

  buttons.forEach((btn) => {
    const icon = btn.querySelector('i');

    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        color: '#e33961',
        x: 3,
        duration: 0.2
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.2
        });
      }
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        color: '',
        x: 0,
        duration: 0.2
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1,
          duration: 0.2
        });
      }
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
};
```

### Rating Summary Animation

```javascript
// Rating summary entrance
const animateRatingSummary = () => {
  const summary = document.querySelector('.total_review');

  if (summary) {
    gsap.from(summary, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
};

// Overall rating counter
const animateOverallRating = () => {
  const rating = document.querySelector('.total_review h6');

  if (rating) {
    gsap.from(rating, {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });
  }
};
```

### Sort Dropdown Animation

```javascript
// Sort dropdown animation
const initSortDropdown = () => {
  const dropdown = document.querySelector('.page_control_shorting');

  dropdown?.addEventListener('click', () => {
    gsap.to(dropdown, {
      borderColor: '#e33961',
      duration: 0.2
    });
  });
};
```

### Show All Reviews Button Animation

```javascript
// Show all button animation
const initShowAllButton = () => {
  const btn = document.querySelector('.ud-btn.btn-white2');

  btn?.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      scale: 1.02,
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      duration: 0.25
    });

    gsap.to(btn.querySelector('i'), {
      x: 5,
      duration: 0.25
    });
  });

  btn?.addEventListener('mouseleave', () => {
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
};
```

### Complete Reviews Animation Init

```javascript
// Initialize all animations
const initReviewsAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animateRatingSummary();
  animateOverallRating();
  animateReviewItems();
  initReviewHover();
  animateStarRatings();
  initStarHover();
  animateAvatars();
  initAvatarHover();
  animateReviewImages();
  initImageHover();
  animateHelpfulButtons();
  initHelpfulButtonAnimations();
  initSortDropdown();
  initShowAllButton();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initReviewsAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useReviewsAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useReviewsAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Review items stagger
    gsap.from('.mbp_first', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.mbp_pagination_comments',
        start: 'top 80%'
      }
    });

    // Star ratings animation
    const starContainers = document.querySelectorAll('.blog-single-review ul');
    starContainers.forEach((container) => {
      gsap.from(container.querySelectorAll('li'), {
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(1.7)'
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
- Reviews show star rating with filled stars
- Optional images can be attached to reviews
- Helpful/Not helpful voting for each review
- Sort options for organizing reviews
- "Show all reviews" button for navigation
- Average rating displayed in summary
- Timestamps shown for each review
- Reviewer avatar and name visible
- Pagination for large review lists

---

## Review Response Feature

### Responding to Reviews

**Props:**
```typescript
interface ReviewResponseProps {
  reviewId: string;
  onResponse: (response: string) => void;
  hasResponse: boolean;
  existingResponse?: string;
}
```

**Response Form:**
```html
<div class="review-response-form">
  <textarea placeholder="Write your response..."></textarea>
  <button class="ud-btn btn-dark">Submit Response</button>
</div>
```

**Response Display:**
- Owner/agent response shown below review
- Response timestamp
- Badge indicating "Response from Owner"

---

## Rating Distribution

### Rating Breakdown Component

```html
<div class="rating-distribution">
  <div class="rating-bar">
    <span class="rating-label">5 stars</span>
    <div class="bar-container">
      <div class="bar-fill" style="width: 75%"></div>
    </div>
    <span class="rating-count">75%</span>
  </div>
  <div class="rating-bar">
    <span class="rating-label">4 stars</span>
    <div class="bar-container">
      <div class="bar-fill" style="width: 15%"></div>
    </div>
    <span class="rating-count">15%</span>
  </div>
  <div class="rating-bar">
    <span class="rating-label">3 stars</span>
    <div class="bar-container">
      <div class="bar-fill" style="width: 5%"></div>
    </div>
    <span class="rating-count">5%</span>
  </div>
  <div class="rating-bar">
    <span class="rating-label">2 stars</span>
    <div class="bar-container">
      <div class="bar-fill" style="width: 3%"></div>
    </div>
    <span class="rating-count">3%</span>
  </div>
  <div class="rating-bar">
    <span class="rating-label">1 star</span>
    <div class="bar-container">
      <div class="bar-fill" style="width: 2%"></div>
    </div>
    <span class="rating-count">2%</span>
  </div>
</div>
```

---

## Review Filtering Options

### Filter by Rating

| Option        | Description                    |
|---------------|--------------------------------|
| All Ratings   | Show all reviews               |
| 5 Stars Only  | Show only 5-star reviews       |
| 4+ Stars      | Show 4 and 5 star reviews      |
| 3 Stars       | Show only 3-star reviews       |
| Critical      | Show 1-2 star reviews          |

### Filter by Time

| Option        | Description                    |
|---------------|--------------------------------|
| All Time      | No time restriction            |
| Last Week     | Reviews from past 7 days       |
| Last Month    | Reviews from past 30 days      |
| Last 6 Months | Reviews from past 180 days     |
| Last Year     | Reviews from past 365 days     |

---

## Accessibility Considerations

1. **Star Ratings:**
   - Use aria-label for screen readers
   - Announce rating value (e.g., "5 out of 5 stars")

2. **Review Images:**
   - Alt text describing image content
   - Keyboard navigable gallery

3. **Helpful Buttons:**
   - Clear button labels
   - Status announcement after click

4. **Pagination:**
   - Current page announced
   - Keyboard navigation support

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0
- zod: ^3.22.0 for validation

### Reviews Features
- Star rating display and input
- Helpful/Not helpful voting
- Review response from owners
- Image attachments support
- Rating distribution chart

### Key Dependencies
- react-stars: ^2.2.5 for star ratings
- react-hot-toast: ^2.4.0 for notifications
- framer-motion: ^10.16.0 for animations
