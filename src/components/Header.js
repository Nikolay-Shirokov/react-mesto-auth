import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({loggedIn}) {

  const { pathname } = useLocation();
  const [ linkProps, setLinkProps ] = useState({href: '', text: ''})

  useEffect(() => {
    if (pathname === '/sign-in') {
      setLinkProps({
        href: '/sign-up',
        text: 'Регистрация'
      })
    } else if (loggedIn) {
      setLinkProps({
        href: '/sign-in',
        text: 'Выйти'
      })
    } else {
      setLinkProps({
        href: '/sign-in',
        text: 'Войти'
      })
    }
  }, [pathname, loggedIn])

  return (
    <header className="header">
      <Link to="/" className="header__logo" aria-label="Перейти на главную"></Link>
      <div className="space"></div>
      <Link to={linkProps.href} className="header__link button">{linkProps.text}</Link>
    </header>
  );
}

export default Header;
