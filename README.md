# GimzR - Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Developer & UI/UX Designer.

## 🚀 Features

- **Modern UI/UX Design** with glassmorphism effects
- **Dark/Light Mode Toggle** with smooth transitions
- **Responsive Design** optimized for all devices
- **Interactive Portfolio** with filtering and modal popups
- **Animated Skills Section** with progress bars
- **Timeline Section** for education and achievements
- **Contact Form** with real-time validation
- **Smooth Animations** using AOS library
- **Performance Optimized** with lazy loading

## 🛠️ Technologies Used

- HTML5
- CSS3 (Modern features: backdrop-filter, CSS Grid, Flexbox)
- Vanilla JavaScript
- AOS (Animate On Scroll) Library
- Boxicons for icons
- Google Sheets integration for contact form

## 📦 Installation & Setup

### Prerequisites
- Node.js (for development server)
- Modern web browser

### Running the Project

#### Method 1: Using Live Server (Recommended)
```bash
# Install dependencies
npm install

# Start the development server
npx live-server --port=3000 --open=/index.html
```

#### Method 2: Using Python (Alternative)
```bash
# Python 3
python -m http.server 3000

# Python 2
python -SimpleHTTPServer 3000
```

#### Method 3: Using Node.js http-server
```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 3000 -o
```

#### Method 4: VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎨 Customization

### Colors
The color palette is defined in CSS custom properties in `style.css`:
```css
:root {
    --main-color: rgb(0, 247, 255); /* Cyan theme */
    --bg-color: #070818; /* Dark background */
    --text-color: #fff; /* White text */
    /* ... other colors */
}
```

### Content
- Update personal information in `index.html`
- Replace images in the `img/` folder
- Modify the Google Sheets URL in the contact form script

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### File Structure
```
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # JavaScript functionality
├── package.json        # Dependencies
├── img/               # Images and assets
└── README.md          # This file
```

### Key Features Implementation
- **Glassmorphism**: `backdrop-filter: blur()` with transparency
- **Dark/Light Mode**: CSS custom properties with localStorage
- **Animations**: AOS library + custom CSS animations
- **Portfolio Filtering**: JavaScript with CSS transitions
- **Form Validation**: Real-time validation with visual feedback

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/` (root)
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Framework preset: Other
3. Build and output settings: (leave default)
4. Deploy

## 📞 Contact Form Setup

The contact form uses Google Sheets integration. To set up:

1. Create a Google Sheet
2. Use Google Apps Script to create a web app
3. Replace the `scriptURL` in the contact form script
4. Test the form submission

## 🎯 Performance Tips

- Images are lazy-loaded automatically
- AOS animations are optimized for performance
- CSS animations use `transform` and `opacity` for smooth rendering
- Intersection Observer is used for efficient scroll-based animations

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

**Gokul Raj (GimzR)**
- LinkedIn: [gokulraj-gimzr](https://www.linkedin.com/in/gokulraj-gimzr/)
- GitHub: [gokul-raj26](https://github.com/gokul-raj26)
- Email: gimzrofficial@gmail.com

---

⭐ If you found this portfolio helpful, please give it a star!