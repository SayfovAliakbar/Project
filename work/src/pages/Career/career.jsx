import React from 'react'
import logo from './images/LOGO (2).svg'
import { CheckCheck, CheckCheckIcon, Image, Layout, LayoutDashboardIcon, MessageCircleHeart, Notebook, Play, Plus, PlusIcon, Pocket, Settings, Upload, Video} from 'lucide-react'
const Career = () => {
  return (
    <div className='flex flex-row gap-[100px] bg-gray-200'>
      <div className='bg-[#1D2026] text-gray-300 md:flex hidden md:flex-col   w-[18%]'>
<div className='flex gap-2 p-3'>
  <LayoutDashboardIcon /> <p>
    Dashboard
</p>

</div>
<div className='flex gap-2 bg-[#FF6636] p-3'>
  <Plus /> <p>
    Create New Course
</p>

</div>
<div className='flex gap-2 p-3'>
  <Layout /> <p>
    My Courses
</p>

</div>
<div className='flex gap-2 p-3'>
  <Pocket /> <p>
    Earning
</p>

</div>
<div className='flex gap-2 p-3'>
  <MessageCircleHeart /> <p>
    Message
</p>

</div>
<div className='flex gap-2 p-3'>
  <Settings /> <p>
    Settings
</p>

</div>
<div>

</div>
      </div>


      <section className='text-black p-5 mb-13 bg-white mt-10'>
        <div className='flex flex-wrap md:flex-row justify-evenly gap-13 border-b border-b-gray-500'>

        <div className='flex gap-3'>
          <Layout/>
          <p>Basic Information</p>
        </div>
        <CheckCheckIcon color='green'/>
         <div className='flex gap-3 border-b-2 border-b-[#FF6636] pb-2'>
          <Notebook/>
          <p>Advance Information</p>
        </div>
         <div className='flex gap-3 '>
          <Video/>
          <p>Curriculum</p>
        </div>
         <div className='flex gap-3 '>
          <Play/>
          <p>Publish Course</p>
        </div>
        </div>

<div className='flex flex-col md:flex-row justify-between gap-4 p-3 border-b border-b-gray-400'>
  <h1 className='md:text-[25px]'>Advance Informations</h1>
  <div className='flex gap-2'>
    <button className='py-2 px-3 bg-[#ffe1d6] text-[#FF6636]'>
      Save
    </button>
    <button className='p-2  text-[#FF6636]'>
      Save & Preview
    </button>
  </div>
</div>

<div className='flex flex-col  gap-10 md:flex-row justify-between p-4 border-b border-b-gray-400'>
<div className='flex gap-4 md:w-[450px]'>
  <div className='text-center'>
    <h1>Course Thumbnail</h1>
    <Image  size={'150px'}/>
  </div>
<div className='flex flex-col gap-4 items-start justify-center'>
  <p>
    Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png
  </p>
  <button className='font-bold text-[#FF6636] flex items-center gap-1 bg-[#ffe1d6] p-2.5'>
    Upload image
    <Upload/>
  </button>
  
</div>
</div>
<div className='flex gap-4 md:w-[450px]'>
  <div className='text-center'>
    <h1>Course Thumbnail</h1>
    <Video  size={'150px'}/>
  </div>
<div className='flex flex-col gap-4 items-start justify-center'>
  <p>
    Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png
  </p>
  <button className='font-bold text-[#FF6636] flex items-center gap-1 bg-[#ffe1d6] p-2.5'>
    Upload image
    <Upload/>
  </button>
  
</div>
</div>

</div>



<div>
  <h1>Course Descriptions</h1>
  <input type="text" placeholder='Enter you course descriptions' className='pb-[200px] p-3 border border-gray-400 w-[100%]'/>
</div>

<div className='flex flex-col gap-4 '>
  <div className='flex flex-col  md:flex-row justify-between py-4 border-t border-t-gray-400 mt-5 '>
    <h1>
      What you will teach in this course (4/8)
    </h1>
    <button className='flex items-center text-[#FF6636] font-bold'><PlusIcon/>Add new</button>
  </div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What you will teach in this course...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What you will teach in this course...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What you will teach in this course...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What you will teach in this course...' /> 
</div>
</div>
<div className='flex flex-col gap-4'>
  <div className='flex flex-col  md:flex-row justify-between py-4 border-t border-t-gray-400 mt-5'>
    <h1>
      Target Audience (4/8)
    </h1>
    <button className='flex items-center text-[#FF6636] font-bold'><PlusIcon/>Add new</button>
  </div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='Who this course is for...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='Who this course is for...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='Who this course is for...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='Who this course is for...' /> 
</div>
</div>
<div className='flex flex-col gap-4'>
  <div className='flex flex-col  md:flex-row justify-between py-4 border-t border-t-gray-400 mt-5'>
    <h1>
      Course requirements (4/8)
    </h1>
    <button className='flex items-center text-[#FF6636] font-bold'><PlusIcon/>Add new</button>
  </div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What is you course requirements...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What is you course requirements...' /> 
</div>
<div>

  <div className='flex justify-between'>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What is you course requirements...' /> 
</div>
<div className='mb-10'>

  <div className='flex justify-between '>
    <p>01</p>
    <p>0/120</p>
  </div>
  <input className='w-[100%] border border-gray-400 p-2' type="text" placeholder='What is you course requirements...' /> 
</div>
<div className='flex  justify-between'>
  <button className='border border-gray-400 p-2'>Previous</button>
  <button className='border bg-[#FF6636] text-white p-2'>Save & next</button>
</div>
</div>

      </section>
    </div>
  )
}

export default Career