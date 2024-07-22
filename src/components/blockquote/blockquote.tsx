"use server";

interface blockquoteProps {
  author: string;
  quote: string;
  className?: string;
}

/**
 * Blockquote component
 * @returns {JSX.Element} HTML content of the component.
 * @param {author} author - Author of the blockquote.
 * @param {quote} quote - Quote of the blockquote.
 * @param {className} className - Class name of the blockquote.
 * @author Jonatan Montesdeoca González
 **/

export const Blockquote: React.FC<blockquoteProps> = ({
  author,
  quote,
  className,
}) => {
  return (
    <blockquote
      className={`lg:flex gap-2 border-s-4 border-primary-dark bg-neutral-dark rounded-r-lg p-2 ${className}`}
    >
      <div className="lg:flex-grow">
        <p className="font-light italic text-primary-dark">
          {'"'}
          {quote}
          {'"'}
        </p>
      </div>
      <div className="lg:flex-none">
        <p className="font-bold">- {author}</p>
      </div>
    </blockquote>
  );
};
