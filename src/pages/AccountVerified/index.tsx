
const AccountVerified = () => {
    return (
        <>
            <main
                id="verified-main"
                className="w-full flex items-center justify-center bg-background py-4"
            >
                <section
                    id="verified-card"
                    className="w-full max-w-lg bg-white rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center border border-bordergray"
                >
                    <div id="verified-branding" className="flex flex-col items-center mb-8">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-4xl mb-6 shadow-lg animate-pulse">
                            <span
                                className="material-symbols-outlined text-base"
                                role="img"
                                aria-label="Check circle"
                            >
                                check_circle
                            </span>
                        </div>
                        <span className="text-3xl font-bold text-accent tracking-tight mb-3">
                            Email Verified!
                        </span>
                        <span className="text-lg text-gray-600 font-medium text-center">
                            Your account has been successfully activated
                        </span>
                    </div>
                    <div
                        id="verified-content"
                        className="w-full flex flex-col items-center text-center mb-8"
                    >
                        <div className="bg-green-50 rounded-lg p-6 mb-6 border border-green-200">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Welcome to Task Manager!
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed mb-4">
                                Your email has been verified and your account is now active. You can
                                start organizing your tasks and boosting your productivity.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 w-full mb-6">
                            <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                                <span
                                    className="material-symbols-outlined text-primary text-xl mb-2"
                                    role="img"
                                    aria-label="Checklist"
                                >
                                    checklist
                                </span>
                                <p className="text-xs text-gray-600 font-medium">Manage Tasks</p>
                            </div>
                            <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                                <span
                                    className="material-symbols-outlined text-primary text-xl mb-2"
                                    role="img"
                                    aria-label="Users"
                                >
                                    group
                                </span>
                                <p className="text-xs text-gray-600 font-medium">
                                    Team Collaboration
                                </p>
                            </div>
                            <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                                <span
                                    className="material-symbols-outlined text-primary text-xl mb-2"
                                    role="img"
                                    aria-label="Chart line"
                                >
                                    trending_up
                                </span>
                                <p className="text-xs text-gray-600 font-medium">Track Progress</p>
                            </div>
                        </div>
                    </div>
                    <div id="verified-actions" className="w-full flex flex-col gap-4">
                        <button
                            type="button"
                            id="continue-login-btn"
                            className="w-full py-4 rounded-md bg-primary hover:bg-accent transition-all duration-200 text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Arrow right"
                            >
                                arrow_forward
                            </span>
                            Continue to Login
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AccountVerified