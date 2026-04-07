import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'AI Solutions', href: '/services/ai-llm-integration' },
    { label: 'eCommerce', href: '/services/ecommerce' },
    { label: 'Freelance Team', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~019b3aee9c5d781d36' }
  ];

  return (
    <footer>
      <div className="footer-inner">
        <div>
          <Link href="/" className="footer-logo" aria-label="HireDeveloperShop home">
            <span className="brand-word">HireDeveloperShop</span>
            <span className="brand-com">.com</span>
          </Link>
          <div className="footer-tagline">
            Full-Stack Developer &amp; Freelance Team — Worldwide
          </div>
        </div>

        <ul className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith('http') ? (
                <a href={link.href} target="_blank" rel="noopener">
                  {link.label}
                </a>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
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

