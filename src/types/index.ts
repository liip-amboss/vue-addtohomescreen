interface DeviceInfos {
  os?: string;
  browser?: string;
}

interface Props {
  title?: string;
  content?: string;
  buttonText?: string;
  addMessagesIos1?: string;
  addMessagesIos2?: string;
  addMessagesAndroid?: string;
  addMessagesWindowsChrome?: string;
  addMessagesWindowsFirefox?: string;
  addMessagesMacosFirefox?: string;
  addMessagesMacosChrome?: string;
  addMessagesMacosSafari?: string;
  addMessagesOthers?: string;
  ok?: string;
  titleColor?: string;
  contentColor?: string;
  iconPath?: string;
  iconColor?: string;
  iconTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  background?: string;
  lang?: string;
  expires?: number;
}

type PropsKeys = keyof Props;

enum availableLang {
  en_GB = 'en_GB',
  fr_FR = 'fr_FR',
  ru_RU = 'ru_RU',
}

export { Props, PropsKeys, DeviceInfos, availableLang };
