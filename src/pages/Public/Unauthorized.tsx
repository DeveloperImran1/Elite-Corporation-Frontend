import { motion } from "framer-motion";
import { Home, Lock } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UnAuthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: focus the primary button for accessibility
    const btn = document.getElementById("go-home-btn");
    btn?.focus();
  }, []);

  return (
    <div className="min-h-screen w-full   flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-xl"
      >
        <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl ring-1 ring-white/10">
          {/* Top accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />

          <div className="p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 ring-1 ring-rose-400/30">
                <Lock className="h-6 w-6 " />
              </span>
              <div>
                <h1 className="text-2xl text-start font-semibold tracking-tight">
                  Unauthorized
                </h1>
                <p className="text-sm  ">
                  You don’t have permission to view this page.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <div className="text-sm leading-6 ">
                  <p className="font-medium ">What you can do</p>
                  <ul className="mt-2 text-start list-disc space-y-1 pl-5">
                    <li>Go back to the dashboard or home.</li>
                    <li>
                      If you think this is a mistake, contact support or try
                      signing in again.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs ">
                Error code: <span className="font-mono ">401</span>
              </p>

              <div className="flex items-center gap-3">
                {/* Optional secondary action
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/0 px-4 py-2 text-sm font-medium  hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </button> */}

                <button
                  id="go-home-btn"
                  type="button"
                  onClick={() => navigate("/")}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-900/20 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  <Home className="h-4 w-4" />
                  Go to Home
                </button>
              </div>
            </div>
          </div>

          {/* Decorative blob */}
          <div className="pointer-events-none select-none">
            <svg
              className="absolute -bottom-28 -right-20 h-64 w-64 opacity-20"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                className="text-rose-400"
                d="M45.1,-63.6C58.1,-59.2,68.1,-48.4,76.7,-35.6C85.3,-22.8,92.6,-7.9,90.5,5.1C88.3,18.1,76.7,29.2,66.3,40.7C55.9,52.1,46.7,63.9,34.5,70.2C22.4,76.5,7.2,77.1,-6.4,73.2C-20,69.4,-31.9,61.1,-42.9,51.7C-54,42.3,-64.2,31.8,-68.8,19.1C-73.3,6.4,-72.2,-8.5,-67.5,-22.2C-62.8,-35.8,-54.6,-48.1,-43.6,-53.4C-32.6,-58.7,-16.3,-56.8,-0.2,-56.5C15.9,-56.2,31.8,-57.9,45.1,-63.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        <div className="mx-auto mt-6 text-center text-xs ">
          <span>
            Not supposed to be here?{" "}
            <Link
              to="/"
              className="underline decoration-dotted underline-offset-2 hover:"
            >
              Head home
            </Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
};
export default UnAuthorized;
