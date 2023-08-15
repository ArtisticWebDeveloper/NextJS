import React from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Payment = ({ icon, title, color, iconColor}) => {
  return (
	<>
		<div className="payment-container">
			<div className="left-side" style={{backgroundColor: color}}>
				<FontAwesomeIcon
					icon={icon}
					style={{ fontSize: 75, color: iconColor }}
				/>
				{/* <div className="card">
					<div className="card-line"></div>
					<div className="buttons"></div>
				</div> */}
				<div className="post">
					<div className="post-line"></div>
					<div className="screen">
						<div className="dollar">$</div>
					</div>
					<div className="numbers"></div>
					<div className="numbers-line2"></div>
				</div>
			</div>
			<div className="right-side">
				<div className="new">{title}</div>
			</div>
		</div>
	</>
  );
};

export default Payment;
