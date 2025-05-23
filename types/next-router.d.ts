// types/next-router.d.ts

import { useRouter } from 'next/navigation';

// This line infers the type of the router object returned by Next.js App Router's useRouter hook.
// It's the most robust way to get the correct type for your specific Next.js version.
export type AppRouterInstance = ReturnType<typeof useRouter>;

// (Optional but Recommended) If you encounter issues where NextRouter from 'next/router'
// is expected but you're using App Router, you can augment it like this.
// Only uncomment if needed after the primary fix.
// declare module 'next/router' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface NextRouter extends AppRouterInstance {}
// }