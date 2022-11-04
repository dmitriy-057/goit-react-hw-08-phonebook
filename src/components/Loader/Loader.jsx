import { Oval } from 'react-loader-spinner';

export default function Loader({ height, width }) {
  return (
    <>
      <Oval
        height={height}
        width={width}
        color="#031903"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </>
  );
}
