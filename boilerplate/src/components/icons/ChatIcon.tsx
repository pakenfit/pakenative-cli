import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {ICON_SIZE} from '../../contants/sizes';
import {Colors} from '../../theme/colors';

export const ChatIcon = ({color = Colors.BRAND, ...rest}: SvgProps) => (
  <Svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 10.787c0 4.854-4.253 8.788-9.5 8.788a10.22 10.22 0 0 1-2.684-.355c-1.881 1.241-4.233 1.617-5.485 1.73-.286.027-.434-.347-.24-.559.595-.65 1.431-1.803 1.715-3.368C4.073 15.43 3 13.225 3 10.787 3 5.934 7.253 2 12.5 2S22 5.934 22 10.787z"
      fill={color}
    />
  </Svg>
);
