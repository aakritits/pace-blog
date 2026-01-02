"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center bg-white rounded-3xl shadow-lg p-12"
      >
        <h1 className="text-6xl font-light text-gray-900 mb-6">404</h1>
        <p className="text-2xl font-light text-gray-700 mb-8">
          Oops — this page could not be found.
        </p>
        <p className="text-lg text-gray-600 mb-12">
          The blog post you're looking for might have been moved or doesn't exist.
        </p>
        <Link
          href="/blogs"
          className="inline-block px-8 py-4 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Back to Blog →
        </Link>
      </motion.div>
    </main>
  );
}