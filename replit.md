# SSMT Solutions Website

## Project Overview
A world-class, professional website for SSMT Solutions - a leading tech-digital marketing provider based in Bengaluru, Karnataka. The website showcases the company's services, training programs, portfolio, and contact information with impressive UI/UX and proper SEO optimization.

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **SEO**: Next SEO
- **Deployment**: Optimized for Replit hosting

## Project Structure
```
├── components/
│   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   ├── Footer.tsx          # Footer with contact info and links
│   ├── Layout.tsx          # Main layout wrapper
│   └── SEO.tsx             # SEO metadata component
├── pages/
│   ├── _app.tsx            # App wrapper with Layout
│   ├── index.tsx           # Home page with hero, values, technologies
│   ├── about.tsx           # About page with company story and values
│   ├── services.tsx        # Services overview page
│   ├── contact.tsx         # Contact page with both locations
│   ├── training.tsx        # Training & Internship programs
│   ├── portfolio.tsx       # Portfolio showcase
│   ├── careers.tsx         # Careers and open positions
│   └── services/
│       ├── consultancy.tsx          # Support & Consultancy details
│       └── training-research.tsx    # Training & Research details
├── styles/
│   └── globals.css         # Global styles with Tailwind
├── tailwind.config.js      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## Features

### Navigation
- Fixed header with logo
- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Active state indicators

### Pages
1. **Home**: Hero section with CTAs, core values, technologies, and CTA sections
2. **About**: Company story, mission, vision, and core values
3. **Services**: Overview of 5 main services with navigation to details
4. **Training & Internship**: 4 training programs (Cybersecurity, Data Engineering, Data Science, DevOps)
5. **Contact**: Dual locations (Bengaluru Contact Center, Jharkhand Development Center)
6. **Portfolio**: Project showcase and success metrics
7. **Careers**: Open positions and hiring process
8. **Service Details**: 
   - Support & Consultancy
   - Training & Research

### Design Features
- **Premium Visual Design**:
  - Tri-color gradients (blue → purple → pink)
  - Animated floating background elements
  - 3D card transforms with lift effects
  - Gradient text animations
  - Icon rotation and scale effects
  
- **Modern UI Components**:
  - Rounded buttons with hover scale
  - Gradient underlines on navigation
  - Enhanced shadows and depth
  - Glass morphism effects
  - Smooth page transitions
  
- **Responsive Design**:
  - Mobile-first approach
  - Tablet and desktop optimized
  - Touch-friendly interactions
  - Adaptive grid layouts

### SEO Optimization
- Unique meta titles and descriptions for each page
- Keyword optimization
- Open Graph tags for social sharing
- Structured data ready
- Semantic HTML structure

## Content Highlights

### Company Information
- **Name**: SSMT Solutions
- **Tagline**: Empowering Digital Transformation with AI-Driven Cloud and Cybersecurity Solutions
- **Locations**:
  - Contact Center: Unit 101, Oxford Towers, Bengaluru, Karnataka 560008
  - Development Center: Shyam Nagar Colony, Pakur, Jharkhand, 816107
- **Contact**: +91 9432588119, +91 9182607068, info@ssmtsolutions.com

### Core Services
1. Support & Consultancy
2. Training & Research
3. Product Design & Development
4. Digital Marketing
5. Enterprise Management

### Technologies
- Software Development (Full-Stack, Java, Spring Boot, Python, Django, .NET, Angular, MERN, MEAN)
- Data Engineering & Analytics (Python, SQL, Databricks, Snowflake, Apache Spark, Power BI, Tableau)
- Data Science & AI (Generative AI, NLP, LLMs, TensorFlow, PyTorch, Hugging Face)
- DevOps & Cloud (AWS, Azure, GCP, Docker, Kubernetes, Terraform, Jenkins)

## Development

### Running Locally
The project is configured to run on port 5000:
```bash
npm run dev -- -p 5000
```

### Workflow
The Next.js Server workflow is set up to automatically start the development server on port 5000 when the project is opened.

## Production Deployment
The website is optimized for production with:
- Image optimization for external assets
- SEO meta tags on all pages
- Responsive design for all screen sizes
- Performance optimizations with Next.js
- Clean, maintainable code structure

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Tablet optimized

## Recent Changes

### October 18, 2025 - Final Design Enhancement
- **Enhanced Visual Design**: Upgraded to world-class, premium UI
  - Tri-color gradient system (blue → purple → pink) across all elements
  - Animated floating blobs on hero section for depth
  - Improved card designs with 3D hover effects
  - Enhanced button styling with gradient backgrounds
  - Better shadows and border treatments
  
- **Typography & Spacing Improvements**:
  - Larger, more impactful headlines
  - Increased padding for better breathing room
  - Better line-height and letter-spacing
  
- **Animation Enhancements**:
  - Smooth gradient animations on text
  - Card lift effects with scale transforms
  - Icon rotation on hover
  - Smooth page transitions
  
- **Technical Updates**:
  - Downgraded from Tailwind v4 to v3 for stability
  - Proper PostCSS configuration
  - Custom utility classes for consistency
  - Optimized CSS architecture
  
- **All Pages Fully Functional**:
  - 8 complete pages with cohesive design
  - No ESLint errors
  - Proper Next.js Link components
  - SEO optimization on all pages
  - External logo properly configured

## Notes
- Logo is loaded from external URL: https://assets.zyrosite.com/dOqbv9lxjqcgzaab/logo-1a5478-YleMKeBbKPtZ382E.svg
- All images are optimized with Next.js Image component
- Tailwind CSS provides utility-first styling
- Framer Motion adds smooth page transitions and animations
