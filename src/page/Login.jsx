import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
const Login = () => {
  const { signUpwithpopup, singupWitthgoogle } = useContext(AuthContext);
  const naveget = useNavigate()
  const handealLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password }
    console.log(user)

    singupWitthgoogle(email, password)
      .then(result => {
        naveget('/');
      Swal.fire('Login successfully');
    })

  }

   const handealPopup = () => {
     signUpwithpopup().then(result => {
       console.log(result.user);
       naveget('/')
       Swal.fire('Login successfully');
     });
   };
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat .
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handealLogin} className="card-body">
              <h2 className='text-center text-3xl'>Login </h2>
              {/* Login with goole */}
               <div className="text-center border p-3 rounded-full  mx-auto mt-5">
                            <button
                              onClick={handealPopup}
                              className="flex gap-2 items-center font-semibold"
                            >
                              <FcGoogle className="text-2xl"></FcGoogle> Sign up with Google
                            </button>
                          </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
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
                  name='password'
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
