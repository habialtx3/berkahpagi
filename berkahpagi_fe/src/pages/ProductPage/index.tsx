
export default function ProductPage() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <h1 className="text-6xl font-extrabold editorial-headline text-on-surface mb-4">
                        Products
                    </h1>
                    <p className="text-xl text-on-surface-variant font-medium leading-relaxed">
                        Manage your curated selection of artisan harvests. Update inventory
                        status, pricing, and showcase your finest organic offerings.
                    </p>
                </div>
            </div>
            {/* Filter Chips */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-2 no-scrollbar">
                <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold text-sm">
                    All Produce
                </button>
                <button className="bg-surface-container-low text-on-surface-variant px-6 py-3 rounded-full font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Fruits
                </button>
                <button className="bg-surface-container-low text-on-surface-variant px-6 py-3 rounded-full font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Vegetables
                </button>
                <button className="bg-surface-container-low text-on-surface-variant px-6 py-3 rounded-full font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Artisan Honey
                </button>
                <button className="bg-surface-container-low text-on-surface-variant px-6 py-3 rounded-full font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Dairy &amp; Eggs
                </button>
            </div>
            {/* Product Grid - Asymmetric Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* Product Card 1 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,28,3,0.1)]">
                    <div className="relative h-72 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="close up of golden raw honey in a glass jar with a wooden honey dipper and wildflowers in the background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeuADR0mat9IMayLkTomYsOBQYpeG8vxRdP_R-z0nRVZg1fraZZv88vh5IM0fLAPJzm4xNifY-Deowu3DrLLgZu3C_hA5wICZnIOyejNVxd3WYpf11TrJWsM9_MQ293722itKxKJn3FM_m4Wq-3ppNPB1NwY4IBD3Vz4WshKAoCOpJVs8RAveQmk0yIVNEdwLJ9FESrN0v_CsA9a5x_xNLhi2onZK7UMCaXKO8FGqD5S9EpixO0ncdO8Yd83SCeFCd8imOiSxRDYve"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Active
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
                            Pure, unpasteurized honey harvested from the valley's native flora.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">42 in stock</span>
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
                            data-alt="vibrant red organic apples in a rustic woven basket on a weathered wooden table with soft natural lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBbt-6f_3fIPQ9JGELN5CfXL-bqCNaFSHacj3PApOmE3ebXDWIdYu0XxscewzzSJru-yGa5maqVqStvthBA4T_LX_O_qQ3Qo3jeYjwGyLlRUevzCoUNQxQrlSIabMIgXVfDBdioNL3PCzxQeshlzcpOZbnFAUY2wE2onxYzVHODsrpojGMwHUI9AmjUj5kub9wsjfaQ3vE_hm3eahmOFbRQqPSacusCUUGjvN68Qf6Amdj-HXMhmdr7xP6eFXqOghrNI7R8czIhar"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-error-container text-on-error-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Out of Stock
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
                            Crisp, seasonal favorites from our north orchard. Naturally pest-free.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2 text-error">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    error
                                </span>
                                <span className="text-sm font-bold">Restocking soon</span>
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
                            data-alt="overhead view of freshly picked organic carrots with lush green tops scattered on a stone surface with earthy tones"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjd3oVuc-nMn87r3n0VQiAYh8ECF6N2kqejLCrR7L3YM58bBwsaQbLp8OnalBRxA8LyhQuTsl6VqS1kZL4vIIxw8_vv_8PFIz-YhyQuuWUi84LjMc8wZQQC7wENQGXItODyDsOqaMr17TjChgysJOamFxKLtA-KxdUwjNWwQsWCkvHGwVnSDRwUvH7_xP-u8Cnt63ia2y5wlA6t-BKE8npXjQCG8tYuN1ZvnnHpD7j8tAjc6lh_kzjz_hQJAk9VW_mXiY4bUTOkEcW"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Active
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
                            Sweet, crunchy roots in shades of purple, yellow, and deep orange.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">12 bundles left</span>
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
                            data-alt="three brown organic farm fresh eggs resting in a small ceramic bowl on a linen napkin with warm daylight"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQPGfg3V-GAOPNstqnd8aOXmoJ8E5SPxamajrrLzgJJLtsAcQC0hifFPm4IeNN0AKmjeVIyrquA1EYjKRUSuScN8L9gov5yfvBdKuU5jk2SAodqZSW85DK6edPrJITULoVovB7OBmhp7-SsHK-oLW9TfGsAiHVbAqNeT1oOjFZ6mdfBZZxfZKmGFdOqjpudelugXagQ00QYiIAagsQZ7Ww1CJNDVRBjJ-MGGYQJnsdU1EUESEk_2mhnyl2HfnjfS7uKzwziAbYABkg"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Active
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
                            Rich, deep orange yolks from our free-roaming heritage chickens.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">8 cartons left</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Card 5 (Visual Variation - Large Promotion) */}
                <div className="md:col-span-2 bg-[#FBE8CE] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-10">
                        <span className="material-symbols-outlined text-[15rem]">
                            potted_plant
                        </span>
                    </div>
                    <div className="flex-1 z-10">
                        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                            Curator's Choice
                        </span>
                        <h2 className="text-4xl font-extrabold editorial-headline mb-4">
                            Summer Berry Harvest
                        </h2>
                        <p className="text-lg text-on-surface-variant font-medium mb-8">
                            Increase visibility for seasonal items. Berries are currently at peak
                            ripeness and trending with local consignors.
                        </p>
                        <button className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                            Manage Promotion
                        </button>
                    </div>
                    <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow-2xl z-10">
                        <img
                            className="w-full h-full object-cover"
                            data-alt="variety of ripe berries including raspberries blueberries and blackberries in a bowl with water droplets and morning sunlight"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANTGZ8moWX9oDpecO2_JEOKfLRGRgL-zF4nM41zHW94QUjtynL2u2CfrDeKXOt5wlm-5QGY5v_ccTBDywtlBmEZTR5_hFTutjgH2-4FQZTWDiOy1-W9eLosnXXGEQmn4KRETuPI2EfBucsEd0dLkA3D-_HdRVDm7D88GYmwJ8O9mWFPGIL1HZXRHPBeZ1ohEkiT9wkK_-68Sl2AVG-KdB768lL-YSS26Qic8bh9SPC5oPa2_J0nOjAsrA7zUFFMEeWTFmUjF_qUGnS"
                        />
                    </div>
                </div>
                {/* Card 6 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,28,3,0.1)]">
                    <div className="relative h-72 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="artisanal block of farmhouse cheddar cheese with a small bunch of grapes on a slate board with moody lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDphMpIsjPOGu00ySp15zIZHvJup6Hq5CvplNHG_fS_AVJuCDdlYJcVs7hT8hA4jbURw0m56x2hIx0PZavL90xlpN0zEtHb_-7ZjQ3vZyykR2-inP63I_dcUmYEhDMY2n3I35C0_fHD1CrVF9lumEpIOd2g5LiDuqzW0A7BBJffMBbeaHYnIVX6ZzUzvm7uJSt54gTzPIAg_0_nuxiUmTnMx4QUyKC79qi0LN75ZrxOA8789ns8u2Yrm8lVSbCP1jYosceQAMmGKAxQ"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Active
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold editorial-headline group-hover:text-primary transition-colors">
                                Aged Cheddar
                            </h3>
                            <span className="text-2xl font-black text-primary">$14.00</span>
                        </div>
                        <p className="text-on-surface-variant mb-6 line-clamp-2">
                            Sharply flavored, 18-month aged cheese from our grass-fed dairy
                            partner.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">15 blocks left</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Card 7 */}
                <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(30,28,3,0.1)]">
                    <div className="relative h-72 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="close up of ripe strawberries with seeds and green stems on a neutral background with bright crisp lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBypr03JL7SBBlN_DjNKlP45p0FsD_r6ZWduyuo9owYr6zF1j95hOUaXymWcp7y6Z6rrITYsnkusJa32sDGNonZaHjmXj_Gd3f731A5mjpYfVOAxujwnM19rC7a5zhXweKOvzGLi_Hc81TFOTJDGIA7RuSBINFGSRUwUN1ii3pOGWkBL64_CGxDbU7_zWHsz8ZlJdQHfLi_lZmVbTHQCufo-6qfTKvbWzzXuaecvbrcvWeBfzhn8FyU4fsd-ri4mdaZoyIq5sNUf0Aq"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                Active
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold editorial-headline group-hover:text-primary transition-colors">
                                Organic Berries
                            </h3>
                            <span className="text-2xl font-black text-primary">$6.50</span>
                        </div>
                        <p className="text-on-surface-variant mb-6 line-clamp-2">
                            Hand-picked at sunrise. Sweet, juicy, and 100% pesticide free.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    inventory_2
                                </span>
                                <span className="text-sm font-bold">34 units left</span>
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
