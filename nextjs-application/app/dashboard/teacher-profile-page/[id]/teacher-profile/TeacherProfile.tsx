export default function TeacherProfile({Education ,Experience }:{Education:string , Experience:string}) {
    return (
        <>
            <div className="my-10">
                <p className="text-justify m-4">
                    Okay
                </p>
                <div className="flex flex-col gap-6">
                    <li className="text-indigo-600 border-b-2 border-slate-200 font-bold text-xl">Education</li>
                    <p>{Education}</p>
                    <li className="text-indigo-600 border-b-2 border-slate-200 font-bold text-xl">Professional Experience</li>
                    <p>{Experience}</p>
                </div>
            </div>
        </>
    )
}