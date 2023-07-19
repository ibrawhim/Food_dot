import React from "react";
import image from "../Images/default-pasta.jpg";
import { Link } from "react-router-dom";

const Index = () => {
    let divStyle = {
        backgroundImage:    `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    }
    let centerDiv = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#8c101f',
        backgroundColor: '#ffbd6f',
        // border: '2px solid' 
    }
  return (
    <>
       <div style={divStyle}>
          <Link to='/search' className="shadow p-3 rounded-4 fw-bold" style={centerDiv}>Go to Search Page</Link>
       </div>
    </>
  );
};

export default Index;
