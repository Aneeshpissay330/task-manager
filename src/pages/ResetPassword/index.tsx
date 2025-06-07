
const ResetPassword = () => {
    return (
        <>
            <main
                id="reset-password-main"
                className="w-full min-h-[100vh] flex items-center justify-center bg-background"
            >
                <section
                    id="reset-password-card"
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center border border-bordergray"
                >
                    <div id="branding" className="flex flex-col items-center mb-8">
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
                            Boost your productivity
                        </span>
                    </div>
                    <div id="reset-password-title-block" className="w-full mb-7">
                        <h1 className="text-xl font-bold text-accent mb-1">Reset Password</h1>
                        <p className="text-gray-500 text-base">
                            Set a new password for your account. Make sure it’s strong and
                            memorable.
                        </p>
                    </div>
                    <form id="reset-password-form" className="w-full flex flex-col gap-6">
                        <div className="flex flex-col gap-2" id="new-password-block">
                            <label
                                htmlFor="new-password"
                                className="text-sm font-medium text-gray-700"
                            >
                                New Password
                            </label>
                            <input
                                id="new-password"
                                type="password"
                                placeholder="Enter new password"
                                autoComplete="new-password"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                            <div
                                id="password-strength-block"
                                className="mt-1 flex items-center gap-2"
                            >
                                <div
                                    id="strength-bar"
                                    className="h-2 rounded bg-bordergray w-full transition-all"
                                />
                                <span
                                    id="strength-label"
                                    className="text-xs font-medium ml-2 text-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2" id="confirm-password-block">
                            <label
                                htmlFor="confirm-password"
                                className="text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirm-password"
                                type="password"
                                placeholder="Re-enter new password"
                                autoComplete="new-password"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                            <div id="match-feedback" className="text-xs mt-1 text-red-500 hidden">
                                Passwords do not match
                            </div>
                        </div>
                        <button
                            type="submit"
                            id="reset-password-btn"
                            className="w-full py-3 rounded-md bg-primary hover:bg-accent transition-colors text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm mt-2"
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Key"
                            >
                                key
                            </span>
                            Reset Password
                        </button>
                    </form>
                    <div
                        className="w-full flex items-center justify-center mt-8"
                        id="login-link-block"
                    >
                        <span className="text-gray-500 text-sm">Remembered your password?</span>
                        <span
                            className="ml-2 text-primary font-medium text-sm hover:underline focus:outline-none cursor-pointer"
                            id="back-to-login-link"
                        >
                            Back to Login
                        </span>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ResetPassword