export default function StockPage() {
    return (
        <>
            {/* Header Section */}
            <header className="mb-12">
                <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight mb-4">
                    Inventaris Stok
                </h1>
                <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                    Kelola hasil panen kebun artisan Anda. Lacak kuantitas di ruang pendingin
                    dan kios pasar dengan mudah.
                </p>
            </header>
            {/* Stats Bento Grid (Visual Context) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            inventory_2
                        </span>
                        <span className="font-bold text-on-surface-variant">Total Item</span>
                    </div>
                    <div className="text-4xl font-black text-primary">1.248</div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="material-symbols-outlined text-secondary text-3xl">
                            warning
                        </span>
                        <span className="font-bold text-on-surface-variant">
                            Peringatan Stok Menipis
                        </span>
                    </div>
                    <div className="text-4xl font-black text-secondary">12</div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="material-symbols-outlined text-tertiary text-3xl">
                            local_shipping
                        </span>
                        <span className="font-bold text-on-surface-variant">
                            Masuk Hari Ini
                        </span>
                    </div>
                    <div className="text-4xl font-black text-tertiary">
                        450 <span className="text-lg font-medium opacity-60">lbs</span>
                    </div>
                </div>
            </div>
            {/* Filters & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 mb-8 bg-surface-container-low p-6 rounded-xl">
                <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant px-1">
                            Lokasi
                        </label>
                        <select className="bg-surface-container-lowest border-none rounded-full py-3 px-6 pr-12 focus:ring-2 focus:ring-primary/30 font-semibold text-on-surface min-w-[200px]">
                            <option>Semua Lokasi</option>
                            <option>Main Barn Cold Storage</option>
                            <option>East Orchard Cellar</option>
                            <option>Farmer's Market Stall</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant px-1">
                            Kategori
                        </label>
                        <select className="bg-surface-container-lowest border-none rounded-full py-3 px-6 pr-12 focus:ring-2 focus:ring-primary/30 font-semibold text-on-surface min-w-[200px]">
                            <option>Semua Kategori</option>
                            <option>Pome Fruits (Apel/Pir)</option>
                            <option>Stone Fruits</option>
                            <option>Selai Artisan</option>
                            <option>Madu & Sirup</option>
                        </select>
                    </div>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">add</span>
                    Tambah Stok Baru
                </button>
            </div>
            {/* Stock Table */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
                            <th className="px-8 py-6 font-black text-on-surface-variant text-lg tracking-tight">
                                Nama Produk
                            </th>
                            <th className="px-8 py-6 font-black text-on-surface-variant text-lg tracking-tight">
                                Lokasi
                            </th>
                            <th className="px-8 py-6 font-black text-on-surface-variant text-lg tracking-tight">
                                Jumlah Stok
                            </th>
                            <th className="px-8 py-6 font-black text-on-surface-variant text-lg tracking-tight">
                                Terakhir Diisi
                            </th>
                            <th className="px-8 py-6 font-black text-on-surface-variant text-lg tracking-tight text-right">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-0">
                        {/* Row 1 */}
                        <tr className="hover:bg-accent/30 transition-colors group">
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high">
                                        <img
                                            alt="Honeycrisp Apples"
                                            data-alt="apel honeycrisp merah renyah di keranjang kayu pedesaan dengan pencahayaan alami"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPlBGhHoSjidiuk_XYSNHE2fXnqZGyvc6D_sWxUXQX0hMA0n6owXrxihgSbG7esEfz6XgkfcFBWUFD2AJjUID6CwYB7yZxqr6sxGhISSTQLcibH18Oji1tC5acRyE4eeq9VfyNc8deCCKX6rq5YwRpkNcDsBWrL9PGaxamoQcwC4052kTBIla0EAKM91wUz_55raUHJ0QmmXPtQI1WWrQLl3nfDA9DMRZrDIvLNmw8LvDG8ya2vOrYke8qb_wH4Um17XHn2Vcat3G"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-on-surface">
                                            Honeycrisp Apples
                                        </div>
                                        <div className="text-on-surface-variant/70">
                                            Heritage Orchard, Block A
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full text-on-surface font-semibold">
                                    <span className="material-symbols-outlined text-primary scale-75">
                                        ac_unit
                                    </span>
                                    Main Cold Storage
                                </span>
                            </td>
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-black text-on-surface">450</span>
                                    <span className="text-on-surface-variant font-medium">unit</span>
                                    <div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden ml-4">
                                        <div
                                            className="bg-primary h-full rounded-full"
                                            style={{ width: "75%" }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8 text-on-surface-variant font-medium text-lg">
                                12 Okt 2023
                            </td>
                            <td className="px-8 py-8 text-right">
                                <button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors">
                                    edit_square
                                </button>
                            </td>
                        </tr>
                        {/* Row 2 (Highlighted Row) */}
                        <tr className="bg-accent transition-colors group">
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high">
                                        <img
                                            alt="Bartlett Pear Preserves"
                                            data-alt="tangkapan jarak dekat selai pir artisan di stoples kaca dengan tali hias dan label organik"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyi6zTUXsPO5qRb64OcSbOAQ5PJKYflwPSelJkZVq6WAd7WutfSe8CcygxC3YY1D5dZGYFEgwAc6hx9zJVIFF9ODYB9_06zdlT-HnzIWk-OORANWeHZRO18rqTTJoxqYepN_kohITUxTuJXNGW0oelz7XxVYb7YYKRW8vNj5SnVqY1Lpbj9TUag6p76xuJftdJ0wgR_6Li1p_zu-Vt7uCLCBwwNk7Wd2pMKd07xAUkKkGewIRX5YqR6UOpALXsAZoWtN3c0PDuUKok"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-on-surface">
                                            Bartlett Pear Preserves
                                        </div>
                                        <div className="text-on-surface-variant/70">
                                            Small Batch Kitchen
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-on-surface font-semibold">
                                    <span className="material-symbols-outlined text-secondary scale-75">
                                        storefront
                                    </span>
                                    Kios Pasar
                                </span>
                            </td>
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-black text-secondary">18</span>
                                    <span className="text-on-surface-variant font-medium">stoples</span>
                                    <div className="w-24 h-2 bg-white rounded-full overflow-hidden ml-4">
                                        <div
                                            className="bg-secondary h-full rounded-full"
                                            style={{ width: "15%" }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8 text-on-surface-variant font-medium text-lg">
                                14 Okt 2023
                            </td>
                            <td className="px-8 py-8 text-right">
                                <button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors">
                                    edit_square
                                </button>
                            </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover:bg-accent/30 transition-colors group">
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high">
                                        <img
                                            alt="Organic Sweet Cider"
                                            data-alt="botol sari apel organik jernih berkualitas tinggi dengan latar belakang kayu dan pencahayaan sinematik yang lembut"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGDKyr3UVP6ObibOPJ8hZ-v9I9-aGZCJ1lyWqCw3ASLs65tkipOtQepJMpK--P2zfOb5DXkakxezrQC_LJTHshhhQvpFZMG-tZsnnWBJD-_OpUpIDPEwi7uj_4SeKIeL7RR_ntyUe9vmUGnGD_54Xyb1SxNrQNuG5ETKgnIWY85MwCGzG_C8FsC2spoX0DOIaDamMYNWI3lzmMWowc0-ciWR2UySzlMF6IkK2xzGQ5RTUQHY9Un0ACFQEPvx8ZoebeZe_4vGeIGvTk"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-on-surface">
                                            Organic Sweet Cider
                                        </div>
                                        <div className="text-on-surface-variant/70">
                                            Orchard Pressery
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full text-on-surface font-semibold">
                                    <span className="material-symbols-outlined text-primary scale-75">
                                        ac_unit
                                    </span>
                                    Main Cold Storage
                                </span>
                            </td>
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-black text-on-surface">120</span>
                                    <span className="text-on-surface-variant font-medium">
                                        galon
                                    </span>
                                    <div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden ml-4">
                                        <div
                                            className="bg-primary h-full rounded-full"
                                            style={{ width: "45%" }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8 text-on-surface-variant font-medium text-lg">
                                10 Okt 2023
                            </td>
                            <td className="px-8 py-8 text-right">
                                <button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors">
                                    edit_square
                                </button>
                            </td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="hover:bg-accent/30 transition-colors group">
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high">
                                        <img
                                            alt="Bosc Pears"
                                            data-alt="pir Bosc keemasan matang dengan kulit bertekstur di atas permukaan batu alami, cahaya terarah yang lembut"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-t6JVjeBwLC6H6QvJsF_YMvPMrIRYAwb1L9PeqnwLZ-lWBZx7EB1GhzQIueUcOukI_VJdtrCPLrPKk8vUOO800bgOJuga7USzyx_8T3hIpC0JpxCkeJMaNQgJTSfIxa94UbZsTA18fWsLS4s7SCuK8oN5Y21zUchy0PsNz3w4CqJRKDHRMTVKxHIwIkEvGRtcTL_-eDqdZenGX3hu6bObpQao0PHvU1aYEmcdJhFl5DEnUTQxkUStrB1AL4ZRL_HUUmoEMTfIlG8f"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-on-surface">
                                            Bosc Pears
                                        </div>
                                        <div className="text-on-surface-variant/70">
                                            West Hill Block
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full text-on-surface font-semibold">
                                    <span className="material-symbols-outlined text-tertiary scale-75">
                                        warehouse
                                    </span>
                                    East Cellar
                                </span>
                            </td>
                            <td className="px-8 py-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-black text-on-surface">320</span>
                                    <span className="text-on-surface-variant font-medium">lbs</span>
                                    <div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden ml-4">
                                        <div
                                            className="bg-primary h-full rounded-full"
                                            style={{ width: "60%" }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-8 py-8 text-on-surface-variant font-medium text-lg">
                                11 Okt 2023
                            </td>
                            <td className="px-8 py-8 text-right">
                                <button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors">
                                    edit_square
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Pagination / Footer Note */}
            <div className="mt-12 flex justify-between items-center bg-surface-container-low/50 p-8 rounded-xl">
                <div className="text-lg font-medium text-on-surface-variant">
                    Menampilkan <span className="text-on-surface font-bold">1 - 12</span> dari{" "}
                    <span className="text-on-surface font-bold">48</span> produk
                </div>
                <div className="flex gap-4">
                    <button
                        className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-full font-bold shadow-sm flex items-center gap-2 hover:bg-white transition-all disabled:opacity-50"
                        disabled={false}
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                        Sebelumnya
                    </button>
                    <button className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-full font-bold shadow-sm flex items-center gap-2 hover:bg-white transition-all">
                        Selanjutnya
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </>
    )
}