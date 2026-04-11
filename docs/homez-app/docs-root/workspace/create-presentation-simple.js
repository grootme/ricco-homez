const pptxgen = require('pptxgenjs');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'RICCO Real Estate';
    pptx.title = 'Homez - Real Estate React NextJS Template Analysis';
    pptx.subject = 'Template Analysis for RICCO Real Estate Implementation';

    const imagesDir = '/home/z/my-project/ecosystem/web/homez-app/images';

    // Colors (no # prefix for pptxgenjs)
    const DARK_BG = '1a1a2e';
    const ACCENT = 'e94560';
    const LIGHT_BG = 'f8f9fa';
    const TEXT_DARK = '1a1a2e';
    const TEXT_LIGHT = 'ffffff';
    const TEXT_GRAY = '6c757d';
    const TEXT_BODY = '495057';

    // Slide 1: Title
    let slide = pptx.addSlide();
    slide.background = { color: DARK_BG };
    slide.addText('Homez', { x: 0.5, y: 1.5, w: 9, h: 1, fontSize: 48, bold: true, color: TEXT_LIGHT, align: 'center' });
    slide.addText('Real Estate React NextJS Template Analysis', { x: 0.5, y: 2.5, w: 9, h: 0.5, fontSize: 20, bold: true, color: ACCENT, align: 'center' });
    slide.addText('A comprehensive analysis of Homez - a modern designed real estate template for building professional property listing websites', { x: 1, y: 3.2, w: 8, h: 0.8, fontSize: 14, color: TEXT_GRAY, align: 'center' });
    slide.addShape('rect', { x: 0.3, y: 0.3, w: 1.5, h: 0.35, fill: { color: ACCENT } });
    slide.addText('Premium Template', { x: 0.3, y: 0.3, w: 1.5, h: 0.35, fontSize: 9, bold: true, color: TEXT_LIGHT, align: 'center', valign: 'middle' });
    slide.addText('ThemeForest: item/47704622', { x: 0.5, y: 5, w: 4, h: 0.3, fontSize: 10, color: TEXT_GRAY });
    slide.addText('Analysis for RICCO Real Estate', { x: 5.5, y: 5, w: 4, h: 0.3, fontSize: 10, color: TEXT_GRAY, align: 'right' });

    // Slide 2: Overview
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('What is Homez?', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    slide.addText('Overview', { x: 0.5, y: 1.2, w: 4, h: 0.4, fontSize: 16, bold: true, color: TEXT_DARK });
    slide.addShape('rect', { x: 0.5, y: 1.7, w: 4.3, h: 0.8, fill: { color: 'ffffff' } });
    slide.addShape('rect', { x: 0.5, y: 1.7, w: 0.08, h: 0.8, fill: { color: ACCENT } });
    slide.addText('Description', { x: 0.7, y: 1.75, w: 4, h: 0.2, fontSize: 9, bold: true, color: TEXT_GRAY });
    slide.addText('Homez is a premium Real Estate React NextJS Template that lets you run a realtor company, real estate agency, broker, agents and related businesses.', { x: 0.7, y: 1.95, w: 4, h: 0.5, fontSize: 10, color: TEXT_BODY });

    slide.addShape('rect', { x: 0.5, y: 2.6, w: 4.3, h: 0.7, fill: { color: 'ffffff' } });
    slide.addShape('rect', { x: 0.5, y: 2.6, w: 0.08, h: 0.7, fill: { color: ACCENT } });
    slide.addText('Purpose', { x: 0.7, y: 2.65, w: 4, h: 0.2, fontSize: 9, bold: true, color: TEXT_GRAY });
    slide.addText('A comprehensive solution for property listing, management, and real estate business operations with modern UI/UX design.', { x: 0.7, y: 2.85, w: 4, h: 0.4, fontSize: 10, color: TEXT_BODY });

    slide.addShape('rect', { x: 0.5, y: 3.4, w: 4.3, h: 0.7, fill: { color: 'ffffff' } });
    slide.addShape('rect', { x: 0.5, y: 3.4, w: 0.08, h: 0.7, fill: { color: ACCENT } });
    slide.addText('Marketplace', { x: 0.7, y: 3.45, w: 4, h: 0.2, fontSize: 9, bold: true, color: TEXT_GRAY });
    slide.addText('Available on ThemeForest as a premium commercial template with regular and extended license options.', { x: 0.7, y: 3.65, w: 4, h: 0.4, fontSize: 10, color: TEXT_BODY });

    slide.addText('Key Highlights', { x: 5.2, y: 1.2, w: 4, h: 0.4, fontSize: 16, bold: true, color: TEXT_DARK });
    const highlights = [
        'Modern React NextJS architecture',
        '10 Home page variants',
        '15+ Property listing pages',
        '10 Property detail pages',
        'Comprehensive user dashboard',
        'Advanced search functionality',
        'Mobile-friendly responsive design',
        '360 Virtual tour support',
        'Mortgage calculator built-in',
        'Property comparison feature'
    ];
    slide.addText(highlights.map(h => ({ text: h, options: { bullet: true, indent: 15 } })), { x: 5.2, y: 1.7, w: 4.3, h: 3.3, fontSize: 11, color: TEXT_BODY });

    // Slide 3: Key Features
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('Key Features (10 Items)', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    const features = [
        { title: '1. Mortgage Calculator', desc: 'Built-in widget for calculating mortgage payments for properties with easy-to-use interface.' },
        { title: '2. Compare Property', desc: 'Compare multiple properties against each other by features and parameters side-by-side.' },
        { title: '3. Saved Properties', desc: 'Users can save and organize favorite properties to their account for later viewing.' },
        { title: '4. Page Statistics', desc: 'Property owners and agencies can view audience numbers on their listings.' },
        { title: '5. Agencies & Agents', desc: 'Register as agency, add agents and manage listings with role-based access.' },
        { title: '6. Mobile Friendly', desc: 'Retina ready and fully responsive design for all device types and screen sizes.' },
        { title: '7. 360 Virtual Tour', desc: 'Immersive virtual property tours for enhanced user experience and engagement.' },
        { title: '8. Floor Plans', desc: 'Upload and display detailed property floor plans with room dimensions.' },
        { title: '9. Nearby Listings', desc: 'Overview of nearby amenities including schools, stores, hospitals and more.' },
        { title: '10. Advanced Search', desc: 'Powerful search with filters for location, price, type, amenities and more.' }
    ];

    features.forEach((f, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 0.5 + col * 4.75;
        const y = 1.15 + row * 0.85;
        slide.addShape('rect', { x: x, y: y, w: 4.5, h: 0.75, fill: { color: 'ffffff' } });
        slide.addShape('rect', { x: x, y: y, w: 4.5, h: 0.06, fill: { color: ACCENT } });
        slide.addText(f.title, { x: x + 0.1, y: y + 0.1, w: 4.3, h: 0.25, fontSize: 11, bold: true, color: TEXT_DARK });
        slide.addText(f.desc, { x: x + 0.1, y: y + 0.35, w: 4.3, h: 0.35, fontSize: 9, color: TEXT_GRAY });
    });

    // Slide 4: Home Pages
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('Home Page Variants (10 Versions)', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    slide.addText('Available Home Pages', { x: 0.5, y: 1.2, w: 4, h: 0.3, fontSize: 14, bold: true, color: TEXT_DARK });
    const homes1 = ['Home 1 - Default layout with hero banner', 'Home 2 - Alternative hero design', 'Home 3 - Modern property focus', 'Home 4 - Agent-focused design', 'Home 5 - Agency showcase'];
    homes1.forEach((h, i) => {
        const y = 1.6 + i * 0.55;
        slide.addShape('rect', { x: 0.5, y: y, w: 4.5, h: 0.45, fill: { color: 'ffffff' } });
        slide.addShape('ellipse', { x: 0.6, y: y + 0.1, w: 0.25, h: 0.25, fill: { color: ACCENT } });
        slide.addText((i + 1).toString(), { x: 0.6, y: y + 0.1, w: 0.25, h: 0.25, fontSize: 9, bold: true, color: TEXT_LIGHT, align: 'center', valign: 'middle' });
        slide.addText(h, { x: 1, y: y + 0.05, w: 3.9, h: 0.35, fontSize: 10, color: TEXT_BODY, valign: 'middle' });
    });

    slide.addText('More Variants', { x: 5.2, y: 1.2, w: 4, h: 0.3, fontSize: 14, bold: true, color: TEXT_DARK });
    const homes2 = ['Home 6 - Minimal design', 'Home 7 - Featured listings', 'Home 8 - Map integration', 'Home 9 - Video hero', 'Home 10 - Full-width design'];
    homes2.forEach((h, i) => {
        const y = 1.6 + i * 0.55;
        slide.addShape('rect', { x: 5.2, y: y, w: 4.3, h: 0.45, fill: { color: 'ffffff' } });
        slide.addShape('ellipse', { x: 5.3, y: y + 0.1, w: 0.25, h: 0.25, fill: { color: ACCENT } });
        slide.addText((i + 6).toString(), { x: 5.3, y: y + 0.1, w: 0.25, h: 0.25, fontSize: 9, bold: true, color: TEXT_LIGHT, align: 'center', valign: 'middle' });
        slide.addText(h, { x: 5.7, y: y + 0.05, w: 3.7, h: 0.35, fontSize: 10, color: TEXT_BODY, valign: 'middle' });
    });

    slide.addShape('rect', { x: 5.2, y: 4.4, w: 4.3, h: 0.6, fill: { color: DARK_BG } });
    slide.addText('All home pages come with ready-to-use designs that can be installed with a single click. Mix and match elements from different layouts.', { x: 5.3, y: 4.45, w: 4.1, h: 0.5, fontSize: 9, color: TEXT_LIGHT });

    // Slide 5: Property Pages
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('Property Pages', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    slide.addText('List Pages (15+ Variants)', { x: 0.5, y: 1.15, w: 4.5, h: 0.3, fontSize: 13, bold: true, color: TEXT_DARK });
    const listPages = ['Grid Default - Standard grid layout', 'List V1 - List view layout', 'Grid Full 2/3/4 Col - Multiple columns', 'Grid Full 1 Col V1/V2 - Single column', 'Map V1-V4 - Map-based listings', 'Banner Search - Banner with search'];
    slide.addText(listPages.map(p => ({ text: p, options: { bullet: true } })), { x: 0.5, y: 1.5, w: 4.5, h: 2, fontSize: 10, color: TEXT_BODY });

    slide.addShape('rect', { x: 0.5, y: 3.7, w: 2, h: 1, fill: { color: DARK_BG } });
    slide.addText('+15', { x: 0.5, y: 3.8, w: 2, h: 0.5, fontSize: 28, bold: true, color: ACCENT, align: 'center' });
    slide.addText('Property List Pages', { x: 0.5, y: 4.3, w: 2, h: 0.3, fontSize: 9, color: TEXT_LIGHT, align: 'center' });

    slide.addText('Detail Pages (10 Variants)', { x: 5.2, y: 1.15, w: 4.5, h: 0.3, fontSize: 13, bold: true, color: TEXT_DARK });
    const detailPages = ['Single V1 - Standard property detail', 'Single V2 - Gallery focused', 'Single V3 - Map sidebar', 'Single V4 - Virtual tour highlight', 'Single V5 - Floor plan showcase', 'Single V6-V10 - Various modern layouts'];
    slide.addText(detailPages.map(p => ({ text: p, options: { bullet: true } })), { x: 5.2, y: 1.5, w: 4.3, h: 2, fontSize: 10, color: TEXT_BODY });

    slide.addShape('rect', { x: 5.2, y: 3.7, w: 2, h: 1, fill: { color: DARK_BG } });
    slide.addText('+10', { x: 5.2, y: 3.8, w: 2, h: 0.5, fontSize: 28, bold: true, color: ACCENT, align: 'center' });
    slide.addText('Property Detail Pages', { x: 5.2, y: 4.3, w: 2, h: 0.3, fontSize: 9, color: TEXT_LIGHT, align: 'center' });

    // Slide 6: Dashboard
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('User Dashboard Features', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    slide.addText('Dashboard Capabilities', { x: 0.5, y: 1.15, w: 5, h: 0.3, fontSize: 13, bold: true, color: TEXT_DARK });

    // Feature groups
    const groups = [
        { title: 'Property Management', items: ['Submit Properties', 'Manage Properties', 'Edit Listings', 'Delete Listings'] },
        { title: 'User Features', items: ['User Profiles', 'Manage Agents', 'Manage Agencies', 'Saved Searches'] },
        { title: 'Communication & Payments', items: ['Payment Integration', 'Membership System', 'Private Message', 'Reviews'] }
    ];
    groups.forEach((g, gi) => {
        const y = 1.55 + gi * 1.05;
        slide.addShape('rect', { x: 0.5, y: y, w: 5, h: 0.95, fill: { color: 'ffffff' } });
        slide.addText(g.title, { x: 0.6, y: y + 0.05, w: 4.8, h: 0.25, fontSize: 10, bold: true, color: TEXT_DARK });
        g.items.forEach((item, ii) => {
            const ix = 0.6 + (ii % 2) * 2.4;
            const iy = y + 0.35 + Math.floor(ii / 2) * 0.28;
            slide.addShape('rect', { x: ix, y: iy, w: 2.3, h: 0.25, fill: { color: LIGHT_BG } });
            slide.addShape('rect', { x: ix, y: iy, w: 0.04, h: 0.25, fill: { color: ACCENT } });
            slide.addText(item, { x: ix + 0.08, y: iy, w: 2.2, h: 0.25, fontSize: 8, color: TEXT_BODY, valign: 'middle' });
        });
    });

    slide.addText('Dashboard Sections', { x: 5.7, y: 1.15, w: 3.8, h: 0.3, fontSize: 13, bold: true, color: TEXT_DARK });
    const sections = ['Dashboard Home - Statistics overview', 'Properties List - All listings', 'Add Property - New listing form', 'Profile - User settings', 'Membership - Subscription plans', 'Messages - Private messaging', 'Reviews - Property feedback', 'Favorites - Saved properties', 'Saved Searches - Search history', 'Account Settings - Preferences'];
    slide.addText(sections.map(s => ({ text: s, options: { bullet: true } })), { x: 5.7, y: 1.5, w: 3.8, h: 3.5, fontSize: 9, color: TEXT_BODY });

    // Slide 7: Tech Stack
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('Tech Stack', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    slide.addText('Frontend Technologies', { x: 0.5, y: 1.15, w: 4.5, h: 0.3, fontSize: 12, bold: true, color: TEXT_DARK });
    const frontend = [
        { abbr: 'NX', name: 'Next.js', desc: 'React framework with App Router' },
        { abbr: 'TS', name: 'TypeScript', desc: 'Type-safe JavaScript' },
        { abbr: 'BS', name: 'Bootstrap', desc: 'Responsive CSS framework' },
        { abbr: 'SC', name: 'SCSS', desc: 'CSS preprocessor' },
        { abbr: 'WOW', name: 'WOW.js', desc: 'Scroll reveal animations' }
    ];
    frontend.forEach((t, i) => {
        const y = 1.55 + i * 0.65;
        slide.addShape('rect', { x: 0.5, y: y, w: 4.5, h: 0.55, fill: { color: 'ffffff' } });
        slide.addShape('rect', { x: 0.6, y: y + 0.08, w: 0.45, h: 0.4, fill: { color: DARK_BG } });
        slide.addText(t.abbr, { x: 0.6, y: y + 0.08, w: 0.45, h: 0.4, fontSize: 9, bold: true, color: TEXT_LIGHT, align: 'center', valign: 'middle' });
        slide.addText(t.name, { x: 1.15, y: y + 0.05, w: 3.7, h: 0.25, fontSize: 10, bold: true, color: TEXT_DARK });
        slide.addText(t.desc, { x: 1.15, y: y + 0.3, w: 3.7, h: 0.2, fontSize: 8, color: TEXT_GRAY });
    });

    slide.addText('Libraries & Tools', { x: 5.2, y: 1.15, w: 4.3, h: 0.3, fontSize: 12, bold: true, color: TEXT_DARK });
    const tools = [
        { abbr: 'SL', name: 'Slick Carousel', desc: 'Image sliders and carousels' },
        { abbr: 'DM', name: 'DM Sans Font', desc: 'Modern Google Font' },
        { abbr: 'RD', name: 'React DOM', desc: 'React rendering' },
        { abbr: 'RW', name: 'React Widgets', desc: 'UI components' },
        { abbr: 'MP', name: 'Map Integration', desc: 'Google Maps / Mapbox' }
    ];
    tools.forEach((t, i) => {
        const y = 1.55 + i * 0.65;
        slide.addShape('rect', { x: 5.2, y: y, w: 4.3, h: 0.55, fill: { color: 'ffffff' } });
        slide.addShape('rect', { x: 5.3, y: y + 0.08, w: 0.45, h: 0.4, fill: { color: DARK_BG } });
        slide.addText(t.abbr, { x: 5.3, y: y + 0.08, w: 0.45, h: 0.4, fontSize: 9, bold: true, color: TEXT_LIGHT, align: 'center', valign: 'middle' });
        slide.addText(t.name, { x: 5.85, y: y + 0.05, w: 3.5, h: 0.25, fontSize: 10, bold: true, color: TEXT_DARK });
        slide.addText(t.desc, { x: 5.85, y: y + 0.3, w: 3.5, h: 0.2, fontSize: 8, color: TEXT_GRAY });
    });

    // Slide 8: Screenshots
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('Screenshots', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    // Add images
    try {
        slide.addImage({ path: path.join(imagesDir, 'home1-demo.png'), x: 0.5, y: 1.2, w: 3, h: 2.5 });
        slide.addText('Home Page Demo', { x: 0.5, y: 3.75, w: 3, h: 0.3, fontSize: 10, bold: true, color: TEXT_BODY, align: 'center' });
    } catch (e) {}

    try {
        slide.addImage({ path: path.join(imagesDir, 'homepage.png'), x: 3.6, y: 1.2, w: 3, h: 2.5 });
        slide.addText('Homepage Design', { x: 3.6, y: 3.75, w: 3, h: 0.3, fontSize: 10, bold: true, color: TEXT_BODY, align: 'center' });
    } catch (e) {}

    try {
        slide.addImage({ path: path.join(imagesDir, 'demos-page.png'), x: 6.7, y: 1.2, w: 3, h: 2.5 });
        slide.addText('Demos Overview', { x: 6.7, y: 3.75, w: 3, h: 0.3, fontSize: 10, bold: true, color: TEXT_BODY, align: 'center' });
    } catch (e) {}

    // Slide 9: Recommendations
    slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    slide.addShape('rect', { x: 0, y: 0, w: 10, h: 1, fill: { color: DARK_BG } });
    slide.addText('Recommendations for RICCO', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_LIGHT });

    slide.addText('Features to Implement', { x: 0.5, y: 1.15, w: 4.5, h: 0.3, fontSize: 12, bold: true, color: TEXT_DARK });
    const recs = [
        { title: 'Mortgage Calculator', desc: 'Essential for Pakistani real estate market with PKR currency support' },
        { title: 'Property Comparison', desc: 'Help buyers make informed decisions by comparing properties' },
        { title: 'Saved Properties', desc: 'User engagement feature for returning visitors' },
        { title: 'Advanced Search', desc: 'Location-based filtering for Pakistani cities and areas' },
        { title: 'Agent Profiles', desc: 'Build trust with local agents and agencies' }
    ];
    recs.forEach((r, i) => {
        const y = 1.5 + i * 0.65;
        slide.addShape('rect', { x: 0.5, y: y, w: 4.5, h: 0.55, fill: { color: 'ffffff' } });
        slide.addShape('rect', { x: 0.5, y: y, w: 0.06, h: 0.55, fill: { color: ACCENT } });
        slide.addText(r.title, { x: 0.65, y: y + 0.05, w: 4.2, h: 0.25, fontSize: 10, bold: true, color: TEXT_DARK });
        slide.addText(r.desc, { x: 0.65, y: y + 0.3, w: 4.2, h: 0.2, fontSize: 8, color: TEXT_GRAY });
    });

    slide.addText('Adaptations Needed', { x: 5.2, y: 1.15, w: 4.3, h: 0.3, fontSize: 12, bold: true, color: TEXT_DARK });
    slide.addShape('rect', { x: 5.2, y: 1.5, w: 4.3, h: 1.2, fill: { color: DARK_BG } });
    slide.addText('Localization', { x: 5.3, y: 1.55, w: 4.1, h: 0.25, fontSize: 10, bold: true, color: ACCENT });
    slide.addText('Currency: PKR (Pakistani Rupee)\nLanguage: Urdu + English support\nLocations: Pakistani cities, areas\nPayments: JazzCash, EasyPaisa', { x: 5.3, y: 1.85, w: 4.1, h: 0.8, fontSize: 9, color: TEXT_LIGHT });

    slide.addText('Best Practices from Homez', { x: 5.2, y: 2.85, w: 4.3, h: 0.3, fontSize: 12, bold: true, color: TEXT_DARK });
    const practices = [
        { title: 'Clean Modern UI', desc: 'Professional design that builds trust' },
        { title: 'Comprehensive Details', desc: 'Property pages with all necessary information' },
        { title: 'Multiple Layouts', desc: 'Flexibility for different property types' }
    ];
    practices.forEach((p, i) => {
        const y = 3.2 + i * 0.55;
        slide.addShape('rect', { x: 5.2, y: y, w: 4.3, h: 0.45, fill: { color: 'ffffff' } });
        slide.addShape('rect', { x: 5.2, y: y, w: 0.06, h: 0.45, fill: { color: ACCENT } });
        slide.addText(p.title, { x: 5.35, y: y + 0.02, w: 4, h: 0.2, fontSize: 9, bold: true, color: TEXT_DARK });
        slide.addText(p.desc, { x: 5.35, y: y + 0.22, w: 4, h: 0.18, fontSize: 8, color: TEXT_GRAY });
    });

    // Slide 10: Conclusion
    slide = pptx.addSlide();
    slide.background = { color: DARK_BG };
    slide.addText('Conclusion', { x: 0.5, y: 1.5, w: 9, h: 0.8, fontSize: 36, bold: true, color: TEXT_LIGHT, align: 'center' });
    slide.addText([
        { text: 'Homez provides ', options: { color: TEXT_LIGHT } },
        { text: 'modern design patterns', options: { color: ACCENT, bold: true } },
        { text: ', advanced features like mortgage calculator, property comparison, and virtual tours that can be adapted for the Pakistani real estate market.', options: { color: TEXT_LIGHT } }
    ], { x: 1, y: 2.5, w: 8, h: 0.8, fontSize: 12, align: 'center' });
    slide.addText([
        { text: 'For RICCO Real Estate, combining Homez design patterns with a custom backend will create a ', options: { color: TEXT_LIGHT } },
        { text: 'complete solution', options: { color: ACCENT, bold: true } },
        { text: ' tailored to local market needs.', options: { color: TEXT_LIGHT } }
    ], { x: 1, y: 3.4, w: 8, h: 0.6, fontSize: 12, align: 'center' });
    slide.addText('Analysis completed for RICCO Real Estate Project', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 10, color: TEXT_GRAY, align: 'center' });

    // Save the presentation
    const outputPath = '/home/z/my-project/ecosystem/web/homez-app/Homez_Analysis.pptx';
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation saved to: ${outputPath}`);
}

createPresentation().catch(console.error);
