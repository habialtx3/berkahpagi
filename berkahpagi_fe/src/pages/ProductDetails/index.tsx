
export default function ProductDetails() {
    return (
        <>

            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-stone-500 mb-12">
                <span className="font-medium">Products</span>
                <span className="material-symbols-outlined text-base">chevron_right</span>
                <span className="font-bold text-primary">Honeycrisp Apples</span>
            </nav>
            {/* Product Hero Section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
                {/* Hero Image: Glassmorphism Card */}
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(30,28,3,0.06)]">
                    <img
                        alt="Honeycrisp Apples"
                        className="w-full h-[500px] object-cover"
                        data-alt="Close-up of fresh, vibrant red and yellow Honeycrisp apples in a rustic wooden crate with soft morning sunlight filtering through."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjEdgOs_O4zgtmSSU-OYpTBFvLf3GbPW1Z1T0yzipFi6CXWglAr6T8zma8cCqNZFAgwODS2O2eAD1dtST8T51CVb8AsEjSOqSyMW1axaHJcJVWoDhopeVPoU2GblFEiSg14zUYf6-JrJ1dcIWFTcdCzOqrnA1CADWua1q3rjJLSz_YQ9NvpbDlLhC9ntmI9wJZwizzGdYafrmnQGdDhLIz4xtDSyPOeoygfjAC3VNOONgZGPg3BenimZGD4DuBIjEALpbgkZ-_fBPd"
                    />
                </div>
                {/* Header Info */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="mb-8">
                        <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold mb-4">
                            Premium Selection
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-4">
                            Honeycrisp Apples
                        </h1>
                        <p className="text-3xl font-medium text-primary">$2.00 / lb</p>
                    </div>
                    <div className="space-y-6">
                        <p className="text-xl text-on-surface-variant leading-relaxed">
                            Crisp, juicy, and perfectly sweet. Harvested daily from{" "}
                            <span className="font-bold text-on-surface">
                                Heritage Orchard, Block A
                            </span>
                            . These apples are hand-selected for their signature crunch and
                            balanced acidity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="flex-1 primary-gradient !text-on-primary font-bold py-5 px-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform active:scale-95">
                                Edit Product
                            </button>
                            <button className="flex-1 !bg-secondary/60 !text-on-surface font-bold py-5 px-8 rounded-xl hover:scale-[1.02] transition-transform active:scale-95">
                                Manage Stock
                            </button>
                        </div>
                        <button className="w-full !bg-surface-container-low text-on-surface font-semibold py-4 px-8 rounded-xl border-2 border-transparent hover:border-outline-variant transition-all text-center">
                            View Sales History
                        </button>
                    </div>
                </div>
            </section>
            {/* Bento Grid for Details */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stock Information Card */}
                <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-on-surface">
                            Stock Information
                        </h2>
                        <div className="flex flex-col items-end">
                            <span className="text-4xl font-extrabold text-primary">
                                1,248 lbs
                            </span>
                            <span className="text-sm font-medium text-stone-500">
                                Total Availability
                            </span>
                        </div>
                    </div>
                    {/* Custom Progress Bar Components */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between mb-3 text-lg font-medium">
                                <span>Main Cold Storage</span>
                                <span className="text-on-surface">450 lbs</span>
                            </div>
                            <div className="h-4 bg-primary-fixed rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: "36%" }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-3 text-lg font-medium">
                                <span>Market Stall</span>
                                <span className="text-on-surface">18 lbs</span>
                            </div>
                            <div className="h-4 bg-primary-fixed rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: "5%" }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-3 text-lg font-medium">
                                <span>Processing Unit B</span>
                                <span className="text-on-surface">780 lbs</span>
                            </div>
                            <div className="h-4 bg-primary-fixed rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: "62%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Vendor Info Card */}
                <div className="bg-surface-container-highest/40 backdrop-blur-xl rounded-xl p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-on-surface mb-8">Vendor Info</h2>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-md">
                                <img
                                    alt="Vendor Avatar"
                                    className="w-full h-full object-cover"
                                    data-alt="Portrait of an elderly artisan farmer with a warm smile, wearing a straw hat and denim overalls in a sunlit orchard."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-7ahOTmO8ARBRFh8dg8mxmrRw8AZBnAntZcycAZpqRfnwfRsfHan2Lhdc0h1g9yzpLzykk1_biHpEvMGYZGSP17dGIlJxtFYWyLUbwlpGsATFhcJKnFHH1LDZOZZJQ6YkZml9BwSW7jfleeQSmlMWRsPrTiER5Ht2kuUmzH8-P8a89idxc2AwanM0RyVCPn9YJBYpbKROs3NkLPFJPspiBOmsa2BCLrmWEmrqKQ-N3hju74A67Kt8tpmQ8wf1lfnsjxzOOv9wn0dR"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-2">
                                Heritage Orchard
                            </h3>
                            <p className="text-on-surface-variant mb-6 italic">
                                Certified Organic since 1984
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <a
                            className="flex items-center justify-center space-x-3 w-full bg-white/60 hover:bg-white transition-colors py-4 rounded-xl font-bold text-primary"
                            href="#"
                        >
                            <span className="material-symbols-outlined">person</span>
                            <span>View Profile</span>
                        </a>
                        <a
                            className="flex items-center justify-center space-x-3 w-full bg-white/60 hover:bg-white transition-colors py-4 rounded-xl font-bold text-primary"
                            href="#"
                        >
                            <span className="material-symbols-outlined">mail</span>
                            <span>Contact Vendor</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Additional Product Details (Editorial Style) */}
            <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-on-surface">
                        Nutritional Highlights
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-surface-container-lowest rounded-xl">
                            <p className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-1">
                                Calories
                            </p>
                            <p className="text-2xl font-extrabold text-on-surface">95 kcal</p>
                        </div>
                        <div className="p-6 bg-surface-container-lowest rounded-xl">
                            <p className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-1">
                                Fiber
                            </p>
                            <p className="text-2xl font-extrabold text-on-surface">4.4g</p>
                        </div>
                    </div>
                    <p className="text-lg text-on-surface-variant">
                        Rich in antioxidants and Vitamin C, our Honeycrisp apples are a
                        wholesome snack for all ages. Store in a cool, dark place to maintain
                        maximum crunch for up to 4 weeks.
                    </p>
                </div>
                <div className="bg-primary/5 rounded-xl p-8 border-2 border-primary/10">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined">inventory_2</span>
                        Logistics Note
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">
                                check_circle
                            </span>
                            <div>
                                <p className="font-bold text-on-surface">Next Harvest Cycle</p>
                                <p className="text-on-surface-variant">
                                    Tuesday, Oct 24th at 06:00 AM
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">
                                check_circle
                            </span>
                            <div>
                                <p className="font-bold text-on-surface">Storage Temperature</p>
                                <p className="text-on-surface-variant">
                                    Maintained at 34°F in Unit 01
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary mt-1">
                                check_circle
                            </span>
                            <div>
                                <p className="font-bold text-on-surface">Quality Control</p>
                                <p className="text-on-surface-variant">
                                    Checked and graded Grade A by Sam R.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>


        </>
    )
}
