import React from 'react';
import './App.css'
import { useMediaQuery } from 'react-responsive'
//import UserMessage from './UserMessage/UserMessage';

import Mobile from "./components/Sizes/Mobile/Mobile"
import TabletMobile from "./components/Sizes/tablet-mobile/TabletMobile"
import Desktop from "./components/Sizes/Desktop/Desktop"
import Laptop from "./components/Sizes/Laptop/Laptop"
import Bigscreen from './components/Sizes/Bigscreen/Bigscreen';




const App = () => {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  
  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  
  return (
    <>
       {isBigScreen && <Bigscreen />}
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <>
        <TabletMobile />
        {isDesktop && <Desktop />}
        {isLaptop && <Laptop />}
      </>} 
    </>
  );
}

export default App
