# Home 9 - Video Hero Section

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v9](https://homez-appdir.vercel.app/home-v9)  
**Template Type:** Homepage  
**Version:** 9

Home 9 features a dynamic video hero section, creating an immersive first impression for visitors. This variant uses video content to showcase properties, neighborhoods, or brand stories in an engaging, cinematic format.

## Layout Components

### Hero Section
- **Video Background**: Full-screen or large video player
- **Video Overlay**: Content overlay on video
- **Play/Pause Controls**: Video playback controls
- **Mute/Unmute**: Audio control
- **Fallback Image**: Static image for no-video scenarios

### Video Integration
- **Autoplay Option**: Automatic video start
- **Loop Functionality**: Continuous video playback
- **Responsive Video**: Adaptive video sizing
- **Performance Optimized**: Lazy loading and optimization

### Content Overlay
- **Hero Text**: Headline over video
- **Search Form**: Search overlay on video
- **CTA Buttons**: Action buttons
- **Scroll Indicator**: Encourage scrolling

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Hero Type** | Video background |
| **Video Source** | MP4, YouTube, Vimeo |
| **Overlay Style** | Semi-transparent dark |
| **Header Style** | nav-homepage-style at-home2 |
| **Content Visibility** | High contrast over video |

### Video Configuration
```javascript
videoOptions: {
  src: '/videos/hero-video.mp4',
  poster: '/images/video-poster.jpg',
  autoplay: true,
  muted: true,
  loop: true,
  playsinline: true,
  controls: false
}
```

### Overlay Styling
```css
/* Video overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
```

## Key Features

### Video Player Features
- Autoplay on load
- Muted by default
- Loop continuously
- Responsive scaling
- Mobile-friendly

### Hero Content
- Eye-catching headline
- Value proposition text
- Integrated search form
- Call-to-action buttons
- Scroll down indicator

### Performance Features
- Lazy video loading
- Poster image fallback
- Reduced data usage option
- Mobile video optimization
- Connection speed detection

## Sections Breakdown

| Section | Description | Video Integration |
|---------|-------------|-------------------|
| **Header** | Standard navigation | Transparent over video |
| **Video Hero** | Full-screen video | Main video section |
| **Search** | Property search | Overlay on video |
| **Properties** | Featured listings | Below video |
| **Features** | Platform benefits | Standard section |
| **Testimonials** | Client reviews | Standard section |
| **CTA** | Lead generation | Standard section |
| **Footer** | Site information | Standard footer |

## Responsive Behavior

| Breakpoint | Video Behavior |
|------------|----------------|
| **Desktop** | Full video with overlay |
| **Tablet** | Scaled video, touch controls |
| **Mobile** | Poster image or compressed video |

### Mobile Considerations
```
Mobile Video Strategy:
1. Use poster image on mobile
2. Or load compressed mobile video
3. Touch-friendly video controls
4. Bandwidth-aware loading
5. Fast first paint priority
```

## Technical Specifications

### Page Structure
```
app/(home)/home-v9/
├── page.tsx
└── components/
    ├── VideoHero.tsx
    ├── VideoPlayer.tsx
    ├── VideoOverlay.tsx
    └── HeroSearchForm.tsx
```

### Video Implementation
```jsx
// React video component
<video
  autoPlay
  muted
  loop
  playsInline
  poster="/images/video-poster.jpg"
  className="hero-video"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
  <source src="/videos/hero.webm" type="video/webm" />
</video>
```

### Preload Strategy
```html
<!-- Preload poster image -->
<link rel="preload" as="image" 
      imagesrcset="/images/about/cta-member-1.png">
```

## Use Case Recommendations

### Ideal For
- **Luxury Real Estate**: Premium brand presentation
- **Destination Properties**: Showcase locations
- **Brand Storytelling**: Company narrative
- **High-End Developments**: Project showcases

### Video Content Ideas
1. Property drone footage
2. Neighborhood tours
3. Agent introductions
4. Client testimonials
5. Company culture

### Customization Points
- Video source URL
- Poster image
- Overlay opacity
- Content positioning
- CTA text and links

## Video Best Practices

### Technical Guidelines
```
Recommended Video Specs:
- Format: MP4 (H.264) + WebM
- Resolution: 1920x1080 (1080p)
- File size: < 10MB for hero
- Bitrate: 2-5 Mbps
- Frame rate: 24-30 fps
- Audio: AAC (muted default)
```

### User Experience
- Clear play controls
- Mute by default
- Fast loading poster
- Skip video option
- Mobile fallback

### Accessibility
- Alt text for video content
- Captions available
- Keyboard controls
- Reduced motion option
- Screen reader support

## Video Hero Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| **Autoplay Muted** | Auto-plays silently | Brand impression |
| **Click to Play** | User initiates | User control |
| **YouTube Embed** | External video | Easy management |
| **Vimeo Embed** | Professional video | High quality |
| **Self-hosted** | Local MP4 file | Full control |

## Performance Optimization

### Loading Strategy
```
1. Load poster image immediately
2. Lazy load video on scroll
3. Detect connection speed
4. Serve appropriate quality
5. Cache video for return visits
```

### Mobile Optimization
- Smaller video file
- Poster image replacement
- Reduced motion preference
- Touch-optimized controls

## Comparison Table

| Feature | Home 8 | Home 9 |
|---------|--------|--------|
| Hero Type | Map-based | Video background |
| Engagement | Geographic exploration | Visual storytelling |
| Performance | Map loading | Video loading |
| Content | Property locations | Brand/property showcase |

## Related Pages

- [Home 8](./home-8.md) - Map integration focus
- [Home 10](./home-10.md) - Full-width design
- [Property Single V9](../property-single-pages/single-v9.md) - Video tour emphasis

---

*Homez - Modern Designed Real Estate React NextJS Template*
