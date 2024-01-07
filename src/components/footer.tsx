import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faH, faHome } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDiscord, faInstagram, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import logo from "@/assets/codingclublogo.png"

const footerItems = [
    {
        title: 'Quick links', items: [
            { label: 'Home', href: 'home', icon: faHome },
            { label: 'Activities', href: 'activities', icon: faHome },
            { label: 'Teams', href: 'teams', icon: faHome },
            { label: 'Blogs', href: 'blogs', icon: faHome },
            { label: 'Contact', href: 'contact', icon: faHome },
            { label: 'Join Us', href: 'join', icon: faHome }
        ]
    },
    {
        title: 'Social Media', items: [
            { label: 'Discord', href: 'home', icon: faDiscord },
            { label: 'Instagram', href: 'activities', icon: faInstagram },
            { label: 'Github', href: 'teams', icon: faGithub },
            { label: 'LinkedIn', href: 'blogs', icon: faLinkedin },
            { label: 'Youtube', href: 'contact', icon: faYoutube },
            { label: 'Twitter', href: 'join', icon: faTwitter }
        ]
    }

]

export default function Footer() {
    return <div className='flex justify-between p-4 '>
        <div className='flex flex-col w-1/4 ml-10'>
            <div className='flex'>
                <img src={logo.src} className='w-10 h-10 mt-4'></img>
                <h2 className='ml-2'>Coding Club GCT</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequatur.</p>
            <Link href= 'codingclubgct@gmail.com' className='text-text no-underline'>codingclubgct@gmail.com</Link>

        </div>
        {footerItems.map((item, i) => <div key={i}>
            <h2> {item.title}</h2>
            {item.items.map(({ label, href, icon }, j) => <div key={j} className='flex justify-between w-28 mr-10' >
                <Link href={href} className='text-text no-underline'>{label}</Link>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>)}
        </div>)}



    </div>
}