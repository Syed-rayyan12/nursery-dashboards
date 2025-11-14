export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white px-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-20 h-20 object-contain drop-shadow-lg"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
        Something Amazing is Coming Soon
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl mt-4 opacity-90 text-center max-w-xl">
        We’re working hard to bring you an incredible experience. Stay tuned!
      </p>

      {/* Countdown / Pulse Text */}
      <p className="mt-6 text-xl font-semibold animate-pulse">
        Launching Soon...
      </p>

      {/* Optional Email Notify Form */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-lg text-black w-72"
        />
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
          Notify Me
        </button>
      </div>

      {/* Footer */}
      <p className="mt-10 opacity-70 text-sm">
        © {new Date().getFullYear()} Clep. All rights reserved.
      </p>
    </main>
  );
}
