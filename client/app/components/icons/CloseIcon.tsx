import * as React from 'react';
import {SvgCss} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const CloseIcon = ({size, color}: Props) => {
  const xml = `
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M10.192 0.343994L5.949 4.58599L1.707 0.343994L0.292999 1.75799L4.535 5.99999L0.292999 10.242L1.707 11.656L5.949 7.41399L10.192 11.656L11.606 10.242L7.364 5.99999L11.606 1.75799L10.192 0.343994Z" fill=${color}/>
	</svg>
	`;

  return <SvgCss xml={xml} width={size} height={size} />;
};

CloseIcon.defaultProps = {
  size: 20,
  color: '#000',
};

export default CloseIcon;
