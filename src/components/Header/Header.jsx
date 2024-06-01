import "./Header.scss";
import avata from "../../assets/images/Mohan-muruge.jpg";
function Header(){
    return (
    <header className="header">
       <section className="header__logo-title-container">
           <span>BrainFlix</span>
       </section>
       <section className="header__search-avatar-container">
           <input className="header__search" placeholder="Search"></input>
           <img className="header__avatar" src={avata} alt="" />
       </section>
    </header>
    )
}
export default Header;