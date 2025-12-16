import { useContext, useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [currState, setCurrState] = useState("signup");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  

  const navigate = useNavigate();
  const { login, signup  } = useContext(AuthContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // STEP 1: Move from basic info to bio (signup only)
    if (currState === "signup" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    let success;

    if (currState === "signup") {
      success = await signup({
        fullName,
        email,
        password,
        bio
      });
    } else {
      success = await login(email, password);
    }

    

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>

      <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]' />

      <form
        onSubmit={onSubmitHandler}
        className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'
      >

        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState === "signup" ? "Sign up" : "Login"}
          {currState === "signup" && isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt=""
              className='w-5 cursor-pointer'
            />
          )}
        </h2>

        {currState === "signup" && !isDataSubmitted && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
            className='p-2 border border-gray-500 rounded-md focus:outline-none'
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className='p-2 border border-gray-500 rounded-md focus:outline-none'
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className='p-2 border border-gray-500 rounded-md focus:outline-none'
            />
          </>
        )}

        {currState === "signup" && isDataSubmitted && (
          <textarea
            rows={4}
            placeholder="Provide a short bio..."
            value={bio}
            required
            onChange={(e) => setBio(e.target.value)}
            className='p-2 border border-gray-500 rounded-md focus:outline-none'
          />
        )}

        <button
          type='submit'
          className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'
        >
          {currState === "signup" ? "Create Account" : "Login Now"}
        </button>

        <div className='flex flex-col gap-2'>
          {currState === "signup" ? (
            <p className='text-sm text-gray-600'>
              Already have an account?
              <span
                onClick={() => {
                  setCurrState("login");
                  setIsDataSubmitted(false);
                }}
                className='font-medium text-violet-500 cursor-pointer ml-1'
              >
                Login here
              </span>
            </p>
          ) : (
            <p className='text-sm text-gray-600'>
              Create an account
              <span
                onClick={() => {
                  setCurrState("signup");
                  setIsDataSubmitted(false);
                }}
                className='font-medium text-violet-500 cursor-pointer ml-1'
              >
                Click here
              </span>
            </p>
          )}
        </div>

      </form>
    </div>
  );
};

export default LoginPage;
