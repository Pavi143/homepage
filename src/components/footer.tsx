import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faH, faHome, faBlog, faPeopleGroup, faPhone, faUserPlus, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDiscord, faInstagram, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import logo from "@/assets/codingclublogo.png"
import { Divider } from '@mui/material';


const footerItems = {
    title: 'Quick links', items: [
        { label: 'Home', href: 'home', icon: faHome },
        { label: 'Activities', href: 'activities', icon: faPersonChalkboard },
        { label: 'Teams', href: 'teams', icon: faPeopleGroup },
        { label: 'Blogs', href: 'blogs', icon: faBlog },
        { label: 'Contact', href: 'contact', icon: faPhone },
        { label: 'Join Us', href: 'join', icon: faUserPlus }
    ]
}

const footerElements = {
    title: 'Social Media', items: [
        { label: 'Discord', href: 'home', icon: faDiscord },
        { label: 'Instagram', href: 'activities', icon: faInstagram },
        { label: 'LinkedIn', href: 'blogs', icon: faLinkedin }
    ]
}

export default function Footer() {
    return <div className=' bg-mantle w-full '>
        <div className='flex justify-between p-4 text-sm mb-20 '>
            <div className='flex flex-col w-1/5 ml-10 '>
                <div className='flex'>
                    <h4 className='ml-2'>Coding Club GCT</h4>
                </div>
                <p>Rudra Block first floor,<br></br>GCT Coimbatore - 641 013, Tamil Nadu.</p>
                <a href='mailto:codingclubgct@gmail.com' className='text-text no-underline mt-8' >codingclubgct@gmail.com</a>
            </div>
            <div className=' flex justify-center w-1/5'>
                <div>
                    <h4> {footerItems.title}</h4>
                    <div className='flex flex-col gap-4'>

                        {footerItems.items.map(({ label, href, icon }, j) => <div key={j} className='flex justify-between w-28 mr-10' >
                            <Link href={href} className='text-text no-underline'>{label}</Link>
                            <FontAwesomeIcon icon={icon} className='w-4'></FontAwesomeIcon>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-1/5 '>
                <div>
                    <h4>Services</h4>
                    <div className='flex flex-col gap-4'>
                    <li>Fullstack Developement</li>
                    <li>App Developement</li>
                    <li>Ai Engineering</li>
                    <li>Software Developement</li>
                    <li>Network Engineering</li>
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-1/5 '>
                <div className='flex flex-col'>
                    <h4>Community</h4>
                    <div className='flex justify-between w-28 mr-10'>
                        <Link href='https://github.com/coding-club-gct' className='text-text no-underline ml-2'>Github</Link>
                        <FontAwesomeIcon icon={faGithub} className='w-4 '></FontAwesomeIcon>
                    </div>
                </div>
            </div>

            <div className=' flex justify-center w-1/5'>
                <div className='flex flex-col'>
                    <h4> {footerElements.title}</h4>
                    <div className='flex'>
                        {footerElements.items.map(({ label, href, icon }, j) => <div key={j} className=' flex justify-center' >
                            <Link href={href} className='text-textno-underline p-1'>{<FontAwesomeIcon icon={icon} className='w-4'></FontAwesomeIcon>}</Link>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <p className='text-center p-4'>Made with ❤️ by <a href='https://pavithra.tech' target='_blank' className='text-blue no-underline'>Pavithra </a>
            (Executive member second gen)
        </p>
    </div>



}