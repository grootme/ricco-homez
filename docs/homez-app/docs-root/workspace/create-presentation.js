const pptxgen = require('pptxgenjs');
const html2pptx = require('/home/z/my-project/ecosystem/skills/pptx/scripts/html2pptx');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'RICCO Real Estate';
    pptx.title = 'Homez - Real Estate React NextJS Template Analysis';
    pptx.subject = 'Template Analysis for RICCO Real Estate Implementation';

    const slidesDir = '/home/z/my-project/ecosystem/web/homez-app/workspace/slides';
    const imagesDir = '/home/z/my-project/ecosystem/web/homez-app/images';

    const slides = [
        'slide01-title.html',
        'slide02-overview.html',
        'slide03-features.html',
        'slide04-homepages.html',
        'slide05-property-pages.html',
        'slide06-dashboard.html',
        'slide07-techstack.html',
        'slide08-screenshots.html',
        'slide09-recommendations.html',
        'slide10-conclusion.html'
    ];

    // Process each slide
    for (let i = 0; i < slides.length; i++) {
        const slidePath = path.join(slidesDir, slides[i]);
        console.log(`Processing slide ${i + 1}: ${slides[i]}`);
        
        try {
            const { slide } = await html2pptx(slidePath, pptx);
            
            // Add images to screenshots slide
            if (slides[i] === 'slide08-screenshots.html') {
                const imageFiles = [
                    { path: path.join(imagesDir, 'home1-demo.png'), x: 0.5, y: 1.2, w: 3, h: 2.2 },
                    { path: path.join(imagesDir, 'homepage.png'), x: 3.7, y: 1.2, w: 3, h: 2.2 },
                    { path: path.join(imagesDir, 'demos-page.png'), x: 6.9, y: 1.2, w: 3, h: 2.2 }
                ];
                
                for (const img of imageFiles) {
                    try {
                        slide.addImage({ 
                            path: img.path, 
                            x: img.x, 
                            y: img.y, 
                            w: img.w, 
                            h: img.h 
                        });
                    } catch (e) {
                        console.log(`Could not add image ${img.path}: ${e.message}`);
                    }
                }
            }
        } catch (error) {
            console.error(`Error processing ${slides[i]}: ${error.message}`);
        }
    }

    // Save the presentation
    const outputPath = '/home/z/my-project/ecosystem/web/homez-app/Homez_Analysis.pptx';
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation saved to: ${outputPath}`);
}

createPresentation().catch(console.error);
