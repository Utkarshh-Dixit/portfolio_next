'use client'

import Link from "next/link";
import { Button } from "./ui/button";

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';

import ProjectCard from "@/components/ProjectCard";


const projectData = [
  {
    image: '/work/1.png',
    category: 'MERN Stack',
    name: 'Kaarigar-Sathi',
    description: 'Your trusted platform connecting users with skilled local artisans seamlessly. Empowering communities with real-time listings, secure interactions, and personalized recommendations.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/2.png',
    category: 'MERN Stack',
    name: 'Insta-Replica',
    description: '"I have created a replica of Instagram, offering users a platform to share photos, connect, and engage with others through likes, comments, and follows.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/3.png',
    category: 'MERN Stack',
    name: 'PinCraft: A visual discovery tool',
    description: 'I have built a platform that enables users to discover, save, and share visual inspirations through personalized boards and collections.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/amazon_project.png',
    category: 'ReactJS, Firebase',
    name: 'Amazon Clone',
    description: 'I have crafted a replica of Amazon, complete with essential shopping features and payment processing, providing users with a familiar online shopping experience',
    link: '/',
    github: '/'
  },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quae. Velit inventore perferendis nostrum dolorum vero eaque corrupti repellat dignissimos. Omnis labore nostrum deleniti, voluptatem vero ducimus. Impedit, dolorum adipisci!</p>
          <Link href='/projects'><Button>All Projects</Button></Link>
        </div>

        <div className=" xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2,
            }
          }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
            {projectData.slice(0.4).map((project, index)=>{
              return <SwiperSlide key={index}>
                <ProjectCard project={project}/>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
0
export default Work