import { useState } from "react";
import BeatPad from "./Beatpad";

const Home = () => {
  const [name, setName] = useState(false);

  const handleClick = () => {
    setName(!name);
  }
  return (
    <div className="home">
      <div className="grayRectangle" > 
        <BeatPad></BeatPad>
      </div>  
       
      </div>
  );
};

export default Home;
