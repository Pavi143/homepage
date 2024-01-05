import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import logo from '/home/joelsamuel/coding_club/codingclublogo.png';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'yellow', color: 'black',width:'full' }}>
      <div className="flex justify-between">
        <div className="flex flex:'column'">
          <div className="ml-3">
            <Image src={logo} alt="Logo" width={80} height={80} />
          </div>
          <div>
            <h5>CODING CLUB OF GCT</h5>
            <p>Learn • Code • Develop • Share • Repeat</p>
          </div>
        </div>
        <div>
          <p>Additional content on the right side</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
