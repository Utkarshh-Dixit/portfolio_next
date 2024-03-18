import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Utkarsh Dixit'
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+91 6394924092'
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'utkarshdixit.2k21@gmail.com'
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born on 3rd Feb, 2003'
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Bachelor of Technology in Computer Science'
    },
    {
        icon: <HomeIcon size={20}/>,
        text: '119/438 Darshanpurwa , Kanpur, Uttar Pradesh, India'
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [{
            university: 'Dr. APJ Abdul Kalam Technical University',
            qualification: 'Bachelor of Technology in Computer Science',
            years: '2020-2024'
        }]
    }
]

const skillData = [
    {
        title: 'Languages',
        data: ['Java', 'JavaScript']
    },
    {
        title: 'Frameworks',
        data: ['React', 'Next.js', 'Node.js', 'Express.js']
    },
    {
        title: 'Tools',
        data: [
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/github.svg'
            },
            {
                imgPath: '/about/figma.svg'
            },
            {
                imgPath: '/about/git.svg'
            },
            {
                imgPath: '/about/wordpress.svg'
            },
        ]
    }
]

const About = () => {
    const getData = (arr, title) =>{
        return arr.find((item)=>item.title === title);
    }
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px]
                    bg-no-repeat relative" imgSrc='/about/hehe.png' />
                </div>

                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList>
                            <TabsTrigger value="personal">
                                Personal Info
                            </TabsTrigger>
                            <TabsTrigger value="qualifications">
                                Qualifications
                            </TabsTrigger>
                            <TabsTrigger value="skills">
                                Skills
                            </TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value="personal">personal</TabsContent>
                        <TabsContent value="qualifications">qualifications</TabsContent>
                        <TabsContent value="skills">skills</TabsContent>
                        </div>
                        
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About