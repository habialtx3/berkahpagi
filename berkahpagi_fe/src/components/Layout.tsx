import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 px-8 md:px-16 max-w-[1920px] mx-auto font-headline">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
