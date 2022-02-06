import styles from './Layout.module.css';
import MainNavBar from './MainNavBar';
const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <MainNavBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
