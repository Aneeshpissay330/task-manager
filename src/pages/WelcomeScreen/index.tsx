import { useNavigate } from "react-router";

const WelcomeScreen = () => {
    const navigate = useNavigate();
    return (
        <main
            id="welcome-main"
            className="flex items-center justify-center py-4"
        >
            <section id="welcome-content" className="max-w-2xl text-center">
                <div id="welcome-branding" className="mb-12">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white text-3xl mb-6 mx-auto shadow-lg">
                        <span
                            className="material-symbols-outlined"
                            role="img"
                            aria-label="Check"
                        >
                            check
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-accent mb-4 tracking-tight">
                        Welcome to Task Manager
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
                        Your productivity companion that helps you organize tasks, manage
                        projects, collaborate with your team, and stay on top of everything that
                        matters.
                    </p>
                </div>
                <div
                    id="welcome-features"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                    <div
                        id="feature-organize"
                        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-bordergray"
                    >
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-primary text-xl mb-4">
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Checklist"
                            >
                                checklist
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-accent mb-2">
                            Organize Tasks
                        </h3>
                        <p className="text-sm text-gray-600 text-center">
                            Keep your tasks structured and prioritized with our intuitive
                            interface
                        </p>
                    </div>
                    <div
                        id="feature-categories"
                        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-bordergray"
                    >
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-primary text-xl mb-4">
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Folder Open"
                            >
                                folder_open
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-accent mb-2">
                            Manage Projects
                        </h3>
                        <p className="text-sm text-gray-600 text-center">
                            Create categories and projects to keep everything organized
                        </p>
                    </div>
                    <div
                        id="feature-notifications"
                        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-bordergray"
                    >
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-primary text-xl mb-4">
                            <span
                                className="material-symbols-outlined"
                                role="img"
                                aria-label="Notifications"
                            >
                                notifications
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-accent mb-2">
                            Stay Notified
                        </h3>
                        <p className="text-sm text-gray-600 text-center">
                            Never miss deadlines with smart notifications and reminders
                        </p>
                    </div>
                </div>
                <div
                    id="welcome-cta"
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button
                        onClick={() => navigate("/register")}
                        id="get-started-btn"
                        className="px-8 py-4 bg-primary hover:bg-accent transition-colors text-white font-semibold text-lg rounded-xl shadow-lg flex items-center gap-3 min-w-[200px] justify-center"
                    >
                        <span
                            className="material-symbols-outlined"
                            role="img"
                            aria-label="Rocket"
                        >
                            rocket_launch
                        </span>
                        Get Started
                    </button>
                    <button
                        onClick={() => navigate("/login")}
                        id="login-continue-btn"
                        className="px-8 py-4 bg-white hover:bg-gray-50 transition-colors text-primary font-semibold text-lg rounded-xl border-2 border-primary flex items-center gap-3 min-w-[200px] justify-center"
                    >
                        <span
                            className="material-symbols-outlined"
                            role="img"
                            aria-label="Login"
                        >
                            login
                        </span>
                        Login to Continue
                    </button>
                </div>
            </section>
        </main>
    )
}

export default WelcomeScreen