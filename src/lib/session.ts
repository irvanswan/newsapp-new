import { cookies } from 'next/headers';
import { getIronSession, type SessionOptions } from 'iron-session';

export interface SessionUser {
  email?: string;
  fullname?: string;
  aboutMe?: string;
  avatar?: string;
  isVerified?: boolean;
}

export interface SessionData {
  user?: SessionUser;
  token?: string;
  isLoggedIn?: boolean;
}

const sessionPassword = process.env.NEXT_PUBLIC_IRON_SESSION_PASSWORD;

if (!sessionPassword) {
  throw new Error('IRON_SESSION_PASSWORD is not set in the environment variables');
}

export const sessionOptions: SessionOptions = {
  password: sessionPassword,
  cookieName: 'newsapp_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  },
  ttl: 60 * 60 * 24 * 7, // 7 days
};

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), sessionOptions);
}
