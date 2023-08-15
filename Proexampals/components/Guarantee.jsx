import React, {useEffect} from "react";
import Card from "./Card";
import { useInView  } from "react-intersection-observer";

const GuaranteesSection = (prop) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});

	useEffect(() => {
		if(inView){
			const el = document.querySelector('.guarantees');
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
			}, 500);
		}
	}, [inView, entry]);
  return (
	<div className="hero min-h-screen relative bg-black guarantees">
		<div className="hero-content text-neutral-content min-w-full pt-20 lg:pt-0 opacity-0">
			<div ref={ref} className="col-span-12 p-5 lg:p-20">
				<h1 className="animate animate__slower mb-10 text-4xl lg:text-6xl font-bold text-beige text-center uppercase" data-animation="animate__fadeIn">
					guarantees
				</h1>
				<div className="mb-10 flex flex-col lg:flex-row gap-10 flex-equal-height">
					<div className="animate animate__slower guarantee top-left" data-animation="animate__fadeIn">
						<Card icon="/privacy-policy.png" title="Privacy & Data Protection" text="Our commitment to privacy and data protection ensures your information is kept secure and confidential" />
					</div>
					<div className="animate animate__slower" data-animation="animate__fadeIn">
						<Card icon="/mark.png" title="High-Quality Content" text="Our promise is delivering consistently high-quality content that informs, engages, and exceeds expectations" />
					</div>
					<div className="animate animate__slower guarantee top-right" data-animation="animate__fadeIn">
						<Card icon="/bank.png" title="Secure Payment Process" text="Experience peace of mind with our secure payment process, prioritizing the safety and confidentiality of your transactions" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-10 flex-equal-height">
					<div className="animate animate__slower guarantee bottom-left" data-animation="animate__fadeIn">
						<Card icon="/money-back.png" title="Money Back Guarantee" text="Your satisfaction is our priority, backed by a no-hassle money-back guarantee" />
					</div>
					<div className="animate animate__slower" data-animation="animate__fadeIn">
						<Card icon="/customer-support.png" title="24/7 Support" text="Round-the-clock support, ensuring assistance is just a click away whenever you need it" />
					</div>
					<div className="animate animate__slower guarantee bottom-right" data-animation="animate__fadeIn">
						<Card icon="/alarm-clock.png" title="Timely Delivery" text="Count on us for timely delivery, respecting your time as much as our commitment" />
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default GuaranteesSection;
