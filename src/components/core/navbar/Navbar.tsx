import React from 'react';
import { Icons } from '../../../utils/iconConfig'; // Import the Icons

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Icons.FaHome size="30px" />
        JoBins
      </div>
      <div className="navbar-links">
        <Icons.MdDashboard />
        <Icons.AiOutlineUser color="#ff6347" />
      </div>
    </nav>
  );
};

export default Navbar;
