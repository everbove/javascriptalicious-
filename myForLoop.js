{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf460
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red36\green43\blue51;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl260\partightenfactor0

\f0\fs22 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function myForLoop(whatisStart, isSmallerThan, WhatHappensNext)\{\
   var start = whatisStart;\
   var smallerThan = isSmallerThan;\
   var condition = start > isSmallerThan;\
   var whatNext = WhatHappensNext;\
   var increment = start;\
\
   if(condition === true)\{\
     \
      return "Loop Complete";\
\
   \} else \{ \
      increment = start + whatNext;\
      console.log(start);\
      strat = increment;\
   \}\
   if(condition === false)\{\
      return myForLoop(increment, isSmallerThan, WhatHappensNext);\
   \}\
      return;\
\};}