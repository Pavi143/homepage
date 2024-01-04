import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import logo from '/home/joelsamuel/coding_club/codingclublogo.png';

const Main: React.FC = () => {
  return (
    <header>
      <div className="main">
      <div className="logo" style={{ position: 'absolute', top: 200, left: 500 }}>
        <Image src={logo} alt="Logo" width={230} height={230}/>
      </div>
      </div>
      <div >
        <h2 style={{ position: 'absolute', top: 450, left: 500  }}>CODING CLUB OF GCT</h2>
        <ul className='flex space-x-20' style={{ position: 'absolute', top: 500, left: 300 , textDecoration:'bold'}}>
            <li>Learn</li>
            <li>Code</li>
            <li>Develope</li>
            <li>Share</li>
            <li>Repeat</li>
        </ul>
      </div>
    </header>
  );
};

export default Main;
