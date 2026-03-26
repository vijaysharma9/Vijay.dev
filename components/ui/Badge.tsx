import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'border-border text-accent2 bg-blue-500/5',
        secondary: 'border-border text-text bg-white/5',
        accent: 'border-0 bg-gradient-to-r from-accent to-accent2 text-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

