import { APP_CONST } from '../app-constants';

class RequestPayload {
  constructor(
    url = '',
    method = '',
    headers = null,
    body = null,
  ) {

    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;

  }

  getGETPayload() {
    return {
      method: 'get',
      url: `${APP_CONST.APP_BASE_URL}${this.url}`,
    };
  }

  getPostPayload() {
    return {
      method: 'post',
      url: `${APP_CONST.APP_BASE_URL}${this.url}`,
      heardrs: this.headers,
      body: this.body,
    };
  }
}
let localRequestPayloadModel = null;

const RequestPayloadModel = (
  url = '',
  method = '',
  headers = null,
  body = null,
) => {
  localRequestPayloadModel = url
    ? new RequestPayload(
      url,
      method,
      headers,
      body,
    )
    : new RequestPayload();
  return localRequestPayloadModel;
};

export default RequestPayloadModel;
