import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import logo from '/home/joelsamuel/coding_club/codingclublogo.png';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'yellow',
        color: 'black',
        width: '100%',
        position: 'fixed', // or 'absolute' based on your layout needs
        bottom: '0',
        padding: '20px 0', // Adjust padding to control the footer's size
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-column">
          <div className="ml-3">
            <Image src={logo} alt="Logo" width={80} height={80} />
          </div>
          <div>
            <h5>CODING CLUB OF GCT</h5>
            <p>Learn • Code • Develop • Share • Repeat</p>
          </div>
        </div>
        <div className='flex flex-column'>
          <h4>Sections</h4>
          <h6>Home</h6>
          <h6>Team</h6>
          <h6>Activities</h6>
          <h6>Resources</h6>
          <h6>Blog</h6>
          <h6>Join us</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
