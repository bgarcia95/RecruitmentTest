import * as React from 'react';
import {SvgCss} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const StatsIcon = ({size, color}: Props) => {
  const xml = `
	<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 19H1C0.447 19 0 18.552 0 18V10C0 9.448 0.447 9 1 9H4C4.553 9 5 9.448 5 10V18C5 18.552 4.553 19 4 19ZM11 19H8C7.447 19 7 18.552 7 18V1C7 0.448 7.447 0 8 0H11C11.553 0 12 0.448 12 1V18C12 18.552 11.553 19 11 19ZM18 19H15C14.447 19 14 18.552 14 18V7C14 6.448 14.447 6 15 6H18C18.553 6 19 6.448 19 7V18C19 18.552 18.553 19 18 19Z" fill=${color}/>
	</svg>	
	`;

  return <SvgCss xml={xml} width={size} height={size} />;
};

StatsIcon.defaultProps = {
  size: 20,
  color: '#D0D0D0',
};

export default StatsIcon;
