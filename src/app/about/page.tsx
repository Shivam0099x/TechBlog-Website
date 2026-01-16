import ContainerLayout from "@/Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <ContainerLayout>
      <div className="px-4 sm:px-12 ">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white ">About Tech<span className="bg-linear-to-r from-blue-600 to-primary bg-clip-text text-transparent">
            Blogs
          </span></h1>
          <p className=" text-gray-400 leading-relaxed mx-auto max-w-2xl">
            A modern techblog real world development, and thoughtfull
            engineering
          </p>
        </div>
        {/* Contentt */}
        <div className="space-y-14">
            {/* Section-1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <Image src='/images/about.png' alt="about image " width={600} height={600} className="rounded-2xl object-cover" />
                <div className="">
                <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                    Why TechBlog?
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    TechBlog was created to share insights on modern technologies and web development. We focus on practical concepts, clean code, and real tools—helping developers understand how things work and how to build better applications.
                </p>
            </div>
            </div>

            {/* Section-2  */}
            <div className="bg-secondary-background rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                    What We Write About
                </h2>
                <ul className="text-gray-400 space-y-4">
                    <li>• Modern web technologies and frameworks</li>
                    <li>• Frontend development with React, Next.js, and Tailwind CSS</li>
                    <li>• Backend tools, APIs, and application architecture</li>
                    <li>• Practical guides and insights for web developers</li>
                </ul>
            </div>

            {/* Section-3 */}
            <div className="text-center">
                <h2 className="text-gray-200 text-2xl font-semibold mb-4">Built For Developers</h2>
                <p className="text-sm text-gray-400 mx-auto leading-relaxed mb-8">Whether you're just starting out or refining your skills, TechBlog is designed to inspire better code, better design, and better thinking.</p>
                <Link href='/articles'  className="px-6 py-3 inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-indigo-500 transition-colors text-white font-semibold mb-5" >Explore</Link>
            </div>
            

        </div>
      </div>
    </ContainerLayout>
  );
};

export default page;
