import "./Header.scss";
function Header(){
    return (
    <header className="header">
       <section className="header__logo-title-container">
           <span>BrainFlix</span>
       </section>
       <section className="header__search-avatar-container">
           <input className="header__search" placeholder="Search"></input>
           <div className="header__avatar"></div>
       </section>
    </header>
    )
}
export default Header;