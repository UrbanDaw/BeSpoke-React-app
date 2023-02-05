export default function NavBar() {
  return (
    <nav className="navigation-bar">
      <a href="/" className="site_title">
        <img
          src={require("../images/navbar/BeSpoke_logo.png")}
          className="nav_logo"
          alt="BeSpoke logo"
        ></img>
      </a>
      <ul>
        <li className="nav_item">
          <a href="/">Home</a>
        </li>
        <li className="nav_item">
          <a href="/">O nas</a>
        </li>
        <li className="nav_item">
          <a href="/">Jak pracujemy</a>
        </li>
        <li className="nav_item">
          <a href="/">Portfolio</a>
        </li>
        <li className="nav_item">
          <a href="/">Kontakt</a>
        </li>
        <li className="nav_item">
          <a href="/">
            <img
              src={require("../images/navbar/facebook.png")}
              alt="Facebook logo"
            ></img>
          </a>
        </li>
        <li className="nav_item">
          <a href="/">
            <img
              src={require("../images/navbar/instagram.png")}
              alt="Instagram logo"
            ></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}
