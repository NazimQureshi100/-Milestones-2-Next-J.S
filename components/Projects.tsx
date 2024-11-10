import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data =[   
  {
      id:0,
      title:"Todo list",
      desc:"A React & Typescript based app for manging and organizing",
      img:"/project_01.png",
      tags:["React","Node","CSS","Typescript"],

},
{
    id:1,
    title:"Navbar",
    desc:"Portfolio Navbar",
    img:"/project_02.png",
    tags:["Next.JS","Node","CSS"],
},
{
  id:2,
  title:"Web Page",
  desc:"Web Page Design",
  img:"/project_03.png",
  tags:["React","Node","CSS"],
},
{
  id:3,
  title:"Creative Portfolio",
  desc:"Creative Portfolio Page",
  img:"/project_04.jpg",
  tags:["Next.JS","Node","CSS"],
},
{
  id:4,
  title:"Dynamic",
  desc:"Dynamic Resume Builder",
  img:"/Dynamic.png",
  tags:["Next.Js","Node","HTML","Css"],
},
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
