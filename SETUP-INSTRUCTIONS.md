# SSMT Solutions Website - Setup Instructions

## 🎉 Website Features Completed

Your website now includes:

✅ **Professional Corporate Design** - Clean, modern UI replacing the previous colorful design
✅ **ABCDE Model Showcase** - Professional presentation of your service framework
✅ **Job Support Services** - Hourly development support offerings
✅ **Corporate Training Programs** - Training and upskilling services
✅ **White-Label Partnerships** - Partner programs for training organizations
✅ **Development Consultancy** - Technical consulting services
✅ **Cost Calculator** - Interactive service cost calculator in INR
✅ **WhatsApp Lead Generation** - Direct WhatsApp integration for leads
✅ **Certificate Verification System** - Verify training certificates
✅ **Mobile Responsive Design** - Perfect across all devices
✅ **SEO Optimized** - Meta tags, structured data, sitemap

## 📋 Required Configuration

### 1. WhatsApp Number Setup

The WhatsApp lead form currently uses a placeholder number. Update it with your actual number:

**File:** `components/WhatsAppLeadForm.tsx`
**Line 22:** Change `const whatsappNumber = '919876543210';`
**To:** `const whatsappNumber = '91XXXXXXXXXX';` (your 10-digit number with 91 prefix)

### 2. Supabase Environment Variables

For the certificate verification system to work, you need to add these environment variables in Replit Secrets:

1. Go to the Secrets tab in Replit (lock icon in sidebar)
2. Add the following secrets:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Note:** The `NEXT_PUBLIC_` prefix is required for Next.js to expose these to the browser.

Get these values from:
- Login to [Supabase Dashboard](https://app.supabase.com)
- Select your project
- Go to Settings → API
- Copy "Project URL" and "anon public" key

### 3. Database Setup for Certificate Verification

1. Go to your Supabase Dashboard
2. Navigate to SQL Editor
3. Run the SQL script from: `scripts/setup-certificate-db.sql`
4. This creates the certificates table with sample data

Test certificates:
- `SSMT-2024-1001`
- `SSMT-2024-1002`  
- `SSMT-2024-1003`

Visit `/verify-certificate` to test!

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Update WhatsApp number in `components/WhatsAppLeadForm.tsx`
- [ ] Add `NEXT_PUBLIC_SUPABASE_URL` to Replit Secrets
- [ ] Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Replit Secrets
- [ ] Run the certificate database setup SQL
- [ ] Test certificate verification with sample codes
- [ ] Test WhatsApp form submission
- [ ] Test cost calculator
- [ ] Review all pages on mobile devices
- [ ] Update social media links in Footer.tsx (lines 22-30)
- [ ] Add real phone numbers if different from current

## 📱 Mobile Responsiveness

All components are fully responsive:
- Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Tested on mobile, tablet, and desktop viewports
- Touch-friendly interface elements

## 🔍 SEO Features

- Meta tags on all pages
- Structured data (Organization, Website, Breadcrumbs)
- Sitemap generation (after build)
- Optimized page titles and descriptions
- Semantic HTML structure

## 💰 Cost Calculator

Service categories included:
- Job Support (hourly/daily/weekly/monthly)
- Development Services (frontend/backend/full-stack)
- Training Programs (individual/corporate/white-label)
- Consultancy (technical/architecture/audit)

All prices in INR with 18% GST calculation.

## 📧 Contact Information

Current contact details in Footer:
- **Bangalore Office:** HAL Old Airport Rd, Kodihalli, Bengaluru
- **Development Center:** Shyam Nagar Colony, Pakur, Jharkhand
- **Email:** info@ssmtsolutions.com
- **Phone:** +91 9432588119, +91 9182607068

Update these in `components/Footer.tsx` if needed.

## 🎨 Design System

**Colors:**
- Primary: Blue (#2563EB)
- Secondary: Purple (#7C3AED)
- Accent: Indigo, Cyan, Teal
- Text: Gray scale

**Typography:**
- Headings: Bold, large (4xl-6xl)
- Body: Regular, readable (base-xl)
- System fonts for performance

## 📄 Pages Included

- `/` - Home (services overview, calculator, WhatsApp form)
- `/about` - About Us
- `/services` - All Services
- `/training` - Training & Internship
- `/careers` - Career Opportunities
- `/portfolio` - Project Portfolio
- `/contact` - Contact Form
- `/verify-certificate` - Certificate Verification (NEW)

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.3
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12.x
- **Icons:** React Icons 5.5
- **Database:** Supabase (PostgreSQL)
- **Forms:** React Hook Form
- **Language:** TypeScript

## 🔗 Useful Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📞 Support

For any issues or questions, contact SSMT Solutions development team.

---

**Built with ❤️ by SSMT Solutions**
