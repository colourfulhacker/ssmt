# Vercel Deployment Guide

This guide will help you deploy your SSMT Solutions website to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. A PostgreSQL database (recommended: Neon, Supabase, or Vercel Postgres)
3. Your admin password hash and session secret

## Step 1: Prepare Your Database

### Option A: Use Neon (Recommended for Serverless)

1. Sign up at https://neon.tech
2. Create a new project
3. Copy the connection string (it will look like: `postgresql://user:password@host/database`)

### Option B: Use Vercel Postgres

1. In your Vercel project, go to Storage
2. Create a new Postgres database
3. Copy the `DATABASE_URL` from the environment variables

### Option C: Use Supabase

1. Sign up at https://supabase.com
2. Create a new project
3. Go to Settings > Database and copy the connection string

## Step 2: Generate Admin Credentials

Run the following command to generate your admin password hash:

```bash
node scripts/generate-admin-hash.js
```

This will output:
- **Admin Password**: Use this to login
- **ADMIN_PASSWORD_HASH**: Add this to Vercel environment variables
- **SESSION_SECRET**: Add this to Vercel environment variables

## Step 3: Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to set up your project

### Method 2: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your Git repository
3. Vercel will auto-detect Next.js and configure build settings

## Step 4: Configure Environment Variables

⚠️ **CRITICAL SECURITY REQUIREMENT**: All three environment variables below are **REQUIRED**. The application will not start without them.

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

| Variable Name | Value | Description | Required |
|--------------|-------|-------------|----------|
| `DATABASE_URL` | `postgresql://user:password@host/database` | Your PostgreSQL connection string | ✅ **YES** |
| `ADMIN_PASSWORD_HASH` | From step 2 | Bcrypt hash of admin password | ✅ **YES** |
| `SESSION_SECRET` | From step 2 (min 32 chars) | 64-character secret for sessions | ✅ **YES** |

3. Make sure to add them for **Production**, **Preview**, and **Development** environments

⚠️ **IMPORTANT**: `SESSION_SECRET` must be at least 32 characters long. If it's missing or too short, the application will refuse to start for security reasons.

## Step 5: Initialize Database

After deployment:

1. Visit your deployed site URL + `/admin`
2. Login with your admin password
3. Click **"Initialize Database"** button
4. Start adding students, courses, and certificates

## Step 6: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate to be provisioned

## Serverless Compatibility

This application is fully serverless-compatible with:

✅ Connection pooling optimized for serverless
✅ Proper environment variable handling
✅ API routes optimized for serverless functions
✅ Database queries optimized for performance
✅ Secure session management with iron-session

## Troubleshooting

### Database Connection Issues

If you experience database connection errors:

1. Ensure your database allows connections from Vercel's IP ranges
2. Check that SSL is enabled in production
3. Verify `DATABASE_URL` is correct in environment variables

### Session/Login Issues

If admin login doesn't work:

1. Verify `SESSION_SECRET` is at least 32 characters
2. Check `ADMIN_PASSWORD_HASH` matches your password
3. Clear browser cookies and try again

### Build Errors

If builds fail:

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript has no errors locally

## Environment Variable Reference

```bash
# Required
DATABASE_URL=postgresql://user:password@host/database
ADMIN_PASSWORD_HASH=<bcrypt-hash-from-generator>
SESSION_SECRET=<64-character-random-string>

# Optional (if using Supabase features)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Production Checklist

- [ ] Database is set up and accessible
- [ ] All environment variables are configured
- [ ] Admin password is secure and saved
- [ ] Database is initialized via admin panel
- [ ] SSL/HTTPS is working
- [ ] Custom domain is configured (if applicable)
- [ ] Test certificate verification feature
- [ ] Test admin panel functionality

## Support

For issues specific to:
- **Vercel**: https://vercel.com/support
- **Database**: Contact your database provider
- **Application**: Check application logs in Vercel dashboard

## Security Notes

🔒 **Important Security Reminders:**
- Never commit `.env` files to Git
- Keep your `ADMIN_PASSWORD_HASH` secret
- Regularly rotate your `SESSION_SECRET`
- Use strong admin passwords
- Enable database SSL in production
- Monitor admin panel access logs
