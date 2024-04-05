import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <span className="text-lg text-purple-500 font-medium block mb-3">
            Early access sign up
          </span>
          <h1 className="text-3xl md:text-5xl text-gray-900 font-bold">
            The modern beginner's guide to UI/UX design.
          </h1>
          <p className="py-6 px-5 md:px-16 text-xl">
            Sign up now for completely free access to omegas's modern guide to
            UI/UX design.
          </p>
          <div className="flex items-center justify-center gap-6 mt-2 flex-wrap">

            <button className="btn btn-primary border-none bg-purple-500 hover:bg-indigo-700 normal-case px-6 text-base tracking-wider text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
