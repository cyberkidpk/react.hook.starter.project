import React, { Suspense } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

const SplashARVRLayout = React.lazy(() => import('../app-layouts/Splash.AR.VR.Layout'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><SplashARVRLayout /></Suspense>} />
      <Route path="/product360" element={<Suspense fallback={<div>Loading...</div>}><SplashARVRLayout /></Suspense>} />
    </Routes>
  );
};

export default AppRoutes;
