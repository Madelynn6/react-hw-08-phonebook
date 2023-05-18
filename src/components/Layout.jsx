import { Outlet } from 'react-router-dom';
import { AppMenu } from './AppMenu/AppMenu';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className="box">
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
