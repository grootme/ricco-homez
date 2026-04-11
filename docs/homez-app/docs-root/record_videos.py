#!/usr/bin/env python3
"""
Script para grabar videos de todas las páginas del proyecto Homez.
Usa Playwright para navegar y grabar el comportamiento de cada página.
"""

import asyncio
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

# Directorio base para videos
BASE_DIR = Path("/home/z/my-project/ecosystem/web/homez-app/videos")

# URLs de todas las páginas organizadas por categoría
PAGES = {
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


async def scroll_page(page, direction="down", pause=0.5):
    """Hace scroll suave en la página."""
    # Obtener la altura total de la página
    total_height = await page.evaluate("document.documentElement.scrollHeight")
    viewport_height = await page.evaluate("window.innerHeight")
    
    # Calcular número de pasos de scroll
    scroll_step = viewport_height // 2
    current_position = 0
    
    if direction == "down":
        while current_position < total_height:
            await page.evaluate(f"window.scrollTo(0, {current_position})")
            await asyncio.sleep(pause)
            current_position += scroll_step
            total_height = await page.evaluate("document.documentElement.scrollHeight")
    else:  # up
        current_position = total_height
        while current_position > 0:
            await page.evaluate(f"window.scrollTo(0, {current_position})")
            await asyncio.sleep(pause)
            current_position -= scroll_step


async def interact_with_page(page, page_info):
    """Interactúa con elementos de la página."""
    try:
        # Esperar a que la página cargue
        await page.wait_for_load_state("networkidle", timeout=30000)
        await asyncio.sleep(1)  # Pausa adicional para animaciones
        
        # Hacer scroll hacia abajo lentamente
        await scroll_page(page, "down", pause=0.3)
        
        # Intentar hacer click en algunos elementos interactivos
        # Buscar botones y links clickeables
        try:
            buttons = await page.query_selector_all('button, a.btn, .btn, [role="button"]')
            for i, button in enumerate(buttons[:3]):  # Solo los primeros 3
                try:
                    if await button.is_visible():
                        await button.hover()
                        await asyncio.sleep(0.3)
                except Exception:
                    pass
        except Exception:
            pass
        
        # Volver arriba
        await page.evaluate("window.scrollTo(0, 0)")
        await asyncio.sleep(0.5)
        
        # Segundo scroll más lento
        await scroll_page(page, "down", pause=0.5)
        
    except Exception as e:
        print(f"  Warning during interaction: {e}")


async def record_page(browser, page_info, category_dir):
    """Graba el video de una página."""
    name = page_info["name"]
    url = page_info["url"]
    video_path = category_dir / f"{name}.webm"
    
    print(f"  Grabando: {name} - {url}")
    
    # Crear contexto con grabación de video
    context = await browser.new_context(
        viewport={"width": 1920, "height": 1080},
        record_video_dir=str(category_dir),
        record_video_size={"width": 1920, "height": 1080}
    )
    
    page = await context.new_page()
    
    try:
        # Navegar a la página
        await page.goto(url, wait_until="domcontentloaded", timeout=60000)
        
        # Interactuar con la página
        await interact_with_page(page, page_info)
        
    except Exception as e:
        print(f"  Error grabando {name}: {e}")
    finally:
        # Cerrar página y contexto
        await context.close()
        
        # Renombrar el video generado
        video_file = category_dir / "video.webm"
        if video_file.exists():
            video_file.rename(video_path)
            print(f"  Video guardado: {video_path}")
        
        # También buscar otros archivos de video generados
        for f in category_dir.glob("*.webm"):
            if f.name != f"{name}.webm" and f.name != "video.webm":
                f.rename(category_dir / f"{name}.webm")
                print(f"  Video guardado: {category_dir / f'{name}.webm'}")


async def main():
    """Función principal."""
    print("=" * 60)
    print("Grabando videos del proyecto Homez")
    print("=" * 60)
    
    # Crear directorios si no existen
    for category in PAGES.keys():
        category_dir = BASE_DIR / category
        category_dir.mkdir(parents=True, exist_ok=True)
    
    async with async_playwright() as p:
        # Lanzar navegador
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        )
        
        total_pages = sum(len(pages) for pages in PAGES.values())
        current = 0
        
        for category, pages in PAGES.items():
            print(f"\n[{category}] - {len(pages)} páginas")
            category_dir = BASE_DIR / category
            
            for page_info in pages:
                current += 1
                print(f"\n[{current}/{total_pages}]", end=" ")
                await record_page(browser, page_info, category_dir)
        
        await browser.close()
    
    print("\n" + "=" * 60)
    print("Grabación completada!")
    print("=" * 60)


if __name__ == "__main__":
    asyncio.run(main())
