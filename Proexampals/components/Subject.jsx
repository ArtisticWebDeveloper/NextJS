import React from "react";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
	borderBottomRightRadius: '7rem'
}

const Subject = ({ title, icon}) => {
  return (
	<>
		<div className="subject-card border border-slate-700 relative min-w-full mb-4 md:mb-0">
			<div className="subject bg-pxp hover:bg-beige relative p-2 top-1 -left-1">
				<div className="flex items-center">
					<div className="image bg-beige hover:bg-pxp p-3 w-1/4">
						<FontAwesomeIcon
							icon={icon}
							style={{ fontSize: 25, color: "black" }}
						/>
					</div>
					<div className="title font-normal text-center text-white hover:text-black mx-5 text-sm 2xl:text-base w-3/4">
						{title}
					</div>
				</div>
			</div>
		</div>
	</>
  );
};

export default Subject;
