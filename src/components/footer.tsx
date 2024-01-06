import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import logo from '/home/joelsamuel/coding_club/codingclublogo.png';

const Footer: React.FC = () => {
  return (
    <footer>
    <div className="flex bg-yellow mt-20">
     <div className="flex flex-col mt-10">
      <div className='ml-20'>
        <Image src={logo} alt="Logo" width={80} height={80} />
      </div>
      <div>
        <h5 className='ml-14'>CODING CLUB OF GCT</h5>
        <p className='ml-6' >Learn • Code • Develop • Share • Repeat</p>
      </div>
    </div>
    <div className="flex flex-col items-center ml-20">
      <h3>    Sections</h3>
      <ul className='flex flex-col mt-1 gap-2 list-none '>
        <li>Home</li>
        <li>Activities</li>
        <li>Blog</li>
        <li>Team</li>
        <li>Contact</li>
        <li>Resources</li>
        <li>Join Us</li>
      </ul>
    </div>
    </div>
</footer>
  );
};

export default Footer;
