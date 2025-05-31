
const Categories = () => {
    return (
        <main id="projects-main" className="p-8 max-w-6xl mx-auto">
            {/* Projects/Categories Management */}
            <section id="categories-section" className="mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-accent mb-1">Categories</h2>
                        <p className="text-gray-500 text-sm font-medium">Organize your workspaces and keep everything on track.</p>
                    </div>
                    <button id="add-category-btn" className="px-4 py-2 bg-primary text-white rounded-md font-medium text-sm flex items-center space-x-2 shadow-sm hover:bg-accent transition-colors">
                        <span className="material-symbols-outlined text-base">
                            add
                        </span>
                        <span>Add Category</span>
                    </button>
                </div>
                <div id="category-grid" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div id="category-card-1" draggable="true" className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col space-y-3 shadow-sm cursor-grab transition-shadow hover:shadow-lg" data-color="#0288D1">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
                                <span className="text-lg font-semibold text-accent">Website Redesign</span>
                            </div>
                            <button className="edit-category-btn text-gray-400 hover:text-primary transition-colors" data-category="1">
                                <span className="text-base material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">UI/UX, frontend and backend tasks for new website.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="inline-flex items-center text-xs font-semibold text-primary bg-secondary/50 rounded px-2 py-0.5">
                                <span className="mr-1 material-symbols-outlined">
                                    checklist
                                </span>
                                12 Tasks
                            </span>
                            <span className="text-xs font-medium text-gray-400">Project</span>
                        </div>
                    </div>
                    <div id="category-card-2" draggable="true" className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col space-y-3 shadow-sm cursor-grab transition-shadow hover:shadow-lg" data-color="#01579B">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
                                <span className="text-lg font-semibold text-accent">Marketing Plan</span>
                            </div>
                            <button className="edit-category-btn text-gray-400 hover:text-primary transition-colors" data-category="2">
                                <span className="text-base material-symbols-outlined">
                                    edit_square
                                </span>
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">Launch and manage campaigns and outreach.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="inline-flex items-center text-xs font-semibold text-accent bg-secondary/40 rounded px-2 py-0.5">
                                <span className="mr-1 material-symbols-outlined">
                                    checklist
                                </span>
                                7 Tasks
                            </span>
                            <span className="text-xs font-medium text-gray-400">Category</span>
                        </div>
                    </div>
                    <div id="category-card-3" draggable="true" className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col space-y-3 shadow-sm cursor-grab transition-shadow hover:shadow-lg" data-color="#81D4FA">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block w-3 h-3 rounded-full bg-secondary"></span>
                                <span className="text-lg font-semibold text-accent">Personal Growth</span>
                            </div>
                            <button className="edit-category-btn text-gray-400 hover:text-primary transition-colors" data-category="3">
                                <span className="text-base material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">Learning, reading, and self-improvement tasks.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="inline-flex items-center text-xs font-semibold text-accent bg-secondary/30 rounded px-2 py-0.5">
                                <span className="mr-1 material-symbols-outlined">
                                    checklist
                                </span>
                                5 Tasks
                            </span>
                            <span className="text-xs font-medium text-gray-400">Personal</span>
                        </div>
                    </div>
                    <div id="category-card-4" draggable="true" className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col space-y-3 shadow-sm cursor-grab transition-shadow hover:shadow-lg" data-color="#FFD600">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block w-3 h-3 rounded-full bg-[#FFD600]"></span>
                                <span className="text-lg font-semibold text-accent">Client Onboarding</span>
                            </div>
                            <button className="edit-category-btn text-gray-400 hover:text-primary transition-colors" data-category="4">
                                <span className="text-base material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">Welcoming and guiding new clients.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="inline-flex items-center text-xs font-semibold text-yellow-700 bg-yellow-100 rounded px-2 py-0.5">
                                <span className="mr-1 material-symbols-outlined">
                                    checklist
                                </span>
                                3 Tasks
                            </span>
                            <span className="text-xs font-medium text-gray-400">Workflow</span>
                        </div>
                    </div>
                    <div id="category-card-5" draggable="true" className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col space-y-3 shadow-sm cursor-grab transition-shadow hover:shadow-lg" data-color="#E57373">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block w-3 h-3 rounded-full bg-[#E57373]"></span>
                                <span className="text-lg font-semibold text-accent">Bug Fixes</span>
                            </div>
                            <button className="edit-category-btn text-gray-400 hover:text-primary transition-colors" data-category="5">
                                <span className="text-base material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">Track and manage bugs and issues.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="inline-flex items-center text-xs font-semibold text-red-600 bg-red-100 rounded px-2 py-0.5">
                                <span className="mr-1 material-symbols-outlined">
                                    checklist
                                </span>
                                6 Tasks
                            </span>
                            <span className="text-xs font-medium text-gray-400">Technical</span>
                        </div>
                    </div>
                    <div id="category-card-6" draggable="true" className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col space-y-3 shadow-sm cursor-grab transition-shadow hover:shadow-lg" data-color="#81C784">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block w-3 h-3 rounded-full bg-[#81C784]"></span>
                                <span className="text-lg font-semibold text-accent">HR &amp; Admin</span>
                            </div>
                            <button className="edit-category-btn text-gray-400 hover:text-primary transition-colors" data-category="6">
                                <span className="text-base material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">Company policies, payroll, and hiring tasks.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="inline-flex items-center text-xs font-semibold text-green-700 bg-green-100 rounded px-2 py-0.5">
                                <span className="mr-1 material-symbols-outlined">
                                    checklist
                                </span>
                                4 Tasks
                            </span>
                            <span className="text-xs font-medium text-gray-400">Support</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Categories