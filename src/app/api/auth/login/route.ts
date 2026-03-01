import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

interface LoginPayload {
  email: string;
  password: string;
}

interface ApiResponse<T> {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: T;
}

interface LoginData {
  token?: string;
}

export async function POST(request: NextRequest) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    return NextResponse.json({ success: false, message: 'Backend URL not configured' }, { status: 500 });
  }

  let body: LoginPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
  }

  try {
    const loginResponse = await fetch(`${backendUrl}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const loginData = (await loginResponse.json()) as ApiResponse<LoginData>;

    if (!loginResponse.ok || !loginData?.data?.token) {
      return NextResponse.json({ success: false, message: loginData?.message || 'Login failed' }, { status: loginResponse.status || 401 });
    }


    const token = loginData.data.token;

    const profileResponse = await fetch(`${backendUrl}/user/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const profileData = (await profileResponse.json()) as ApiResponse<unknown>;

    if (!profileResponse.ok) {
      return NextResponse.json({ success: false, message: profileData?.message || 'Failed to fetch profile' }, { status: profileResponse.status || 401 });
    }

    const session = await getSession();
    session.token = token;
    session.user = profileData?.data ?? profileData;
    session.isLoggedIn = true;
    await session.save();

    return NextResponse.json({ success: true, message: profileData?.message });
  } catch {
    return NextResponse.json({ success: false, message: 'Unexpected error during login' }, { status: 500 });
  }
}
