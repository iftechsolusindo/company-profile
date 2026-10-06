interface BlogPost {
  id: string;
  category: string;
  imageSrc: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorInitials: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    category: "Cybersecurity",
    imageSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    date: "29 September 2025",
    readTime: "5 mins read",
    title: "How Agentic AI is Changing the Game in Cybersecurity",
    excerpt:
      "Agentic AI brings proactive, autonomous defense to cybersecurity—detecting, learning, and responding to threats in real time. ISGS combines this AI speed with human expertise to deliver smarter, adaptive protection that keeps organizations ahead of evolving cyber risks.",
    authorName: "Admin",
    authorInitials: "AS",
  },
  {
    id: "2",
    category: "Artificial Intelligence",
    imageSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
    date: "16 April 2026",
    readTime: "7 mins read",
    title: "Why Most AI Projects Fail And How to Avoid It",
    excerpt:
      "AI is transforming industries, but many projects fail due to unclear goals, poor data, and weak implementation. With the right strategy and strong data foundation, AI can deliver real business impact.",
    authorName: "Admin",
    authorInitials: "NM",
  },
  {
    id: "3",
    category: "Automation",
    imageSrc:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
    date: "19 July 2025",
    readTime: "3 mins read",
    title: "Agentic AI and the Future of Intelligent Automation",
    excerpt:
      "Agentic AI enables systems to go beyond passive responses by autonomously executing tasks, making decisions, and adapting to change. Integrated with automation platforms, it transforms workflows into dynamic, self-optimizing processes.",
    authorName: "Admin",
    authorInitials: "BP",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="container-main">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-[#0a1752]">
            Blog
          </h2>

          <a
            href="#"
            className="flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            View All Articles

            <svg
              className="ml-2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 w-full shrink-0">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#1a1b26] px-3 py-1.5 text-[11px] font-semibold text-white">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-3 flex items-center text-[13px] font-medium text-gray-400">
                  <span>{post.date}</span>

                  <span className="mx-2 flex items-center justify-center">
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                  </span>

                  <span>{post.readTime}</span>
                </div>

                <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-snug text-[#0a1752]">
                  {post.title}
                </h3>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center border-t border-transparent pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#112340] text-xs font-bold text-white">
                    {post.authorInitials}
                  </div>

                  <span className="ml-3 text-sm font-semibold text-gray-700">
                    {post.authorName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}