import type { NextApiRequest, NextApiResponse } from 'next';
import { addCourse, getAllCourses } from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const courses = await getAllCourses();
      return res.status(200).json(courses);
    }

    if (req.method === 'POST') {
      const { name, description, duration } = req.body;

      if (!name) {
        return res.status(400).json({ error: 'Course name is required' });
      }

      const courseId = await addCourse({ name, description, duration });
      return res.status(201).json({ id: courseId, message: 'Course added successfully' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Course API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
