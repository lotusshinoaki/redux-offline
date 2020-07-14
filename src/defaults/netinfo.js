/* eslint no-underscore-dangle: 0 */

class _NetInfo {
  constructor() {
    console.log('redux-offline.NetInfo#constructor'); // eslint-disable-line
    this._netInfo = null;
    this._listeners = [];
  }
  addEventListener = listener => {
    console.log('redux-offline.NetInfo#addEventListener'); // eslint-disable-line
    return this._netInfo
      ? this._netInfo.addEventListener(listener)
      : this._listeners.push(listener);
  };
  fetch = () => {
    console.log('redux-offline.NetInfo#fetch'); // eslint-disable-line
    return this._netInfo
      ? this._netInfo.fetch()
      : Promise.resolve({
          isConnectionExpensive: true,
          isInternetReachable: false,
          type: 'none'
        });
  };
  isConnectionExpensive = () => {
    console.log('redux-offline.NetInfo#isConnectionExpensive'); // eslint-disable-line
    return this._netInfo
      ? this._netInfo.isConnectionExpensive()
      : Promise.resolve(true);
  };
  setNetInfo = netInfo => {
    console.log('redux-offline.NetInfo#setNetInfo'); // eslint-disable-line
    this._netInfo = netInfo;
    this._listeners.forEach(listener => netInfo.addEventListener(listener));
  };
}

const NetInfo = new _NetInfo();

export default NetInfo;
