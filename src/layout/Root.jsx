import { NavLink, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>
        <h1>Digimon Wiki</h1>
        <NavLink to="/">Home</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
