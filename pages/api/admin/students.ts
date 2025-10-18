import type { NextApiRequest, NextApiResponse } from 'next';
import { addStudent, getAllStudents } from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const students = await getAllStudents();
      return res.status(200).json(students);
    }

    if (req.method === 'POST') {
      const { name, email, phone } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      const studentId = await addStudent({ name, email, phone });
      return res.status(201).json({ id: studentId, message: 'Student added successfully' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Student API error:', error);
    if (error.code === '23505') {
      return res.status(400).json({ error: 'Student with this email already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}
