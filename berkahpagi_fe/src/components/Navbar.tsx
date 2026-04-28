export default function Navbar() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffade]/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(30,28,3,0.06)]">
                <nav className="flex justify-between items-center w-full px-8 md:px-16 py-6 max-w-[1920px] mx-auto">
                    <div className="flex items-center gap-12">
                        <span className="text-2xl font-bold tracking-tighter text-[#506535] font-headline">
                            The Organic Curator
                        </span>
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                className="text-[#506535] font-bold border-b-2 border-[#506535] pb-1 hover:scale-105 transition-transform duration-200 ease-out"
                                href="/"
                            >
                                Dashboard
                            </a>
                            <a
                                className="text-[#1e1c03]/60 font-medium hover:scale-105 transition-transform duration-200 ease-out"
                                href="/products"
                            >
                                Products
                            </a>
                            <a
                                className="text-[#1e1c03]/60 font-medium hover:scale-105 transition-transform duration-200 ease-out"
                                href="/stocks"
                            >
                                Stock
                            </a>
                            <a
                                className="text-[#1e1c03]/60 font-medium hover:scale-105 transition-transform duration-200 ease-out"
                                href="/sales"
                            >
                                Sales
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center bg-surface-container-highest/40 px-6 py-2.5 rounded-full ring-1 ring-outline-variant/20">
                            <span className="material-symbols-outlined text-primary text-xl mr-3">
                                search
                            </span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 w-64"
                                placeholder="Search orders..."
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-primary hover:scale-105 transition-all active:scale-95">
                                <span
                                    className="material-symbols-outlined"
                                    data-icon="notifications"
                                >
                                    notifications
                                </span>
                            </button>
                            <button className="p-2 text-primary hover:scale-105 transition-all active:scale-95">
                                <span className="material-symbols-outlined" data-icon="settings">
                                    settings
                                </span>
                            </button>
                            <div className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden ring-2 ring-primary/10 ml-2">
                                <img
                                    alt="User profile"
                                    data-alt="close-up portrait of a friendly professional man in his 50s with a warm smile and natural lighting"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuX6mLt9DyUtY0zIPYwHuke4fliKDjDQJljy9Qa3ScJ9_pTGJcR9Giqa-m9K7Mf-mH5XWBygwd4MI82-mI5CdyrvBr6G_pGI0ust-llocpKK-Q1lYxIAzzHH1QTPUaPsebTgXTcmMv-Ov16H3OKrJYIqWcoUGtm2kn7juj5xj5R5kFK6KI49P07cWzHkOg6exePeWDWF-DtsgXofKEGRfRTfFHUECfTjzJR5y_9isTv6zsk2_uEUvmKL1TseOXJ17GkrBDLmfFBYtQ"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
