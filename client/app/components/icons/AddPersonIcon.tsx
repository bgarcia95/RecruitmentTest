import * as React from 'react';
import {SvgCss} from 'react-native-svg';

interface Props {
  size: number;
  color: string;
}

const AddPersonIcon = ({size, color}: Props) => {
  const xml = `
	<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M17 3.99999H15V6.99999H12V8.99999H15V12H17V8.99999H20V6.99999H17V3.99999ZM2 3.99999C1.98768 4.52865 2.08273 5.05431 2.27939 5.54518C2.47605 6.03605 2.77024 6.48192 3.14415 6.85584C3.51807 7.22976 3.96395 7.52394 4.45482 7.7206C4.94569 7.91726 5.47134 8.01231 6 7.99999C6.52866 8.01231 7.05431 7.91726 7.54518 7.7206C8.03605 7.52394 8.48193 7.22976 8.85585 6.85584C9.22976 6.48192 9.52395 6.03605 9.72061 5.54518C9.91727 5.05431 10.0123 4.52865 10 3.99999C10.0123 3.47134 9.91727 2.94568 9.72061 2.45481C9.52395 1.96394 9.22976 1.51806 8.85585 1.14414C8.48193 0.770228 8.03605 0.476043 7.54518 0.279383C7.05431 0.0827239 6.52866 -0.0123228 6 -7.5365e-06C5.47134 -0.0123228 4.94569 0.0827239 4.45482 0.279383C3.96395 0.476043 3.51807 0.770228 3.14415 1.14414C2.77024 1.51806 2.47605 1.96394 2.27939 2.45481C2.08273 2.94568 1.98768 3.47134 2 3.99999ZM8 3.99999C8.01286 4.26604 7.96993 4.53184 7.87398 4.78032C7.77802 5.02879 7.63115 5.25445 7.4428 5.44279C7.25446 5.63114 7.0288 5.77801 6.78032 5.87397C6.53185 5.96993 6.26605 6.01285 6 5.99999C5.73395 6.01285 5.46815 5.96993 5.21968 5.87397C4.9712 5.77801 4.74554 5.63114 4.5572 5.44279C4.36885 5.25445 4.22198 5.02879 4.12602 4.78032C4.03007 4.53184 3.98714 4.26604 4 3.99999C3.98714 3.73394 4.03007 3.46814 4.12602 3.21967C4.22198 2.97119 4.36885 2.74554 4.5572 2.55719C4.74554 2.36884 4.9712 2.22198 5.21968 2.12602C5.46815 2.03006 5.73395 1.98713 6 1.99999C6.26605 1.98713 6.53185 2.03006 6.78032 2.12602C7.0288 2.22198 7.25446 2.36884 7.4428 2.55719C7.63115 2.74554 7.77802 2.97119 7.87398 3.21967C7.96993 3.46814 8.01286 3.73394 8 3.99999ZM2 14C2 13.2043 2.31607 12.4413 2.87868 11.8787C3.44129 11.3161 4.20435 11 5 11H7C7.79565 11 8.55871 11.3161 9.12132 11.8787C9.68393 12.4413 10 13.2043 10 14V15H12V14C12 13.3434 11.8707 12.6932 11.6194 12.0866C11.3681 11.4799 10.9998 10.9288 10.5355 10.4645C10.0712 10.0002 9.52004 9.63187 8.91342 9.38059C8.30679 9.12932 7.65661 8.99999 7 8.99999H5C3.67392 8.99999 2.40215 9.52678 1.46447 10.4645C0.526784 11.4021 0 12.6739 0 14V15H2V14Z" fill=${color}/>
	</svg>	
	`;

  return <SvgCss xml={xml} width={size} height={size} />;
};

AddPersonIcon.defaultProps = {
  size: 20,
  color: '#000',
};

export default AddPersonIcon;
