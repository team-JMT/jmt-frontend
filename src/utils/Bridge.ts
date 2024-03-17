import { nativeInfo } from './storage';
export type BridgeRequest<T> = {
  name: string;
  data?: T;
  onSuccess?: string;
  onFailed?: string;
};

export const handleTestSuccess = () => {
  console.info('handleTestSuccess');
};
export const handleTestFail = () => {
  console.info('handleTestFailed');
};

export const handleConsoleValue = (value: string) => {
  console.info('handleConsoleValue', value);
};

export const setAccessToken = (token: string) => {
  const prevState = nativeInfo.getData();
  nativeInfo.setData({
    ...prevState,
    accessToken: token,
  });
};

if (window) {
  // ### 테스트용 브릿지입니다.
  window.handleTestSuccess = handleTestSuccess;
  window.handleTestFail = handleTestFail;
  window.handleConsoleValue = handleConsoleValue;
  // ### 아래부터는 PROD 브릿지입니다.
  window.setAccessToken = setAccessToken;
}

class BridgeApi {
  sendData<T>(data: BridgeRequest<T>) {
    const jsonString = JSON.stringify(data);
    if (window.webkit) {
      window.webkit.messageHandlers.webviewBridge.postMessage(jsonString);
    } else {
      window.webviewBridge.sendData(jsonString);
    }
  }
  back(enable = true) {
    this.sendData<{
      enable: boolean;
    }>({
      name: 'back',
      data: { enable: enable },
    });
  }
  navigation(isVisible = true) {
    this.sendData<{
      isVisible: boolean;
    }>({
      name: 'navigation',
      data: { isVisible: isVisible },
    });
  }
  navigate(route: string, groupId: number) {
    this.sendData<{
      groupId: number;
      route: string;
    }>({
      name: 'navigate',
      data: { groupId, route },
    });
  }
  token() {
    this.sendData({
      name: 'token',
      onSuccess: 'setAccessToken',
    });
  }
}

export default new BridgeApi();
