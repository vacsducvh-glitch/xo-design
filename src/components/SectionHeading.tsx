import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-accent">
        {title}
      </h2>
      <div className={cn(
        'h-1 w-20 bg-primary mt-6',
        align === 'center' ? 'mx-auto' : 'mr-auto'
      )} />
    </motion.div>
  );
}
