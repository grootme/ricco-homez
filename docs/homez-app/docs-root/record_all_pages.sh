#!/bin/bash
BASE_URL="http://localhost:3000/es"
PAGES_DIR="/home/z/my-project/ecosystem/web/homez-app/pages"

record_page() {
  local url="$1"
  local output="$2"
  local wait_time="${3:-25}"
  
  echo "Recording: $url -> $output"
  
  # Navigate to the page
  agent-browser goto "$url"
  sleep 3
  
  # Start recording
  agent-browser record start "$output"
  sleep 2
  
  # Auto-scroll: scroll down every 5 seconds for the total wait time
  local elapsed=0
  while [ $elapsed -lt $wait_time ]; do
    agent-browser scroll down
    sleep 5
    elapsed=$((elapsed + 5))
  done
  
  # Stop recording
  agent-browser record stop
  sleep 1
  
  echo "Done: $output"
}

# HOME PAGES
echo "=== RECORDING HOME PAGES ==="
for v in v2 v3 v4 v5 v6 v7 v8 v9 v10; do
  record_page "${BASE_URL}/home-${v}" "${PAGES_DIR}/home/home-${v}/videos/home-${v}.webm" 30
done

echo "=== ALL HOME PAGES DONE ==="
