/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { EDFStateProvider } from './app-contexts/EDF.App.Provider';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import AppRoutes from './app-core/App.Routes';
// eslint-disable-next-line import/no-named-as-default-member
import APILoadingStatusComponent from './app-shared-components/api.loading.status.component';
import MTControllerComponent from './app-shared-components/messenging.toaster.controller';
import { appStore } from './app-store';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <EDFStateProvider store={appStore.store} initialState={appStore.initialState}>
        <APILoadingStatusComponent />
        <MTControllerComponent>Just check</MTControllerComponent>
        <AppRoutes />
      </EDFStateProvider>
    </BrowserRouter>
  );
};

export default App;
