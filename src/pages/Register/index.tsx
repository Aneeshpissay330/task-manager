import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    return (
        <>
            <main
                id="signup-main"
                className="w-full min-h-[100vh] flex items-center justify-center bg-background p-4"
            >
                <section
                    id="signup-card"
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center border border-bordergray"
                >
                    <div id="signup-branding" className="flex flex-col items-center mb-8">
                        <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center text-white text-2xl mb-3 shadow-md">
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Check"
                            >
                                check
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-accent tracking-tight mb-1">
                            Task Manager
                        </span>
                        <span className="text-base text-gray-500 font-medium">
                            Create your account
                        </span>
                    </div>
                    <form id="signup-form" className="w-full flex flex-col gap-6">
                        <div className="flex flex-col gap-2" id="signup-name-block">
                            <label
                                htmlFor="signup-name"
                                className="text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                id="signup-name"
                                type="text"
                                placeholder="John Doe"
                                autoComplete="name"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                        </div>
                        <div className="flex flex-col gap-2" id="signup-email-block">
                            <label
                                htmlFor="signup-email"
                                className="text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="signup-email"
                                type="email"
                                placeholder="your@email.com"
                                autoComplete="email"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                        </div>
                        <div className="flex flex-col gap-2" id="signup-password-block">
                            <label
                                htmlFor="signup-password"
                                className="text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="signup-password"
                                type="password"
                                placeholder="••••••••"
                                autoComplete="new-password"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                        </div>
                        <div className="flex flex-col gap-2" id="signup-confirm-password-block">
                            <label
                                htmlFor="signup-confirm-password"
                                className="text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="signup-confirm-password"
                                type="password"
                                placeholder="••••••••"
                                autoComplete="new-password"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                        </div>
                        <div className="flex items-center gap-3 mt-1" id="signup-terms-block">
                            <input
                                id="signup-terms"
                                type="checkbox"

                                className="accent-primary w-5 h-5 rounded border-bordergray focus:ring-primary focus:ring-2 transition cursor-pointer"
                            />
                            <label
                                htmlFor="signup-terms"
                                className="text-sm text-gray-700 select-none cursor-pointer"
                            >
                                I agree to the{" "}
                                <span className="text-primary hover:underline font-medium cursor-pointer">
                                    Terms &amp; Conditions
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            id="signup-submit-btn"
                            className="w-full py-3 rounded-md bg-primary hover:bg-accent transition-colors text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm mt-2"
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Add user"
                            >
                                person_add
                            </span>
                            Sign Up
                        </button>
                    </form>
                    <div
                        className="w-full flex items-center justify-center mt-8"
                        id="login-switch-block"
                    >
                        <span className="text-gray-500 text-sm">Already have an account?</span>
                        <button
                            className="ml-2 text-primary font-medium text-sm hover:underline focus:outline-none"
                            id="login-btn"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register