import { BasicInputReturnType } from '$styleguide/hooks/types';
import React, { FC } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
const getConstantDeviceInfo = () => {
  let deviceJSON = {};

  deviceJSON.uniqueId = DeviceInfo.getUniqueId();
  deviceJSON.deviceId = DeviceInfo.getDeviceId();
  deviceJSON.bundleId = DeviceInfo.getBundleId();
  deviceJSON.systemName = DeviceInfo.getSystemName();
  deviceJSON.systemVersion = DeviceInfo.getSystemVersion();
  deviceJSON.version = DeviceInfo.getVersion();
  deviceJSON.readableVersion = DeviceInfo.getReadableVersion();
  deviceJSON.buildNumber = DeviceInfo.getBuildNumber();
  deviceJSON.isTablet = DeviceInfo.isTablet();
  deviceJSON.appName = DeviceInfo.getApplicationName();
  deviceJSON.brand = DeviceInfo.getBrand();
  deviceJSON.model = DeviceInfo.getModel();
  deviceJSON.deviceType = DeviceInfo.getDeviceType();

  return deviceJSON;
};

const DeviceInfoComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const deviceJson = getConstantDeviceInfo();
  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm
  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  
  return (
    <Text style={[{ textAlign: subSchema.textAlignment }, styles.textStyles]}>
      {subSchema.formatText.replace(keysRegEx, (match: string) =>
        addSlugToUrl(match, deviceJson)
      )}
    </Text>
  );
};

export default DeviceInfoComponent;
