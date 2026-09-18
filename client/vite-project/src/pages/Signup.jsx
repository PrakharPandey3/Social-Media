import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosInstance } from '../axiosCalls/axios'

function Signup() {
    const [form, setForm] = useState({ name: '', username: '', email: '', password: '' })
    const [loader, setLoader] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        if (errorMsg) setErrorMsg('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation checks
        if (!form.name || !form.username || !form.email || !form.password) {
            setErrorMsg('Please fill in all fields.')
            return
        }

        setLoader(true)
        setErrorMsg('')

        try {
            await axiosInstance.post('/users/register', form)
            console.log("User Registered")
            navigate('/login')
        } catch (error) {
            console.log(error)
            setErrorMsg(
                error.response?.data?.message || 'Registration failed. Please try again.'
            )
        } finally {
            setLoader(false)
        }
    }



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/30">
                            <span className="text-2xl font-bold text-white">S</span>
                        </div>

                        <h1 className="text-3xl font-bold text-white">
                            Create Account
                        </h1>

                        <p className="mt-2 text-sm text-slate-300">
                            Sign up to get started with your account
                        </p>
                    </div>

                    {/* Signup Form */}
                    <form className="space-y-5">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                type="text"
                                name="username"
                                onChange={handleChange}
                                placeholder="Enter your username"
                                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
                            />
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-indigo-500 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600 hover:shadow-indigo-500/40 active:scale-[0.98]"
                            onClick={handleSubmit}
                        >
                            Register
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="mt-6 text-center text-sm text-slate-300">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-indigo-400 transition hover:text-indigo-300 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>

                {/* Bottom text */}
                <p className="mt-6 text-center text-xs text-slate-500">
                    By registering, you agree to our Terms & Privacy Policy.
                </p>
            </div>
        </div>
    );
}

export default Signup;