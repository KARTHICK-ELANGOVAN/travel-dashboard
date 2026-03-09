import loginBG from "../assets/loginimage.jpg";

export default function AuthLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('${loginBG}')`}}>
      <div className="w-[90%] max-w-6xl rounded-2xl overflow-hidden flex ">
        <div className="hidden md:flex w-1/2 text-white flex-col justify-center p-16 bg-black/0">
          <h2 className="text-lg tracking-widest mb-4">
            ✈ TRAVEL
          </h2>
          <h1 className="text-6xl font-bold leading-tight mb-6 ">
            EXPLORE <br />
            HORIZONS
          </h1>
          <p className="text-lg opacity-90">
            Where Your Dream Destinations Become Reality.
          </p>
          <p className="text-sm mt-4 opacity-80 max-w-sm">
            Embark on a journey where every corner of the world
            is within your reach.
          </p>
        </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:ml-20">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-0 p-8 rounded-lg shadow-2xl">
          {children}
        </div>
      </div>

      </div>

    </div>
  );
}