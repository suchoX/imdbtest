import * as React from 'react';
import Svg, {Path, Circle, G, SvgProps} from 'react-native-svg';
export interface TabIconProps extends SvgProps {
  enabled: boolean;
}
function TabSearchIcon(props: TabIconProps) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      {...props}
      opacity={props.enabled ? 1 : 0.7}>
      <Path
        fill={props.enabled ? '#45AAB8' : '#7e7e7e'}
        d="M55.172 60.828a4 4 0 105.656-5.657L50.426 44.769a28.178 28.178 0 01-5.657 5.656l10.403 10.403z"
      />
      <Circle
        fill={props.enabled ? '#F9EBB2' : '#d5d5d5'}
        cx={28}
        cy={28}
        r={22}
      />
      <Path
        fill={props.enabled ? '#F76D57' : '#a7a7a7'}
        d="M28 2C13.641 2 2 13.641 2 28s11.641 26 26 26 26-11.641 26-26S42.359 2 28 2zm0 50C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24-10.745 24-24 24z"
      />
      <G fill="#394240">
        <Path d="M62.242 53.757L51.578 43.093A27.855 27.855 0 0056 28C56 12.536 43.464 0 28 0S0 12.536 0 28s12.536 28 28 28c5.56 0 10.736-1.627 15.093-4.422l10.664 10.664c2.344 2.344 6.142 2.344 8.485 0s2.344-6.141 0-8.485zM28 54C13.641 54 2 42.359 2 28S13.641 2 28 2s26 11.641 26 26-11.641 26-26 26zm32.828 6.828a4 4 0 01-5.656 0L44.769 50.425a28.178 28.178 0 005.657-5.656l10.402 10.402a3.999 3.999 0 010 5.657z" />
        <Path d="M28 4C14.745 4 4 14.745 4 28s10.745 24 24 24 24-10.745 24-24S41.255 4 28 4zm0 46C15.85 50 6 40.15 6 28S15.85 6 28 6s22 9.85 22 22-9.85 22-22 22z" />
        <Path d="M28 11a1 1 0 100 2c8.284 0 15 6.716 15 15a1 1 0 102 0c0-9.389-7.611-17-17-17z" />
      </G>
    </Svg>
  );
}

export default TabSearchIcon;
