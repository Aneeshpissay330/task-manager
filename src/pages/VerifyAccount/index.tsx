
const VerifyAccount = () => {
    return (
        <>
            <main
                id="verify-main"
                className="w-full flex items-center justify-center bg-background py-4"
            >
                <section
                    id="verify-card"
                    className="w-full max-w-lg bg-white rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center border border-bordergray"
                >
                    <div id="verify-branding" className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-primary text-3xl mb-4 shadow-sm">
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Verified Email"
                            >
                                mark_email_read
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-accent tracking-tight mb-2">
                            Verify Your Account
                        </span>
                        <span className="text-base text-gray-500 font-medium text-center">
                            Check your email to complete registration
                        </span>
                    </div>
                    <div
                        id="verify-content"
                        className="w-full flex flex-col items-center text-center mb-8"
                    >
                        <div className="bg-secondary/10 rounded-lg p-6 mb-6 border border-secondary/20">
                            <span
                                className="material-symbols-outlined text-primary text-2xl mb-3"
                                role="img"
                                aria-label="Send"
                            >
                                send
                            </span>
                            <p className="text-gray-700 text-base leading-relaxed mb-2">
                                We've sent a verification link to your email address.
                            </p>
                            <div className="bg-white rounded-md px-4 py-2 border border-bordergray text-sm text-gray-600 font-medium">
                                <span
                                    className="material-symbols-outlined text-primary mr-2"
                                    role="img"
                                    aria-label="Mail"
                                >
                                    mail
                                </span>
                                <span id="user-email">your@email.com</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-2 mb-6">
                            <p className="flex items-center justify-center gap-2">
                                <span
                                    className="material-symbols-outlined text-gray-400"
                                    role="img"
                                    aria-label="Clock"
                                >
                                    schedule
                                </span>
                                The link will expire in 24 hours
                            </p>
                            <p className="flex items-center justify-center gap-2">
                                <span
                                    className="material-symbols-outlined text-yellow-500"
                                    role="img"
                                    aria-label="Warning"
                                >
                                    warning
                                </span>
                                Don't forget to check your spam folder
                            </p>
                        </div>
                    </div>
                    <div id="verify-actions" className="w-full flex flex-col gap-4">
                        <button
                            type="button"
                            id="resend-email-btn"
                            className="w-full py-3 rounded-md bg-primary hover:bg-accent transition-colors text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm"
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Send"
                            >
                                send
                            </span>
                            Resend Verification Email
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default VerifyAccount;