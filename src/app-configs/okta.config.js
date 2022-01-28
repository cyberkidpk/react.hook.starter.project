import { OktaAuth } from '@okta/okta-react';

const oktaAuth = new OktaAuth({
  issuer: 'https://{yourOktaDomain}.com/oauth2/default',
  clientId: '{clientId}',
  // eslint-disable-next-line no-undef
  redirectUri: `${window.location.origin}/login/callback`,
});

export default oktaAuth;
