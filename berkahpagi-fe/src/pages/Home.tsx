import { useEffect, useState } from "react"

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('http://berkahpagi-backend.test/api/products', {
                method: 'GET',
            })

            const data = await res.json()
            setProducts(data.data);
        }

        fetchProducts()
    }, [])

    console.log(products);

    return (
        <>
            <section className="mb-12">
                <h1 className="text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-2">
                    Selamat datang kembali, Arthur
                </h1>
                <p className="text-xl text-on-surface-variant font-medium">
                    Berikut adalah ringkasan aktivitas di berbagai lokasi Anda hari ini.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(30,28,3,0.04)] transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-secondary-container rounded-xl text-on-secondary-container">
                            <span
                                className="material-symbols-outlined text-3xl"
                                data-icon="inventory_2"
                            >
                                inventory_2
                            </span>
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full">
                            +4 minggu ini
                        </span>
                    </div>
                    <p className="text-on-surface-variant font-medium text-lg mb-1">
                        Total Produk
                    </p>
                    <h3 className="text-4xl font-extrabold font-headline text-on-surface">
                        1.284
                    </h3>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(30,28,3,0.04)] transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-tertiary-container/30 rounded-xl text-tertiary">
                            <span
                                className="material-symbols-outlined text-3xl"
                                data-icon="package_2"
                            >
                                package_2
                            </span>
                        </div>
                    </div>
                    <p className="text-on-surface-variant font-medium text-lg mb-1">
                        Total Stok
                    </p>
                    <h3 className="text-4xl font-extrabold font-headline text-on-surface">
                        8.420
                    </h3>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(30,28,3,0.04)] transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-primary-container/20 rounded-xl text-primary">
                            <span
                                className="material-symbols-outlined text-3xl"
                                data-icon="shopping_basket"
                            >
                                shopping_basket
                            </span>
                        </div>
                        <span className="text-xs font-bold text-error bg-error-container/50 px-3 py-1 rounded-full">
                            Ramai
                        </span>
                    </div>
                    <p className="text-on-surface-variant font-medium text-lg mb-1">
                        Total Penjualan Hari Ini
                    </p>
                    <h3 className="text-4xl font-extrabold font-headline text-on-surface">
                        142
                    </h3>
                </div>

                <div className="bg-primary p-8 rounded-xl shadow-[0_20px_50px_rgba(80,101,53,0.15)] transition-transform hover:scale-[1.02] duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-100" />
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white/20 rounded-xl text-white backdrop-blur-md">
                                <span
                                    className="material-symbols-outlined text-3xl"
                                    data-icon="payments"
                                >
                                    payments
                                </span>
                            </div>
                        </div>
                        <p className="text-white/80 font-medium text-lg mb-1">
                            Total Pendapatan
                        </p>
                        <h3 className="text-4xl font-extrabold font-headline text-white">
                            $4,821.50
                        </h3>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <section className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold font-headline text-on-surface">
                            Penjualan Terkini
                        </h2>
                        <button className="text-primary font-bold text-lg hover:underline underline-offset-4 decoration-2">
                            Lihat Semua Pembukuan
                        </button>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(30,28,3,0.03)]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-low/50">
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                                        Produk
                                    </th>
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                                        Lokasi
                                    </th>
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-center">
                                        Kuantitas
                                    </th>
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-right">
                                        Waktu
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container-low">
                                {products.map((product) => (
                                    <tr className="hover:bg-surface-container-low/20 transition-colors" key={product.id}>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                                                    <span
                                                        className="material-symbols-outlined text-on-tertiary-container"
                                                        data-icon="eco"
                                                    >
                                                        eco
                                                    </span>
                                                </div>
                                                <span className="font-bold text-xl text-on-surface">
                                                    {product.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-lg text-on-surface-variant">
                                            Northside Market
                                        </td>
                                        <td className="px-8 py-6 text-lg text-on-surface text-center font-bold">
                                            2
                                        </td>
                                        <td className="px-8 py-6 text-lg text-on-surface-variant text-right">
                                            14:22 PM
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold font-headline text-on-surface">
                            Status Stok
                        </h2>
                        <span
                            className="material-symbols-outlined text-primary cursor-pointer"
                            data-icon="info"
                        >
                            info
                        </span>
                    </div>
                    <div className="space-y-6">

                        <div className="bg-surface-container-low p-6 rounded-xl border-l-8 border-primary group hover:bg-surface-container-high transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xl font-bold text-on-surface">
                                    Northside Market
                                </h4>
                                <span className="text-primary font-bold">Kapasitas 88%</span>
                            </div>
                            <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-primary h-full rounded-full"
                                    style={{ width: "88%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-between text-sm font-medium text-on-surface-variant">
                                <span>2.400 item</span>
                                <span className="text-primary">Optimal</span>
                            </div>
                        </div>

                        <div className="bg-surface-container-low p-6 rounded-xl border-l-8 border-tertiary-container group hover:bg-surface-container-high transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xl font-bold text-on-surface">
                                    Downtown Deli
                                </h4>
                                <span className="text-tertiary font-bold">Kapasitas 42%</span>
                            </div>
                            <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-tertiary h-full rounded-full"
                                    style={{ width: "42%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-between text-sm font-medium text-on-surface-variant">
                                <span>980 item</span>
                                <span className="text-tertiary">Ruang Tersedia</span>
                            </div>
                        </div>

                        <div className="bg-surface-container-low p-6 rounded-xl border-l-8 border-error group hover:bg-surface-container-high transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xl font-bold text-on-surface">
                                    East End Grocer
                                </h4>
                                <span className="text-error font-bold">Kapasitas 12%</span>
                            </div>
                            <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-error h-full rounded-full"
                                    style={{ width: "12%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-between text-sm font-medium text-on-surface-variant">
                                <span>150 item</span>
                                <span className="text-error font-extrabold">Segera Isi Ulang</span>
                            </div>
                        </div>

                        <button className="w-full py-6 rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 text-on-surface-variant hover:border-primary hover:text-primary transition-all group">
                            <span
                                className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform"
                                data-icon="add_circle"
                            >
                                add_circle
                            </span>
                            <span className="font-bold text-lg">Tambah Lokasi Baru</span>
                        </button>
                    </div>
                </section>
            </div>

            <div className="md:hidden fixed bottom-8 right-8 z-50">
                <button className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
                    <span className="material-symbols-outlined text-3xl" data-icon="menu">
                        menu
                    </span>
                </button>
            </div>
        </>
    )
}