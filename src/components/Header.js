import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__logo" aria-label="Перейти на главную"></Link>
    </header>
  );
}

export default Header;
