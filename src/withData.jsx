import React from "react";

const withData = (WrappedComponent) => {
  const dataInit = ["name", "email", "phone", "text", "allo"];

  const hocComponent = ({ ...props }) => (
    <>
      {console.log({ ...props })}
      <WrappedComponent {...props} dataInit={dataInit} />
    </>
  );

  return hocComponent;
};

export default withData;
