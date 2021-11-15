import * as React from 'react';
import {SvgCss} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const RoutesIcon = ({size, color}: Props) => {
  const xml = `
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M17 9H11V6H17C18.104 6 19 5.104 19 4V2C19 0.896 18.104 0 17 0H3L0 3L3 6H9V9H3C1.896 9 1 9.896 1 11V13C1 14.104 1.896 15 3 15H9V20H11V15H17L20 12L17 9Z" fill=${color}/>
	</svg>
	`;

  return <SvgCss xml={xml} width={size} height={size} />;
};

RoutesIcon.defaultProps = {
  size: 20,
  color: '#D0D0D0',
};

export default RoutesIcon;
