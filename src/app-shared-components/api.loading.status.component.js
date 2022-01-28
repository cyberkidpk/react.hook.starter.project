import React, { useEffect } from 'react';
import { MESSENGING_HANDLERS } from '../app-actions/handlers/messenging.action.handelers';
import { APP_MESSENGING_CONST } from '../app-constants';
import { useAppState } from '../app-contexts/EDF.App.Provider';
import useCURDOps from '../app-hooks/app.curd.ops';

const APILoadingStatusComponent = () => {
  // const [respData, setRespData] = useState([]);
  // const [errorState, setErrorState] = useState('');
  // const [spinnerState, setSpinnerState] = useState('');
  const { CONFIG: { MESSANGING_KEY } } = APP_MESSENGING_CONST;
  const [state, dispatch] = useAppState();
  var { [MESSANGING_KEY]: { reqPayMod } } = state;
  reqPayMod = !reqPayMod ? {} : reqPayMod.getGETPayload();
  const { resp, error, spinner } = useCURDOps(reqPayMod);
  useEffect(() => {
    MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'success', message: 'RESPONSE DATA', description: 'DATA RECEIVED' } });
  }, [resp]);
  useEffect(() => {
    MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'warn', message: 'RESPONSE DATA', description: 'ERROR RECEIVED FROM THE SERVER' } });
  }, [error]);
  useEffect(() => {
    MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'info', message: 'DATA STATUS', description: 'SPINNER IS RUNNING' } });
  }, [spinner]);

  return (
    <>
    </>
  );
};
export default APILoadingStatusComponent;
