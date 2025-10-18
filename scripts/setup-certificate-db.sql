-- Create certificates table for SSMT Solutions certificate verification system
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS certificates (
  id SERIAL PRIMARY KEY,
  certificate_code VARCHAR(50) UNIQUE NOT NULL,
  student_name VARCHAR(255) NOT NULL,
  course_name VARCHAR(255) NOT NULL,
  issue_date DATE NOT NULL,
  completion_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster certificate lookups
CREATE INDEX IF NOT EXISTS idx_certificate_code ON certificates(certificate_code);

-- Insert sample certificates for testing
INSERT INTO certificates (certificate_code, student_name, course_name, issue_date, completion_date)
VALUES 
  ('SSMT-2024-1001', 'John Doe', 'Full Stack Development with MERN', '2024-01-15', '2024-03-15'),
  ('SSMT-2024-1002', 'Jane Smith', 'Data Engineering with Python', '2024-02-01', '2024-04-01'),
  ('SSMT-2024-1003', 'Amit Kumar', 'Cloud & DevOps Mastery', '2024-03-10', '2024-05-10')
ON CONFLICT (certificate_code) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read certificates (for verification)
CREATE POLICY "Allow public read access to certificates" 
  ON certificates FOR SELECT 
  USING (true);

-- Note: Insert/Update/Delete should only be done through secure backend or admin panel
-- For now, we'll allow inserts (you should restrict this in production)
CREATE POLICY "Allow insert for authenticated users" 
  ON certificates FOR INSERT 
  WITH CHECK (true);

COMMENT ON TABLE certificates IS 'Stores training certificate information for verification';
COMMENT ON COLUMN certificates.certificate_code IS 'Unique certificate identifier (format: SSMT-YYYY-NNNN)';
