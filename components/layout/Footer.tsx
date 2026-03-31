import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo">
            <span className="brand-word">HireDeveloperShop</span>
            <span className="brand-com">.com</span>
          </div>
          <div className="footer-tagline">
            Full-Stack Developer &amp; Freelance Team — Worldwide
          </div>
        </div>

        <ul className="footer-links" aria-label="Footer navigation">
          <li>
            <Link href="/#services">Web Development</Link>
          </li>
          <li>
            <Link href="/#services">AI Solutions</Link>
          </li>
          <li>
            <Link href="/#services">eCommerce</Link>
          </li>
          <li>
            <Link href="/#services">Freelance Team</Link>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~019b3aee9c5d781d36"
              target="_blank"
              rel="noopener"
            >
              Upwork
            </a>
          </li>
        </ul>

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

