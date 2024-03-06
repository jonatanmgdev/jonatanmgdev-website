import React from 'react';

interface CircleIndicatorProgressProps {
  value: number; 
}

const CircleIndicatorProgress: React.FC<CircleIndicatorProgressProps> = ({ value }) => {
  const renderIndicators = () => {
    const indicators = [];
    for (let i = 1; i <= 10; i++) {
      const indicatorClass = i <= value ? 'bg-[--tertiary-color]' : 'bg-[--primary-color]';
      indicators.push(
        <span key={i} className={`w-3 h-3 me-2 rounded-full mx-3 sm:mx-2 md:mx-1 xl:mx-2  ${indicatorClass}`}></span>
      );
    }
    return indicators;
  };

  return (
    <span className='flex'>
      {renderIndicators()}
    </span>
  );
};

export default CircleIndicatorProgress;