import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
const Register = () => {
  const {
    createuserWithEmailandPass,
    signUpwithpopup,
    updeatProfile,
    setUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const handealRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.url.value;
    const password = form.password.value;
    const user = { name, email, photo, password };

    if (password.length < 9) {
      alert('usr');
    }

    createuserWithEmailandPass(email, password)
      .then(result => {
        Swal.fire('Register successfully');
      navigate('/');
    });

    updeatProfile(name, photo)
      .then(() => {
      
      })
      .catch(err => {
      console.log(err)
    })

    setUser({ ...result.user, photoURL: photo, displayName: name });



  };

  const handealPopup = () => {
    signUpwithpopup().then(result => {
      console.log(result.user);
      Swal.fire('Log In successfully');
      navigate('/');
    });
  };

  return (
    <div className="hero  bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handealRegister} className="card-body">
            <h2 className="text-center font-bold text-3xl">
              Create a free account
            </h2>
            {/* sing up goog popup  */}

            <div className="text-center border p-3 rounded-full  mx-auto mt-5">
              <button
                onClick={handealPopup}
                className="flex gap-2 items-center font-semibold"
              >
                <FcGoogle className="text-2xl"></FcGoogle> Sign up with Google
              </button>
            </div>

            <div className="divider ">OR</div>
            <div className="form-control mt-5">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <input
                type="url"
                placeholder="Your photo url"
                name="url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-center">
              Already have an account?
              <Link className="text-green-500" to={'/login'}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
