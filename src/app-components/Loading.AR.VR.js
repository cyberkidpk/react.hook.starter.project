import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import LoadedClickMeButtonContainer from '../app-lib-components/loaded-click-me-button';
import { useAppState } from '../app-contexts/EDF.App.Provider';
import { MESSENGING_HANDLERS } from '../app-actions/handlers/messenging.action.handelers';
import RequestPayloadModel from '../app-models/request.payload';

const LoadingARVR = () => {
  const [state, dispatch] = useAppState();
  const requestPayloadModel = RequestPayloadModel();
  requestPayloadModel.url = '/posts';

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div>
      <p>
        PROJECT
        <strong>
        &nbsp;YOUR TITLE &nbsp;
        </strong>
        uses your network username and password to login to the App.
        Continue to login to YOUR TITLE through your network.
        <br />
        <Button onClick={
          () => { MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'success', message: 'CHECK CHECK MESSAGES', description: 'PK description' }, reqPayMod: requestPayloadModel }); }
          }>
          Success Message
        </Button>
        <Link to="/product360">
          <LoadedClickMeButtonContainer />
        </Link>
      </p>
    </div>
  );
};

export default LoadingARVR;
