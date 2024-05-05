import React from 'react';

/*
  Author: [Jonatan Montesdeoca]
  Date Created: [15/03/2024]
  Description: [Logo of the author of this website]
*/

const LogoComponent = React.memo(() => {
  return (
    <div className="w-max flex items-center">
      <p className="animate-slideinLeft font-semibold text-2xl text-white">
        Jonatanmg
      </p>
      <p className="animate-slideinDown font-black text-2xl text-primary-dark">
        .
      </p>
      <p className="animate-slideinRight font-medium text-2xl text-primary-dark">
        dev
      </p>
    </div>
  );
});

export default LogoComponent;