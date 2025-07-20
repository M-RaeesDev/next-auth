import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-purple-300">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-xl overflow-hidden backdrop-blur-md m-4">
        {/* Left Side: Greeting Card */}
        <div className="hidden md:flex flex-col justify-center items-start p-8 md:w-1/2 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">
          <h1 className="text-4xl font-bold mb-3">Create Your Account 👋</h1>
          <p className="text-md mb-6">Join us and unlock amazing features.</p>
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg"
            alt="Sign Up Illustration"
            width="400"
            height="300"
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right Side: Clerk SignUp Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <SignUp
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
