'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { fetchTeachers } from '@/app/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "./ui/select"
import { Input } from "./ui/input"
import { useStore } from '../State/Management';
import { backendFetch } from '@/app/lib/actions';
import LoadingSkeleton from './ui/loadingSkeleton';



export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const profileImg = '/default_profile.svg';
  const { Teachers, addTeacher, alradyFetchedTeacher, changeAlradyFetchedTeacher } = useStore()
  console.log(Teachers)
  let value = 0
  useEffect(() => {

    async function fetchTeachers() {
      if (alradyFetchedTeacher === true || value !== 0) return;
      setLoading(true);
      const backendurl = await backendFetch()
      const apiEndpoint = `${backendurl}/student/showTeachers`;
      console.log(apiEndpoint)

      try {
        const response = await axios.get(apiEndpoint);
        addTeacher(response.data.data)
        changeAlradyFetchedTeacher()
      } catch (error) {

      } finally {
        setLoading(false);
      }
    }
    fetchTeachers();
    ++value
  }, []);


  return (
    <main className="flex flex-col rounded-xl bg-gray-200 p-3">

      <h1 className="m-4 text-center text-4xl font-bold">Our Teachers</h1>
      <div className='flex items-center justify-around sm:gap-20  gap-4 px-4' >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="categories" />
          </SelectTrigger>
          <SelectContent className='bg-slate-100'>
            <SelectGroup >
              <SelectItem value="apple" className='hover:bg-slate-300'>Science</SelectItem>
              <SelectItem value="banana" className='hover:bg-slate-300'>Biology</SelectItem>
              <SelectItem value="blueberry" className='hover:bg-slate-300'>Geography</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input id="input" className="truncate rounded-full border-0" type="search"
          aria-controls="matches" placeholder="search" aria-expanded="false" aria-live="polite" />

      </div>
      <div className="flex flex-col  gap-2 flex-wrap justify-evenly my-3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className=' m-8 mx-0 md:mx-24 grid grid-cols-1 md:grid-cols-2 gap-6'>
  {/* previous styling for cards
  
              flex  items-center justify-evenly rounded-xl shadow-md self-center
               border-solid border-2 border-gray-200 bg-white w-10/12 h-60
  
              transition-all ease-in delay-500 duration-200 lg:hover:scale-150 lg:hover:w-6/12  
                 
               hover:shadow-2xl  p-2 md:py-6 m-1 md:mx-12
               hover:border-indigo-600   */}
            {
              Teachers.map((teacher, index) => {
                return(
                  <div className=' bg-white p-4 py-16 rounded-2xl'>
                    <Link href={`/dashboard/teacher-profile-page/${teacher.teacherId}`} key={index} className=' flex gap-4  justify-around'
                    >
                      <Image height={70} width={70} src={profileImg}
                        alt="profile picture" className="w-24 sm:w-36 aspect-square"
                      />
                      <div className='flex flex-col w-1/2'>
                        <h2 className="  font-semibold text-base sm:text-xl">
                          {teacher.Teachers.name}
                        </h2>
                        <span className='text-base sm:text-xl'>{teacher.description}</span>
                        <div className='flex flex-col md:flex-row gap-9'>
                          <span className='text-base sm:text-xl'>Subjects: {teacher.subjectTeaching}</span>
                          <span className='text-base sm:text-xl'>Qualification: {teacher.qualification}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
          </div>
        )}
        
      </div>
    </main>
  );
}
