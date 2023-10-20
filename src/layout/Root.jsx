import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>
        <h1>Digimon Wiki</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
