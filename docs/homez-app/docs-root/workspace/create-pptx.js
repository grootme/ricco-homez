const pptxgen = require('pptxgenjs');
const path = require('path');

// Import html2pptx from skills directory
const html2pptx = require('/home/z/my-project/skills/pptx/scripts/html2pptx.js');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'RICCO Ecosystem';
    pptx.title = 'Homez - Análisis Detallado';
    pptx.subject = 'Real Estate React NextJS Template Analysis';

    const slidesDir = '/home/z/my-project/ecosystem/web/homez-app/workspace/slides-new';
    const slides = [
        'slide1-title.html',
        'slide2-overview.html',
        'slide3-features.html',
        'slide4-homepages.html',
        'slide5-propertylist.html',
        'slide6-dashboard.html',
        'slide7-recommendations.html',
        'slide8-conclusion.html'
    ];

    console.log('Creating presentation with', slides.length, 'slides...');

    for (let i = 0; i < slides.length; i++) {
        const slidePath = path.join(slidesDir, slides[i]);
        console.log(`Processing slide ${i + 1}: ${slides[i]}`);
        
        try {
            await html2pptx(slidePath, pptx);
            console.log(`  ✓ Slide ${i + 1} created successfully`);
        } catch (error) {
            console.error(`  ✗ Error creating slide ${i + 1}:`, error.message);
        }
    }

    // Save presentation
    const outputPath = '/home/z/my-project/ecosystem/web/homez-app/Homez_Detailed_Analysis.pptx';
    await pptx.writeFile({ fileName: outputPath });
    console.log('\n✓ Presentation saved to:', outputPath);
}

createPresentation().catch(error => {
    console.error('Failed to create presentation:', error);
    process.exit(1);
});
