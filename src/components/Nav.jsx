import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav-bar">
        <ul>
            <li>
                <NavLink to="/popular">
                    <h2>MOST POPULAR</h2>
                </NavLink>
            </li>
            <li>
                <NavLink to="/ratings">
                    <h2>HIGHEST RATING</h2>
                </NavLink>
            </li>
            <li>
                <NavLink to="/novels">
                    <h2>NOVELS</h2>
                </NavLink>
            </li>
            <li>
                <NavLink to="/short-stories">
                    <h2>SHORT STORIES</h2>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
