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

if (window) {
  window.handleTestSuccess = handleTestSuccess;
  window.handleTestFail = handleTestFail;
  window.handleConsoleValue = handleConsoleValue;
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
  token() {
    this.sendData({
      name: 'token',
      onSuccess: 'handleConsoleValue',
    });
  }
}

export default new BridgeApi();
