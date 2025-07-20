"use client";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-300 via-blue-200 to-pink-200 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-3xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-xl p-10 backdrop-blur-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          About This Project
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          This platform is built using{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Clerk Authentication
          </span>
          , a powerful and secure solution that enables seamless sign-in,
          sign-up, and user management. Clerk ensures that authentication is not
          only fast and efficient but also modern and developer-friendly.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Designed using <strong>Next.js</strong> and{" "}
          <strong>Tailwind CSS</strong>, the app offers a smooth and responsive
          user experience across all devices. It is lightweight, attractive, and
          built with scalability and performance in mind.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Whether you're a user looking for quick access or a developer aiming
          for clean architecture, this platform brings together the best of
          modern web technologies.
        </p>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
          © 2025 — Built with ❤️ using Clerk, Next.js, and Tailwind CSS.
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          <a
            href="https://github.com/M-RaeesDev"
            className="text-blue-700 text-lg hover:text-blue-900 hover:underline"
          >
            Developed By {"->"} Muhammad Raees
          </a>
        </p>
      </div>
    </section>
  );
}
