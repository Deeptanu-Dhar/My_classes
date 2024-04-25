"use client"
import axios from "axios";
import TeacherProfileLayout from "./TeacherProfileLayout";



import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Teacher } from "../../find-teacher/ui/responseType";
import { useStore } from "@/app/dashboard/State/Management";

export default function Page({params}:{params:{id:string}}){
    const router = useRouter()
    const [teacherDetails , setTeacherDetails] = useState<Teacher>()
  const {Teachers ,addTeacher} = useStore()
// sl
    useEffect(()=>{
        async function getTeacherDetails() {
            if(Teachers.length > 0){
                const Teacher = Teachers.find(e=> e.teacherId === params.id)
                if(Teacher !== undefined){
                    setTeacherDetails(Teacher)
                }
            }
            else{
                try{
                    const response = await axios.get(`${process.env.BACKEND_URL}/student/get/teacher/${params.id}`)
                    setTeacherDetails(response.data.data[0])
                    
            }catch(error){
                router.push("/dashboard/find-teacher")
            }
            }
        }
        
        getTeacherDetails()
    },[params.id])
    return (
        <div>
            {teacherDetails && <TeacherProfileLayout TeacherInfo={teacherDetails}/> }
        </div>
    )
}
