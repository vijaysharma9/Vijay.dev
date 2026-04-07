#!/bin/bash
echo "=== Checking robots.txt ==="
curl -s https://www.hiredevelopershop.com/robots.txt

echo ""
echo "=== Checking X-Robots-Tag header ==="
curl -sI https://www.hiredevelopershop.com/ | grep -i "x-robots"

echo ""
echo "=== Checking meta robots tag ==="
curl -s https://www.hiredevelopershop.com/ | grep -i "robots"

echo ""
echo "=== Checking sitemap ==="
curl -sI https://www.hiredevelopershop.com/sitemap.xml | head -5
