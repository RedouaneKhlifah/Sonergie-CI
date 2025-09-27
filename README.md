
# Sonergie-CI E-commerce Website

This is a modern e-commerce website for Sonergie-CI, featuring a complete online catalog with shopping cart functionality. The original design is available at https://www.figma.com/design/gTqkDkprgBXTl4oPpiJYRR/Sonergie-CI-Website-Design.

## 🛒 E-commerce Features

### Shopping Experience
- **Product Catalog**: Browse products by categories (Électricité, Caméra, Climatisation, Plomberie, Accessoires)
- **Shopping Cart**: Add/remove products, adjust quantities, view total
- **Product Pages**: Detailed product information with Add to Cart and Purchase buttons
- **Category Pages**: Filter products by category with full product listings
- **Random Products**: Featured products displayed on homepage

### User Interface
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, loading states, and toast notifications
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### Technical Features
- **State Management**: React Context for cart state
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized images and lazy loading
- **SEO Ready**: Structured data and meta tags

## SEO Optimizations Implemented

This website has been optimized for search engines with the following features:

### Meta Tags & Structured Data
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data for business information
- ✅ Canonical URLs and proper language declarations

### Semantic HTML
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Semantic HTML elements (header, main, section, article, nav, footer)
- ✅ ARIA labels and roles for accessibility
- ✅ Proper navigation structure with landmarks

### Performance Optimizations
- ✅ Image optimization with WebP/AVIF formats
- ✅ Compression enabled
- ✅ Security headers
- ✅ Cache control headers
- ✅ Package import optimization

### Technical SEO
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Web App Manifest for PWA capabilities
- ✅ Proper favicon implementation
- ✅ Mobile-first responsive design

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## SEO Checklist

Before deploying, ensure you have:

1. **Updated Contact Information**
   - Replace placeholder phone numbers with real ones
   - Update email addresses
   - Verify physical address

2. **Google Verification**
   - Add your Google Search Console verification code in `app/layout.tsx`
   - Update the `verification.google` field

3. **Social Media Links**
   - Update social media URLs in the footer
   - Ensure all social platforms are active

4. **Images**
   - Add proper favicon files to `/public/`
   - Create an Open Graph image (`/public/og-image.jpg`)
   - Optimize all images for web

5. **Content**
   - Review all French content for accuracy
   - Ensure all product descriptions are detailed
   - Add customer testimonials if available

## Performance Monitoring

The website includes:
- Core Web Vitals optimization
- Image lazy loading
- Font optimization
- Bundle size optimization
  