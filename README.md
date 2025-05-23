# molus - builders collective

A space-themed landing page for the molus builders collective featuring terminal-style animations, cosmic visuals, and modern responsive design.

## ✨ Features

- **Terminal Animation**: Interactive typewriter effect that introduces molus
- **Space Theme**: Milky Way background with aurora effects and dynamic starfield
- **Mobile-First Design**: Fully responsive with advanced mobile optimizations
- **Email Signup**: Newsletter subscription integration with Buttondown
- **Modern CSS**: Built with Tailwind CSS v4 and custom responsive utilities
- **Performance Optimized**: Touch-friendly interactions and reduced motion support
- **Open Source**: Free and open source, built for the community

## 🚀 Live Demo

Visit the live site: [molus-collective-landing-page.vercel.app](https://molus-collective-landing-page-raf5mxd9u-molus.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **CSS Framework**: Tailwind CSS v4
- **Animation**: Anime.js library
- **Build Tools**: Node.js, npm
- **Hosting**: Vercel
- **Email**: Buttondown API

## 📦 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd molus-landing-page

# Install dependencies
npm install

# Build CSS for development (with watch mode)
npm run build-css

# Or build for production (minified)
npm run build-css-prod

# Start local development server
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Available Scripts

```bash
npm run build-css       # Build CSS with watch mode for development
npm run build-css-prod  # Build minified CSS for production
```

## 🎨 Design System

### Responsive Breakpoints
- **320px** - Very small devices (older phones)
- **480px** - Small mobile devices
- **768px** - Tablets and mobile landscape
- **1024px** - Large tablets and small laptops
- **1200px+** - Desktop

### Color Palette
```css
--bg-color: #000814         /* Deep space blue */
--bg-gradient-1: #001d3d    /* Nebula blue */
--text-color: #ffffff       /* Pure white */
--accent-color: #ffd60a     /* Golden yellow */
--logo-color: #64b5f6       /* Light blue */
```

### Typography
- **Font Family**: `'Courier New', Courier, monospace`
- **Responsive Sizing**: Uses `clamp()` for fluid scaling
- **Terminal Style**: Monospace for authentic coding aesthetic

## 📱 Mobile Optimization Features

### Advanced Responsive Design
- **Fluid Typography**: `clamp()` functions for perfect text scaling
- **Touch-Friendly**: 44px minimum touch targets (Apple guidelines)
- **Container Queries**: Modern responsive techniques
- **Viewport Units**: Optimal scaling across all devices

### Performance Optimizations
- **Touch Device Detection**: Optimized interactions for mobile
- **Reduced Motion Support**: Respects user accessibility preferences
- **High DPI Display**: Enhanced visuals for retina screens
- **Battery Efficient**: Optimized animations for mobile devices

### Mobile-Specific Features
```css
/* Prevents iOS zoom on input focus */
@media (hover: none) and (pointer: coarse) {
    .email-input { font-size: 16px; }
}

/* Landscape orientation handling */
@media (max-width: 768px) and (orientation: landscape) {
    /* Optimized landscape styles */
}
```

## 🏗️ Project Structure

```
molus-landing-page/
├── src/
│   └── input.css           # Tailwind source with custom styles
├── index.html              # Main HTML file
├── script.js               # JavaScript animations and interactions
├── styles.css              # Compiled CSS output
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎭 Animation System

### JavaScript Animations (Anime.js)
- **Starfield Generation**: Dynamic star creation with size variants
- **Shooting Stars**: Periodic meteor animations
- **Constellation Drawing**: Connected star patterns
- **Terminal Typewriter**: Character-by-character text animation
- **Form Interactions**: Enhanced button and input effects

### CSS Animations
- **Holographic Logo**: Subtle glow animation
- **Cursor Blink**: Terminal-style cursor
- **Reduced Motion**: Accessibility-compliant alternatives

## 🎯 Development Guidelines

### CSS Architecture
- **Mobile-First**: All styles start with mobile and scale up
- **Custom Properties**: CSS variables for consistent theming
- **Modern Techniques**: Flexbox, Grid, and Container Queries
- **Performance**: Efficient selectors and GPU acceleration

### JavaScript Best Practices
- **Vanilla JS**: No heavy frameworks for optimal performance
- **Event Delegation**: Efficient event handling
- **Animation Management**: Proper cleanup and memory management
- **Touch Support**: Unified pointer events

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 90+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect static site
3. Build command: `npm run build-css-prod`
4. Output directory: `./` (root)

### Manual Deployment
```bash
# Build production CSS
npm run build-css-prod

# Deploy these files:
# - index.html
# - styles.css
# - script.js
# - Any assets (logos, etc.)
```

## 🧪 Testing

### Local Testing
```bash
# Start development server
python3 -m http.server 8000

# Test on different devices
# - Chrome DevTools device emulation
# - Real device testing via network IP
# - Browser testing across different viewports
```

### Mobile Testing Checklist
- [ ] Touch targets are minimum 44px
- [ ] Form inputs don't cause zoom on iOS
- [ ] Animations are smooth on mobile
- [ ] Landscape orientation works properly
- [ ] Loading performance is acceptable

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Build and test: `npm run build-css-prod`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style
- **CSS**: Follow BEM methodology where applicable
- **JavaScript**: ESLint configuration (add .eslintrc.js)
- **HTML**: Semantic markup with proper accessibility
- **Mobile**: Always test responsive changes

## 📝 License

Open source - built for the community.

## 🌌 About molus

molus is a non-profit builders collective that runs experiments testing the limits of software and AI. Everything we build is free and open source.

---

**Built with ❤️ by the molus collective** 