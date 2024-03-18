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
        title: 'Education',
        data: [{
            university: 'Dr. APJ Abdul Kalam Technical University',
            qualification: 'Bachelor of Technology in Computer Science',
            years: '2020-2024'
        },
    {
        university: 'Dr. Brij Kishori Dubey Memorial School (ISC)',
        qualification: 'Intermediate',
        years: '2018-2020'
    },
    {
        university: 'Dr. Brij Kishori Dubey Memorial School (ICSE)',
        qualification: 'High School',
        years: '2016-2018'
    
    }]
    }
]

const skillData = [
    {
        title: 'Skills',
        data: [
            {
                title: 'Languages',
                data: ['JavaScript', 'TypeScript', 'Java']
            },
            {
                title: 'Frameworks',
                data: ['React', 'Next.js', 'Node.js', 'Express.js']
            },
            {
                title: 'Library',
                data: ['Material-UI', 'Tailwind CSS', 'Bootstrap', 'Shadcn UI']
            },
        ]
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
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                            <TabsTrigger className="w-[162px] xl:w-auto " value="personal">
                                Personal Info
                            </TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto " value="qualifications">
                                Qualifications
                            </TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto " value="skills">
                                Skills
                            </TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* personal Info */}
                            <TabsContent value="personal">
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Aspiring Software Developer</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0"> As a quick learner, I am committed to staying abreast of the latest technologies and methodologies, ensuring that I can adapt to the evolving needs of the industry.</p>
                                     {/* icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index)=>{
                                            return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                                </div>
                                        })}
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Language Skills</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Hindi</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent value="qualifications">
                            <div>
                                <h3 className="h3 mb-8 text-center xl:text-left">My awesome journey</h3>
                                {/* education */}
                                <div className="grid md:grid-cols-2 gap-y-8 ">
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <GraduationCap size={28} />
                                            <h4>{getData(qualificationData, 'Education').title}</h4>
                                        </div>
                                        {/* lists */}
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData, 'Education').data.map((item, index)=>{
                                                const {university, qualification, years} = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                            group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            </TabsContent>
                            <TabsContent value="skills">
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8 ">What I Use Everyday</h3>
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4 "></div>
                                        {/* Skill list */}
                                        <div>
                                            {getData(skillData, 'Skills').data.map((item, index)=>{
                                                const {title, data} = item;
                                                return <div className="w-1/2 xl:w-full text-center xl:text-left mx-auto xl:mx-0 " key={index}>
                                                    <div className="text-primary text-[22px] mt-5 mb-3">{title}</div>
                                                    <div className="font-medium ">{data.map((wow)=>{
                                                        return <span key={wow} className="inline-block text-orange px-2 py-1 rounded-lg mr-2 mb-2">{wow}</span>
                                                    })}</div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                    {/*Tools*/}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border mb-4 "></div>
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {getData(skillData, 'Tools').data.map((item, index)=>{
                                                const {imgPath} = item;
                                                return <div key={index}>
                                                    <Image src={imgPath} alt="" width={48} height={48} priority/>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                        
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About