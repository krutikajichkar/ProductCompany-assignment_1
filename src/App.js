
import './App.css';
import {useState} from 'react';

function App() {
 

  const [position, setPosition] = useState({ x: 70, y: 70 });

  const handleMove = (direction) => {
    const step = 70; // Adjust this value to change the step size
    switch (direction) {
      case "right":
        setPosition({ x: position.x !== 630 ? position.x + step : position.x, y: position.y });
        break;
      case "left":
        setPosition({ x:position.x !== 70 ? position.x - step : position.x, y: position.y });
        break;
      case "top":
        setPosition({ x: position.x, y: position.y !== 70 ? position.y - step : position.y });
        break;
      case "bottom":
        setPosition({ x: position.x, y: position.y !== 560 ? position.y + step : position.y  });
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="left_container"  onClick={() => handleMove('left')} style={{color : position.x === 70 ? "rgb(207, 205, 205)" : "black" }}>Left</div>
        <div className="right_container" onClick={()=> handleMove('right')} style={{color : position.x === 630 ? "rgb(207, 205, 205)" : "black" }}>Right</div>
        <div className="top_container" onClick={()=> handleMove('top')} style={{color : position.y === 70 ? "rgb(207, 205, 205)" : "black" }}>Top</div>
        <div className="bottom_container" onClick={()=> handleMove('bottom')} style={{color : position.y === 560 ? "rgb(207, 205, 205)" : "black" }}>Bottom</div>
        <div    style={{
            width: "70px",
            height: "70px",
            background: "greenyellow",
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}  ></div>
      </div>
    </div>
  );
}

export default App;
