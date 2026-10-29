import {  NavLink } from "react-router";

function Navbar(){

    return <nav>
        <NavLink to="">Home</NavLink>
        <ul>
            <li>
                <NavLink to="/services">Service</NavLink>
            </li>

            <li>
                <NavLink to="/courses">Courses</NavLink>
            </li>

            <li>
                <ul>
                    <li>
                        <NavLink to="/hooks/ref">useRef</NavLink>
                    </li>

                    <li>
                        <NavLink to="/hooks/memo">useMemo</NavLink>
                    </li>

                    <li>
                        <NavLink to="/hooks/callback">useCallback</NavLink>
                    </li>

                    <li>
                        <NavLink to="/hooks/state">useState</NavLink>
                    </li>

                    <li>
                        <NavLink to="/hooks/effect">useEffect</NavLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

}


export default Navbar;