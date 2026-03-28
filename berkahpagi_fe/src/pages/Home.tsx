export default function Home() {
    return (
        <>
            {/* TopNavBar Implementation */}

            {/* Dashboard Header */}
            <section className="mb-12">
                <h1 className="text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-2">
                    Welcome back, Arthur
                </h1>
                <p className="text-xl text-on-surface-variant font-medium">
                    Here is what's happening across your locations today.
                </p>
            </section>
            {/* Summary Bento Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {/* Total Products */}
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
                            +4 this week
                        </span>
                    </div>
                    <p className="text-on-surface-variant font-medium text-lg mb-1">
                        Total Products
                    </p>
                    <h3 className="text-4xl font-extrabold font-headline text-on-surface">
                        1,284
                    </h3>
                </div>
                {/* Total Stock */}
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
                        Total Stock
                    </p>
                    <h3 className="text-4xl font-extrabold font-headline text-on-surface">
                        8,420
                    </h3>
                </div>
                {/* Sales Today */}
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
                            Busy
                        </span>
                    </div>
                    <p className="text-on-surface-variant font-medium text-lg mb-1">
                        Total Sales Today
                    </p>
                    <h3 className="text-4xl font-extrabold font-headline text-on-surface">
                        142
                    </h3>
                </div>
                {/* Total Revenue */}
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
                            Total Revenue
                        </p>
                        <h3 className="text-4xl font-extrabold font-headline text-white">
                            $4,821.50
                        </h3>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Recent Sales Table Section */}
                <section className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold font-headline text-on-surface">
                            Recent Sales
                        </h2>
                        <button className="text-primary font-bold text-lg hover:underline underline-offset-4 decoration-2">
                            View All Ledger
                        </button>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(30,28,3,0.03)]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-low/50">
                                    <th className="px-8 py-6 text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                                        Product
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
                {/* Stock per Location Cards */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold font-headline text-on-surface">
                            Stock Levels
                        </h2>
                        <span
                            className="material-symbols-outlined text-primary cursor-pointer"
                            data-icon="info"
                        >
                            info
                        </span>
                    </div>
                    <div className="space-y-6">
                        {/* Northside Market */}
                        <div className="bg-surface-container-low p-6 rounded-xl border-l-8 border-primary group hover:bg-surface-container-high transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xl font-bold text-on-surface">
                                    Northside Market
                                </h4>
                                <span className="text-primary font-bold">88% Capacity</span>
                            </div>
                            <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-primary h-full rounded-full"
                                    style={{ width: "88%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-between text-sm font-medium text-on-surface-variant">
                                <span>2,400 items</span>
                                <span className="text-primary">Optimized</span>
                            </div>
                        </div>
                        {/* Downtown Deli */}
                        <div className="bg-surface-container-low p-6 rounded-xl border-l-8 border-tertiary-container group hover:bg-surface-container-high transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xl font-bold text-on-surface">
                                    Downtown Deli
                                </h4>
                                <span className="text-tertiary font-bold">42% Capacity</span>
                            </div>
                            <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-tertiary h-full rounded-full"
                                    style={{ width: "42%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-between text-sm font-medium text-on-surface-variant">
                                <span>980 items</span>
                                <span className="text-tertiary">Space Available</span>
                            </div>
                        </div>
                        {/* East End Grocer */}
                        <div className="bg-surface-container-low p-6 rounded-xl border-l-8 border-error group hover:bg-surface-container-high transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xl font-bold text-on-surface">
                                    East End Grocer
                                </h4>
                                <span className="text-error font-bold">12% Capacity</span>
                            </div>
                            <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-error h-full rounded-full"
                                    style={{ width: "12%" }}
                                />
                            </div>
                            <div className="mt-4 flex justify-between text-sm font-medium text-on-surface-variant">
                                <span>150 items</span>
                                <span className="text-error font-extrabold">Restock Urgent</span>
                            </div>
                        </div>
                        {/* Add New Location CTA */}
                        <button className="w-full py-6 rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 text-on-surface-variant hover:border-primary hover:text-primary transition-all group">
                            <span
                                className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform"
                                data-icon="add_circle"
                            >
                                add_circle
                            </span>
                            <span className="font-bold text-lg">Add New Location</span>
                        </button>
                    </div>
                </section>
            </div>

            {/* Side Navigation Trigger (Hidden on Desktop, revealed via FAB on Mobile) */}
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
