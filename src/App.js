import { useEffect, useState } from "react";
import MiApi from "./assets/components/MiApi";

function App() {
  const [info, setInfo] = useState([]);



  return (
    <div className="box">
      <h1 className="header">Inpirational Quotes</h1>
      <h5>Find your favorite quotes and authors</h5>
      <hr/>
      <MiApi/>
      <div className="footer">
            <br />
            <hr/>
            
            <p>All rights reserved. 2023</p>
      </div>
    </div>
  );
}

export default App;
