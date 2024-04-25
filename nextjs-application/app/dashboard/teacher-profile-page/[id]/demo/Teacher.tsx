

export default function TeacherDemo(video:{video:string}) {
    
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mt-4">Check out <span className="text-indigo-600">Example teacher</span>&apos;s Demo class</h1>
           {video.video ?  <iframe
                src={video.video} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-auto p-4 aspect-video"
            ></iframe>: "Teacher has not posted any video"}
        </div>
    )
}