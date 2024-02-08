import Link from 'next/link';
import { GlobalHeader } from 'types';

const CONSTANTS = {
  quarter: {
    title: 'QUARTER',
    side: '반복 설정',
    href: '/iteration',
  },
  iteration: {
    title: '반복 설정',
    side: '메인으로',
    href: '/',
  },
};

export default function GlobalHeader({ type = 'quarter' }: GlobalHeader) {
  return (
    <header>
      <ul className="flex items-baseline gap-4">
        <li>
          <h1 className="pretendard--24--700">{CONSTANTS[type].title}</h1>
        </li>
        <li className="hover:underline">
          <Link href={CONSTANTS[type].href}>{CONSTANTS[type].side}</Link>
        </li>
      </ul>
    </header>
  );
}
