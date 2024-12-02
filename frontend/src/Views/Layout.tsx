import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
export default function Layout() {

    return (
        <>
            <header>
                <h1>The Taskmanager App</h1>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Made by Arian-AJ
            </footer>


        </>
    )


}