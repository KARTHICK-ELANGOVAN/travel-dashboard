import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({ value, onChange, placeholder }) {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="relative">

      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-md px-2 py-1.5 bg-white/80 outline-none w-full"
        required
      />

      <span
        className="absolute right-3 top-3 cursor-pointer text-gray-600"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>

    </div>

  );
}