import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

interface ApiResponse<T> {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: T;
}

export async function GET() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const session = await getSession();

  if (!backendUrl) {
    return NextResponse.json({ success: false, message: 'Backend URL not configured' }, { status: 500 });
  }

  if (!session.token) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const profileResponse = await fetch(`${backendUrl}/user/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
    });

    const profileData = (await profileResponse.json()) as ApiResponse<unknown>;

    if (!profileResponse.ok) {
      return NextResponse.json({ success: false, message: profileData?.message || 'Failed to fetch profile' }, { status: profileResponse.status || 401 });
    }

    session.user = profileData?.data ?? profileData;
    session.isLoggedIn = true;
    await session.save();

    return NextResponse.json({ success: true, user: session.user });
  } catch {
    return NextResponse.json({ success: false, message: 'Unexpected error during profile fetch' }, { status: 500 });
  }
}
