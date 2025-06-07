import { useNavigate } from "react-router"
import Modal from "../../components/Modal";
import { useState, useRef } from "react";

const Login = () => {
    const navigate = useNavigate();
    const otpRefs = Array(6)
        .fill(0)
        .map(() => useRef<HTMLInputElement>(null));
    const [isOpen, setIsOpen] = useState(false);
    const submitLogin = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh
        setIsOpen(true);
    };
    const handleOtpChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            if (index < 5) {
                otpRefs[index + 1].current?.focus();
            }
        } else {
            e.target.value = ''; // Clear non-digit input
        }
    };
    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otpRefs[index].current?.value && index > 0) {
            otpRefs[index - 1].current?.focus();
        }
    };
    return (
        <>
            <main
                id="login-main"
                className="w-full min-h-[100vh] flex items-center justify-center bg-background"
            >
                <section
                    id="login-card"
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
                    <form id="login-form" className="w-full flex flex-col gap-6">
                        <div className="flex flex-col gap-2" id="login-email-block">
                            <label
                                htmlFor="login-email"
                                className="text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="login-email"
                                type="email"
                                placeholder="your@email.com"
                                autoComplete="email"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                        </div>
                        <div className="flex flex-col gap-2" id="login-password-block">
                            <label
                                htmlFor="login-password"
                                className="text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="login-password"
                                type="password"
                                placeholder="••••••••"
                                autoComplete="current-password"

                                className="px-4 py-3 rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-base text-gray-800 placeholder:text-gray-400 bg-background"
                            />
                        </div>
                        <div
                            className="flex items-center justify-between mt-1"
                            id="login-aux-links"
                        >
                            <button
                                type="button"
                                className="text-primary text-sm font-medium hover:underline focus:outline-none"
                                id="forgot-password-btn"
                                onClick={() => navigate("/forgot")}
                            >
                                Forgot Password?
                            </button>
                        </div>
                        <button
                            type="submit"
                            onClick={submitLogin}
                            id="login-btn"
                            className="w-full py-3 rounded-md bg-primary hover:bg-accent transition-colors text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm"
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Login"
                            >
                                login
                            </span>
                            Login
                        </button>
                    </form>
                    <div
                        className="w-full flex items-center justify-center mt-8"
                        id="signup-switch-block"
                    >
                        <span className="text-gray-500 text-sm">Don't have an account?</span>
                        <button
                            className="ml-2 text-primary font-medium text-sm hover:underline focus:outline-none"
                            id="signup-btn"
                            onClick={() => navigate("/register")}
                        >
                            Sign up
                        </button>
                    </div>
                </section>
            </main>
            <Modal visible={isOpen} onClose={() => setIsOpen(false)}>
                <div id="otp-header" className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-primary text-2xl mb-4">
                        <span
                            className="material-symbols-outlined text-xl text-primary"
                            role="img"
                            aria-label="Shield"
                        >
                            shield
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-accent mb-2">Verify Your Account</h2>
                    <p className="text-gray-500 text-center text-sm leading-relaxed">
                        We've sent a 6-digit verification code to your email address. Please enter
                        it below to continue.
                    </p>
                </div>
                <form id="otp-form" className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-3" id="otp-input-section">
                        <label className="text-sm font-medium text-gray-700 text-center">
                            Enter Verification Code
                        </label>
                        <div className="flex justify-center gap-2" id="otp-inputs">
                            {otpRefs.map((ref, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    className="w-12 h-12 text-center text-xl font-semibold rounded-md border border-bordergray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-background"
                                    ref={ref}
                                    onChange={e => handleOtpChange(i, e)}
                                    onKeyDown={e => handleOtpKeyDown(i, e)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-center" id="otp-timer-section">
                        <p className="text-sm text-gray-500 mb-2">
                            Code expires in{" "}
                            <span id="timer" className="font-semibold text-accent">
                                00:00
                            </span>
                        </p>
                        <button
                            type="button"
                            className="text-primary text-sm font-medium hover:underline disabled:text-gray-400 disabled:no-underline"
                            id="resend-otp-btn"
                        >
                            Resend Code
                        </button>
                    </div>
                    <div className="flex gap-3" id="otp-actions">
                        <button
                            type="button"
                            id="otp-cancel-btn"
                            onClick={() => setIsOpen(false)}
                            className="flex-1 py-3 rounded-md border border-bordergray hover:bg-gray-50 transition-colors text-gray-700 font-medium text-base"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            id="otp-verify-btn"
                            className="flex-1 py-3 rounded-md bg-primary hover:bg-accent transition-colors text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm"
                        >
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Check"
                            >
                                check
                            </span>
                            Verify
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default Login