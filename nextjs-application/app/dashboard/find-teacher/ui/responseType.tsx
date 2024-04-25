// types.ts
export interface TeacherExtra {
    _id: string;
    name: string;
    email: string;
    phoneNumber: number;
  }
  
  export interface TeacherInfo {
    _id: string;
    name: string;
    email: string;
    phoneNumber: number;
  }
  
  export interface Teacher {
    _id: string;
    teacherId: string;
    description: string;
    qualification: string;
    subjectTeaching: string[];
    locality: string;
    completeAddress: string;
    status: string;
    avatar: string;
    coverImage: string[]
    createdAt: string;
    updatedAt: string;
    Teachers: TeacherExtra;
    teachingExperience: string;
    
  }
  
  export interface ApiResponse {
    statusCode: number;
    message: string;
    data: Teacher[];
    success: boolean;
  }
  