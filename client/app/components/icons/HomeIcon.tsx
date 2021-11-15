import * as React from 'react';
import {SvgCss} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const HomeIcon = ({size, color}: Props) => {
  const xml = `
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M19.743 10.331L10.743 0.330996C10.364 -0.0910041 9.63599 -0.0910041 9.257 0.330996L0.256995 10.331C-0.00800523 10.624 -0.0740053 11.046 0.0869947 11.407C0.246995 11.768 0.604995 12 0.999995 12H2.99999V19C2.99999 19.552 3.44699 20 3.99999 20H6.99999C7.55299 20 7.99999 19.552 7.99999 19V15H12V19C12 19.552 12.447 20 13 20H16C16.553 20 17 19.552 17 19V12H19C19.395 12 19.753 11.768 19.913 11.407C20.074 11.046 20.008 10.625 19.743 10.331Z" fill=${color}/>
	</svg>
	`;

  return <SvgCss xml={xml} width={size} height={size} />;
};

HomeIcon.defaultProps = {
  size: 20,
  color: '#D0D0D0',
};

export default HomeIcon;
