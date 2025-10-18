# SSMT Solutions Website

## Project Overview
A professional, corporate-level website for SSMT Solutions - a leading technology services provider based in Bengaluru, Karnataka. The website showcases comprehensive services including job support, corporate training, white-label partnerships, development consultancy, and includes advanced features like cost calculator, WhatsApp lead generation, and certificate verification.

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Database**: Supabase (PostgreSQL)
- **Forms**: React Hook Form
- **SEO**: Next SEO, Structured Data
- **Deployment**: Optimized for Replit hosting

## Project Structure
```
├── components/
│   ├── Navbar.tsx              # Responsive navigation
│   ├── Footer.tsx              # Footer with certificate verification link
│   ├── Layout.tsx              # Main layout wrapper
│   ├── SEO.tsx                 # SEO metadata component
│   ├── StructuredData.tsx      # JSON-LD structured data
│   ├── FactsSlider.tsx         # Facts carousel
│   ├── CostCalculator.tsx      # Service cost calculator (NEW)
│   ├── WhatsAppLeadForm.tsx    # WhatsApp lead generation (NEW)
│   └── WorkWithUsForm.tsx      # Career application form (NEW)
├── pages/
│   ├── _app.tsx                # App wrapper with Layout
│   ├── index.tsx               # Home page with ABCDE model
│   ├── about.tsx               # About page
│   ├── services.tsx            # Services overview
│   ├── contact.tsx             # Contact page with locations
│   ├── training.tsx            # Training & Internship programs
│   ├── portfolio.tsx           # Portfolio showcase
│   ├── careers.tsx             # Careers with Work With Us form (REDESIGNED)
│   ├── verify-certificate.tsx  # Certificate verification (NEW)
│   └── services/
│       ├── consultancy.tsx     # Support & Consultancy details
│       └── training-research.tsx # Training & Research details
├── lib/
│   └── supabase.ts             # Supabase client configuration (NEW)
├── scripts/
│   └── setup-certificate-db.sql # Database setup script (NEW)
├── styles/
│   └── globals.css             # Global styles with Tailwind
└── Configuration Files
    ├── tailwind.config.js      # Tailwind configuration
    ├── next.config.ts          # Next.js configuration
    └── next-sitemap.config.js  # Sitemap configuration
```

## Features

### Core Services (ABCDE Model)
1. **A** - AI & ML Solutions (Generative AI, NLP, LLMs, Deep Learning)
2. **B** - Blockchain & Networking (Smart Contracts, DApps, Network Security)
3. **C** - Cloud & Cybersecurity (AWS, Azure, GCP, Security Audit)
4. **D** - Data Engineering & DevOps (ETL Pipelines, CI/CD, Kubernetes)
5. **E** - Enterprise Management (ERP, CRM, Process Automation)

### Service Offerings
- **Job Support Services**: Hourly/daily/monthly development support for professionals
- **Corporate Training**: Customized training programs for employee upskilling
- **White-Label Partnerships**: Training partner programs with your branding
- **Development Consultancy**: End-to-end development and technical consulting
- **Freelance/Contract Work**: Flexible engagement models

### Advanced Features

#### 1. Cost Calculator (NEW)
- Interactive service pricing in INR
- Multiple service categories (Job Support, Development, Training, Consultancy)
- Automatic GST (18%) calculation
- Discount support
- Real-time price updates

#### 2. WhatsApp Lead Generation (NEW)
- Direct wa.me integration
- Collects user requirements
- Instant WhatsApp connection
- No backend required
- GDPR-friendly

#### 3. Certificate Verification System (NEW)
- Supabase PostgreSQL database
- Real-time certificate validation
- Secure and scalable
- Public verification interface
- Sample certificates included for testing

#### 4. Work With Us Form (NEW)
- Career application via WhatsApp
- Hourly rate and salary expectations
- Experience level selection
- Work type preferences (Full-time, Part-time, Contract, Freelance)
- Skills and availability tracking

### Design Features
- **Professional Corporate UI**: Clean, modern, serious business aesthetic
- **Mobile-First Responsive**: Perfect on all devices (mobile, tablet, desktop)
- **Touch-Friendly**: Optimized for mobile interactions
- **Fast Performance**: Optimized images and code splitting
- **Smooth Animations**: Framer Motion transitions
- **Accessible**: WCAG compliant color contrasts and navigation

