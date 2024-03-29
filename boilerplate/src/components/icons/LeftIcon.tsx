import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {ICON_SIZE} from '../../contants/sizes';
import {Colors} from '../../theme/colors';

export const LeftIcon = ({color = Colors.BRAND, ...rest}: SvgProps) => (
  <Svg
    data-name="Iconly/Curved/Arrow - Left Square"
    viewBox="0 0 24 24"
    width={ICON_SIZE}
    height={ICON_SIZE}
    {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.48 6.49 2 12 2l.28.004C17.67 2.152 22 6.574 22 12c0 5.51-4.48 10-10 10-5.51 0-10-4.49-10-10Zm11.98 4c.29-.3.29-.77-.01-1.06L11.02 12l2.95-2.94c.3-.29.3-.77.01-1.06-.3-.3-.77-.3-1.06 0l-3.49 3.47a.75.75 0 0 0 0 1.06L12.92 16c.14.15.33.22.52.22.2 0 .39-.07.54-.22Z"
      fill={color}
    />
  </Svg>
);
