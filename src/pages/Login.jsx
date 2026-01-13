import { Eye, User, Lock } from "lucide-react";

export default function Login() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* CARD */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[28px] shadow-2xl px-8 py-10 relative">
        
        {/* TOP LEFT LEAF */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2909/2909769.png"
          alt="leaf"
          className="absolute top-4 left-4 w-8"
        />

        {/* LOGO */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://dummyimage.com/140x70/ffffff/008000&text=Jeevanrekha"
            alt="logo"
            className="mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Login to your account
          </p>
        </div>

        {/* FORM */}
        <form className="mt-8 space-y-5">
          
          {/* USERNAME */}
          <div>
            <label className="text-sm font-medium text-gray-800">
              Username
            </label>
            <div className="mt-2 flex items-center bg-white rounded-xl border border-gray-300 px-4 py-3">
              <User className="w-5 h-5 text-black mr-3" />
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full outline-none text-sm text-gray-800 bg-transparent placeholder-gray-500"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-800">
              Password
            </label>
            <div className="mt-2 flex items-center bg-white rounded-xl border border-gray-300 px-4 py-3">
              <Lock className="w-5 h-5 text-black mr-3" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none text-sm text-gray-800 bg-transparent placeholder-gray-500"
              />
              <Eye className="w-5 h-5 text-black cursor-pointer ml-3" />
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>
        </form>

        {/* FOOTER TEXT */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Having trouble logging in? Please contact the{" "}
          <span className="text-green-700 font-semibold cursor-pointer">
            administrator
          </span>.
        </p>

        {/* BOTTOM RIGHT LEAF */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2909/2909769.png"
          alt="leaf"
          className="absolute bottom-4 right-4 w-8 rotate-180"
        />
      </div>
    </div>
  );
}
