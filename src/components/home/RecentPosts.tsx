import Image from "next/image";
import Link from "next/link";

export const posts = [
  {
    id: 1,
    title: "Is PHP really dead or is it a myth",
    excerpt:
      "PHP is often labeled as “dead,” but the reality tells a different story. Despite the rise of modern frameworks, PHP still powers a huge part of the web.",
    date: "Sep 12, 2025",
    slug: "is-php-really-dead-or-is-it-a-myth",
    image: "/images/p1.png",
  },
  {
    id: 2,
    title: "Dark Mode Done Right in Tailwind",
    excerpt:
      "A practical guide to implementing dark mode using CSS variables and Tailwind, without duplicating styles or breaking accessibility.",
    date: "Sep 5, 2025",
    slug: "dark-mode-tailwind",
    image: "/images/p2.png",
  },
  {
    id: 3,
    title: "Why Clean UI Matters for Blogs",
    excerpt:
      "Clean UI is not just about looks. It directly affects readability, user retention, and overall trust in your content.",
    date: "Aug 28, 2025",
    slug: "why-clean-ui-matters-for-blogs",
    image: "/images/p3.png",
  },
  {
    id: 4,
    title: "React vs Next.js: What Should You Choose?",
    excerpt:
      "React and Next.js solve different problems. Understanding their strengths will help you pick the right tool for your project.",
    date: "Aug 20, 2025",
    slug: "react-vs-nextjs",
    image: "/images/p4.png",
  },
  {
    id: 5,
    title: "Understanding Server Components in Next.js",
    excerpt:
      "Server Components change how we think about rendering. This article breaks down what they are and when to use them.",
    date: "Aug 12, 2025",
    slug: "server-components-nextjs",
    image: "/images/p5.png",
  },
  {
    id: 6,
    title: "Tailwind CSS Best Practices for Large Projects",
    excerpt:
      "Tailwind scales well if used correctly. Learn folder structures, naming patterns, and common mistakes to avoid.",
    date: "Aug 3, 2025",
    slug: "tailwind-best-practices",
    image: "/images/p1.png",
  },
  {
    id: 7,
    title: "How JavaScript Closures Actually Work",
    excerpt:
      "Closures are one of the most confusing JS concepts. This article explains them with simple examples and visuals.",
    date: "Jul 26, 2025",
    slug: "javascript-closures-explained",
    image: "/images/p2.png",
  },
  {
    id: 8,
    title: "Building a Blog with Next.js App Router",
    excerpt:
      "A step-by-step guide to building a modern blog using the Next.js App Router, layouts, and metadata API.",
    date: "Jul 18, 2025",
    slug: "blog-with-nextjs-app-router",
    image: "/images/p3.png",
  },
  {
    id: 9,
    title: "SEO Basics Every Developer Should Know",
    excerpt:
      "SEO isn’t just for marketers. Developers play a huge role in performance, accessibility, and search ranking. just for marketers. Developers play a huge role in performance, accessibility, and search ranking. just for marketers. Developers play a huge role in performance, accessibility, and search ranking.",
    date: "Jul 10, 2025",
    slug: "seo-basics-for-developers",
    image: "/images/p4.png",
  },
  {
    id: 10,
    title: "Common Mistakes Developers Make in Production",
    excerpt:
      "From environment variables to logging, these small mistakes can cause big problems in production apps.",
    date: "Jul 1, 2025",
    slug: "common-production-mistakes",
    image: "/images/p5.png",
  },
];

const RecentPosts = () => {
  return (
    <div className="space-y-2 mb-10 ">
      <h2 className="text-white text-xl md:text-3xl sm:2xl font-semibold">
        Recent Posts
      </h2>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group rounded-xl overflow-hidden bg-[#0B0B0B] border border-white/10 transition-all duration-300 hover:transition-y-1 hover:bg-white/20"
          >
            {/* imageee */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                // height={500}
                // width={500}
                className="object-cover transition-transform duration-500 group-hover:scale-105 "
                fill
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            {/* Content  */}
            <div className="space-y-6 p-5">
              <time className="text-xs text-gray-400">{post.date}</time>
              <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-indigo-400 transition-colors">{post.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">{post.excerpt}</p>
              <Link href={`/articles/${post.slug}`} className="inline-block text-sm hover:underline font-medium text-indigo-400" >Read Article → </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
