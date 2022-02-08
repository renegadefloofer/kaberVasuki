import { Link } from 'react-router-dom';

import styles from './MainNavBar.module.css';

const MainNavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>kaber-vasuki.com</div>

      <nav>
        <ul>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/vault">Vault</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavBar;
