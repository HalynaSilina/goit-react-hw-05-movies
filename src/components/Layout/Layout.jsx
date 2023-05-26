import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.navbar}>
          <li>
            <NavLink to="/" className={css.navlink}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.navlink}>Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
