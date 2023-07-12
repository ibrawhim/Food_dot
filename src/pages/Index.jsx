import React from "react";
import image from "../Images/default-pasta.jpg";

const Index = () => {
    let divStyle = {
        backgroundImage:    `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the desired height
    }
    let centerDiv = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#526101',
        backgroundColor: '#f18b43',
        border: '2px solid' 
    }
  return (
    <>
       <div style={divStyle}>
          <h3 style={centerDiv}>Welcome to Food-Search</h3>
       </div>
    </>
  );
};

export default Index;
