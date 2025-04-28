import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, children, centered = false }: SectionHeadingProps) => {
  return (
    <motion.div 
      className={`mb-14 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight pb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && <p className="text-lg text-gray-400 mt-2 max-w-2xl">{subtitle}</p>}
      {children}
    </motion.div>
  );
};

export default SectionHeading;