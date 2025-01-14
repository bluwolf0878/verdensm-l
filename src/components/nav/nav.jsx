import style from "./nav.module.scss";
export const Nav = () => {
    return(
        <nav className={style}>
            <ul>
                <li>VERDENSMÅLENE</li>
                <li>UNDERVISNING</li>
                <li>BYG DIT EGET MÅL</li>
                <li>FAQ</li>
                <li>KONTAKT OS</li>
            </ul>
        </nav>
    )
}
