import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-purple-400">
      {/* Top border separator (like a header line) */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-800" /> */}

      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-xl overflow-hidden backdrop-blur-md m-4">
        {/* Left Side: Illustration + Text */}
        <div className="hidden md:flex flex-col justify-center items-start p-8 md:w-1/2 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">
          <h1 className="text-3xl font-bold mb-3">Welcome Back 👋</h1>
          <p className="text-md mb-6">
            Please sign in to continue and manage your content seamlessly.
          </p>
          <img
            src="https://img.freepik.com/free-vector/modern-welcome-composition-with-gradient-style_23-2147900387.jpg?t=st=1752994687~exp=1752998287~hmac=a67e00210a67682c4258e50411e3673105a1334f0d9282b3736cabdd87b4b67d&w=1480"
            alt="Welcome"
            width="400"
            height="400"
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right Side: Clerk SignIn Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <SignIn
              appearance={{
                elements: {
                  card: "shadow-none bg-transparent",
                  formButtonPrimary:
                    "bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md",
                  headerTitle:
                    "text-lg font-semibold text-gray-800 dark:text-white",
                  headerSubtitle: "text-sm text-gray-500 dark:text-gray-300",
                  formFieldLabel: "text-sm text-gray-700 dark:text-gray-300",
                  formFieldInput:
                    "border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm",
                },
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
