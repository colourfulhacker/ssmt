import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession, verifyPassword } from '../../../lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const isValid = await verifyPassword(password);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const session = await getSession(req, res);
    session.isLoggedIn = true;
    session.username = 'admin';
    await session.save();

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
}
