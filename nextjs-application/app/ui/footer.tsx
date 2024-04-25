import { MyClassLogoBlack } from "./myclass-logo";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-gray-600 body-font bg-slate-100 flex flex-col ">
            <div className="flex md:flex-row flex-col items-center justify-around p-4 flex-wrap">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-4 items-center justify-center p-2">
                        <Image src='/logo/Black icon.svg' height={100} width={100} alt="my classes logo"
                            className='w-12'></Image>
                        <p className="text-lg md:text-2xl font-bold text-black">My Classes</p>
                    </div>
                    <p className="p-2 text-sm text-gray-500 ">The place to look for your next teacher</p>
                </div>
                {/* flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center */}
                <div className="mt-4 md:m-0">
                    <nav className="list-none flex gap-6 md:gap-16 justify-evenly flex-col sm:flex-row items-center">

                        <Link href={"/dashboard/terms"} className="text-gray-600 hover:text-indigo-800 cursor-pointer">T&C</Link>

                        <Link href={"/dashboard/contact-us"} className="text-gray-600 hover:text-indigo-800 cursor-pointer">Contact us</Link>

                        <Link href={"/dashboard/about-us"} className="text-gray-600 hover:text-indigo-800 cursor-pointer">About us</Link>

                        <Link href={"/dashboard/feedback"} className="text-gray-600 hover:text-indigo-800 cursor-pointer">Feedback</Link>

                    </nav>
                </div>
            </div>
            <div className="bg-gray-300">
                <div className="  mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 MyClassesTripura — </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </div>

    );
}
