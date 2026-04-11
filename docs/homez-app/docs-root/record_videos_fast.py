#!/usr/bin/env python3
"""
Script optimizado para grabar videos de páginas del proyecto Homez.
Graba videos cortos (10-15 segundos) con interacciones básicas.
"""

import asyncio
import sys
from pathlib import Path
from playwright.async_api import async_playwright

# Directorio base para videos
BASE_DIR = Path("/home/z/my-project/ecosystem/web/homez-app/videos")

# Categoría y páginas a procesar (pasado como argumento)
CATEGORIES = {
    "home-pages": [
        {"name": "home-v1", "url": "https://homez-appdir.vercel.app/"},
        {"name": "home-v2", "url": "https://homez-appdir.vercel.app/home-v2"},
        {"name": "home-v3", "url": "https://homez-appdir.vercel.app/home-v3"},
        {"name": "home-v4", "url": "https://homez-appdir.vercel.app/home-v4"},
        {"name": "home-v5", "url": "https://homez-appdir.vercel.app/home-v5"},
        {"name": "home-v6", "url": "https://homez-appdir.vercel.app/home-v6"},
        {"name": "home-v7", "url": "https://homez-appdir.vercel.app/home-v7"},
        {"name": "home-v8", "url": "https://homez-appdir.vercel.app/home-v8"},
        {"name": "home-v9", "url": "https://homez-appdir.vercel.app/home-v9"},
        {"name": "home-v10", "url": "https://homez-appdir.vercel.app/home-v10"},
    ],
    "listing-pages": [
        {"name": "grid-default", "url": "https://homez-appdir.vercel.app/grid-default"},
        {"name": "grid-full-3-col", "url": "https://homez-appdir.vercel.app/grid-full-3-col"},
        {"name": "grid-full-4-col", "url": "https://homez-appdir.vercel.app/grid-full-4-col"},
        {"name": "grid-full-2-col", "url": "https://homez-appdir.vercel.app/grid-full-2-col"},
        {"name": "grid-full-1-col-v1", "url": "https://homez-appdir.vercel.app/grid-full-1-col-v1"},
        {"name": "grid-full-1-col-v2", "url": "https://homez-appdir.vercel.app/grid-full-1-col-v2"},
        {"name": "banner-search-v1", "url": "https://homez-appdir.vercel.app/banner-search-v1"},
        {"name": "banner-search-v2", "url": "https://homez-appdir.vercel.app/banner-search-v2"},
        {"name": "header-map-style", "url": "https://homez-appdir.vercel.app/header-map-style"},
        {"name": "map-v1", "url": "https://homez-appdir.vercel.app/map-v1"},
        {"name": "map-v2", "url": "https://homez-appdir.vercel.app/map-v2"},
        {"name": "map-v3", "url": "https://homez-appdir.vercel.app/map-v3"},
        {"name": "map-v4", "url": "https://homez-appdir.vercel.app/map-v4"},
        {"name": "list-v1", "url": "https://homez-appdir.vercel.app/list-v1"},
        {"name": "list-all-style", "url": "https://homez-appdir.vercel.app/list-all-style"},
    ],
    "property-single-pages": [
        {"name": "single-v1", "url": "https://homez-appdir.vercel.app/single-v1/1"},
        {"name": "single-v2", "url": "https://homez-appdir.vercel.app/single-v2/1"},
        {"name": "single-v3", "url": "https://homez-appdir.vercel.app/single-v3/1"},
        {"name": "single-v4", "url": "https://homez-appdir.vercel.app/single-v4/1"},
        {"name": "single-v5", "url": "https://homez-appdir.vercel.app/single-v5/1"},
        {"name": "single-v6", "url": "https://homez-appdir.vercel.app/single-v6/1"},
        {"name": "single-v7", "url": "https://homez-appdir.vercel.app/single-v7/1"},
        {"name": "single-v8", "url": "https://homez-appdir.vercel.app/single-v8/1"},
        {"name": "single-v9", "url": "https://homez-appdir.vercel.app/single-v9/1"},
        {"name": "single-v10", "url": "https://homez-appdir.vercel.app/single-v10/1"},
    ],
    "agent-pages": [
        {"name": "agents", "url": "https://homez-appdir.vercel.app/agents"},
        {"name": "agent-single", "url": "https://homez-appdir.vercel.app/agent-single/1"},
        {"name": "agency", "url": "https://homez-appdir.vercel.app/agency"},
        {"name": "agency-single", "url": "https://homez-appdir.vercel.app/agency-single/1"},
    ],
    "dashboard-pages": [
        {"name": "dashboard-home", "url": "https://homez-appdir.vercel.app/dashboard-home"},
        {"name": "dashboard-message", "url": "https://homez-appdir.vercel.app/dashboard-message"},
        {"name": "dashboard-add-property", "url": "https://homez-appdir.vercel.app/dashboard-add-property"},
        {"name": "dashboard-my-properties", "url": "https://homez-appdir.vercel.app/dashboard-my-properties"},
        {"name": "dashboard-my-favourites", "url": "https://homez-appdir.vercel.app/dashboard-my-favourites"},
        {"name": "dashboard-saved-search", "url": "https://homez-appdir.vercel.app/dashboard-saved-search"},
        {"name": "dashboard-reviews", "url": "https://homez-appdir.vercel.app/dashboard-reviews"},
        {"name": "dashboard-my-package", "url": "https://homez-appdir.vercel.app/dashboard-my-package"},
        {"name": "dashboard-my-profile", "url": "https://homez-appdir.vercel.app/dashboard-my-profile"},
    ],
    "blog-pages": [
        {"name": "blog-list-v1", "url": "https://homez-appdir.vercel.app/blog-list-v1"},
        {"name": "blog-list-v2", "url": "https://homez-appdir.vercel.app/blog-list-v2"},
        {"name": "blog-list-v3", "url": "https://homez-appdir.vercel.app/blog-list-v3"},
        {"name": "blog-single", "url": "https://homez-appdir.vercel.app/blogs/2"},
    ],
    "other-pages": [
        {"name": "about", "url": "https://homez-appdir.vercel.app/about"},
        {"name": "contact", "url": "https://homez-appdir.vercel.app/contact"},
        {"name": "pricing", "url": "https://homez-appdir.vercel.app/pricing"},
        {"name": "faq", "url": "https://homez-appdir.vercel.app/faq"},
        {"name": "login", "url": "https://homez-appdir.vercel.app/login"},
        {"name": "register", "url": "https://homez-appdir.vercel.app/register"},
        {"name": "not-found", "url": "https://homez-appdir.vercel.app/not-found"},
        {"name": "invoice", "url": "https://homez-appdir.vercel.app/invoice"},
    ],
}


