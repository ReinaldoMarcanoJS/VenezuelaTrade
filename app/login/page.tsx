import Image from "next/image";

function LoginComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen">
      <form className=" bg-slate-50 shadow-xl rounded-lg flex flex-col justify-between gap-3 p-10  w-96">
        <div className="flex items-center justify-center gap-1">
          <Image
            src={"/logo.png"}
            width={35}
            height={35}
            alt="image-logo  "
            className="w-8 h-8 lg:w-9 lg:h-9 mx-2 sm:mx-0"
          />
          <h2 className="  text-base lg:text-2xl font-semibold font-sans min-[500px]:flex items-start justify-start">
            <span className="span-title">Venezuela</span>
            <span className="span-title">Trade</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className="p-2 shadow-xl rounded-md"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 shadow-xl rounded-md"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className=" mt-2 py-2 ">
            Login
          </button>
        </div>

        <div className=" text-white text-sm font-bold text-center">
          <button className="w-full mt-2 bg-darkblue hover:bg-darkblue py-2 px-4 rounded-full">
            Login with Google
          </button>
          <p className="w-full mt-2 bg-darkblue hover:bg-darkblue py-2 px-4 rounded-full">
            Login with Facebook
          </p>
        </div>
        <div>
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-lightblue">
              Sign up
            </a>
          </p>
          <p className="cursor-pointer">Forgot your password?</p>
        </div>
        {/* <p className="cursor-pointer hover:text">
          Return to <a href="#">Home</a>
        </p> */}
      </form>
    </div>
  );
}

export default LoginComponent;
