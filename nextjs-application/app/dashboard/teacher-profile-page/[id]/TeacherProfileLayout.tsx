
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Button } from '@/app/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { HeartIcon } from '@heroicons/react/24/outline';
import TeacherProfile from './teacher-profile/TeacherProfile';
import { Teacher } from '@/app/dashboard/find-teacher/ui/responseType';
import TeacherDemo from './demo/Teacher';

const profilePicture = '/profilePicture_demo.png';
const profileBanner = '/profileBanner_demo.png';
const profilePath = '/dashboard/teacher-profile-page/teacher-profile'
const demoPath = '/dashboard/teacher-profile-page/demo'
const default_profile = "data:image/png;base64,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"

const stars = [ 
  { name: "star1", value: 1, },
  { name: "star2", value: 2, },
  { name: "star3", value: 3, },
  { name: "star4", value: 4, },
  { name: "star5", value: 5, }]
  
  
const TeacherProfileLayout = ({TeacherInfo}:{TeacherInfo:Teacher}) => {
  const [currentPage , setCurrentPage] = useState(true)
  const pathname = usePathname();
  const SetPathProfile = (path:boolean)=>{
    if(currentPage === true && path === true){
      return;
    }
    if(currentPage === false && path === false)return;
    if(currentPage === true && path === false)setCurrentPage(false)
      if(currentPage === false && path === true)setCurrentPage(true)
  }
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 mx-[3vw]">
      <div className='col-span-2'>
        <div className="h-fit relative grid  rounded-2xl shadow-lg bg-slate-50 overflow-hidden">
          {
            TeacherInfo?.coverImage[0] ?
              <Image width={1920} height={1080}
              src={TeacherInfo?.coverImage[0] ?TeacherInfo.coverImage[0] : profileBanner }
              alt="profile_banner"
              className=" aspect-auto h-[30vh] w-full object-cover rounded-2xl"
            /> :
            <div className=' w-full h-52 bg-gradient-to-b from-indigo-700 to-indigo-00 grid place-content-center text-7xl font-extrabold text-white text-opacity-50 bg-cover'>{TeacherInfo.Teachers.name}</div>
          }
          
          <div className="relative flex flex-col md:flex-row flex-wrap w-full md:items-center gap-4">
            <div className='w-full md:w-56 relative md:block md:static'>
              <Image
                src={TeacherInfo?.avatar ? TeacherInfo?.avatar :default_profile}
                alt="teacher avatar"
                width={1000}
                height={1000}
                className="absolute left-0 bottom-0 md:bottom-0 m-4 aspect-square w-28 md:w-44 lg:w-56 rounded-full object-cover drop-shadow-xl "
              />
            </div>
            <div className=" bg-slate-50 flex-col md:w-auto md:self-end flex md:flex-row justify-between items-center flex-1 mb-4 text-2xl lg:text-4xl p-2 m-4">
              <div className='w-full md:w-auto'>
                <h1 className="font-bold">{TeacherInfo.Teachers.name}</h1>
                {TeacherInfo.subjectTeaching.map((item , index)=>(
                  <p key={index} className='text-base'>{item}</p>
                ))}
                <div className='flex text-base text-white bg-indigo-700 w-fit px-2 my-2 rounded-full gap-2 '>
                  <span>4.7</span> <StarIcon className='w-4' />
                </div>
              </div>
              <div className='w-full justify-evenly text-center md:justify-normal md:text-left md:w-auto self-start md:self-auto bg-gradient-to-b from-indigo-500 to-indigo-700 flex gap-4 text-slate-100 p-1 px-2 md:p-2 md:px-4 rounded-2xl'>
                <div>
                  <h2 className='text-base md:text-2xl font-bold'>56</h2>
                  <p className='text-sm'>Likes</p>
                </div>
                <div className='border-r-2 border-white/30'></div>
                <div>
                  <h2 className='text-base md:text-2xl font-bold'>150</h2>
                  <p className='text-sm'>Students</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='items-center border-b-2 border-indigo-600 flex justify-between mt-4 text-lg rounded-lg'>
              <div className='flex'>
                <button onClick={()=>SetPathProfile(true)} className={clsx('bg-gradient-to-t  p-4 hover:from-indigo-500/30', { 'from-indigo-500/20': pathname == profilePath })}>Profile</button>
                <button onClick={()=>SetPathProfile(false)} className={clsx('bg-gradient-to-t  p-4 hover:from-indigo-500/30', { 'from-indigo-500/20': pathname == demoPath })}>Demo Class</button>
              </div>
              <Button className='bg-transparent hover:bg-transparent active:bg-transparent'>
                <HeartIcon className='w-8 m-4 text-slate-400 cursor-pointer transition-all hover:text-indigo-500' />
              </Button>
            </div>
          </div>
        </div>
        {currentPage === true ?  <TeacherProfile  Education={TeacherInfo.qualification} Experience={TeacherInfo.teachingExperience}/> :<TeacherDemo video=""></TeacherDemo>}
      </div>
      <div className="col-span-full lg:col-auto h-fit w-full bg-slate-50 rounded-2xl p-6 shadow-xl flex flex-col  gap-4">
        <div className=''>
          <h1 className='text-gray-800 text-3xl font-bold border-b-2 border-gray-200'>Details</h1>
          <div className='grid gap-4 p-4'>
            <p className='grid grid-cols-1'>
              <span className='font-semibold text-xl'>
              {TeacherInfo.Teachers.phoneNumber}
              </span>
              <span className='text-slate-400'>
                Phone No.
              </span>
            </p>
            <p className='grid grid-cols-1'>
              <p className='font-semibold text-xl'>{TeacherInfo.Teachers.email}</p>
              <span className='text-slate-400'>
                Email
              </span>
            </p>
            <p className='grid grid-cols-1'>
              <span className='font-semibold text-xl'>
              {TeacherInfo.completeAddress}
              </span>
              <span className='text-slate-400'>
                Location
              </span>
            </p>
          </div>
        </div>
        <div className=''>
          <h1 className='text-gray-800 text-3xl font-bold border-b-2 border-gray-200'>Feedback</h1>
          <div className='flex flex-col gap-4 p-4'>
            <div className=''>
              <p><span>Your feedback is valuable for us, Feel free to share</span></p>
            </div>
            <form action="" className='flex flex-col gap-4' onSubmit={(e) => { e.preventDefault() }}>
              <label htmlFor="star" className='font-semibold text-indigo-500 text-xl'>Your rating</label>
              <div className='flex'>
                {stars.map((star, index) => {
                  const currentRating: any = index + 1;
                  return (
                    <div key={index}>
                      <label htmlFor={star.name}>
                        <input
                          type="radio"
                          name="star"
                          id={star.name}
                          value={currentRating}
                          className='hidden'
                        />
                        <StarIcon
                          className={clsx('text-slate-400 w-8 cursor-pointer')}
                        />
                      </label>
                    </div>
                  )
                })}

              </div>
              <label htmlFor="feedback" className='font-semibold text-indigo-500 text-xl'>Your feedback</label>
              <textarea name="feedback" id="student_feedback" cols={30} rows={10} placeholder='Enter your feedback' maxLength={500} className='resize-none w-full border-1 border-gray-200 rounded-xl'></textarea>
              <Button
                className='self-start bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700'
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherProfileLayout;