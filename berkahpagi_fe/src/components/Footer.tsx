export default function Footer() {
    return (
        <>
            <footer className="mt-12 px-16 py-12 border-t border-outline-variant/10 bg-surface-container-low/30">
                <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-primary font-headline">
                            The Organic Curator
                        </span>
                        <span className="text-on-surface-variant/40">|</span>
                        <span className="text-on-surface-variant font-medium">
                            © 2024 Management Suite
                        </span>
                    </div>
                    <div className="flex gap-12">
                        <a
                            className="text-on-surface-variant font-bold hover:text-primary transition-colors"
                            href="#"
                        >
                            Help Center
                        </a>
                        <a
                            className="text-on-surface-variant font-bold hover:text-primary transition-colors"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                        <a
                            className="text-on-surface-variant font-bold hover:text-primary transition-colors"
                            href="#"
                        >
                            Support
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
