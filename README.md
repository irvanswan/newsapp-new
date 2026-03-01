# NEWSAPP UI
<p align="center">
  News app ui using Next js framework for building scalable ui
</p>

## TECH STACK
### Technology :
- Typescript
- NextJS (Framework)
- Node v22.12.0

### Library :
- <a href="https://www.npmjs.com/package/@nestjs/typeorm">Tailwindcss (framework css)</a>
- <a href="https://www.npmjs.com/package/@nestjs/typeorm">sass (library for styling writing)</a>
- <a href="https://www.npmjs.com/package/@nestjs/typeorm">react-hookform</a>
- <a href="https://www.npmjs.com/package/@nestjs/typeorm">yup (for schema validation react-hook-form)</a>
- <a href="https://www.npmjs.com/package/typeorm-naming-strategies">Next-iron-session (for authentication)</a>
- <a href="https://www.npmjs.com/package/@nestjs/typeorm">Swr (data fetching)</a>
- <a href="https://www.npmjs.com/package/@nestjs/typeorm">embla-carousel (carousel library)</a>

## DETAILED FLOW
```
                       NEXT.JS APPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

USER INTERFACE
┌──────────────────────┐
│   /login Page        │
│  - Email Input       │
│  - Password Input    │
│  - Submit Button     │
└──────────┬───────────┘
           │
           │ 1. User submits credentials
           ↓
      useLogin() Hook
      ├─ Validates inputs
      └─ Calls POST /api/auth/login
           │
           │
    ┌──────────────────────────────────────────┐
    │  NEXT.JS BACKEND ROUTE                   │
    │  /api/auth/login POST                    │
    │                                          │
    │  1. Extract credentials from body:       │
    │     { email, password }                  │
    │                                          │
    │  2. POST to YOUR BACKEND:                │
    │     POST /user/login                     │
    │     { email, password }                  │
    │                                          │
    │     ↓                                    │
    │     Response:                            │
    │     {                                    │
    │       statusCode: 200,                   │
    │       success: true,                     │
    │       data: {                            │
    │         token: "eyJ..."                  │
    │       }                                  │
    │     }                                    │
    │                                          │
    │  3. Extract token:                       │
    │     const token = response.data.token    │
    │                                          │
    │  4. GET PROFILE from YOUR BACKEND:       │
    │     GET /user/profile                    │
    │     Headers: Authorization: Bearer token │
    │                                          │
    │     ↓                                    │
    │     Response:                            │
    │     {                                    │
    │       statusCode: 200,                   │
    │       success: true,                     │
    │       data: {                            │
    │         id: "user-id",                   │
    │         email: "user@example.com",       │
    │         name: "User Name",               │
    │         avatar: "url",                   │
    │         role: "user"                     │
    │       }                                  │
    │     }                                    │
    │                                          │
    │  5. STORE IN IRON SESSION:               │
    │     session.user = {                     │
    │       id, email, name, avatar, role     │
    │     }                                    │
    │     session.token = token                │
    │     session.isLoggedIn = true            │
    │     session.save()                       │
    │                                          │
    │  6. SET SESSION COOKIE:                  │
    │     newsapp-session (encrypted)          │
    │                                          │
    │  7. RETURN SUCCESS:                      │
    │     { success: true, user: {...} }      │
    │                                          │
    └───────────┬────────────────────────────┘
                │
           2. Success response
                │
                ↓
         useLogin() Updates State
         ├─ isLoading = false
         ├─ success = true
         └─ Triggers redirect
                │
           3. useRouter().push('/')
                │
                ↓
         USER REDIRECTED TO HOME
         Session Cookie Persists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUBSEQUENT PAGE LOADS
┌──────────────────────┐
│  Any Component with  │
│  useAuth() hook      │
└──────────┬───────────┘
           │ Checks session
           ↓
    GET /api/auth/session
    (browser sends cookie automatically)
           │
           ↓
    Returns: { isLoggedIn: true, user: {...} }
           │
           ↓
    Component renders with user data
```
## UI PREVIEW
``` COMING SOON ```

## STRUCTURE CODE
```
src/
├── app/ # routing app page
├── components/  # Component UI atomic
    ├── atoms/  # Component atoms (reusable)
    ├── molecules/  # Component merging from atoms (reusable)
    ├── organisms/  # Component merging from molecules (for feature)
    └── layout/ # Component layout
├── hooks/  # Service globally hooks / reusable function
├── i18n/  # language registry ui
├── styles/  # root styles
├── utils/  # Variable handler
└── main.ts # NestJS bootstrap entry point
```
