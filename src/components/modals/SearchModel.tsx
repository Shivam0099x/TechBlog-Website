"use client"
import Modal from "./Modal"
import { useModalStore } from "@/store/useModalStore"

const results = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "/articles/getting-started-nextjs",
  },
  {
    id: 2,
    title: "Dark Mode Done Right in Tailwind",
    slug: "/articles/dark-mode-tailwind",
  },
  {
    id: 3,
    title: "Mastering React Hooks",
    slug: "/articles/react-hooks",
  },
  {
    id: 4,
    title: "Prisma with PostgreSQL Explained",
    slug: "/articles/prisma-postgresql",
  },
  {
    id: 5,
    title: "Building Animations with Framer Motion",
    slug: "/articles/framer-motion-animations",
  },
];


const SearchModel = () => {
    const {isSearchOpen, closeSearch} = useModalStore()
  return (
    <Modal isOpen={isSearchOpen} onClose={closeSearch}>
       <div className="space-y-4">
        <input type="text" autoFocus placeholder="Search Articles " className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white text-lg outline-none hover:border-indigo-500" />
        <div className="divide divide-white/10 border border-white/10 max-h-80 overflow-y-auto rounded-xl ">
       {
        results.map((result)=>(
          <button key={result.id} className="w-full text-left px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition cursor-pointer">
            {result.title}

          </button>
        ))
       }

       </div>
       </div>
       
      
    </Modal>
  ) 
}

export default SearchModel