async def record_page(browser, page_info, category_dir, index, total):
    """Graba el video de una página."""
    name = page_info["name"]
    url = page_info["url"]
    
    print(f"[{index}/{total}] Grabando: {name}")
    
    # Crear contexto con grabación de video
    context = await browser.new_context(
        viewport={"width": 1920, "height": 1080},
        record_video_dir=str(category_dir),
        record_video_size={"width": 1920, "height": 1080}
    )
    
    page = await context.new_page()
    video_path = None
    
    try:
        await page.goto(url, wait_until="domcontentloaded", timeout=45000)
        
        # Esperar un poco para que cargue
        await asyncio.sleep(2)
        
        # Obtener altura de la página
        total_height = await page.evaluate("document.documentElement.scrollHeight")
        viewport_height = 1080
        
        # Hacer scroll suave hacia abajo (3 pasos)
        scroll_step = (total_height - viewport_height) // 3
        for i in range(4):
            scroll_pos = min(i * scroll_step, total_height - viewport_height)
            await page.evaluate(f"window.scrollTo({{top: {scroll_pos}, behavior: 'smooth'}})")
            await asyncio.sleep(1.5)
        
        # Volver arriba
        await page.evaluate("window.scrollTo({top: 0, behavior: 'smooth'})")
        await asyncio.sleep(1)
        
        # Intentar hacer hover en algunos botones
        try:
            buttons = await page.query_selector_all('button, a.btn, .btn, [role="button"]')
            for i, btn in enumerate(buttons[:2]):
                try:
                    if await btn.is_visible():
                        await btn.hover(timeout=1000)
                        await asyncio.sleep(0.5)
                except:
                    pass
        except:
            pass
        
        # Último scroll
        await page.evaluate(f"window.scrollTo({{top: {total_height // 2}, behavior: 'smooth'}})")
        await asyncio.sleep(1)
        
        # Obtener ruta del video
        video = page.video
        if video:
            video_path = Path(await video.path())
        
    except Exception as e:
        print(f"  Error: {e}")
    finally:
        await context.close()
        
        # Renombrar video si existe
        import shutil
        if video_path and video_path.exists():
            final_path = category_dir / f"{name}.webm"
            shutil.move(str(video_path), str(final_path))
            print(f"  Guardado: {final_path}")
        else:
            # Buscar cualquier video en el directorio
            for f in category_dir.glob("*.webm"):
                if f.stem not in [p["name"] for p in CATEGORIES.get(category_dir.name, [])]:
                    final_path = category_dir / f"{name}.webm"
                    f.rename(final_path)
                    print(f"  Guardado: {final_path}")
                    break


async def main(category_name=None):
    """Función principal."""
    print("=" * 50)
    print("Grabando videos - Proyecto Homez")
    print("=" * 50)
    
    if category_name and category_name in CATEGORIES:
        categories = {category_name: CATEGORIES[category_name]}
    else:
        categories = CATEGORIES
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        )
        
        for category, pages in categories.items():
            print(f"\n[{category}] - {len(pages)} páginas")
            category_dir = BASE_DIR / category
            category_dir.mkdir(parents=True, exist_ok=True)
            
            for i, page_info in enumerate(pages, 1):
                await record_page(browser, page_info, category_dir, i, len(pages))
        
        await browser.close()
    
    print("\n" + "=" * 50)
    print("Completado!")
    print("=" * 50)


if __name__ == "__main__":
    category = sys.argv[1] if len(sys.argv) > 1 else None
    asyncio.run(main(category))
