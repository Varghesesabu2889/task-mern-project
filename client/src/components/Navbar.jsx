import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-blue-300">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfyGEeeAOKPZoTQG7awGFd0prRa7MZVKVVQ&s" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
           <span style={{color:"white", cursor:'pointer'}}>&nbsp;Task Manager</span> 
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
