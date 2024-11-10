import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
    <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="flip-left">Get In Touch</h2>
            <p className='text bg-gray-600 text-[18px] pt-2'data-aos="fade-left">
                Drop me a line,give me a call, or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center'data-aos="fade-left">
            <MdMarkEmailUnread size={30}/>nq145140@gmail.com

            </div>
            <div className='flex gap-3 items-center'data-aos="fade-left">
            <BsTelephoneFill  size={30}  />0313-2601756
    </div>
    <div className='space-y-8'>
        <div className='flex flex-col gap-1'data-aos="fade-left">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-accent'
            id='name'/>
        </div>
        <div className='flex flex-col gap-1'data-aos="fade-left">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='h-[40px] bg-transparent border border-accent'
            id='email'/>
        </div>
        <div className='flex flex-col gap-1'data-aos="fade-left">
            <label htmlFor="msg">Message</label>
            <textarea
            className=' bg-transparent border border-accent'
            id='msg'rows={8}/>
            <textarea/>
        </div>
        <button className='bg-accent p-2 px-6'>Send</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
