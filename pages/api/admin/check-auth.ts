import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '../../../lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getSession(req, res);
    res.status(200).json({ isLoggedIn: session.isLoggedIn || false });
  } catch (error) {
    console.error('Auth check error:', error);
    res.status(500).json({ error: 'Failed to check authentication' });
  }
}
