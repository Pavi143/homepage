import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import logo from '/home/joelsamuel/coding_club/codingclublogo.png';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo" style={{ position: 'absolute', top: 10, left: 30 }}>
        <Image src={logo} alt="Logo" width={80} height={80}  className=''/>
      </div>
      <div>
        
      </div>
    </header>
  );
};

export default Header;
