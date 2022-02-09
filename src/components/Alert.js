import React, { useEffect } from "react";

const Alert = (props) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      props.removeAlert();
    }, 2000);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.list]);

  return <p className={`alert alert-${props.type}`}>{props.msg}</p>;
};

export default Alert;
