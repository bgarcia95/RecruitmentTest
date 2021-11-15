import * as React from 'react';
import {SvgCss} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const PlusIcon = ({size, color}: Props) => {
  const xml = `
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill=${color}/>
	</svg>
	`;

  return <SvgCss xml={xml} width={size} height={size} />;
};

PlusIcon.defaultProps = {
  size: 20,
  color: '#FFF',
};

export default PlusIcon;
