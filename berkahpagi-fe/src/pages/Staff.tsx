export default function Staff() {
    return (
        <>
            <header className="mb-16 font-headline text-center">
                <h1 className="font-headline text-5xl md:font-headline text-6xl font-extrabold font-headline text-on-surface mb-4 tracking-tight">
                    Portal Staf
                </h1>
                <p className="font-headline text-xl font-headline text-on-surface-variant font-medium">
                    Apa yang ingin Anda lakukan hari ini?
                </p>
            </header>
            {/* Two Large Friendly Buttons (Main Focus) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <button className="group relative flex flex-col items-center justify-center p-12 bg-surface-container-lowest rounded-[2rem] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-sm">
                    <div className="w-24 h-24 mb-6 rounded-full bg-secondary-container flex items-center justify-center font-headline text-on-secondary-container">
                        <span
                            className="material-symbols-outlined font-headline text-5xl"
                            data-icon="inventory_2"
                        >
                            inventory_2
                        </span>
                    </div>
                    <span className="font-headline text-2xl font-bold font-headline text-on-surface">Input Stok</span>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/10 rounded-[2rem] transition-colors" />
                </button>
                <button className="group relative flex flex-col items-center justify-center p-12 bg-white rounded-[2rem] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-sm ring-4 ring-primary-container/20">
                    <div className="w-24 h-24 mb-6 rounded-full primary-gradient flex items-center justify-center font-headline text-on-primary shadow-lg shadow-primary/20">
                        <span
                            className="material-symbols-outlined font-headline text-5xl"
                            data-icon="point_of_sale"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                            point_of_sale
                        </span>
                    </div>
                    <span className="font-headline text-2xl font-bold font-headline text-on-surface">Catat Penjualan</span>
                    <div className="absolute top-4 right-4 bg-accent font-headline text-on-tertiary-container px-4 py-1 rounded-full font-headline text-sm font-bold uppercase tracking-wider">
                        Aktif
                    </div>
                </button>
            </div>
            {/* Recording Sale Form (Current Focus) */}
            <section className="bg-surface-container-low rounded-[2.5rem] p-8 md:p-12 shadow-[0_12px_40px_rgba(30,28,3,0.04)]">
                <div className="flex items-center gap-4 mb-10">
                    <span className="material-symbols-outlined font-headline text-primary font-headline text-3xl">
                        shopping_bag
                    </span>
                    <h2 className="font-headline text-3xl font-bold font-headline text-on-surface">Detail Penjualan Baru</h2>
                </div>
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Dropdown */}
                        <div className="space-y-3">
                            <label className="block font-headline text-lg font-bold font-headline text-on-surface-variant ml-2">
                                Produk
                            </label>
                            <div className="relative">
                                <select className="w-full h-16 px-6 bg-surface-container-lowest border-none rounded-full font-headline text-xl font-medium font-headline text-on-surface focus:ring-4 focus:ring-primary/20 appearance-none cursor-pointer">
                                    <option>Apel Gala (Kotak)</option>
                                    <option>Tomat Heirloom (Kg)</option>
                                    <option>Roti Sourdough Segar (Unit)</option>
                                    <option>Madu Organik (500g)</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none font-headline text-on-surface-variant">
                                    expand_more
                                </span>
                            </div>
                        </div>
                        {/* Location Dropdown */}
                        <div className="space-y-3">
                            <label className="block font-headline text-lg font-bold font-headline text-on-surface-variant ml-2">
                                Lokasi
                            </label>
                            <div className="relative">
                                <select className="w-full h-16 px-6 bg-surface-container-lowest border-none rounded-full font-headline text-xl font-medium font-headline text-on-surface focus:ring-4 focus:ring-primary/20 appearance-none cursor-pointer">
                                    <option>Main Farmers Market</option>
                                    <option>Curator Storefront</option>
                                    <option>Pop-up Stall B</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none font-headline text-on-surface-variant">
                                    location_on
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Quantity Large Input */}
                    <div className="space-y-3">
                        <label className="block font-headline text-lg font-bold font-headline text-on-surface-variant ml-2">
                            Jumlah
                        </label>
                        <input
                            className="w-full h-24 px-8 bg-surface-container-lowest border-none rounded-[2rem] font-headline text-5xl font-extrabold font-headline text-primary focus:ring-4 focus:ring-primary/20 placeholder:font-headline text-surface-container-highest"
                            placeholder='0'
                            type="number"
                        />
                    </div>
                    {/* Feedback Area */}
                    <div className="p-6 bg-primary-container/10 rounded-2xl border-2 border-primary-container/20 flex items-start gap-4">
                        <span className="material-symbols-outlined font-headline text-primary mt-1">
                            info
                        </span>
                        <div>
                            <p className="font-headline text-on-primary-container font-semibold">
                                Cek Stok Langsung
                            </p>
                            <p className="font-headline text-on-primary-container/80 font-medium">
                                Menjual 12 kotak akan menyisakan 45 kotak di stok Main Farmers Market.
                            </p>
                        </div>
                    </div>
                    {/* Large Submit Button */}
                    <button
                        className="w-full h-20 primary-gradient font-headline text-on-primary font-headline text-2xl font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                        type="submit"
                    >
                        <span
                            className="material-symbols-outlined font-headline text-3xl"
                            data-icon="check_circle"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                            check_circle
                        </span>
                        Konfirmasi Penjualan
                    </button>
                </form>
            </section>

            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#fffade]/90 backdrop-blur-xl px-8 py-4 flex justify-around items-center z-50">
                <button className="flex flex-col items-center gap-1 font-headline text-primary transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95">
                    <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                        dashboard
                    </span>
                    <span className="font-headline text-xs font-bold">Beranda</span>
                </button>
                <button className="flex flex-col items-center gap-1 font-headline text-on-surface/40 transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95">
                    <span className="material-symbols-outlined">inventory</span>
                    <span className="font-headline text-xs font-medium">Stok</span>
                </button>
                <button className="flex flex-col items-center gap-1 font-headline text-on-surface/40 transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95">
                    <span className="material-symbols-outlined">analytics</span>
                    <span className="font-headline text-xs font-medium">Laporan</span>
                </button>
                <button className="flex flex-col items-center gap-1 font-headline text-on-surface/40 transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-headline text-xs font-medium">Profil</span>
                </button>
            </div>
        </>
    )
}