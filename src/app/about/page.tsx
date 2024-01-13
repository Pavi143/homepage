import { IconDefinition, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "@mui/material"
import { join } from "path/win32"

type CardItem = { photo: string, name: string, designation: string, about: string, socials: { icon: IconDefinition, href: string }[], domains: string[], rollNo: string }


const aboutItems = [
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', title: 'Lorem, ipsum dolor.', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, modi fuga doloribus illo corporis debitis, repudiandae numquam ullam nemo dolores nihil eius corrupti blanditiis perferendis consequatur quibusdam voluptatibus molestiae consectetur!'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', title: 'Lorem, ipsum dolor.', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, modi fuga doloribus illo corporis debitis, repudiandae numquam ullam nemo dolores nihil eius corrupti blanditiis perferendis consequatur quibusdam voluptatibus molestiae consectetur!'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', title: 'Lorem, ipsum dolor.', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, modi fuga doloribus illo corporis debitis, repudiandae numquam ullam nemo dolores nihil eius corrupti blanditiis perferendis consequatur quibusdam voluptatibus molestiae consectetur!'
    },

]

const cardItems: CardItem[] = [
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'pavithra', designation: 'executive member', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faInstagram, href: 'www.instagram.com' },
            { icon: faGithub, href: 'www.github.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018131'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'pavithra', designation: 'executive member', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faInstagram, href: 'www.instagram.com' },
            { icon: faGithub, href: 'www.github.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018131'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'pavithra', designation: 'executive member', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faInstagram, href: 'www.instagram.com' },
            { icon: faGithub, href: 'www.github.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018131'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'pavithra', designation: 'executive member', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faInstagram, href: 'www.instagram.com' },
            { icon: faGithub, href: 'www.github.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018131'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'pavithra', designation: 'executive member', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faInstagram, href: 'www.instagram.com' },
            { icon: faGithub, href: 'www.github.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018131'
    },
    {
        photo: 'https://imgs.search.brave.com/AOHPYtc-nxMtVikm6okEDNtpYb60nRxcZ5Jw_v5k8ac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsaW5nLXdvbWFu/XzExNDktMjg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', name: 'pavithra', designation: 'executive member', about: 'Lorem ipsum dolor sit amet.', socials: [
            { icon: faInstagram, href: 'www.instagram.com' },
            { icon: faGithub, href: 'www.github.com' }

        ], domains: ['fullStack', 'Software Engineering'], rollNo: '2018131'
    }
]

function Card(props: CardItem) {
    return <div className="flex flex-col px-4 py-8 w-full gap-2 items-center bg-mantle rounded ">
        <img src={props.photo} className="w-20 object-contain rounded-full"></img>
        <p className="font-bold">{props.name}</p>
        <p className="text-yellow">{props.designation}</p>
        <p>{props.rollNo}</p>
        <p>{props.about}</p>
        <div className="flex gap-4 ">
            {props.domains.map((domain, i) => <span key={i} className="bg-crust rounded px-2 py-1 text-sm text-subtext0">{domain}</span>)}
        </div>
        <div className="flex gap-4">
            {props.socials.map((social, j) => <a href={social.href} key={j}><FontAwesomeIcon icon={social.icon} className="w-4 h-4 text-text"></FontAwesomeIcon>
            </a>)}
        </div>


    </div>
}

export default function Page() {
    return <div>
        <div className="flex flex-col items-center bg-mantle ">
            <p className="text-3xl md:mt-4 ">Lorem ipsum dolor sit.</p>
            <div className="flex flex-col md:flex-row gap-8 p-1 ">
                {aboutItems.map((item, i) => <div key={i} className="flex flex-col w-full md:w-1/3 p-4 items-center gap-4">
                    <img src={item.photo} className="w-24 oject-contain rounded-full" ></img>
                    <p className="font-bold">{item.title}</p>
                    <p>{item.content}</p>
                </div>)}

            </div>
        </div>
        <div className="flex flex-col items-center gap-10">
            <p className="text-6xl mt-8 font-medium" >Meet Our Team</p>
            <p className="max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat debitis facilis ex deserunt dolor. Enim ratione minus nemo ad?</p>
            <div className="md:grid grid-rows-2 grid-cols-3 w-full gap-4 p-4  ">
                {cardItems.map((item, i) => <div key={i} className="w-full my-4 md:my-0 ">
                    <Card {...item} />
                </div>)}
            </div>
        </div>
    </div>
}