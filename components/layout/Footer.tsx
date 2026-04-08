import Link from 'next/link';

import { SERVICE_LANDING } from '@/lib/seo-service-landings';

const serviceEntries = Object.values(SERVICE_LANDING).sort((a, b) =>
  a.breadcrumbLabel.localeCompare(b.breadcrumbLabel)
);

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <Link href="/" className="footer-logo" title="HireDeveloperShop home" aria-label="HireDeveloperShop home">
            <span className="brand-word">HireDeveloperShop</span>
            <span className="brand-com">.com</span>
          </Link>
          <div className="footer-tagline">
            Full-Stack Developer &amp; Freelance Team — Worldwide
          </div>
        </div>

        <div className="footer-columns">
          <ul className="footer-links" aria-label="Site pages">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/stack">Tech stack</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/hire">Hire us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a
                href="https://www.upwork.com/freelancers/~019b3aee9c5d781d36"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork
              </a>
            </li>
          </ul>

          <div className="footer-service-list" aria-label="Service pages">
            <p className="footer-service-heading">All services</p>
            <ul className="footer-links footer-links-services">
              {serviceEntries.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.breadcrumbLabel}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-copy">
          © 2026 HireDeveloperShop. All Rights Reserved.
          <br />
          <span className="text-accent2">
            Full-Stack Development · AI Solutions · Freelance Team
          </span>
        </div>
      </div>
    </footer>
  );
}
