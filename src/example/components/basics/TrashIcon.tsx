import React from 'react';
import {Icon, IconProps} from 'react-native-elements';

type SpecificIconType = Omit<IconProps, 'name' | 'type'>;

// React Native Elementsを使用したアイコンのサンプル
const TrashIcon = ({color = '#9D8CB8', ...props}: SpecificIconType) => {
  return <Icon name="trash" type="font-awesome" color={color} {...props} />;
};

export default TrashIcon;