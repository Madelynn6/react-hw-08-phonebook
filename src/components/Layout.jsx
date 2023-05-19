import { Outlet } from 'react-router-dom';
import { AppMenu } from './AppMenu/AppMenu';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
