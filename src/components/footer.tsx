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
    return <div className=' bg-mantle w-full mt-12'>
        <Divider />
        <div className='flex flex-col md:flex-row justify-between p-4 text-sm mb-20 '>
            <div className='flex flex-col md:w-1/5  text-subtext0 my-4 '>
                <div className='flex'>
                    <p className=''>Coding Club GCT</p>
                </div>
                <p >Rudra Block first floor,<br></br>GCT Coimbatore - 641 013, Tamil Nadu.</p>
                <a href='mailto:codingclubgct@gmail.com' className='text-subtext0 no-underline mt-8' >codingclubgct@gmail.com</a>
            </div>
            <div className=' flex md:justify-center md:w-1/5'>
                <div>
                    <p className='my-4 font-bold'> {footerItems.title}</p>
                    <div className='flex flex-col gap-2'>

                        {footerItems.items.map(({ label, href, icon }, j) => <div key={j} className='flex justify-between w-28 mr-10 text-sm text-subtext0 ' >
                            <Link href={href} className=' flex justify-between text-sm text-subtext0 no-underline w-28'>
                                <span>{label}</span>
                                <FontAwesomeIcon icon={icon} className='w-4 text-subtext0 '></FontAwesomeIcon>
                            </Link>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className='flex md:justify-center md:w-1/5 '>
                <div>
                    <p className='my-4  font-bold'>Domains</p>
                    <div className='flex flex-col gap-2 text-sm text-subtext0'>
                        <p>Fullstack Developement</p>
                        <p>App Developement</p>
                        <p>Ai Engineering</p>
                        <p>Software Developement</p>
                        <p>Network Engineering</p>
                    </div>
                </div>
            </div>

            <div className='flex md:justify-center  md:w-1/5 '>
                <div className='flex flex-col'>
                    <p className='my-4 font-bold'>Community</p>
                    <div className='flex justify-between w-28 mr-10 text-sm text-subtext0'>
                        <Link href='https://github.com/coding-club-gct' className=' flex justify-between text-subtext0 no-underline md:ml-2 w-28'>
                            <span>Github</span>
                            <FontAwesomeIcon icon={faGithub} className='w-4 '></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>

            <div className=' flex md:justify-center md:w-1/5'>
                <div className='flex flex-col'>
                    <p className='my-4 font-bold'> {footerElements.title}</p>
                    <div className='flex text-sm text-subtext0'>
                        {footerElements.items.map(({ label, href, icon }, j) => <div key={j} className=' flex justify-center' >
                            <Link href={href} className='text-subtext0 no-underline p-1 '>{<FontAwesomeIcon icon={icon} className='w-4 text-subtext0'></FontAwesomeIcon>}</Link>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <p className='text-center text-sm p-4'>Made with ❤️ by <a href='https://pavithra.tech' target='_blank' className='text-blue no-underline'>Pavithra </a>
            (Executive member second gen)
        </p>
    </div>



}