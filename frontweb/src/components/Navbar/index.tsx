import { NavLink } from "react-router-dom";
import "./styles.css";
import { getTokenData, isAuthenticated } from "utils/auth";
import { useContext, useEffect } from "react";
import history from "utils/history";
import { removeAuthData } from "utils/storage";
import { AuthContext } from "AuthContext";

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace("/");
  };

  return (
    <nav className="navbar bg-primary navbar-config">
      <div>
        <NavLink to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </NavLink>
      </div>

      <div>
        {authContextData?.authenticated && (
          <button>
            <a href="#logout" onClick={handleClick}>
              SAIR
            </a>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
