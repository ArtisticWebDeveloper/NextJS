import React from "react";
import Icon from './Icon';

const style = {
	borderBottomRightRadius: '7rem'
}

const Card = ({ icon, title, text}) => {
  return (
	<>
		<div className="card-container min-w-full">
			<div className="card">
				<div className="front-content">
					<p>{icon && (<Icon icon={icon} />)}</p>
					{title && <p>{title}</p>}
				</div>
				<div className="content">
					{title && (<p className="heading">{title}</p>)}
					{text && (<p>{text}</p>)}
				</div>
			</div>
		</div>
	</>
  );
};

export default Card;
