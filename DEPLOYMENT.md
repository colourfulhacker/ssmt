# Deployment Guide

This Next.js application is optimized for deployment on Vercel and other serverless platforms.

## Vercel Deployment

### Prerequisites
- Vercel account (sign up at https://vercel.com)
- PostgreSQL database (recommended: Supabase or Neon)

### Environment Variables

Before deploying, configure the following environment variables in your Vercel project settings:

```env
DATABASE_URL=postgresql://user:password@host:port/database
```

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Import your repository
   - Configure environment variables
   - Deploy

3. **Initialize Database**
   After deployment, initialize the database schema:
   - Navigate to `https://your-domain.vercel.app/admin`
   - Click "Initialize Database" button
   - This creates the required tables for certificates, students, and courses

### Database Schema

The application uses PostgreSQL with the following tables:

#### Students Table
```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

#### Courses Table
```sql
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  duration VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

#### Certificates Table
```sql
CREATE TABLE certificates (
  id SERIAL PRIMARY KEY,
  certificate_code VARCHAR(100) NOT NULL UNIQUE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  issue_date DATE NOT NULL,
  completion_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

## Features

### Admin Panel
Access the admin panel at `/admin` to:
- Initialize database schema
- Add students
- Add courses
- Issue certificates

### Certificate Verification
Public certificate verification available at `/verify-certificate`

### API Routes

- `POST /api/admin/init-db` - Initialize database schema
- `GET /api/admin/students` - Get all students
- `POST /api/admin/students` - Add new student
- `GET /api/admin/courses` - Get all courses
- `POST /api/admin/courses` - Add new course
- `GET /api/admin/certificates` - Get all certificates
- `POST /api/admin/certificates` - Add new certificate
- `GET /api/verify-certificate?code=CODE` - Verify certificate

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   Create `.env.local`:
   ```env
   DATABASE_URL=your-postgresql-connection-string
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Initialize Database**
   Navigate to `http://localhost:5000/admin` and click "Initialize Database"

## Production Considerations

### Security
- Admin panel should be protected with authentication (to be implemented)
- Use strong database passwords
- Enable SSL for database connections
- Keep environment variables secure

### Performance
- API routes are serverless functions (auto-scaling)
- Database connection pooling is enabled
- Images are optimized with Next.js Image component

### Monitoring
- Monitor API response times
- Set up error tracking (e.g., Sentry)
- Monitor database performance
- Track certificate verification requests

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correctly set
- Check database allows connections from Vercel's IP ranges
- Ensure SSL is properly configured

### API Errors
- Check Vercel function logs
- Verify environment variables are set
- Test API routes locally first

### Build Errors
- Run `npm run build` locally to catch issues
- Check for TypeScript errors
- Verify all dependencies are in package.json

## Support

For deployment issues, contact:
- Email: info@ssmtsolutions.com
- Phone: +91 9432588119
