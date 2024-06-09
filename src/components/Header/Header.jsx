import "./Header.scss";
import { useNavigate } from "react-router-dom";
function Header() {
    const nav=useNavigate();
    function handleClick(){
      nav("/upload");
    }
    return (
        <header className="header">
            <section className="header__logo"></section>
            <section className="header__search-avatar-container">
                <input className="header__search" placeholder="Search"></input>
                <span className="header__avatar header__avatar-mobile"></span>
            </section>
            <button className="header__upload-button"
              onClick={handleClick}
            >UPLOAD</button>
            <span className="header__avatar"></span>
        </header>
    )
}
export default Header;