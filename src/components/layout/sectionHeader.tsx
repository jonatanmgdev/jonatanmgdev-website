"use client";

interface sectionHeaderProps {
    subtitle: string;
    title: string;
    description: string;
    className?: string;
}

export const SectionHeader: React.FC<sectionHeaderProps> = ({ title, subtitle, description, className }) => {
  return (
    <div className={`flex h-fit align-middle justify-center ${className}`}>
      <div className="text-center lg:max-w-5xl">
        <span>{subtitle}</span>
        <h2>{title}</h2>
        <div className="flex flex-col py-4">
          <p className="mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
