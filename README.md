# Fico Study Space

**TypeScript/JavaScript productivity web application with camera timelapse recording and focus timer for enhanced study accountability.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-ficostudyspace.com-blue)](https://ficostudyspace.com)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-orange)](https://astro.build)
[![Styled with Tailwind](https://img.shields.io/badge/Styled_with-Tailwind_CSS-blue)](https://tailwindcss.com)
[![Animated with GSAP](https://img.shields.io/badge/Animated_with-GSAP-green)](https://gsap.com)

---

## About This Project

Fico Study Space is a modern productivity platform designed to help students and professionals maintain focus and accountability during study sessions. Born from observing the dedication and persistence of hardworking students, this project aims to bridge the gap between mobile timelapse tools and comprehensive study productivity features.

### Personal Vision

> *"This project exists because of witnessing true dedication in action. Watching students struggle with the balance between using their phones for timelapse recording while needing them for study-related tasks sparked the idea for a unified solution. It's not just a tool—it's a tribute to the persistence and determination of every student working toward their goals."*

The vision is to create a seamless digital study environment where accountability, focus, and productivity converge into a single, powerful web application.

> **Note**: This is an ongoing project with continuous improvements and new features being added based on user feedback and evolving study productivity needs.

---

## Key Features

### **Timelapse Recording**
- **Camera Integration**: Direct browser camera access for study session recording
- **Customizable Settings**: Adjustable capture intervals (0.1s - 5s) and playback speeds (5-60fps)
- **Smart Storage**: Local storage with automatic cleanup of recordings older than 3 days
- **Export Options**: Download timelapses as WebM video files
- **Mirror Mode**: Horizontally flipped camera feed for natural self-viewing

### **Focus Timer (Pomodoro-style)**
- **Flexible Timing**: Preset options (25, 45, 90 minutes) with custom adjustments
- **Session Controls**: Start, pause, stop, and reset functionality
- **Progress Tracking**: Visual countdown with completion notifications
- **Session Statistics**: Track completed sessions and total focus time
- **Desktop Notifications**: Browser notifications for session completion

### **Productivity Analytics**
- **Session Counter**: Track number of completed focus sessions
- **Time Logging**: Monitor total focus time accumulated
- **Streak Tracking**: Maintain and visualize study streaks
- **Local Persistence**: All data stored locally for privacy

### **Modern User Experience**
- **Responsive Design**: Optimized for desktop and tablet use
- **Interactive Cursor**: Custom blob cursor with parallax effects
- **Smooth Animations**: GSAP-powered transitions and interactions
- **Accessibility**: Keyboard navigation and screen reader support

---

## Technical Architecture

### **Core Technologies**
- **[Astro](https://astro.build)** - Modern static site generator with component islands
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript development
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[GSAP](https://gsap.com)** - Professional animation library

### **Browser APIs & Features**
- **MediaDevices API** - Camera access and stream management
- **MediaRecorder API** - Video capture and encoding
- **Canvas API** - Frame processing and video generation
- **Web Storage API** - Local data persistence
- **Notifications API** - Desktop notification system
- **Intersection Observer** - Performance-optimized scroll animations

### **Development Tools**
- **Bun** - Fast JavaScript runtime and package manager
- **Prettier** - Code formatting with Astro plugin
- **Sharp** - High-performance image processing
- **PWA Assets Generator** - Progressive Web App icon generation

---

## Quick Start

### Prerequisites
- **Node.js** 18+ or **Bun** 1.0+
- Modern web browser with camera support
- HTTPS environment for camera access (localhost works for development)

### Installation

```bash
# Clone the repository
git clone https://github.com/mawarfasha/ficostudyspace.git
cd ficostudyspace

# Install dependencies
bun install
# or
npm install

# Start development server
bun dev
# or
npm run dev
```

### Development Commands

```bash
# Development
bun dev          # Start dev server at localhost:4321
bun build        # Build for production
bun preview      # Preview production build

# Assets
bun run pwa:generate-assets    # Generate PWA icons
```

---

## Project Structure

```
src/
├── components/
│   ├── blog/
│   │   └── FocusDesk.astro     # Main application component
│   ├── global/
│   │   ├── BaseHead.astro      # HTML head configuration
│   │   ├── Navigation.astro    # Site navigation
│   │   └── Footer.astro        # Site footer
│   └── landing/
│       └── Hero.astro          # Landing page hero
├── layouts/
│   └── BaseLayout.astro        # Base page layout
├── pages/
│   ├── index.astro            # Homepage
│   └── focus-desk.astro       # Focus application page
├── styles/
│   └── global.css             # Global styles and utilities
└── content/
    └── projects/              # Project showcase content
```

---

## Use Cases

### **For Students**
- Record study sessions for self-accountability
- Track focus time and build consistent study habits
- Create time-lapse videos for social sharing or personal review
- Maintain concentration with structured Pomodoro sessions

### **For Professionals**
- Document work sessions and project progress
- Analyze productivity patterns and focus duration
- Create professional development content
- Maintain work-life balance with timed focus blocks

### **For Content Creators**
- Generate study-with-me content effortlessly
- Create productivity-focused social media posts
- Document learning journeys and skill development
- Build authentic educational content

---

## Deployment

### **Supported Platforms**
- **[Vercel](https://vercel.com)** - Recommended for optimal performance
- **[Netlify](https://netlify.com)** - JAMstack deployment
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Global edge deployment

### **One-Click Deploy**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mawarfasha/ficostudyspace)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mawarfasha/ficostudyspace)

---

## Privacy & Security

- **Local Storage**: All user data stored locally in browser
- **No Analytics**: No tracking or data collection implemented
- **Camera Privacy**: Video streams never leave the user's device
- **HTTPS Required**: Secure context required for camera access
- **No Server Dependencies**: Fully client-side application

---

## Contributing

Contributions are welcome! This project is built with the student community in mind, and improvements that enhance the study experience are especially valued.

### **Development Guidelines**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper TypeScript types
4. Test across different browsers and devices
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### **Priority Areas**
- Enhanced accessibility features
- Mobile responsiveness improvements
- Additional timer customization options
- Study analytics and insights
- Integration with external productivity tools

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

This project exists thanks to the inspiration drawn from dedicated students who demonstrate what true persistence and hard work look like. Their commitment to learning and growth serves as the foundation for every feature and design decision in Fico Study Space.

**Special recognition** to the countless students who balance multiple responsibilities while pursuing their educational goals—this tool is built for you.

---

## Contact & Support

- **Website**: [ficostudyspace.com](https://ficostudyspace.com)
- **Repository**: [github.com/mawarfasha/ficostudyspace](https://github.com/mawarfasha/ficostudyspace)
- **Issues**: [Report bugs or request features](https://github.com/mawarfasha/ficostudyspace/issues)

---

<div align="center">

**Built with ❤️ for the global student community**

*Empowering focus, one session at a time*

</div>
