import React from "react";
import Image from "next/image";
import ContactForm from './ContactForm';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

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

const Popup = () => {
	const currentRoute = usePathname();
	const router = useRouter();
	const handleCloseClick = (e) => {
        e.preventDefault();
        const el = document.querySelector('#contact_popup');
		el.style.display = 'none';
		if(window.location.pathname.split('/')[1] === 'contact-us'){
			if(currentRoute !== '/'){
				window.history.replaceState(null, document.title, currentRoute)
			} else {
				window.history.replaceState(null, document.title, "/")
			}
		}
    };
  return (
	<div className="fixed top-0 left-0 min-w-full min-h-full bg-black bg-opacity-70 px-2 py-10 lg:p-20 hidden" id="contact_popup" style={style.popup}>
		<div className="flex flex-col text-right bg-black px-4 py-5 lg:px-10 min-w-80 lg:py-10 rounded-2xl" style={style.form}>
			<div className="bg-white flex close" onClick={handleCloseClick}>
				<i className='bx bx-x text-white font-bold text-3xl float-right'></i>
			</div>
			<Image className="mx-auto" src="/logo.png" alt="logo" width={180} height={100} />
			<ContactForm />
		</div>
	</div>
  );
};

export default Popup;
