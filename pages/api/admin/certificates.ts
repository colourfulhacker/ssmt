import type { NextApiRequest, NextApiResponse } from 'next';
import { addCertificate, getAllCertificates } from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const certificates = await getAllCertificates();
      return res.status(200).json(certificates);
    }

    if (req.method === 'POST') {
      const { certificate_code, student_id, course_id, issue_date, completion_date } = req.body;

      if (!certificate_code || !student_id || !course_id || !issue_date || !completion_date) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const certificateId = await addCertificate({
        certificate_code,
        student_id: parseInt(student_id),
        course_id: parseInt(course_id),
        issue_date: new Date(issue_date),
        completion_date: new Date(completion_date)
      });

      return res.status(201).json({ id: certificateId, message: 'Certificate added successfully' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Certificate API error:', error);
    if (error.code === '23505') {
      return res.status(400).json({ error: 'Certificate code already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}
