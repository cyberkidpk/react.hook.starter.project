/* eslint-disable react/require-default-props */
import React, { createContext, useReducer, useContext } from 'react';
import { object, func } from 'prop-types';

const Context = createContext();

export const EDFStateProvider = ({ store, initialState = {}, children }) => {
  const value = useReducer(store, initialState);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

EDFStateProvider.propTypes = {
  store: func,
  // eslint-disable-next-line react/forbid-prop-types
  initialState: object,
};

export const useAppState = () => {
  return useContext(Context);
};
