"use client";

interface blockquoteProps {
  author: string;
  quote: string;
  className?: string;
}

export const Blockquote: React.FC<blockquoteProps> = ({
  author,
  quote,
  className,
}) => {
  return (
    <blockquote className= {`flex xs:flex-col md:flex-row gap-2 border-s-4 border-primary-dark bg-neutral-deep rounded-r-lg p-2 ${className}`}>
      <p className="font-light italic text-primary-dark">
        "{quote}"
      </p>
      <p className="font-bold">- {author}</p>
    </blockquote>
  );
};
