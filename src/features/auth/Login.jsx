import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        // firebase Login Send.

    }

    return (
        <div className="min-h-fit py-24 pb-44 lg:py-24 flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md p-8 mx-4 space-y-4 bg-white rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-primary">Login Now!</h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* email felid */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* password field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* submit button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>

                <div className="divider">OR</div>

                {/* google login */}
                <button className="btn btn-outline w-full flex items-center gap-2">
                    <FcGoogle size={20} />
                    Login with Google
                </button>

                {/* register page */}
                <p className="text-center text-sm">
                    Don’t have an account? <Link to="/auth/register" className="text-primary hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;