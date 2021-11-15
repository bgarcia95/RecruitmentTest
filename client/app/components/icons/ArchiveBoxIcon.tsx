import * as React from 'react';
import {SvgCss} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const ArchiveBoxIcon = ({size, color}: Props) => {
  const xml = `
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M21.706 5.292L18.707 2.293C18.52 2.105 18.266 2 18 2H6C5.734 2 5.48 2.105 5.293 2.293L2.294 5.292C2.112 5.473 2 5.723 2 6V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V6C22 5.723 21.888 5.473 21.706 5.292ZM6.414 4H17.586L18.586 5H5.414L6.414 4ZM4 19V7H20L20.002 19H4Z" fill=${color}/>
	<path d="M14 9H10V12H7L12 17L17 12H14V9Z" fill=${color}/>
	</svg>
	`;

  return <SvgCss xml={xml} width={size} height={size} />;
};

ArchiveBoxIcon.defaultProps = {
  size: 20,
  color: '#000',
};

export default ArchiveBoxIcon;
