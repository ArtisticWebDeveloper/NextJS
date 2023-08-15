import React, {useEffect} from "react";
import Image from "next/image";
import { useInView  } from "react-intersection-observer";

const OpeningSection = () => {

	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const handlePopup = (e) => {
        e.preventDefault();
        const el = document.querySelector('#contact_popup');
		el.style.display = 'block';
    };

	useEffect(() => {
		if(inView){
			const el = document.querySelector('.opening');
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
			}, 1);
		}
	}, [inView, entry]);

  return (
	<>
		<div className="hero px-5 py-10 md:p-10 relative bg-beige opening">
			<div className="hero-content text-slate-800 my-5 min-w-full opacity-0">
				<div ref={ref} className="grid grid-cols-12">
					<p className="animate animate__slower col-span-12 mb-10 text-3xl block md:hidden text-black font-black capitalize" data-animation="animate__slideInUp">Your Success Fuels Our Triumph.</p>
					<div className="animate animate__slower col-span-12 lg:col-span-6 text-center p-1 lg:p-0 mr-0 mb-5 lg:mb-0 lg:mr-10 lg:ml-10" data-animation="animate__fadeIn">
						<Image
							src="/section_II_background.png"
							alt="Section II Background"
							width={800}
							height={800}
							sizes="(max-width: 1024px) 50vw"
						/>
					</div>
					<div className="col-span-12 lg:col-span-6 my-auto">
						<p className="animate animate__delay-1s animate__slower mb-10 text-3xl hidden md:block text-black font-black capitalize" data-animation="animate__slideInUp">Your Success Fuels Our Triumph.</p>
						<p className="animate animate__delay-1s animate__slower mb-5 text-base leading-7" data-animation="animate__slideInUp">We cover fields like computer science, management, philosophy, economics, psychology, finance, accounting, health sciences, social sciences, and many more. And that's not all – we also provide impeccable online exam assistance. So, if you're contemplating paying someone to take your online exam, the answer is a definite yes – and you're in the right place to make it happen. Trust in our expertise and let us drive your academic success, one step closer to achieving your desired outcomes.</p>
						<button className="animate animate__delay-7s animate__slower o-btn uppercase bg-black rounded-none text-white text-base font-normal md:text-xl lg:px-20 py-3 lg:py-4 h-auto w-full lg:w-auto" data-animation="animate__fadeIn" onClick={handlePopup}>Get a Quote</button>
					</div>
				</div>
			</div>
		</div>
	</>
  );
};

export default OpeningSection;
