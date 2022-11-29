import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/Logo.svg"
import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header () {
    return (
        <HeaderContainer>
            <img src={logoIgnite} />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="History">
                    <Scroll size={24} />v
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}