"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";  

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="block">  
      <motion.div
        className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl"
        whileHover={{ scale: 1.03, y: -8 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 "
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="p-8">
          <p className="mb-3 text-sm uppercase tracking-wider text-gray-500">
            {blog.date}
          </p>
          <h3 className="mb-4 text-2xl font-light text-gray-900 transition-colors group-hover:text-gray-800">
            {blog.title}
          </h3>
          <p className="mb-6 text-base leading-relaxed text-gray-600">
            {blog.excerpt}
          </p>
          <span className="inline-block text-sm font-medium text-gray-800 transition-colors hover:text-gray-600">
            Read More →
          </span>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gray-800 transition-all duration-500 group-hover:w-full" />
      </motion.div>
    </Link>
  );
}