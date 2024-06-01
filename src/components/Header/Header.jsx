import "./Header.scss";
function Header(){
    return (
    <header className="header">
       <section className="header__logo-title-container"></section>
       <section className="header__search-avatar-container">
           <input className="header__search" placeholder="Search"></input>
           <div className="header__avatar"></div>
       </section>
       <button className="header__upload-button">UPLOAD</button>
    </header>
    )
}
export default Header;