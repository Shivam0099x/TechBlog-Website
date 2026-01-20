"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import EditPageSkeleton from "@/components/skeletons/EditPageSkeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const EditPage = () => {
  const { postId } = useParams();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState<null | File>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const config = useMemo(
    () => ({
      placeholder: "Start Writing your article...",
      theme: "dark",
      style: {
        backgroundColor: "#121212",
        color: "#d1d5dc",
      },
    }),
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!title  || !excerpt || !coverImage) {
        toast("Title, excerpt and content are  required", {
          style: {
            color: "white",
            backgroundColor: "#1e3a8a",
          },
        });
        return;
      }

      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("excerpt", excerpt);
      if(coverImage){
        formData.append("coverImage", coverImage);
      }

      const response = await axios.patch(`/api/posts/${postId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });


      toast("Article Updated SuccesFully", {
        style: {
          color: "white",
          backgroundColor: "#1e3a8a",
        },
      });

      const slug = response.data.slug
      console.log(slug)
      
      router.replace(`/articles/${slug}`)

    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast(error.response?.data.error, {
          style: {
            color: "white",
            backgroundColor: "#1e3a8a",
          },
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/api/posts/${postId}`);

        setTitle(data.title);
        setContent(data.content);
        setExcerpt(data.excerpt);
        setPreviewImage(data.coverImageUrl);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("AXIOS_ERROR:", error.response?.data);
          alert(error.response?.data?.error || "Failed to load post");
        } else {
          console.error("UNKNOWN_ERROR:", error);
          alert("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (loading) return <EditPageSkeleton />;

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 ">
      {/* Page title  */}
      <h2 className="mb-10 text-3xl text-white font-bold">Edit Your Article</h2>
      <form onSubmit={handleSubmit}>
        {/* title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Article Title"
          className="w-full bg-transparent text-4xl font-semibold outline-none mb-6 text-white placeholder-gray-500 focus:border-indigo-500/50 border border-white/10 px-5 py-3 rounded-2xl shadow shadow-indigo-500"
        />

        {/* excerpt */}
        <textarea
          placeholder="Write a short excerpt (1-2 sentences)"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className="bg-secondary-background w-full text-gray-200 placeholder-gray-500 rounded-xl p-4 mb-6 outline-none resize-none border border-white/10 focus:border-indigo-500/50 shadow shadow-indigo-500"
        />

        {/* image uplaod  */}
        <div className="mb-10">
          <label className="block mb-2 text-gray-200">Cover Image</label>
          <input
            type="file"
            accept="/image/*"
            onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
            className="block w-full text-gray-400 text-sm file:border-0 file:mr-4 file:rounded-full file:py-2 file:px-4 file:bg-primary file:text-white hover:file:bg-indigo-500 border border-white/10 focus:border-indigo-500/50 shadow shadow-indigo-500 px-6 py-4 rounded-2xl"
          />
        </div>

        {/* Image Preview */}
        <div className="my-8">
          <Image src={previewImage} alt="Image preview" width={300} height={300} ></Image>
        </div>

        {/* Editor  */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-10">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-3 rounded-full bg-primary cursor-pointer text-white font-semibold transition-colors">
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditPage;
