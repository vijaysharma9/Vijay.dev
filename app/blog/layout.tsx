import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne'
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${syne.variable} blog-root`}>{children}</div>;
}
