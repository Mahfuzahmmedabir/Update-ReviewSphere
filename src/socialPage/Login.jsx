import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import loginAnimation from '../../public/Animation - 2.json';
import Lottie from 'lottie-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
const Login = () => {
  const { signUpwithpopup, singupWitthgoogle } = useContext(AuthContext);
  const naveget = useNavigate();
  const handealLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    user;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast(
        'password at least 1 Lowercase at least 1 Uppercase,  at least 6 character'
      );
      <ToastContainer />;
      return;
    }

    singupWitthgoogle(email, password)
      .then(result => {
        naveget('/');
        Swal.fire('Login successfully');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(`${errorMessage}`);
        // ..
      });
  };

  const handealPopup = () => {
    signUpwithpopup().then(result => {
      naveget('/');
      Swal.fire('Login successfully');
    });
  };
  return (
    <div>
      <Helmet>
        <title>ReviewSphere || Login</title>
      </Helmet>
      <div className="hero h-screen lg:bg-base-200">
        <div className="hero-content flex-col gap-10 lg:gap-96 lg:flex-row">
          <div className="">
            <Lottie animationData={loginAnimation}></Lottie>
          </div> 
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handealLogin} className="card-body">
              <h2 className="text-center text-3xl">Login </h2>
              {/* Login with goole */}
              <div className="text-center border p-3 rounded-full  mx-auto mt-5">
                <button
                  onClick={handealPopup}
                  className="flex gap-2 items-center font-semibold"
                >
                  <FcGoogle className="text-2xl"></FcGoogle> Sign up with Google
                </button>
              </div>

              <div className="divider ">OR</div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">
                Don't have an account?{' '}
                <Link className="text-green-500" to={'/register'}>
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
