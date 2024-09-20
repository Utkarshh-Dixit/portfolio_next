"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/PriceWise_image.png",
    category: "Next.js, TailwindCSS",
    name: "Price-Wise: Your personal shopping assistant",
    description:
      "I have created a platform that helps users track and compare product prices across e-commerce websites, enabling them to make informed purchasing decisions.",
    link: "https://price-wise-theta.vercel.app/",
    github: "https://github.com/Utkarshh-Dixit/PriceWise",
  },
  {
    image: "/work/ks_project.png",
    category: "MERN Stack",
    name: "Kaarigar-Sathi: Where skills meet needs",
    description:
      "Your trusted platform connecting users with skilled local artisans seamlessly. Empowering communities with real-time listings, secure interactions, and personalized recommendations.",
    link: "https://kaarigarsathi-project.onrender.com",
    github: "https://github.com/Utkarshh-Dixit/KaarigarSathi-Project",
  },
  {
    image: "/work/insta_project.png",
    category: "MERN Stack",
    name: "SnapWorld: Capture. Share. Explore",
    description:
      '"I have created a replica of Instagram, offering users a platform to share photos, connect, and engage with others through likes, comments, and follows.',
    link: "/",
    github: "https://github.com/Utkarshh-Dixit/instaclone",
  },
  {
    image: "/work/3.png",
    category: "MERN Stack",
    name: "PinCraft: A visual discovery tool",
    description:
      "I have built a platform that enables users to discover, save, and share visual inspirations through personalized boards and collections.",
    link: "/",
    github: "https://github.com/Utkarshh-Dixit/pinterest-clone",
  },
  {
    image: "/work/amazon_project.png",
    category: "ReactJS, Firebase",
    name: "MarketHub: Your one-stop shop",
    description:
      "I have crafted a replica of Amazon, complete with essential shopping features and payment processing, providing users with a familiar online shopping experience",
    link: "https://clone-f1ed7.web.app/",
    github: "https://github.com/Utkarshh-Dixit/amazon-clone",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Discover my most recent work showcasing innovative solutions and
            creative projects built using modern web technologies. From dynamic
            web applications to interactive user experiences, explore how I've
            turned ideas into reality.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        <div className=" xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
0;
export default Work;
