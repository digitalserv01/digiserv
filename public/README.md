# Public Assets

This folder contains static assets for your Next.js application.

## Usage

Files placed in this folder can be referenced directly from your components using the root path `/`:

- Images: `/image.jpg` → `public/image.jpg`
- Icons: `/favicon.ico` → `public/favicon.ico`
- Fonts: `/fonts/custom-font.woff2` → `public/fonts/custom-font.woff2`

## Common Assets

- `favicon.ico` - Website favicon
- `robots.txt` - Search engine crawler instructions
- `sitemap.xml` - Site structure for search engines
- `images/` - Image assets
- `icons/` - Icon files
- `fonts/` - Custom font files

## Example

```jsx
// In your React component
<img src="/logo.png" alt="Logo" />
// This references public/logo.png
```
