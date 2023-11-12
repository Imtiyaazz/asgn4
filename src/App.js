import React from "react";
import {Mobile} from "./components/Mobile"
import "./components/common.css"


function App() {
    return (
      <div className="main">
        <Mobile
        url="iphone1"
        title="Iphone 15"
        price="89,000"
        desc="Apple Iphone 15 ( Deep Gold, 256 GB ROM )"
        />
        <Mobile
        url="iphone2"
        title="Iphone 15 Plus"
        price="1,07,999"
        desc="Apple Iphone 15 Plus ( Deep Pink, 128 GB)"
        />
         <Mobile
        url="iphone3"
        title="Iphone 15 Pro"
        price="1,48,000"
        desc="Apple Iphone 15 Pro( Deep Grey, 512 GB)"
        />
        <Mobile
        url="iphone4"
        title="Iphone 15 pro max"
        price="1,99,999"
        desc="Apple Iphone 15 Pro Max ( Deep White, 1 TB)"
        />
      </div>
    );
  }
  
  export default App;
