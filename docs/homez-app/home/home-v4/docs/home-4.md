# Home 4 - Agent-Focused Design with Light Header

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v4](https://homez-appdir.vercel.app/home-v4)  
**Template Type:** Homepage  
**Version:** 4

Home 4 is specifically designed for agent-focused real estate platforms. It features a light header theme with the white logo variant and emphasizes agent profiles, team showcases, and personal branding elements.

## Layout Components

### Hero Section
- **Light Theme Design**: Clean, professional appearance
- **Agent-Centric Messaging**: Focus on personal service
- **White CTA Button**: btn-white class for contrast
- **Professional Imagery**: Agent-focused visuals

### Navigation
- **Light Header**: light-header menu-home4 class
- **White Logo**: header-logo2.svg for visibility
- **Agent Directory**: Easy access to agent profiles
- **Property Submission**: Add Property CTA

### Agent Features
- **Agent Profiles**: Detailed agent cards
- **Team Showcase**: Brokerage team display
- **Agent Ratings**: Reviews and testimonials
- **Contact Integration**: Direct agent contact

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Header Theme** | Light background (light-header) |
| **Logo** | White/dark version (header-logo2.svg) |
| **CTA Buttons** | White button variant (btn-white) |
| **Navigation Icon** | Dark variant for light header |
| **Overall Style** | Professional, trust-building |

### Key Design Elements
```css
/* Light header styling */
.header-nav.nav-homepage-style.light-header.menu-home4

/* White CTA button */
.ud-btn.btn-white.add-property.bdrs60

/* Dark navigation icons */
<img src="/images/dark-nav-icon.svg">
```

## Key Features

### Agent Showcase Section
- Agent profile cards with photos
- Agent ratings and reviews
- Property count per agent
- Specialization tags
- Direct contact buttons

### Team Features
- Team member grid
- Agent categories
- Specialization filtering
- Contact forms

### Property Management
- Agent property listings
- Portfolio showcases
- Performance metrics
- Client testimonials

## Sections Breakdown

| Section | Description | Agent Focus |
|---------|-------------|-------------|
| **Header** | Light theme navigation | Agent directory link |
| **Hero** | Agent-focused banner | Personal service emphasis |
| **Featured Agents** | Team showcase | Agent cards |
| **Properties** | Agent listings | Agent attribution |
| **Services** | What agents offer | Service highlights |
| **Testimonials** | Client reviews | Agent ratings |
| **CTA** | Contact agent | Lead generation |
| **Footer** | Contact info | Agent contact |

## Responsive Behavior

| Breakpoint | Agent Features |
|------------|----------------|
| **Desktop** | Full agent profiles, team grids |
| **Tablet** | Condensed agent cards |
| **Mobile** | Agent quick view, contact buttons |

### Mobile Agent Experience
- Touch-friendly agent cards
- Quick contact buttons
- Swipeable agent galleries
- Compact profile views

## Technical Specifications

### Page Structure
```
app/(home)/home-v4/
├── page.tsx
└── components/
    ├── AgentHero.tsx
    ├── FeaturedAgents.tsx
    ├── AgentProperties.tsx
    └── AgentCTA.tsx
```

### CSS Classes
```css
/* Light header configuration */
.header-nav.nav-homepage-style.light-header.menu-home4

/* Logo variants */
.header-logo.logo1  /* Dark for dark header */
.header-logo.logo2  /* Light/dark for light header */

/* Button styles */
.ud-btn.btn-white.add-property.bdrs60
```

### JavaScript Chunks
- `home-v4/page-798562c331790a62.js`
- Dashboard profile chunk (linked)
- Agent-related components

## Use Case Recommendations

### Ideal For
- **Individual Agents**: Personal branding focus
- **Boutique Agencies**: Team-centric approach
- **Real Estate Teams**: Collaboration showcase
- **Brokerages**: Agent recruitment platform

### Agent-Centric Features
1. Personal agent profiles
2. Individual property portfolios
3. Client testimonial integration
4. Direct contact channels
5. Performance statistics

### Customization Options
- Agent profile layout
- Team structure display
- Rating/review system
- Contact form configuration

## Agent Card Components

### Profile Information
```
Agent Card contains:
- Profile photo
- Name and title
- Agency affiliation
- Phone number
- Email address
- Property count
- Average rating
- Specialization tags
```

### Interactive Elements
- Favorite agent
- Schedule consultation
- View listings
- Send message
- Social media links

## Comparison with Other Variants

| Feature | Home 1 | Home 2 | Home 3 | Home 4 |
|---------|--------|--------|--------|--------|
| Header Theme | Transparent | Transparent | Light | Light |
| Primary Focus | Property | Service | Property | Agent |
| Logo Style | Standard | Standard | Light | Light |
| CTA Style | Primary | Primary | Primary | White |
| Unique Element | Search form | Contact | Preload | Agent profiles |

## Related Pages

- [Home 3](./home-3.md) - Modern property focus
- [Home 5](./home-5.md) - Agency showcase
- [Agents Page](../other-pages/agents.md) - Agent directory
- [Agent Single](../other-pages/agent-single.md) - Individual agent

---

*Homez - Modern Designed Real Estate React NextJS Template*
