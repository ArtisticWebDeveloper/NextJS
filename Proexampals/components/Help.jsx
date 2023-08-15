import React from "react";
import Image from "next/image"

const backgroundStyle = {
	backgroundColor: '#FFFDD0',
}
const innerBackground ={
	backgroundImage: `url('/help_background.png')`,
	backgroundPosition: 'top top',
  	backgroundRepeat: 'repeat',
};

const HelpSection = ({count, image, headline, children}) => {
	const handlePopup = (e) => {
        e.preventDefault();
        const el = document.querySelector('#contact_popup');
		el.style.display = 'block';
    };
  return (
	<div className="hero min-h-screen relative bg-beige" style={backgroundStyle}>
		<div className="hero-content text-black min-w-full p-2 lg:p-3">
			<div className="p-3 lg:p-5" style={innerBackground}>
				<div className="grid grid-cols-12 bg-slate-100 rounded-2xl">
					<div className="col-span-12 flex flex-col lg:col-span-6 h-100 px-5 pb-2 pt-5 mr-0 mb-2 lg:pb-5 lg:mb-0 lg:mr-10">
					<p className=" animate__animated animate__fadeIn animate__slow m-2 lg:mt-5 lg:mb-10 text-black font-light">{headline}</p>
						<Image
							className="my-auto animate__animated animate__fadeIn animate__slow"
							src={image}
							alt="Online Coursework Help"
							width={900}
							height={700}
							sizes="(max-width: 700px) 60vw"
						/>
					</div>
					<div className="col-span-12 lg:col-span-6 pb-5 lg:py-20 lg:border-l-pxp lg:border-l-4 px-10">
						<p className="hidden md:block mb-4 text-5xl font-black text-pxp capitalize">{count}</p>
						<ul className="help-counter hidden md:flex">
							<li className={count === '01' ? 'active': ''}>&nbsp;</li>
							<li className={count === '02' ? 'active': ''}>&nbsp;</li>
							<li className={count === '03' ? 'active': ''}>&nbsp;</li>
						</ul>
						<p className="animate__animated animate__fadeInUp my-5 lg:my-10 text-3xl font-black capitalize ">{headline}</p>
						{children}
						<button className="animate__animated animate__fadeInUp animate__delay-4s btn bg-black rounded-none text-base font-normal md:text-xl lg:px-20 py-3 lg:py-4 h-auto w-full lg:w-auto" onClick={handlePopup}>Get a Quote</button>

					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default HelpSection;
