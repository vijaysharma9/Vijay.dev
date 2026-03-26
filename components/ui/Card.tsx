import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const cardVariants = cva('rounded-xl border bg-surface2', {
  variants: {
    variant: {
      default: 'border-border',
      subtle: 'border-border/60 bg-surface'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({ className, variant, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props} />
  );
}

