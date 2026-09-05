# Rapid Laser - Modern Website

A modern, responsive website redesign for Rapid Laser, a laser cutting and sheet metal fabrication company based in Bayswater, Melbourne.

## 🌟 Features

- **Modern Design**: Clean, professional interface with modern UI/UX principles
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, image slider, and dynamic forms
- **Multiple Pages**: Complete multi-page website structure
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Fast Loading**: Optimized CSS and JavaScript

## 📄 Pages Included

1. **Home** (`index.html`) - Hero slider, services overview, about section
2. **Our Services** (`services.html`) - Detailed service descriptions
3. **Equipment** (`equipment.html`) - Showcase of machinery and capabilities
4. **Custom Projects** (`projects.html`) - Project types and process
5. **Capabilities** (`capabilities.html`) - Technical capabilities and materials
6. **Request A Quote** (`quote.html`) - Comprehensive quote request form
7. **Contact Us** (`contact.html`) - Contact information and inquiry form

## 🚀 Getting Started

### Option 1: Open Directly in Browser
Simply open `index.html` in your web browser to view the website locally.

### Option 2: Use a Local Server (Recommended)
For the best experience, use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## 📁 Project Structure

```
Rapid/
├── index.html          # Home page
├── services.html       # Services page
├── equipment.html      # Equipment page
├── projects.html       # Custom projects page
├── capabilities.html   # Capabilities page
├── quote.html          # Quote request page
├── contact.html        # Contact page
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   └── README.md       # Image guidelines
└── README.md           # This file
```

## 🎨 Design Features

- **Color Scheme**: Red (#e74c3c) primary, Navy (#2c3e50) secondary
- **Typography**: Inter font family for modern, clean look
- **Animations**: Smooth scroll, fade-in effects, hover states
- **Components**: Cards, gradients, shadows, rounded corners

## ✨ Key Functionality

- **Hero Slider**: Auto-rotating image carousel with manual controls
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Handling**: Client-side validation for quote and contact forms
- **Smooth Scrolling**: Anchor link smooth scroll behavior
- **Back to Top**: Floating button for easy navigation
- **Responsive Images**: Fallback to Unsplash images if local images missing

## 📸 Adding Images

1. Place your images in the `images/` folder
2. Refer to `images/README.md` for required image names and sizes
3. Replace Unsplash fallback URLs with your own images

### Required Images:
- `logo.png` - Company logo
- `slide1.jpg` through `slide4.jpg` - Hero slider images
- Various service, equipment, and project images (see images/README.md)

## 🔧 Customization

### Updating Content
- Edit the HTML files to change text content
- Update contact information in footer across all pages
- Modify form fields in `quote.html` and `contact.html`

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #e74c3c;
    --secondary-color: #2c3e50;
    /* ... other variables */
}
```

### Modifying JavaScript
All interactivity is in `script.js`:
- Mobile menu toggle
- Hero slider
- Form validation
- Scroll animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Form Integration

The forms are currently set up with client-side validation and console logging. To make them functional:

1. **Backend Integration**: Connect forms to your backend API
2. **Email Service**: Use services like FormSpree, Netlify Forms, or EmailJS
3. **Database**: Store submissions in a database

Example with FormSpree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

## 📞 Contact Information

The website displays:
- **Address**: 5 Elsum Ave, Bayswater North, Victoria, 3153
- **Phone**: 03 9729 3344
- **Business Hours**: Monday - Friday, 7:00 AM - 5:00 PM

## 📝 Credits

- **Design & Development**: Modern redesign of Rapid Laser website
- **Original Content**: Rapid Machining & Fabrication
- **Fonts**: Google Fonts (Inter)
- **Fallback Images**: Unsplash (for demonstration purposes)

## 🚀 Deployment

To deploy this website:

### GitHub Pages
1. Create a GitHub repository
2. Push all files
3. Enable GitHub Pages in repository settings

### Netlify
1. Create Netlify account
2. Drag and drop the folder to Netlify
3. Your site is live!

### Traditional Hosting
1. Upload all files via FTP
2. Ensure index.html is in the root directory
3. Configure domain name

## ⚠️ Important Notes

1. Replace placeholder/fallback images with actual company photos
2. Integrate forms with a backend or email service
3. Add Google Analytics for tracking (optional)
4. Set up proper SEO meta tags for each page
5. Ensure all images are optimized for web
6. Add SSL certificate when deployed (https)

## 📄 License

© 2024 Chasemore Engineering PTY. LTD. trading as Rapid Machining and Fabrication. All rights reserved.

## 🛠️ Future Enhancements

Potential additions:
- [ ] Gallery/portfolio section with completed projects
- [ ] Customer testimonials
- [ ] Blog for industry news and tips
- [ ] Live chat integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Video showcases
- [ ] Online quote calculator

---

For questions or support, please contact the development team.



