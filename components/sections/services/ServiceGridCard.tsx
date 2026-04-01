import { cn } from '@/utils/cn';
import type { Service, ServiceColor } from '@/lib/services-data';

const AFTER: Record<ServiceColor, string> = {
  blue: 'after:bg-[linear-gradient(90deg,transparent,#4f8cff,transparent)]',
  purple: 'after:bg-[linear-gradient(90deg,transparent,#a259ff,transparent)]',
  green: 'after:bg-[linear-gradient(90deg,transparent,#00e5a0,transparent)]',
  cyan: 'after:bg-[linear-gradient(90deg,transparent,#00d4ff,transparent)]',
  orange: 'after:bg-[linear-gradient(90deg,transparent,#ff7a45,transparent)]',
  pink: 'after:bg-[linear-gradient(90deg,transparent,#ff4da6,transparent)]',
  yellow: 'after:bg-[linear-gradient(90deg,transparent,#ffd24d,transparent)]'
};

const ICON_BG: Record<ServiceColor, string> = {
  blue: 'bg-[rgba(79,140,255,0.1)]',
  purple: 'bg-[rgba(162,89,255,0.1)]',
  green: 'bg-[rgba(0,229,160,0.1)]',
  cyan: 'bg-[rgba(0,212,255,0.1)]',
  orange: 'bg-[rgba(255,122,69,0.1)]',
  pink: 'bg-[rgba(255,77,166,0.1)]',
  yellow: 'bg-[rgba(255,210,77,0.1)]'
};

export default function ServiceGridCard({
  service,
  idProp
}: {
  service: Service;
  idProp?: string;
}) {
  return (
    <article
      id={idProp}
      className={cn(
        'group relative cursor-default overflow-hidden rounded-[18px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-8 transition-[transform,border-color] duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(79,140,255,0.28)] group-hover:after:opacity-100',
        AFTER[service.color]
      )}
    >
      <div
        className={cn(
          'mb-5 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] text-2xl',
          ICON_BG[service.color]
        )}
        aria-hidden
      >
        {service.icon}
      </div>
      <h3 className="mb-2.5 font-heading text-[1.08rem] font-bold text-[#e8e8f0]">
        {service.title}
      </h3>
      <p className="mb-5 font-body text-[0.875rem] leading-[1.65] text-[#7b7b99]">
        {service.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/[0.07] bg-[rgba(255,255,255,0.04)] px-2.5 py-0.5 text-[0.72rem] text-[#7b7b99]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

