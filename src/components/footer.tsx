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
    }

]

const footerElements = [{
    title: 'Social Media', items: [
        { label: 'Discord', href: 'home', icon: faDiscord },
        { label: 'Instagram', href: 'activities', icon: faInstagram },
        { label: 'LinkedIn', href: 'blogs', icon: faLinkedin }
    ]
}]

export default function Footer() {
    return <div className='flex justify-between p-4  '>
        <div className='flex flex-col w-1/2 ml-10 '>
            <div className='flex '>
                <img src={logo.src} className='w-10 h-10 mt-4'></img>
                <h4 className='ml-2'>Coding Club GCT</h4>
            </div>
            <p>Rudra Block, Coimbatore - 641 013, Tamil Nadu.</p>
            <Link href='codingclubgct@gmail.com' className='text-text no-underline'>codingclubgct@gmail.com</Link>
        </div>

        {footerItems.map((item, i) => <div key={i} className='w-1/4'>
            <h4> {item.title}</h4>
            {item.items.map(({ label, href, icon }, j) => <div key={j} className='flex justify-between w-28 mr-10' >
                <Link href={href} className='text-text no-underline'>{label}</Link>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>)}
        </div>)}

        <div className='flex flex-col w-1/4 '>
            <h4>Services</h4>

            <li>Fullstack Developement</li>
            <li>App Developement</li>
            <li>Ai Engineering</li>
            <li>Software Developement</li>
            <li>Network Engineering</li>
        </div>

        <div className='flex flex-col w-1/5 '>
            <h4>Communitty</h4>
            <div className='flex w-28 mr-10'>
                <Link href='https://github.com/coding-club-gct' className='text-text no-underline ml-2'>Github</Link>
                <FontAwesomeIcon icon={faGithub} className='w-28'></FontAwesomeIcon>
            </div>

        </div>

        {footerElements.map((item, i) => <div key={i}>
            <h4> {item.title}</h4>
            {item.items.map(({ label, href, icon }, j) => <div key={j} className=' flex justify-center w-28 mr-10' >
                <Link href={href} className='text-textno-underline p-1'>{<FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</Link>

            </div>)}
        </div>)}



    </div>
}