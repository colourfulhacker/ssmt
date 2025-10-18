import { SessionOptions } from 'iron-session';
import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from 'iron-session';
import bcrypt from 'bcryptjs';

export interface SessionData {
  isLoggedIn: boolean;
  username?: string;
}

function getSessionPassword(): string {
  const sessionSecret = process.env.SESSION_SECRET;
  if (!sessionSecret || sessionSecret.length < 32) {
    throw new Error(
      'SECURITY ERROR: SESSION_SECRET environment variable is required and must be at least 32 characters long. ' +
      'Generate one using: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"'
    );
  }
  return sessionSecret;
}

export const sessionOptions: SessionOptions = {
  password: getSessionPassword(),
  cookieName: 'admin_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 24 hours
  },
};

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  return await getIronSession<SessionData>(req, res, sessionOptions);
}

export async function verifyPassword(password: string): Promise<boolean> {
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  
  if (!adminPasswordHash) {
    console.error('ADMIN_PASSWORD_HASH is not set');
    return false;
  }

  return await bcrypt.compare(password, adminPasswordHash);
}

export async function requireAuth(req: NextApiRequest, res: NextApiResponse): Promise<boolean> {
  const session = await getSession(req, res);
  
  if (!session.isLoggedIn) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  
  return true;
}
