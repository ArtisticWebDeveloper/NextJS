import React from "react";
import Image from "next/image";
const style={
  width: '25%',
  height: 'auto',
  margin: '0 auto',
}
const I = ({ icon }) => {
  return (
	  <Image src={icon} alt="icon" width={64} height={64} className="mx-auto" />
  );
};

export default I;
