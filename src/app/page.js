'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 px-4">
      <div className="bg-white/90 dark:bg-gray-900/90 shadow-xl rounded-2xl p-8 max-w-xl w-full text-center backdrop-blur-md">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          👋 Welcome To Our Platform 
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Experience Clerk Auth and review on below mentioned Accounts
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/M-RaeesDev"
            className="text-gray-700 dark:text-white hover:text-indigo-600 text-3xl transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-raees-924b05258/"
            className="text-gray-700 dark:text-white hover:text-blue-600 text-3xl transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{' '}
          <Link
            href="/sign-up"
            className="text-indigo-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
