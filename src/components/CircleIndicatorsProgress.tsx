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
        <span key={i} className={`w-4 h-4 sm:w-4.5 sm:h-4.5 mx-1 md:mx-1 lg:mx-1.2 rounded-full ${indicatorClass}`}></span>
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