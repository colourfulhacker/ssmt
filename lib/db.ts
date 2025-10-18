import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      },
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }

  return pool;
}

export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

export interface Student {
  id?: number;
  name: string;
  email: string;
  phone: string;
  created_at?: Date;
}

export interface Course {
  id?: number;
  name: string;
  description: string;
  duration: string;
  created_at?: Date;
}

export interface Certificate {
  id?: number;
  certificate_code: string;
  student_id: number;
  course_id: number;
  issue_date: Date;
  completion_date: Date;
  student_name?: string;
  student_email?: string;
  course_name?: string;
  course_description?: string;
  created_at?: Date;
}

export async function initializeDatabase() {
  const pool = getPool();
  
  await pool.query(`
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      phone VARCHAR(20),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      duration VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS certificates (
      id SERIAL PRIMARY KEY,
      certificate_code VARCHAR(100) NOT NULL UNIQUE,
      student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      issue_date DATE NOT NULL,
      completion_date DATE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_certificate_code ON certificates(certificate_code)
  `);
}

export async function addStudent(student: Student): Promise<number> {
  const pool = getPool();
  const result = await pool.query(
    'INSERT INTO students (name, email, phone) VALUES ($1, $2, $3) RETURNING id',
    [student.name, student.email, student.phone]
  );
  return result.rows[0].id;
}

export async function addCourse(course: Course): Promise<number> {
  const pool = getPool();
  const result = await pool.query(
    'INSERT INTO courses (name, description, duration) VALUES ($1, $2, $3) RETURNING id',
    [course.name, course.description, course.duration]
  );
  return result.rows[0].id;
}

export async function addCertificate(certificate: Certificate): Promise<number> {
  const pool = getPool();
  const result = await pool.query(
    `INSERT INTO certificates (certificate_code, student_id, course_id, issue_date, completion_date) 
     VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [
      certificate.certificate_code,
      certificate.student_id,
      certificate.course_id,
      certificate.issue_date,
      certificate.completion_date
    ]
  );
  return result.rows[0].id;
}

export async function verifyCertificate(code: string): Promise<Certificate | null> {
  const pool = getPool();
  const result = await pool.query(
    `SELECT 
      c.id, c.certificate_code, c.issue_date, c.completion_date, c.created_at,
      s.name as student_name, s.email as student_email,
      co.name as course_name, co.description as course_description, co.duration as course_duration
     FROM certificates c
     JOIN students s ON c.student_id = s.id
     JOIN courses co ON c.course_id = co.id
     WHERE c.certificate_code = $1`,
    [code]
  );

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0] as Certificate;
}

export async function getAllStudents(): Promise<Student[]> {
  const pool = getPool();
  const result = await pool.query('SELECT * FROM students ORDER BY created_at DESC');
  return result.rows;
}

export async function getAllCourses(): Promise<Course[]> {
  const pool = getPool();
  const result = await pool.query('SELECT * FROM courses ORDER BY created_at DESC');
  return result.rows;
}

export async function getAllCertificates(): Promise<Certificate[]> {
  const pool = getPool();
  const result = await pool.query(
    `SELECT 
      c.id, c.certificate_code, c.issue_date, c.completion_date, c.created_at,
      s.name as student_name, s.email as student_email,
      co.name as course_name
     FROM certificates c
     JOIN students s ON c.student_id = s.id
     JOIN courses co ON c.course_id = co.id
     ORDER BY c.created_at DESC`
  );
  return result.rows;
}
