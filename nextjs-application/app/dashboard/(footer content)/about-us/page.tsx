import Image from "next/image";

export default function Page() {
    return (
        <main className="mx-8 sm:mx-14 md:mx-40 mb-12">
            <div className="grid place-content-center p-4 pt-8 ">
                <h1 className="text-4xl md:text-6xl font-extrabold underline decoration-indigo-600 decoration-8 text-slate-800">About Us</h1>
            </div>
            <div className="text-lg">
                <p className="text-justify md:text-center my-10 text-xl">
                    At &apos;My Classes Tripura&apos;, we pride ourselves on offering a 
                    learning experience that goes above and beyond what other educational
                     websites provide. Here&apos;s why we 
                     <span className="underline decoration-2 decoration-indigo-600 ml-1">stand out:</span>
                </p>
                <ul className="flex flex-col gap-6">
                    <li>
                        <h2 className="font-bold text-2xl mb-4">1. Complimentary Demo Classes</h2>
                        <p>We offer free trial classes so you can see if you like how our teachers
                             teach before you decide to join.
                        </p>
                    </li>
                    <li>
                        <h2 className="font-bold text-2xl mb-4">2. Free Entrance Preparation</h2>
                        <p>We provide free resources to help you prepare for entrance exams without
                             costing you anything. We know exams can be expensive, so we want to make
                              sure everyone has a fair chance to succeed.  We&#39;re here to support you every step of the way!

                        </p>
                    </li>
                    <li>
                        <h2 className="font-bold text-2xl mb-4">3. Vibrant Doubt Solving Community</h2>
                        <p>In our platform students and teachers work together, discussing topics and
                             supporting each other. We create a friendly community where everyone helps
                              each other learn and grow. It&#39;s like having a study group where everyone
                               encourages each other to succeed!
                        </p>
                    </li>
                    <li>
                        <h2 className="font-bold text-2xl mb-4">4. Intuitive Progress Tracking</h2>
                        <p>We give students tools to track their progress and stay motivated. This
                             helps them reach their goals and sets us apart from sites that lack 
                             such personalized support.
                        </p>

                    </li>
                    <li>
                        <h2 className="font-bold text-2xl mb-4">5. Comprehensive Test Series</h2>
                        <p>Our test series are designed to boost your confidence and get you ready for
                             exams.It&#39;s like having a personal coach guiding you through each step of your preparation!
                        </p>
                    </li>
                </ul>
                <div className="p-6 md:p-14 m-0 md:m-10 sm:m-4 my-10 text-sm sm:text-xl font-semibold bg-gradient-to-t from-indigo-300 to-indigo-100 tracking-wide shadow-sm rounded-[50%_6%_100%_0%_/_25%_100%_0%_75%] rounded-b-xl text-left sm:text-justify">
                    <p>Ultimately, at &apos;My Classes Tripura&apos;, our commitment to student success,
                         personalized learning experiences, and fostering a supportive community sets us
                          apart as a leader in the field of online education. Join us as we shape a brighter future together.</p>
                </div>
            </div>
        </main>
    );
}

