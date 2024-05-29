"use client";

interface sectionHeaderProps {
    subtitle: string;
    title: string;
    description: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, description, className } : sectionHeaderProps) {
  return (
    <div className={`flex align-middle justify-center ${className}`}>
      <div className="flex-1 gap-1 text-center lg:max-w-5xl">
        <span>{subtitle}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
