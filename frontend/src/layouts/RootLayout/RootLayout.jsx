import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <>
            <header>Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    );
};

export default RootLayout;