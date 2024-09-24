import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'

function CloseIcon(props: SvgProps) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M10.03 8.97a.75.75 0 00-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 101.06 1.06L12 13.06l1.97 1.97a.75.75 0 001.06-1.06L13.06 12l1.97-1.97a.75.75 0 10-1.06-1.06L12 10.94l-1.97-1.97z"
        fill={props.stroke || '#616161'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM2.75 12a9.25 9.25 0 1118.5 0 9.25 9.25 0 01-18.5 0z"
        fill={props.stroke || '#616161'}
      />
    </Svg>
  )
}

export default CloseIcon
