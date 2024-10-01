import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import photo from '../../assets/imgs/BMW7.png'
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
 
    const {createUser, googleSignIn} = useContext(AuthContext)
    const handleSignup = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);
        form.reset();

        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(err=>console.log(err))
    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser); 
        })
        .catch(error=>console.log(error))
    }


    return (
        <div className='flex justify-around text-white py-12 bg-black items-center'>
        <div className='w-4/12 px-auto'>
            <h2 className='text-4xl font-bold'>Join us to have luxury <br/> car rental experience</h2>
            <p className='text-justify pt-3'>At RentBD, we are committed to delivering unparalleled service and a seamless booking experience.</p>
            <img src={photo} alt="" />
            <p className='text-justify'>We are here to provides you best rental experiences. We collect world's best luxuries branded cars for you. And with our experience driver you journey become safe and secure.
                <div className='flex pt-5 gap-3'>
                    <img className='w-[50px] rounded-lg' src="https://i.ibb.co.com/0cLGNtM/img-1.jpg" alt="" />
                    <div>
                        <h2 className='text-lg font-semibold'>Jarina</h2>
                        <p>Founder RentBD</p>
                    </div>
                </div>
            </p>
        </div>
        <div>
        <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="card bg-base-100 md:w-[500px] shadow-2xl">
            <div className='flex justify-between items-center px-8 pt-8'>
            <h2 className='text-2xl font-bold'>Sign up to <br/> Rent<span className='text-red-700'>BD</span></h2>
            <p>Already a member? <br/> <Link to='/login' className='text-lg text-blue-700'>Login here</Link></p>
            </div>
            <form onSubmit={handleSignup} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
                <div className="divider">OR</div>
                    <div className="form-control">
                    <button onClick={handleGoogleSignIn} className="btn btn-white"><FcGoogle /> Google Login</button>
                    </div>
            </form>
            </div>
        </div>
        </div>
        </div>
    </div>
    );
};

export default Signup;