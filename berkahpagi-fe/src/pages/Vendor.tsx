export default function Vendor() {
    return (
        <>
            <header className="mb-12">
                <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-2">
                    Selamat datang kembali, Arthur.
                </h1>
                <p className="text-xl text-on-surface-variant font-medium">
                    Hasil panen Anda menunjukkan performa luar biasa minggu ini.
                </p>
            </header>
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Earnings Card */}
                <div className="lg:col-span-1 bg-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col justify-between border border-outline-variant/10">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/60">
                                Pendapatan Saya
                            </span>
                            <span className="material-symbols-outlined text-primary bg-primary-container/30 p-2 rounded-full">
                                payments
                            </span>
                        </div>
                        <div className="text-6xl font-extrabold tracking-tighter text-on-surface mb-2">
                            $4,280.50
                        </div>
                        <div className="flex items-center gap-2 text-primary font-bold">
                            <span className="material-symbols-outlined">trending_up</span>
                            <span>+12.5% dari bulan lalu</span>
                        </div>
                    </div>
                    <div className="mt-12">
                        <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg">
                            Tarik Dana
                        </button>
                    </div>
                </div>
                {/* Summary Stats */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Stock Health Card */}
                    <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-center border border-outline-variant/10">
                        <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/60 mb-4">
                            Status Inventaris
                        </span>
                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-5xl font-black text-on-surface">84%</span>
                            <span className="text-lg font-semibold text-on-surface-variant mb-1">
                                Kesehatan Stok
                            </span>
                        </div>
                        {/* Custom Consignment Progress Tracker */}
                        <div className="w-full h-4 bg-primary-fixed rounded-full relative">
                            <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: "84%" }}
                            />
                            <div className="absolute top-1/2 left-[84%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-surface-container-lowest border-4 border-primary rounded-full shadow-sm" />
                        </div>
                        <p className="mt-6 text-on-surface-variant font-medium leading-relaxed">
                            3 item hampir habis. Kami merekomendasikan Anda untuk segera mengisi ulang <span className="text-primary font-bold">Heirloom Carrots</span>.
                        </p>
                    </div>
                    {/* Sales Volume Card */}
                    <div className="bg-accent/40 rounded-xl p-8 flex flex-col justify-center border border-outline-variant/10">
                        <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/60 mb-4">
                            Total Penjualan
                        </span>
                        <div className="flex items-end gap-3 mb-4">
                            <span className="text-5xl font-black text-on-surface">312</span>
                            <span className="text-lg font-semibold text-on-surface-variant mb-1">
                                Unit Terjual
                            </span>
                        </div>
                        <div className="flex gap-1 h-24 items-end mt-4">
                            <div
                                className="flex-1 bg-primary/20 rounded-t-lg"
                                style={{ height: "40%" }}
                            />
                            <div
                                className="flex-1 bg-primary/20 rounded-t-lg"
                                style={{ height: "65%" }}
                            />
                            <div
                                className="flex-1 bg-primary/20 rounded-t-lg"
                                style={{ height: "50%" }}
                            />
                            <div
                                className="flex-1 bg-primary/20 rounded-t-lg"
                                style={{ height: "85%" }}
                            />
                            <div
                                className="flex-1 bg-primary/20 rounded-t-lg"
                                style={{ height: "70%" }}
                            />
                            <div
                                className="flex-1 bg-primary rounded-t-lg shadow-sm"
                                style={{ height: "95%" }}
                            />
                            <div
                                className="flex-1 bg-primary/40 rounded-t-lg"
                                style={{ height: "60%" }}
                            />
                        </div>
                    </div>
                </div>
                {/* Product List Section */}
                <div className="lg:col-span-3 mt-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                            Produk Unggulan
                        </h2>
                        <button className="flex items-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container font-bold rounded-xl hover:scale-105 active:scale-95 transition-all">
                            <span className="material-symbols-outlined">add</span>
                            Tambah Baru
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* Product Card 1 */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow group border border-transparent hover:border-primary/20 transition-all">
                            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    data-alt="kumpulan wortel heirloom organik segar dari kebun yang cerah dengan daun hijau di bawah cahaya pagi yang lembut"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDun7yfIR_yGNPrD2YzHvtrQJXiOigWvUw-oAtdVAPnqbZolwGAs7sPfFayvZ5yC1I7MMA9Z3LYhLq94iTMNAliWO6wOnZRPCZxQsK7UsyGldl4mXOHk_cNiD89z2U6q-GFUV_6QenJ0_iovtq6e0LFraVTVX2H2g-KF9pJfL2r__xJ-qi2I91yz5vyQGq45JflhvaI1l1pzyuJuGlEaOxGM-XPD4_otPJFDaowdLF886UZfK51vlnT6Ku-e6nFP-44bU5GBGcRSw-X"
                                />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-primary shadow-sm">
                                    $4.50/lb
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-4">
                                Heirloom Carrots
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-on-surface-variant font-medium">
                                    <span>Sisa Stok</span>
                                    <span className="text-error font-bold bg-error-container/20 px-3 py-1 rounded-full text-sm">
                                        Menipis: 12 lbs
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-on-surface-variant font-medium">
                                    <span>Penjualan Mingguan</span>
                                    <span className="text-on-surface font-bold">48 lbs</span>
                                </div>
                                <div className="w-full h-2 bg-surface-container-highest rounded-full">
                                    <div
                                        className="h-full bg-error rounded-full"
                                        style={{ width: "15%" }}
                                    />
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 border-2 border-primary/20 text-primary font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all">
                                Edit Produk
                            </button>
                        </div>
                        {/* Product Card 2 */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow group border border-transparent hover:border-primary/20 transition-all">
                            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    data-alt="paprika merah dan kuning segar dengan tetesan air di keranjang kayu pedesaan"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwrmubFKkfYiUuIIaO6-k4TGrlcyWtDwLw1czTDwFdxAs4NGUQnsJFc9si6RaizpIccIe7PADlL4LMQnl8IJNdOjmwTWgRmi9ILfBj7w_Pn7imour1cW7xtfNrWSDj_l3Xc285NSbtUqq2TLLGgRrqG1Cn3dq-TidvXJVx1lQFkULFg1y8DAUp8P-y5M1t94AHSZsmyyON-TD7Ja2bQK9ykyK8MiYu_u-V4PPHsUgaNN3aoxNwbUr5cFurSbLUhpa7bKCEYDdANHG7"
                                />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-primary shadow-sm">
                                    $3.25/ea
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-4">
                                Bell Pepper Trio
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-on-surface-variant font-medium">
                                    <span>Sisa Stok</span>
                                    <span className="text-primary font-bold bg-primary-container/20 px-3 py-1 rounded-full text-sm">
                                        Aman: 85 unit
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-on-surface-variant font-medium">
                                    <span>Penjualan Mingguan</span>
                                    <span className="text-on-surface font-bold">124 unit</span>
                                </div>
                                <div className="w-full h-2 bg-surface-container-highest rounded-full">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: "65%" }}
                                    />
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 border-2 border-primary/20 text-primary font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all">
                                Edit Produk
                            </button>
                        </div>
                        {/* Product Card 3 */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow group border border-transparent hover:border-primary/20 transition-all">
                            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    data-alt="peti berisi berbagai apel artisanal termasuk fuji dan gala dengan pencahayaan estetika musim gugur yang hangat"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XkoLVB3nL0aSH-8lVSt1p_9mBiGIHgtCkwBnmKnMnk5fSdYFfkmtMvkBGVEvnCvgNQN9l63fSEQdNNyX-9p1hFwX6gkP3ukXN7pZY81PevuhdO743DnGH5BZZDjQGRoUp0QMsrtn2JlLPk7jvQ66mRuX0RdUcflg6lB6bCSAykM3I6_Sc5_2U3xnYh9eABHDOt063lQGQqF8axEZ13CoTe8s-ZLHIdnWoo_7FekRlfQ5Dilc0qW-wOAc8v-iZW8SC-wRYFN9Kz7R"
                                />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-primary shadow-sm">
                                    $2.00/lb
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-4">
                                Honeycrisp Apples
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-on-surface-variant font-medium">
                                    <span>Sisa Stok</span>
                                    <span className="text-primary font-bold bg-primary-container/20 px-3 py-1 rounded-full text-sm">
                                        Aman: 240 lbs
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-on-surface-variant font-medium">
                                    <span>Penjualan Mingguan</span>
                                    <span className="text-on-surface font-bold">310 lbs</span>
                                </div>
                                <div className="w-full h-2 bg-surface-container-highest rounded-full">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: "80%" }}
                                    />
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 border-2 border-primary/20 text-primary font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all">
                                Edit Produk
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest/90 backdrop-blur-xl border-t border-outline-variant/10 px-8 py-4 flex justify-between items-center z-50">
                <div className="flex flex-col items-center text-primary">
                    <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                        dashboard
                    </span>
                    <span className="text-[10px] font-bold mt-1">Dasbor</span>
                </div>
                <div className="flex flex-col items-center text-on-surface/60">
                    <span className="material-symbols-outlined">inventory_2</span>
                    <span className="text-[10px] font-bold mt-1">Produk</span>
                </div>
                <div className="flex flex-col items-center text-on-surface/60">
                    <span className="material-symbols-outlined">analytics</span>
                    <span className="text-[10px] font-bold mt-1">Penjualan</span>
                </div>
                <div className="flex flex-col items-center text-on-surface/60">
                    <span className="material-symbols-outlined">account_circle</span>
                    <span className="text-[10px] font-bold mt-1">Profil</span>
                </div>
            </div>
        </>
    )
}