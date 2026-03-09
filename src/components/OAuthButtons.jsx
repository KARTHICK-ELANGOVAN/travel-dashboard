import { account } from "../appwrite";

export default function OAuthButtons({ loginRedirect, failureRedirect }) {

  const loginWithGoogle = () => {
    account.createOAuth2Session(
      "google",
      loginRedirect,
      failureRedirect
    );
  };

  const loginWithGithub = () => {
    account.createOAuth2Session(
      "github",
      loginRedirect,
      failureRedirect
    );
  };

  return (
    <>

      <div className="flex items-center gap-2 my-3 text-white">
        <hr className="flex-grow border-white/40" />
        <span >or</span>
        <hr className="flex-grow border-white/40" />
      </div>

      <button
        onClick={loginWithGoogle}
        className="flex items-center justify-center gap-2 w-full bg-white py-1 rounded-md hover:bg-gray-100"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          className="w-5"
        />
        Continue with Google
      </button>


      <button
        onClick={loginWithGithub}
        className="flex items-center justify-center gap-2 w-full bg-white py-1 rounded-md hover:bg-gray-100 mt-4"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          className="w-5"
        />
        Continue with Github
      </button>

    </>
  );
}