### SEO Optimization
- Unique meta titles and descriptions for all pages
- Keyword optimization for target audiences
- Open Graph tags for social sharing
- JSON-LD structured data (Organization, Website, Breadcrumbs)
- Automatic sitemap generation
- Semantic HTML5 structure

## Company Information
- **Name**: SSMT Solutions
- **Tagline**: Your Complete Technology Partner for Digital Transformation
- **Locations**:
  - Contact Center: Unit 101, Oxford Towers, Bengaluru, Karnataka 560008
  - Development Center: Shyam Nagar Colony, Pakur, Jharkhand, 816107
- **Contact**: 
  - Phone: +91 9432588119, +91 9182607068
  - Email: info@ssmtsolutions.com
  - WhatsApp: 9432588119 (configured in forms)

## Configuration Required

### 1. WhatsApp Number
Update the WhatsApp number in these files:
- `components/WhatsAppLeadForm.tsx` (line 22)
- `components/WorkWithUsForm.tsx` (line 52)

Change from `919432588119` to your actual number.

### 2. Supabase Environment Variables
Add these to Replit Secrets:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key

### 3. Database Setup
Run `scripts/setup-certificate-db.sql` in your Supabase SQL editor to create the certificates table.

## Development

### Running Locally
```bash
npm run dev
```
Server runs on port 5000 (configured for Replit).

### Build for Production
```bash
npm run build
npm run start
```

### Workflow
The Next.js Server workflow automatically starts on port 5000.

## Pages Overview

1. **Home** (`/`) - ABCDE model, services, cost calculator, WhatsApp form
2. **About** (`/about`) - Company story, mission, vision, values
3. **Services** (`/services`) - All services overview
4. **Training** (`/training`) - Training programs and internships
5. **Careers** (`/careers`) - Job openings and Work With Us form
6. **Portfolio** (`/portfolio`) - Project showcase
7. **Contact** (`/contact`) - Contact information for both locations
8. **Verify Certificate** (`/verify-certificate`) - Certificate validation
9. **Service Details** - Individual service pages

## Recent Changes

### October 18, 2025 - Complete Website Transformation

**Major Redesign:**
- Transformed from colorful, playful design to professional corporate aesthetic
- Redesigned home page with business-focused ABCDE model presentation
- Clean typography, professional color scheme (blue, purple, gray tones)
- Removed childish gradients and excessive animations

**New Components:**
- `CostCalculator.tsx` - Service pricing calculator with INR and GST
- `WhatsAppLeadForm.tsx` - Lead generation via WhatsApp
- `WorkWithUsForm.tsx` - Career application with salary expectations
- `lib/supabase.ts` - Supabase database client

**New Features:**
- Interactive cost calculator for all services
- WhatsApp integration for instant leads
- Certificate verification system with Supabase
- Career application form with compensation expectations
- Database-backed certificate validation

**Careers Page Redesign:**
- Unique "Work With Us" button prominently displayed
- Comprehensive application form with:
  - Personal information
  - Position and experience level
  - Work type preferences
  - Hourly rate expectations
  - Monthly salary expectations
  - Skills and availability
- WhatsApp integration for applications
- Better organized open positions
- Enhanced benefits showcase

**Technical Improvements:**
- Mobile responsiveness across all pages
- SEO optimization with proper meta tags
- Structured data for better search visibility
- Supabase integration for certificate system
- Professional error handling
- Comprehensive documentation

## Documentation Files
- `SETUP-INSTRUCTIONS.md` - Complete setup guide
- `README-CERTIFICATE-SETUP.md` - Certificate system setup
- `.env.local.example` - Environment variables template

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Tablet optimized (iPad, Android tablets)

## Security Best Practices
- Environment variables for sensitive data
- Supabase Row Level Security (RLS) enabled
- Input validation on all forms
- Secure WhatsApp integration (no backend storage)
- HTTPS required for production

## Performance Optimizations
- Next.js automatic code splitting
- Optimized images with Next/Image
- Lazy loading for components
- Efficient CSS with Tailwind
- Minimal JavaScript bundle

## Notes
- Logo loaded from external URL (optimized with Next/Image priority)
- All forms use WhatsApp for instant communication
- Certificate verification requires Supabase setup
- Cost calculator uses client-side calculations (no backend required)
- Mobile-first design approach throughout

## Future Enhancements Suggestions
- Admin panel for certificate management
- Blog section for SEO
- Client testimonials section
- Live chat integration
- Payment gateway for training enrollment
- Automated email notifications
- Analytics dashboard
