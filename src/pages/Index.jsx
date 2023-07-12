import React from "react";
import image from "../Images/image.jpg";

const Index = () => {
    let divStyle = {
        backgroundImage:    `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the desired height
    
    }
  return (
    <>
       <div style={divStyle}>

       </div>
    </>
  );
};

export default Index;
