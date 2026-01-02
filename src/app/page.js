import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Static blog data for the carousel
  const featuredBlogs = [
    {
      id: 1,
      title: "Getting Started with Next.js App Router",
      excerpt:
        "Learn how to build modern full-stack apps with the new App Router and Server Components.",
      author: "Jane Doe",
      date: "Dec 28, 2025",
      image:
        "https://thumbs.dreamstime.com/b/minimalist-scandinavian-living-room-soft-neutral-tones-stylish-furniture-warm-textures-cozy-elegant-modern-home-interior-371388407.jpg",
    },
    {
      id: 2,
      title: "Client-Side Authentication in Next.js",
      excerpt:
        "A simple and secure way to handle authentication using cookies in client components.",
      author: "John Smith",
      date: "Dec 20, 2025",
      image:
        "https://thumbs.dreamstime.com/b/minimalist-white-office-desk-workspace-laptop-notebook-pen-glasses-cup-coffee-plants-arranged-neatly-modern-simple-aesthetic-357554916.jpg",
    },
    {
      id: 3,
      title: "Building Responsive Carousels with Tailwind",
      excerpt:
        "Create beautiful, mobile-friendly carousels without any external library.",
      author: "Alex Rivera",
      date: "Dec 15, 2025",
      image:
        "https://thumbs.dreamstime.com/b/immerse-yourself-tranquil-beauty-serene-lake-reflected-minimalist-black-white-landscape-captivating-350730303.jpg",
    },
    {
      id: 4,
      title: "Deploying Next.js Apps to Vercel",
      excerpt:
        "Step-by-step guide to deploy your Next.js application with zero configuration.",
      author: "Sarah Chen",
      date: "Dec 10, 2025",
      image:
        "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2744.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center py-16 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-orange-600">BlogHub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your go-to destination for in-depth articles, tutorials, and
            insights on web development, UI/UX design, modern frameworks, and
            emerging technologies.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Articles
              </h3>
              <p className="text-gray-600">
                Curated content from experienced developers and designers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Modern Topics
              </h3>
              <p className="text-gray-600">
                Stay updated with React, Next.js, Tailwind, AI tools, and more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Growing Community
              </h3>
              <p className="text-gray-600">
                Join thousands of readers and contributors sharing knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Carousel Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Blogs
          </h2>
          <p className="text-lg text-gray-600">
            Handpicked articles just for you
          </p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100">
          <div className="flex gap-8 min-w-max">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/`} 
                className="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition transform "
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Show More Button */}
        <div className="text-center mt-6">
          <Link
            href="/blogs"
            className="inline-block mb-2 text-gray-700 font-semibold   transition transform hover:scale-105"
          >
            Show More Blogs →
          </Link>
        </div>
      </section>
    </main>
  );
}
