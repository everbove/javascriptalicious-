function myForLoop(whatisStart, isSmallerThan, WhatHappensNext)\{\
   var start = whatisStart;
   var smallerThan = isSmallerThan;
   var condition = start > isSmallerThan;
   var whatNext = WhatHappensNext;
   var increment = start;

   if(condition === true){
     
      return "Loop Complete";

   } else { 
      increment = start + whatNext;
      console.log(start);
      strat = increment;
   }
   if(condition === false){
      return myForLoop(increment, isSmallerThan, WhatHappensNext);
   }
      return;
   };
