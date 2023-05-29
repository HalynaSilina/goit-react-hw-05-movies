import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#EB9A28"
      visible={true}
      ariaLabel="three-circles-rotating"
      wrapperClass="loader-wrapper"
    />
  );
};

export default Loader;
