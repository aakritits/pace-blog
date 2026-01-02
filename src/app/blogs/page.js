"use client";

import BlogCard from "../components/BlogCard";
import { blogs } from "../lib/blogs";
export default function Products() {
  return (
    <main className="p-5">
      <h1 className=""
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          color: "#f97316",
        }}
      >
        Our Blogs
      </h1>
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 grid grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}

