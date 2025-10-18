# SSMT Solutions Website

## Overview
The SSMT Solutions Website is a professional, corporate platform showcasing comprehensive technology services, including job support, corporate training, white-label partnerships, and development consultancy. It features advanced tools like a cost calculator, WhatsApp lead generation, and a certificate verification system. The site aims to elevate SSMT Solutions' digital presence, attract clients, and streamline service delivery and application processes, aligning with the business vision of being a complete technology partner for digital transformation.

## User Preferences
I want to prioritize a professional, corporate aesthetic with a clean, modern, and serious business feel. The UI should be mobile-first, responsive, and touch-friendly, with fast performance and smooth animations. I value clear, concise explanations and an iterative development approach. All new features should integrate seamlessly with the existing design and tech stack. I prefer that major changes are discussed before implementation. Do not make changes to the folder `node_modules`. Do not make changes to the file `package-lock.json`.

## System Architecture
The website is built with Next.js 15 and TypeScript, styled using Tailwind CSS 3.4, and features Framer Motion for animations. Core services are presented via an "ABCDE Model" (AI & ML, Blockchain, Cloud & Cybersecurity, Data Engineering & DevOps, Enterprise Management).

**UI/UX Decisions:**
- Professional corporate aesthetic with a clean, modern design.
- Mobile-first responsive layout optimized for all devices.
- Touch-friendly interactions and smooth Framer Motion animations.
- Accessible design with WCAG compliant color contrasts.
- Professional imagery and optimized graphics for visual appeal.

**Technical Implementations & Feature Specifications:**
- **Cost Calculator:** Interactive service pricing in INR, including GST and discount support.
- **WhatsApp Lead Generation:** Direct wa.me integration for collecting user requirements and instant connection.
- **Certificate Verification System:** Utilizes a PostgreSQL database (Supabase) for real-time, secure certificate validation via a public interface and an admin panel.
- **Work With Us Form:** Career application form integrated with WhatsApp, tracking experience, preferences, and compensation expectations.
- **SEO Optimization:** Unique meta tags, keyword optimization, Open Graph, JSON-LD structured data, and automatic sitemap generation.
- **Admin Panel:** Comprehensive interface for managing students, courses, and certificates, including database initialization.
- **Policy Pages:** Dedicated pages for Privacy Policy, Terms of Service, Refund Policy, and Disclaimer.
- **PostgreSQL Integration:** Direct PostgreSQL connection with connection pooling for robust data management.

**System Design Choices:**
- Next.js API routes for backend logic, including certificate verification and admin panel operations.
- Environment variables for secure configuration.
- Optimized for Replit and Vercel deployment, with serverless-ready API routes.
- Component-based architecture (`components/` folder) for modularity and reusability.

## External Dependencies
- **Database:** Supabase (PostgreSQL)
- **Styling Framework:** Tailwind CSS
- **Animation Library:** Framer Motion
- **Icon Library:** React Icons
- **Form Management:** React Hook Form
- **SEO Tools:** Next SEO
- **Deployment Platform:** Vercel (configuration via `vercel.json`)

## Recent Changes

### October 18, 2025 - Technologies Showcase & Professional Images

**Technologies Component (NEW):**
- Created comprehensive Technologies component showcasing 36 technologies across 6 categories
- Categories: Frontend & Frameworks, Backend & Databases, Cloud Platforms, DevOps & CI/CD, Data Science & AI, Cybersecurity Tools
- Integrated into services page with animated cards and hover effects
- Uses Simple Icons CDN for consistent, high-quality technology logos
- Responsive grid layout (2-6 columns) with Framer Motion animations

**Professional Image Enhancements:**
- Generated 7 custom professional AI images for services and training pages
- Added images to home page service cards (IT Staffing, Cybersecurity, IT Consulting)
- Added images to all training program cards (Cybersecurity, Data Engineering, Data Science, DevOps)
- Optimized with Next.js Image component and proper sizing for performance
- Maintained professional corporate aesthetic throughout