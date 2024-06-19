"use client";

interface sectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  className,
}: sectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {subtitle && <span>{subtitle}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
