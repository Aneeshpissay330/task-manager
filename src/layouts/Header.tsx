
const Header = () => {
    return (
        <header id="header" className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-accent">Task Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    <span className="absolute left-3 top-2.5 text-gray-400 material-symbols-outlined text-base">
                        search
                    </span>
                </div>
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-8 h-8 rounded-full object-cover" alt="User Avatar" />
            </div>
        </header>
    )
}

export default Header