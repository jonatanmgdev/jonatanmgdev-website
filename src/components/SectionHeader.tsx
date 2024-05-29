"use client";

interface sectionHeaderProps {
    subtitle: string;
    title: string;
    description: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, description, className } : sectionHeaderProps) {
  return (
    <div className={`flex w-full align-middle justify-center ${className}`}>
      <div className="flex flex-col gap-1 text-center lg:max-w-5xl">
        <span>{subtitle}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
