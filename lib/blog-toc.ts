import slugify from 'slugify';

export type TocItem = { level: 2 | 3; text: string; id: string };

export function addHeadingIds(html: string): string {
  const used = new Set<string>();
  return html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (_match, level: string, attrs: string, inner: string) => {
      if (/\sid\s*=/.test(attrs)) {
        const idM = attrs.match(/\sid="([^"]*)"/);
        if (idM?.[1]) used.add(idM[1]);
        return `<h${level}${attrs}>${inner}</h${level}>`;
      }
      const text = inner.replace(/<[^>]+>/g, '').trim();
      let id = slugify(text, { lower: true, strict: true }) || 'section';
      let candidate = id;
      let n = 2;
      while (used.has(candidate)) {
        candidate = `${id}-${n}`;
        n += 1;
      }
      used.add(candidate);
      return `<h${level}${attrs} id="${candidate}">${inner}</h${level}>`;
    }
  );
}

export function extractTocFromHtml(html: string): TocItem[] {
  const items: TocItem[] = [];
  const re = /<h([23])[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const g1 = m[1];
    const g2 = m[2];
    const g3 = m[3];
    if (g1 === undefined || g2 === undefined || g3 === undefined) continue;
    const level = Number(g1) as 2 | 3;
    if (level !== 2 && level !== 3) continue;
    const id = g2;
    const text = g3.replace(/<[^>]+>/g, '').trim();
    items.push({ level, id, text });
  }
  return items;
}
