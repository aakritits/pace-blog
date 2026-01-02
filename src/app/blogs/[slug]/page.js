"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { blogs } from "@/app/lib/blogs";
import { use } from "react";  

export default function BlogDetail({ params }) {
  const { slug } = use(params); 

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden"
      >
        {/* Hero Image */}
        <div className="relative h-96 md:h-screen max-h-screen overflow-hidden">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 p-12 text-white">
            <p className="text-sm uppercase tracking-wider mb-4 opacity-90">
              {blog.date}
            </p>
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-12 py-16 prose prose-lg max-w-none text-gray-700">
          <p className="text-xl leading-relaxed text-gray-600 mb-8">
            {blog.excerpt}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{blog.content || "Full blog post goes here"}</p>
            <p>In the meantime, enjoy the serene design and smooth animations.</p>
          </div>
        </div>
      </motion.article>
    </main>
  );
}