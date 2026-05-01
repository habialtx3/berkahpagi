export default function SalesPage() {
    return (
        <>
            <div className="flex">
                <aside className="hidden lg:flex lg:flex-col h-screen w-64">
                    <div className="mb-8 mt-5">
                        <h2 className="font-['Manrope'] font-black text-[#506535] text-xl">
                            Manajemen
                        </h2>
                        <p className="text-shadow-on-surface text-sm">The Organic Curator</p>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a
                            className="flex items-center gap-3 p-4 text-[#1e1c03]/70  hover:bg-[#e9e4ba]/50 rounded-xl transition-all duration-200 hover:translate-x-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">grid_view</span>
                            <span className="font-medium">Dasbor</span>
                        </a>
                        <a
                            className="flex items-center gap-3 p-4 bg-[#ffffff] ext-[#506535] rounded-xl shadow-sm font-bold transition-all duration-200 hover:translate-x-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">payments</span>
                            <span className="font-medium">Penjualan</span>
                        </a>
                        <a
                            className="flex items-center gap-3 p-4 text-[#1e1c03]/70  hover:bg-[#e9e4ba]/50 rounded-xl transition-all duration-200 hover:translate-x-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span className="font-medium">Inventaris</span>
                        </a>
                        <a
                            className="flex items-center gap-3 p-4 text-[#1e1c03]/70  hover:bg-[#e9e4ba]/50 rounded-xl transition-all duration-200 hover:translate-x-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">group</span>
                            <span className="font-medium">Vendor</span>
                        </a>
                        <a
                            className="flex items-center gap-3 p-4 text-[#1e1c03]/70  hover:bg-[#e9e4ba]/50 rounded-xl transition-all duration-200 hover:translate-x-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">settings</span>
                            <span className="font-medium">Pengaturan</span>
                        </a>
                    </nav>
                </aside>


                <div className="flex-1 overflow-hidden min-h-screen pb-16">
                    <div className="w-full px-4 md:px-4 lg:px-12 pt-6">

                        {/* HEADER */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div className="space-y-2">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface">
                                    Catatan Penjualan Harian
                                </h1>
                                <p className="text-sm md:text-base text-on-surface-variant max-w-lg">
                                    Lacak setiap hasil panen yang terjual. Manajemen ritel modern untuk produsen artisan.
                                </p>
                            </div>

                            <button className="flex items-center gap-3 primary-gradient text-on-primary px-6 py-4 md:px-4 md:py-5 rounded-xl md:rounded-2xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                                <span
                                    className="material-symbols-outlined text-2xl md:text-3xl"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    add_circle
                                </span>
                                <span className="text-base md:text-xl font-bold">Penjualan Baru</span>
                            </button>
                        </div>

                        {/* SEARCH */}
                        <section className="mb-8">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-primary/60 text-xl md:text-2xl">
                                        search
                                    </span>
                                </div>
                                <input
                                    className="w-full bg-surface-container-highest/40 rounded-full py-4 md:py-5 pl-12 md:pl-14 pr-6 text-base md:text-lg text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/30 transition-all"
                                    placeholder="Cari produk, ID pesanan, atau nama pelanggan..."
                                    type="text"
                                />
                            </div>
                        </section>

                        {/* TABLE */}
                        <section className="bg-surface-container-low rounded-2xl p-1">
                            <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-x-auto">

                                <table className="min-w-[700px] w-full text-left">
                                    <thead>
                                        <tr className="bg-surface-container-high/30">
                                            <th className="px-6 md:px-4 py-4 md:py-6 text-xs md:text-sm uppercase">Produk</th>
                                            <th className="px-6 md:px-4 py-4 md:py-6 text-xs md:text-sm uppercase">Jumlah</th>
                                            <th className="px-6 md:px-4 py-4 md:py-6 text-xs md:text-sm uppercase">Harga</th>
                                            <th className="px-6 md:px-4 py-4 md:py-6 text-xs md:text-sm uppercase">Waktu</th>
                                            <th className="px-6 md:px-4 py-4 md:py-6 text-right text-xs md:text-sm uppercase">Aksi</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y">
                                        <tr className="hover:bg-surface-bright transition">
                                            <td className="px-6 md:px-4 py-6">
                                                <div className="flex items-center gap-3 md:gap-4">
                                                    <div>
                                                        <p className="font-bold">Wildflower Honey</p>
                                                        <p className="text-xs text-on-surface-variant">#TR-9421</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 md:px-4 py-6">2</td>
                                            <td className="px-6 md:px-4 py-6 text-primary font-bold">$34.00</td>
                                            <td className="px-6 md:px-4 py-6">14:22</td>
                                            <td className="px-6 md:px-4 py-6 text-right">
                                                <button className="material-symbols-outlined">more_vert</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </section>

                        {/* SUMMARY */}
                        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="bg-primary text-on-primary p-6 md:p-8 rounded-2xl">
                                <p className="text-sm opacity-70">Total Penjualan</p>
                                <h3 className="text-2xl md:text-4xl font-black">$1,452.80</h3>
                            </div>

                            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl">
                                <p className="text-sm text-on-surface-variant">Transaksi</p>
                                <h3 className="text-2xl md:text-4xl font-black">42</h3>
                            </div>

                            <div className="bg-secondary-container p-6 md:p-8 rounded-2xl">
                                <p className="text-sm">Rata-rata</p>
                                <h3 className="text-2xl md:text-4xl font-black">$34.59</h3>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#e9e4ba]/80 backdrop-blur-3xl rounded-t-[1.5rem] shadow-[0_-4px_20px_rgba(30,28,3,0.04)] z-50">
                <div className="flex flex-col items-center justify-center text-[#506535]/60  px-4 py-2 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">home</span>
                    <span className="font-['Inter'] text-[12px] font-semibold">Beranda</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#506535] text-white rounded-[1.5rem] px-6 py-2 scale-105 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">receipt_long</span>
                    <span className="font-['Inter'] text-[12px] font-semibold">Penjualan</span>
                </div>
                <div className="flex flex-col items-center justify-center text-[#506535]/60  px-4 py-2 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">bakery_dining</span>
                    <span className="font-['Inter'] text-[12px] font-semibold">
                        Inventaris
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center text-[#506535]/60  px-4 py-2 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-['Inter'] text-[12px] font-semibold">Profil</span>
                </div>
            </nav>
        </>
    )
}