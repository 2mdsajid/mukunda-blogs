import React from 'react';

const CurvedArrow = ({width,height}:{width:string,height:string}) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={width} height={width}>
  <path d="M10,120 Q60,40 129,109 L130,69 M129,110 L90,130" fill="none" stroke="white" strokeWidth="2" />
</svg>

  );
};

export default CurvedArrow;
