export type BridgeRequest<T> = {
  name: string;
  data: T;
  onSuccess: string;
  onFailed: string;
};

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
    if (window.webkit) {
      // ios
      console.log('backEnable', enable);
      window.webkit.messageHandlers.webviewBridge.postMessage(
        JSON.stringify({
          event: 'back',
          isEnableBack: enable,
        }),
      );
    } else {
      // android
      console.log('backEnable', enable);
      window?.webviewBridge?.back(
        JSON.stringify({
          isEnableBack: enable,
        }),
      );
    }
  }
  navigation(enable = true) {
    if (window.webkit) {
      window.webkit.messageHandlers.webviewBridge.postMessage(
        JSON.stringify({
          event: 'navigation',
          isVisible: enable,
        }),
      );
    } else {
      window?.webviewBridge?.navigation(
        JSON.stringify({
          isVisible: enable,
        }),
      );
    }
  }
}

export default BridgeApi;
