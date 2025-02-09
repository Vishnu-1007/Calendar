import React, { useState, useEffect } from 'react';

function ClickBar() {
  //const [isMounted, setIsMounted] = useState(false);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [currentMonth, setCurrentMonth] = useState('Jan');
 

  const rightButton1 = () => {

    months.forEach((month,index) => {   
        console.log(month,index)
        setCurrentMonth(month);
        
    });
    console.log('click event is received');
    //setCurrentMonth('Example Month');
  };

//   if (!isMounted) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="flex items-center justify-center h-60 gap-0.5">
      <button className="h-36 w-12 bg-customWhite flex items-center justify-center rounded-xl" onClick={rightButton1}>
        Click
      </button>
      <div className="h-36 w-6/12 bg-customWhite flex items-center justify-center rounded-xl">
        {currentMonth}
      </div>
      <button className="h-36 w-12 bg-customWhite flex items-center justify-center rounded-xl">
        Click
      </button>
    </div>
  );
}

export default ClickBar;
