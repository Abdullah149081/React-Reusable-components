import { Outlet, ScrollRestoration } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="min-h-[calc(100vh-550px)]">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default MainLayout;
