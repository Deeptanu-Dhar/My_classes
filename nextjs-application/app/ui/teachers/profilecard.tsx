import Image from 'next/image';
import {HeartIcon, UsersIcon } from "@heroicons/react/24/outline";

interface ProfileProps {
  pictureSrc: string;
  name: string;
  subject: string;
  qualifications: string;
  experience: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ 
    
    pictureSrc = '/default_profile.svg',
    name = 'John Doe',
    subject = 'No subject',
    qualifications = 'empty',
    experience = ""

 }) => {
  return (
    <div className="flex flex-col items-center p-4 w-72 md:w-[25rem]">
      <div className=" flex items-center mx-auto">
        <Image className='rounded-full w-14 m-2' src={pictureSrc} width={100} height={100} alt='profile picture' />
      </div>  
      <div className='flex flex-col justify-evenly gap-2 w-full text-center'>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-900">{subject}</p>
        <p className="text-sm text-gray-900">{qualifications}</p>
        <p className="text-sm text-gray-900">experience: {experience}</p>
      </div>
      {/* <div className="flex items-center mt-auto self-end">
        <span className=" flex mr-4 items-center">
          <HeartIcon className='w-4'/> {likes}
        </span>
        <span className=" flex mr-4 items-center" >
          <UsersIcon  className='w-4'/> {followers}
        </span>
      </div> */}
    </div>
  );
};

export default ProfileCard;
