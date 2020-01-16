import * as React from 'react';

interface IProps {
  handleClickOutside: (e: any) => void;
}
export default (props: IProps): any => {
  const { handleClickOutside } = props;
  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return [];
};
