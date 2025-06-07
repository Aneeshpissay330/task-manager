import { useNavigate } from "react-router";

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <main
                id="forgot-main"
                className="w-full min-h-[100vh] flex items-center justify-center bg-background"
            >
                <section
                    id="forgot-card"
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center border border-bordergray"
                >
                    <div id="branding-forgot" className="flex flex-col items-center mb-8">
                        <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center text-white text-2xl mb-3 shadow-md">
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Lock"
                            >
                                lock
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-accent tracking-tight mb-1">
                            Task Manager
                        </span>
                        <span className="text-base text-gray-500 font-medium">
                            Password Reset
                        </span>
                    </div>
                    <div id="forgot-message" className="w-full flex flex-col items-center mb-7">
                        <span
                            className="text-lg font-semibold text-accent mb-2 text-center"
                            id="forgot-title"
                        >
                            Forgot your password?
                        </span>
                        <span className="text-[16px] text-gray-600 text-center" id="forgot-desc">
                            Enter your email address below and we'll send you a link to reset your
                            password.
                        </span>
                    </div>
                    <form id="forgot-form" className="w-full flex flex-col gap-6">
                        <div className="flex flex-col gap-2" id="forgot-email-block">
                            <label
                                htmlFor="forgot-email"
                                className="text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="forgot-email"
                                type="email"
                                placeholder="your@email.com"
                                autoComplete="email"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                        </div>
                        <button
                            type="submit"
                            id="send-reset-link-btn"
                            className="w-full py-3 rounded-md bg-primary hover:bg-accent transition-colors text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm"
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Send"
                            >
                                send
                            </span>
                            Send Reset Link
                        </button>
                    </form>
                    <div
                        className="w-full flex items-center justify-center mt-8"
                        id="login-link-block"
                    >
                        <button
                            className="flex items-center gap-2 text-primary font-medium text-sm focus:outline-none"
                            id="back-to-login-btn"
                            onClick={() => navigate("/login")}
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Arrow left"
                            >
                                arrow_back
                            </span>
                            Back to Login
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ForgotPassword