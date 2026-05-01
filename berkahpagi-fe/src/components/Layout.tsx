import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <Navbar  />
            <main className=" pt-28 pb-8 px-8 md:px-16 max-w-full lg:mx-20 lg:my-10 font-headline">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
