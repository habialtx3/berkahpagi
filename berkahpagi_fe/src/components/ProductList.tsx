export default function ProductList(items: any[]) {
    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold font-headline text-on-surface">
                    Recent Sales
                </h2>
                <button className="text-primary font-bold text-lg hover:underline underline-offset-4 decoration-2">
                    View All Ledger
                </button>
            </div>
            {products.map(product => (
                <section className="lg:col-span-2">

                    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(30,28,3,0.03)]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-low/50">
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                                        {product.name}
                                    </th>
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                                        Location
                                    </th>
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-center">
                                        Qty
                                    </th>
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-right">
                                        Time
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container-low">
                                <tr className="hover:bg-surface-container-low/20 transition-colors">
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
                                                Heirloom Honey
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
                                <tr className="hover:bg-surface-container-low/20 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                                                <span
                                                    className="material-symbols-outlined text-on-tertiary-container"
                                                    data-icon="egg"
                                                >
                                                    egg
                                                </span>
                                            </div>
                                            <span className="font-bold text-xl text-on-surface">
                                                Pasture Eggs
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface-variant">
                                        Downtown Deli
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface text-center font-bold">
                                        1
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface-variant text-right">
                                        13:45 PM
                                    </td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/20 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                                                <span
                                                    className="material-symbols-outlined text-on-tertiary-container"
                                                    data-icon="potted_plant"
                                                >
                                                    potted_plant
                                                </span>
                                            </div>
                                            <span className="font-bold text-xl text-on-surface">
                                                Organic Kale
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface-variant">
                                        East End Grocer
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface text-center font-bold">
                                        5
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface-variant text-right">
                                        13:10 PM
                                    </td>
                                </tr>
                                <tr className="hover:bg-surface-container-low/20 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                                                <span
                                                    className="material-symbols-outlined text-on-tertiary-container"
                                                    data-icon="water_drop"
                                                >
                                                    water_drop
                                                </span>
                                            </div>
                                            <span className="font-bold text-xl text-on-surface">
                                                Cold Press Oil
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface-variant">
                                        Downtown Deli
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface text-center font-bold">
                                        3
                                    </td>
                                    <td className="px-8 py-6 text-lg text-on-surface-variant text-right">
                                        12:55 PM
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            ))}
        </>
    )
}
