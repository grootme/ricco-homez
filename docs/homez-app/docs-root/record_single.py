#!/usr/bin/env python3
"""
Script para grabar video de una sola página.
Uso: python3 record_single.py <url> <output_name> <category_dir>
"""

import asyncio
import sys
import shutil
from pathlib import Path
from playwright.async_api import async_playwright


async def record_single(url: str, name: str, category_dir: Path):
    """Graba el video de una página."""
    print(f"Grabando: {name} - {url}")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        )
        
        context = await browser.new_context(
            viewport={"width": 1920, "height": 1080},
            record_video_dir=str(category_dir),
            record_video_size={"width": 1920, "height": 1080}
        )
        
        page = await context.new_page()
        video_path = None
        
        try:
            await page.goto(url, wait_until="domcontentloaded", timeout=30000)
            await asyncio.sleep(2)
            
            total_height = await page.evaluate("document.documentElement.scrollHeight")
            viewport_height = 1080
            
            # Scroll en 3 pasos
            scroll_step = max(1, (total_height - viewport_height) // 3)
            for i in range(4):
                scroll_pos = min(i * scroll_step, max(0, total_height - viewport_height))
                await page.evaluate(f"window.scrollTo({{top: {scroll_pos}, behavior: 'smooth'}})")
                await asyncio.sleep(1)
            
            await page.evaluate("window.scrollTo({top: 0, behavior: 'smooth'})")
            await asyncio.sleep(1)
            
            # Hover en botones
            try:
                buttons = await page.query_selector_all('button, a.btn, .btn')
                for btn in buttons[:2]:
                    try:
                        if await btn.is_visible():
                            await btn.hover(timeout=500)
                            await asyncio.sleep(0.3)
                    except:
                        pass
            except:
                pass
            
            await page.evaluate(f"window.scrollTo({{top: {max(0, total_height // 2)}, behavior: 'smooth'}})")
            await asyncio.sleep(1)
            
            video = page.video
            if video:
                video_path = Path(await video.path())
                
        except Exception as e:
            print(f"Error: {e}")
        finally:
            await context.close()
            
            if video_path and video_path.exists():
                final_path = category_dir / f"{name}.webm"
                shutil.move(str(video_path), str(final_path))
                print(f"Guardado: {final_path}")
        
        await browser.close()


if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Uso: python3 record_single.py <url> <name> <category>")
        sys.exit(1)
    
    url = sys.argv[1]
    name = sys.argv[2]
    category = sys.argv[3]
    
    category_dir = Path(f"/home/z/my-project/ecosystem/web/homez-app/videos/{category}")
    category_dir.mkdir(parents=True, exist_ok=True)
    
    asyncio.run(record_single(url, name, category_dir))
