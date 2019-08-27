import Axios from 'axios';

export default {
  async getConfigFile() {
    let appConfigPath = null;

    if (process.env.isDev) {
      appConfigPath = `${process.env.baseUrl}/config/app-config-dev.json`;
    } else {
      appConfigPath = `${process.env.baseUrl}/config/app-config.json`;
    }

    const appConfig = await Axios.get(appConfigPath)
      .then(res => {
        return res.data;
      })
      .catch(() => {
        return {
          XMPP_SERVER_ADDRESS: 'https://xmpp.trustscore.tech:7443/http-bind',
          XMPP_SERVER_DOMAIN: 'chat',
          APP_LOCALE: 'en-us'
        };
      });
    return appConfig;
  }
};
