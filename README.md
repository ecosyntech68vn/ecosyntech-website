# ecosyntech-website — Website chính thức Công ty TNHH Công Nghệ EcoSynTech Global

> Domain: **https://ecosyntechglobal.com** · Hosting: GitHub Pages (free) · Build: KHÔNG (HTML tĩnh thuần)
> Stack: HTML5 + CSS3 vanilla + Google Fonts (Manrope + Fraunces) · Brand V7.1 fresh green palette
> Tác giả: Tạ Quang Thuận · EcoSynTech Global · 2026-05-30

## Cấu trúc

```
.
├── index.html              ← Trang chủ
├── about.html              ← Về chúng tôi
├── products.html           ← 3 sản phẩm (Farm OS · Cỗ Máy · AI Thực Chiến)
├── story.html              ← Câu chuyện magazine
├── contact.html            ← Liên hệ (Telegram · Zalo · Email · Facebook)
├── policies.html           ← Privacy + ToS + Cookie
├── 404.html                ← Trang lỗi
├── styles.css              ← CSS chung (palette V7.1)
├── CNAME                   ← GitHub Pages custom domain
├── .nojekyll               ← Tắt Jekyll, serve file thẳng
├── robots.txt              ← Allow all
├── sitemap.xml             ← Sitemap 6 URL
└── assets/
    ├── logo/               ← Logo + favicon + app-icon
    └── og/                 ← OG cover image
```

## Deploy lên GitHub Pages

1. Tạo repo `ecosyntech-website` (public) trên GitHub.
2. Push toàn bộ file trong thư mục này lên `main` branch.
3. Vào Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)` → Save.
4. GitHub Pages tự đọc file `CNAME` và setup custom domain `ecosyntechglobal.com`.
5. Trỏ DNS Nhân Hoà (xem `DNS_GUIDE_NHANHOA.md`).
6. Đợi 1-6h DNS propagate + GitHub Pages issue HTTPS certificate.
7. Website LIVE tại https://ecosyntechglobal.com

## Đặc điểm kỹ thuật

- **Không build step** — file `.html` deploy thẳng.
- **Không JavaScript ngoài Google Fonts CSS** — tải nhanh, không phụ thuộc.
- **Lighthouse mục tiêu**: Performance ≥90, SEO ≥95, Best Practices ≥95, Accessibility ≥90.
- **Page weight trung bình** ~30KB HTML + 12KB CSS + font ~100KB (cached) = **~140KB first-load**.
- **Mobile responsive** với CSS Grid + `clamp()` typography.
- **SEO meta đầy đủ**: title, description, canonical, OG, Twitter, JSON-LD Organization.
- **Privacy-first**: KHÔNG cookie tracking, KHÔNG Google Analytics, KHÔNG Facebook Pixel.

## Cập nhật nội dung

Chỉ cần sửa file `.html` tương ứng, commit + push. GitHub Pages tự deploy trong 30-60 giây.

## Liên hệ

Ta Quang Thuan · CEO/CTO EcoSynTech Global  
Telegram [@ThuanFX](https://t.me/ThuanFX) · Zalo [0985 438 373](https://zalo.me/0985438373) · Email ecosyntech.global@gmail.com

© 2026 Công ty TNHH Công Nghệ EcoSynTech Global. License: proprietary.
