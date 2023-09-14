'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const path = usePathname();

  return (
    <ol className="list-reset flex">
      <li>
        <Link
          href="/"
          className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >
          Home
        </Link>
      </li>
      <li>
        <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
      </li>
      <li>
        <Link href="" className="text-neutral-500 dark:text-neutral-400 pointer-events-none capitalize">
          {path.split('/')}
        </Link>
      </li>
    </ol>
  );
}
