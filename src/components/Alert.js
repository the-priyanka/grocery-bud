import React, { useEffect } from "react";

const Alert = (props) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      props.removeAlert();
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return <p className={`alert alert-${props.type}`}>{props.msg}</p>;
};

export default Alert;
