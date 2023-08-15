import React, {useEffect} from "react";
import { useInView  } from "react-intersection-observer";
// import the icons you need
import {
	faFileInvoiceDollar,
	faCreditCardAlt,
	faZ,
	faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import {
	faPaypal
} from "@fortawesome/free-brands-svg-icons";
import Payment from "./Payment";
import Slider from "./Slider";

const HeroBottomSection = () => {
	const bannerStyle = {
		backgroundImage: `url('/Graduation.jpg')`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top center',
		backgroundSize: 'cover'
	}

	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});
	useEffect(() => {
		if(inView){
			const el = document.querySelector('.banner-bottom');
			const elChildNodes = el.querySelectorAll('.animate');
			setTimeout(() => {
				const showContainer = el.querySelector('.opacity-0')
				if(showContainer){
					showContainer.classList.replace('opacity-0', 'opacity-100');
				}
				elChildNodes.forEach(e => {
					e.classList.replace('animate', 'animate__animated');
					e.classList.add(e.getAttribute('data-animation'));
				})
			}, 10);
		}
	}, [inView, entry]);
  return (
	<div className="hero relative banner-bottom" id="contact-us" style={bannerStyle}>
		<div className="hero-overlay bg-black bg-opacity-50"></div>
		<div className="hero-content flex-col text-neutral-content px-5 py-20 lg:py-20 opacity-0 min-w-full">
			<p className="mb-5 lg:mb-10 text-center text-4xl text-slate-100 font-bold">Choose The Best Payment Method Of Your Choice</p>
			<div ref={ref} className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				<Payment title={`Bank/Wire Transfer`} icon={faFileInvoiceDollar} color='#3D665E' iconColor='#172623' />
				<Payment title={`Online Credit/Debit Card`} icon={faCreditCardAlt} color='#468189' iconColor='#152628' />
				<Payment title={`Paypal`} icon={faPaypal} color='#031926' iconColor='#efefef' />
				<Payment title={`Zelle`} icon={faZ} color='#9DBEBB' iconColor='#182524' />
				<Payment title={`Cash App`} icon={faDollarSign} color='#F4E9CD' iconColor='#211A07' />
			</div>
			<p className="mt-5 lg:mt-10 mb-5 lg:mb-10 text-center text-4xl text-slate-100 font-bold">Our Associates</p>
			<div className="max-w-full">
				<Slider />
			</div>
		</div>
	</div>
  );
};

export default HeroBottomSection;
