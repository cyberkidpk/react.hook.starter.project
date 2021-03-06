import React, { useEffect } from 'react';
import { notification } from 'antd';
import { useAppState } from '../app-contexts/EDF.App.Provider';
import { APP_MESSENGING_CONST } from '../app-constants';

const MessengingToaster = (type, message, description) => {
  notification[type]({
    message: `${message}`,
    description: `${description}`,
  });
};

const MTControllerComponent = () => {
  const [state] = useAppState();
  const { CONFIG: { MESSANGING_KEY } } = APP_MESSENGING_CONST;
  const { [MESSANGING_KEY]: { message: { type, message, description } } } = state;
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (type && MessengingToaster(type, message, description));
    console.log(state);
  }, [state]);
  return (
    <>
    </>
  );
};
export default MTControllerComponent;
