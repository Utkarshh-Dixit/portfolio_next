'use client'

import { RiTwitterFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path:'https://twitter.com/Utkarshhdixit',
    name: <RiTwitterFill />, 
  },
  {
    path:'https://www.linkedin.com/in/Utkarshh-Dixit/',
    name: <RiLinkedinFill />, 
  },
  {
    path:'https://github.com/Utkarshh-Dixit',
    name: <RiGithubFill />, 
  },
  {
    path:'https://www.instagram.com/utkarshhdixit/',
    name: <RiInstagramFill />, 
  },
  {
    path:'/',
    name: <RiFacebookFill />, 
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return <Link href={icon.path} key={index}>
        <div className={`${iconsStyles}`}>{icon.name}</div></Link>
      })}
    </div>
  )
}

export default Socials