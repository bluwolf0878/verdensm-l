import { Nav } from "../nav/nav"
import style from "./header.module.scss";
export const Header = () => {
    return(
        <header className={style}>
            <img src="src/assets/img/Logo.png" alt="" />
            <Nav/>
        </header>
    )
}