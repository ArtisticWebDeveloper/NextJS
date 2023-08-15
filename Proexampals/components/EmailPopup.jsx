import React from "react";
import Image from "next/image";
import Lottie from "react-lottie";
import animationData from "../lotties/email-sent.json";

const style = {
	popup: {
		zIndex: '9999999',
	},
	form: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	}
}

const EmailPopup = () => {
	const handleCloseClick = (e) => {
        e.preventDefault();
        const el = document.querySelector('#email_popup');
		el.style.display = 'none';
    };

	const EmailSentOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice",
		},
	};
  return (
	<div className="fixed top-0 left-0 min-w-full min-h-full bg-black bg-opacity-70 px-2 py-10 lg:p-20 hidden" id="email_popup" style={style.popup}>
		<div className="flex flex-col bg-black px-4 py-5 lg:px-10 w-11/12 md:w-8/12 lg:w-6/12 lg:py-10 rounded-2xl" style={style.form}>
			<div className="bg-white flex close" onClick={handleCloseClick}>
				<i className='bx bx-x text-white font-bold text-3xl float-right'></i>
			</div>
			<Image className="mx-auto" src="/logo.png" alt="logo" width={180} height={100} />
			<Lottie options={EmailSentOptions} height={150} width={150} />
			<p className="px-10 py-10 text-xl md:text-2xl text-beige text-center font-semibold md:uppercase">
				Thank you for signing up! We're excited to have you"
			</p>
		</div>
	</div>
  );
};

export default EmailPopup;
