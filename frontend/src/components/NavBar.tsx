import { NavLink } from "react-router-dom"


export default function NavBar() {
    return (
        <nav>
            <NavLink to="/">Startseite</NavLink>
            <NavLink to="/tasks">Task-Manager</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    )
}