import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyCertificate } from '../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { code } = req.query;

    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Certificate code is required' });
    }

    const certificate = await verifyCertificate(code);

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    return res.status(200).json(certificate);
  } catch (error) {
    console.error('Certificate verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
