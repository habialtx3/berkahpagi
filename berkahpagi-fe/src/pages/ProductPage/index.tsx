export default function ProductPage() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <h1 className="text-6xl font-extrabold editorial-headline text-on-surface mb-4">
                        Produk
                    </h1>
                    <p className="text-xl text-on-surface-variant font-medium leading-relaxed">
                        Kelola pilihan hasil panen artisan Anda. Perbarui status
                        inventaris, harga, dan pamerkan penawaran organik terbaik Anda.
                    </p>
                </div>
            </div>
            {/* Filter Chips */}
            {/* Product Grid - Asymmetric Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* Product Card 1 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,28,3,0.1)]">
                    <div className="relative h-72 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="tangkapan jarak dekat madu mentah keemasan di dalam stoples kaca dengan sendok madu kayu dan bunga liar di latar belakang"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeuADR0mat9IMayLkTomYsOBQYpeG8vxRdP_R-z0nRVZg1fraZZv88vh5IM0fLAPJzm4xNifY-Deowu3DrLLgZu3C_hA5wICZnIOyejNVxd3WYpf11TrJWsM9_MQ293722itKxKJn3FM_m4Wq-3ppNPB1NwY4IBD3Vz4WshKAoCOpJVs8RAveQmk0yIVNEdwLJ9FESrN0v_CsA9a5x_xNLhi2onZK7UMCaXKO8FGqD5S9EpixO0ncdO8Yd83SCeFCd8imOiSxRDYve"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Aktif
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold editorial-headline group-hover:text-primary transition-colors">
                                Wildflower Honey
                            </h3>
                            <span className="text-2xl font-black text-primary">$18.50</span>
                        </div>
                        <p className="text-on-surface-variant mb-6 line-clamp-2">
                            Madu murni yang tidak dipasteurisasi, dipanen dari flora asli lembah.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">Tersedia 42</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Product Card 2 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,28,3,0.1)]">
                    <div className="relative h-72 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="apel organik merah cerah di keranjang anyaman pedesaan di atas meja kayu lapuk dengan pencahayaan alami yang lembut"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBbt-6f_3fIPQ9JGELN5CfXL-bqCNaFSHacj3PApOmE3ebXDWIdYu0XxscewzzSJru-yGa5maqVqStvthBA4T_LX_O_qQ3Qo3jeYjwGyLlRUevzCoUNQxQrlSIabMIgXVfDBdioNL3PCzxQeshlzcpOZbnFAUY2wE2onxYzVHODsrpojGMwHUI9AmjUj5kub9wsjfaQ3vE_hm3eahmOFbRQqPSacusCUUGjvN68Qf6Amdj-HXMhmdr7xP6eFXqOghrNI7R8czIhar"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-error-container text-on-error-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Habis
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold editorial-headline group-hover:text-primary transition-colors">
                                Heirloom Apples
                            </h3>
                            <span className="text-2xl font-black text-primary">$4.20/lb</span>
                        </div>
                        <p className="text-on-surface-variant mb-6 line-clamp-2">
                            Favorit musiman yang renyah dari kebun utara kami. Bebas hama secara alami.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2 text-error">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    error
                                </span>
                                <span className="text-sm font-bold">Segera diisi ulang</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Product Card 3 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,28,3,0.1)]">
                    <div className="relative h-72 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="tampilan atas wortel organik yang baru dipetik dengan daun hijau subur berserakan di permukaan batu bernuansa warna tanah"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjd3oVuc-nMn87r3n0VQiAYh8ECF6N2kqejLCrR7L3YM58bBwsaQbLp8OnalBRxA8LyhQuTsl6VqS1kZL4vIIxw8_vv_8PFIz-YhyQuuWUi84LjMc8wZQQC7wENQGXItODyDsOqaMr17TjChgysJOamFxKLtA-KxdUwjNWwQsWCkvHGwVnSDRwUvH7_xP-u8Cnt63ia2y5wlA6t-BKE8npXjQCG8tYuN1ZvnnHpD7j8tAjc6lh_kzjz_hQJAk9VW_mXiY4bUTOkEcW"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Aktif
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold editorial-headline group-hover:text-primary transition-colors">
                                Rainbow Carrots
                            </h3>
                            <span className="text-2xl font-black text-primary">$3.50</span>
                        </div>
                        <p className="text-on-surface-variant mb-6 line-clamp-2">
                            Akar yang manis dan renyah dalam nuansa warna ungu, kuning, dan oranye tua.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">Sisa 12 ikat</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Product Card 4 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,28,3,0.1)]">
                    <div className="relative h-72 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="tiga telur segar peternakan organik berwarna cokelat di mangkuk keramik kecil di atas serbet linen dengan cahaya siang yang hangat"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQPGfg3V-GAOPNstqnd8aOXmoJ8E5SPxamajrrLzgJJLtsAcQC0hifFPm4IeNN0AKmjeVIyrquA1EYjKRUSuScN8L9gov5yfvBdKuU5jk2SAodqZSW85DK6edPrJITULoVovB7OBmhp7-SsHK-oLW9TfGsAiHVbAqNeT1oOjFZ6mdfBZZxfZKmGFdOqjpudelugXagQ00QYiIAagsQZ7Ww1CJNDVRBjJ-MGGYQJnsdU1EUESEk_2mhnyl2HfnjfS7uKzwziAbYABkg"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Aktif
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold editorial-headline group-hover:text-primary transition-colors">
                                Pastured Eggs
                            </h3>
                            <span className="text-2xl font-black text-primary">$9.00/dz</span>
                        </div>
                        <p className="text-on-surface-variant mb-6 line-clamp-2">
                            Kuning telur berwarna oranye tua yang kaya rasa dari ayam petelur bebas kami.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">Sisa 8 karton</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}