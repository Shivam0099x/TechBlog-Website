"use client"
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(()=> import('jodit-react'),{
  ssr:false,
})


const page = () => {
  const editor = useRef(null);
	const [content, setContent] = useState('');

  const config = useMemo(() => ({
			placeholder: "Start Writing your article...",
      theme:"dark",
      style:{
        backgroundColor:"#121212",
        color:"#d1d5dc"
      }

		}),
		[]
	);


  return (
    <section className="max-w-3xl mx-auto px-6 py-20 ">
      {/* Page title  */}
      <h2 className="mb-10 text-3xl text-white font-bold">
        Write a New Article
      </h2>
      <form>
        {/* title */}
        <input
          type="text"
          placeholder="Article Title"
          className="w-full bg-transparent text-4xl font-semibold outline-none mb-6 text-white placeholder-gray-500 focus:border-indigo-500/50 border border-white/10 px-5 py-3 rounded-2xl shadow shadow-indigo-500"
        />

        {/* excerpt */}
        <textarea
          placeholder="Write a short excerpt (1-2 sentences)"
          rows={3}
          className="bg-secondary-background w-full text-gray-200 placeholder-gray-500 rounded-xl p-4 mb-6 outline-none resize-none border border-white/10 focus:border-indigo-500/50 shadow shadow-indigo-500"
        />

        {/* image uplaod  */}
        <div className="mb-10">
          <label className="block mb-2 text-gray-200">Cover Image</label>
          <input
            type="file"
            accept="/image/*"
            className="block w-full text-gray-400 text-sm file:border-0 file:mr-4 file:rounded-full file:py-2 file:px-4 file:bg-primary file:text-white hover:file:bg-indigo-500 border border-white/10 focus:border-indigo-500/50 shadow shadow-indigo-500 px-6 py-4 rounded-2xl"
          />
        </div>

        {/* Editor  */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-10">
          <JoditEditor ref={editor} value={content} config={config} onChange={(newContent) => setContent(newContent)}/>
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-3 rounded-full bg-primary cursor-pointer text-white font-semibold transition-colors">
          Publish
        </button>
        </div>

      </form>
    </section>
  );
};

export default page;
