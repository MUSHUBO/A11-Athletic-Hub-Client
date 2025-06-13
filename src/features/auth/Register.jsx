import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, data } = Object.fromEntries(formData.entries());
        console.log(email, password, data);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password must have uppercase, lowercase & be at least 6 characters!');
            return;
        }

        // Create user with Firebase.
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                alert(error)
            })

    }

    return (
        <div className="min-h-fit py-6 pb-28 lg:py-24 flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md p-8 mx-4 space-y-4 bg-white rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-primary">Register Now</h1>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* name */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
                    </div>

                    {/* email */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
                    </div>

                    {/* photo */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Profile Picture URL</span></label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>

                    {/* password */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
                    </div>

                    {/* button */}
                    <button type="submit" className="btn btn-primary w-full">Register</button>
                </form>

                <div className="divider">OR</div>

                <button className="btn btn-outline w-full flex items-center justify-center gap-2" >
                    <FcGoogle size={20} />
                    Continue with Google
                </button>

                <p className="text-center text-sm">
                    Already have an account? <Link to="/auth/login" className="text-primary hover:underline">Login</Link>
                </p>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Register;