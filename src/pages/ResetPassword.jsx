import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { account } from "../appwrite";
import AuthLayout from "../components/AuthLayout";
import PasswordInput from "../components/PasswordInput";

export default function ResetPassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const userId = params.get("userId");
  const secret = params.get("secret");


  const handleResetPassword = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      await account.updateRecovery(
        userId,
        secret,
        password
      );

      alert("Password reset successful!");

      navigate("/login");

    } catch (error) {

      console.log(error);
      alert(error.message);

    }

  };

  return (

    <AuthLayout>

      <form onSubmit={handleResetPassword} className="flex flex-col gap-4">

        <h2 className="text-white text-xl mb-2">
          Reset Password
        </h2>

        <label className="text-white text-sm">
          New Password
        </label>

        <PasswordInput
          value={password}
          placeholder="Enter new password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="text-white text-sm">
          Confirm Password
        </label>

        <PasswordInput
          value={confirmPassword}
          placeholder="Confirm new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-2"
        >
          Reset Password
        </button>

      </form>

    </AuthLayout>

  );
}




// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { account } from "../appwrite";

// export default function ResetPassword() {

//   const [password, setPassword] = useState("");

//   const location = useLocation();

//   const params = new URLSearchParams(location.search);

//   const userId = params.get("userId");
//   const secret = params.get("secret");

//   const handleReset = async (e) => {

//     e.preventDefault();

//     try {

//       await account.updateRecovery(
//         userId,
//         secret,
//         password
//       );

//       alert("Password updated successfully");

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (

//     <div>

//       <h2>Reset Password</h2>

//       <form onSubmit={handleReset}>

//         <input
//           type="password"
//           placeholder="New Password"
//           onChange={(e)=>setPassword(e.target.value)}
//         />

//         <button type="submit">
//           Reset Password
//         </button>

//       </form>

//     </div>
//   );
// }