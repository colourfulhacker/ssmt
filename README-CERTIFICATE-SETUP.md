# Certificate Verification System Setup

## Database Setup Instructions

### Step 1: Access Supabase SQL Editor
1. Log in to your Supabase dashboard at https://app.supabase.com
2. Select your project
3. Navigate to the SQL Editor in the left sidebar

### Step 2: Run the Setup Script
1. Open the file `scripts/setup-certificate-db.sql`
2. Copy the entire SQL script
3. Paste it into the Supabase SQL Editor
4. Click "Run" to execute the script

This will:
- Create the `certificates` table with proper schema
- Add indexes for fast lookups
- Insert sample test certificates
- Enable Row Level Security (RLS)
- Set up policies for public read access

### Step 3: Test the Verification System
You can test with these sample certificate codes:
- `SSMT-2024-1001` - John Doe (Full Stack Development)
- `SSMT-2024-1002` - Jane Smith (Data Engineering)
- `SSMT-2024-1003` - Amit Kumar (Cloud & DevOps)

Visit `/verify-certificate` on your website and enter any of these codes.

## Adding New Certificates

### Method 1: Using Supabase Dashboard
1. Go to your Supabase project
2. Click on "Table Editor" in the left sidebar
3. Select the `certificates` table
4. Click "Insert row" and fill in the details
5. Certificate code format: `SSMT-YYYY-NNNN` (e.g., SSMT-2024-1234)

### Method 2: Using SQL
```sql
INSERT INTO certificates (certificate_code, student_name, course_name, issue_date, completion_date)
VALUES ('SSMT-2024-1234', 'Student Name', 'Course Name', '2024-01-01', '2024-03-01');
```

## Environment Variables
Make sure these are set in your Replit Secrets:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL (e.g., https://xxxxx.supabase.co)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key
- `DATABASE_URL` - Your PostgreSQL connection string (optional, for server-side operations)

**Important:** The `NEXT_PUBLIC_` prefix is required for Next.js to expose these variables to the browser for client-side verification.

## Security Notes
- The current setup allows public read access for certificate verification
- In production, you should implement an admin panel for certificate management
- Consider adding additional validation and rate limiting
- The insert policy should be restricted to authenticated admin users only

## Certificate Code Format
Standard format: `SSMT-YYYY-NNNN`
- SSMT: Company prefix
- YYYY: Year of issue
- NNNN: Sequential number (e.g., 0001, 0002, etc.)
