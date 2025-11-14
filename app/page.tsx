export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-white px-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-full h-20 object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-center  text-foreground">
        Something Amazing is Coming Soon
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl mt-4 opacity-90 text-center max-w-xl text-foreground">
        We’re working hard to bring you an incredible experience. Stay tuned!
      </p>

      {/* Countdown / Pulse Text */}
      <p className="mt-6 text-xl font-semibold animate-pulse text-foreground">
        Launching Soon...
      </p>

      {/* Optional Email Notify Form */}
    

      {/* Footer */}
      <p className="mt-10 opacity-70 text-sm text-foreground">
        © {new Date().getFullYear()} Clep. All rights reserved.
      </p>
    </main>
  );
}
