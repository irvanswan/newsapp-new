import { getSession } from '@/lib/session';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProfileSlugPage({ params }: Props) {
  const { slug } = await params;
  const session = await getSession();
  const user = session?.user;

  // Render different content based on slug
  if (slug === 'edit') {
    return (
      <div className='p-8'>
        <h1 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>Edit Profile</h1>
        <div className='space-y-4'>
          <p className='text-slate-600 dark:text-slate-300'>Edit your profile information here.</p>
          <pre className='bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm'>
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  if (slug === 'saved') {
    return (
      <div className='p-8'>
        <h1 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>Settings</h1>
        <p className='text-slate-600 dark:text-slate-300'>Manage your account settings.</p>
      </div>
    );
  }

  if (slug === 'faq') {
    return (
      <div className='p-8'>
        <h1 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>My Posts</h1>
        <p className='text-slate-600 dark:text-slate-300'>View and manage your posts.</p>
      </div>
    );
  }

  if (slug === 'help') {
    return (
      <div className='p-8'>
        <h1 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>My Posts</h1>
        <p className='text-slate-600 dark:text-slate-300'>View and manage your posts.</p>
      </div>
    );
  }

  // If slug doesn't match any known route, show 404
  notFound();
}
