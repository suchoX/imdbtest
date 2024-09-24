import * as React from 'react';
import Svg, {Path, Circle, SvgProps} from 'react-native-svg';
export interface TabIconProps extends SvgProps {
  enabled: boolean;
}
function TabTrendIcon(props: TabIconProps) {
  return (
    <Svg viewBox="0 0 64 64" fill="#000" {...props}>
      <Path
        fill="#394240"
        d="M60 0H4C1.789 0 0 1.789 0 4v56c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zM4 2h56a2 2 0 012 2v21.428l-11.409 6.713A5.98 5.98 0 0046 30c-1.8 0-3.41.796-4.51 2.051l-15.93-9.803A5.96 5.96 0 0026 20a6 6 0 10-12 0c0 1.296.414 2.492 1.112 3.473L2 36.586V4a2 2 0 012-2zm42 30a4 4 0 110 8 4 4 0 010-8zM16 20a4 4 0 118 0 4 4 0 01-8 0zm44 42H4a2 2 0 01-2-2V39.414l14.526-14.527a5.977 5.977 0 007.984-.938l15.93 9.804A5.955 5.955 0 0040 36a6 6 0 1012 0c0-.752-.145-1.471-.397-2.135L62 27.748V60a2 2 0 01-2 2z"
      />
      <Circle
        fill={props.enabled ? '#F76D57' : '#676767'}
        cx={46}
        cy={36}
        r={4}
      />
      <Circle
        fill={props.enabled ? '#45AAB8' : '#676767'}
        cx={20}
        cy={20}
        r={4}
      />
      <Path
        fill={props.enabled ? '#F9EBB2' : '#d5d5d5'}
        d="M60 2H4a2 2 0 00-2 2v32.586l13.112-13.113A5.967 5.967 0 0114 20a6 6 0 1111.561 2.248l15.93 9.803A5.976 5.976 0 0146 30a5.98 5.98 0 014.591 2.141L62 25.428V4a2 2 0 00-2-2z"
      />
      <Path
        fill={props.enabled ? '#B4CCB9' : '#d5d5d5'}
        d="M52 36a6 6 0 11-11.561-2.247l-15.93-9.804A5.973 5.973 0 0120 26a5.964 5.964 0 01-3.474-1.113L2 39.414V60a2 2 0 002 2h56a2 2 0 002-2V27.748l-10.397 6.117c.252.664.397 1.383.397 2.135z"
      />
    </Svg>
  );
}

export default TabTrendIcon;
