
import React from "react";


const LogoComponent = React.memo(() => {
  return (
    <div className="flex items-center group">
      <p className="font-semibold text-2xl text-white">Jonatanmg</p>
      <p className="text-2xl font-medium text-primary-dark group-hover:text-accent-dark">
        .dev
      </p>
    </div>
  );
});

export default LogoComponent;
