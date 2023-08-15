import React, {useEffect} from "react";
import { useInView  } from "react-intersection-observer";
import ContactForm from './ContactForm';

const HeroBottomSection = () => {
	const bannerStyle = {
		backgroundImage: `url('/Graduation.jpg')`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top center',
		backgroundSize: '100% 100%'
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

	const mouseAnimationBottom = () => {
		let element = document.querySelector('.banner-bottom');
		let form = document.querySelector('.form-banner-bottom');
		if(element){
			const elm = {wCenter: element.clientWidth/2, hCenter: element.clientHeight/2};
			const rotate = {x: null, y: null};
			// Fires whenever mouse enter the element
			element.addEventListener('mousemove', function(e){

				if(e.clientY === elm.hCenter){
					rotate.y = 0;
				}
				if(e.clientX === elm.wCenter){
					rotate.x = 0;
				}

				if(e.clientY > elm.hCenter){
					rotate.y = (15/elm.hCenter)*(e.clientY - elm.hCenter)
				}else {
					rotate.y = (15/elm.hCenter)*(e.clientY - elm.hCenter)
				}

				if(e.clientX > elm.wCenter){
					rotate.x = (10/elm.wCenter)*(e.clientX - elm.wCenter)
				}else {
					rotate.x = (10/elm.wCenter)*(e.clientX - elm.wCenter)
				}
				form.style.setProperty('--rotateX', rotate.x+'deg')
				form.style.setProperty('--rotateY', rotate.y+'deg')
				form.style.setProperty('transform', `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`)
			});
			// Fires whenever mouse leaves the element
			element.addEventListener('mouseleave', function(event){
				form.style.setProperty('--rotateX', '0deg')
				form.style.setProperty('--rotateY', '0deg')
				form.style.setProperty('transform', `rotateX(0deg) rotateY(0deg)`)
			});
		}
	}
	useEffect(() => mouseAnimationBottom);
  return (
	<div className="hero relative banner-bottom" id="contact-us" style={bannerStyle}>
		<div className="hero-overlay bg-black bg-opacity-50"></div>
		<div className="hero-content text-neutral-content px-5 py-20 lg:py-20 opacity-0">
			<div className="flex flex-col-reverse lg:grid grid-cols-12">
				<div className="col-span-12 lg:col-span-4 my-auto form-banner-bottom">
					<ContactForm />
				</div>
				<div ref={ref} className="col-span-12 lg:col-span-8 px-0 mx-0 pb-10 lg:pb-0 lg:px-20 lg:mx-20 my-auto">
					<ul className="m-5 list-decimal text-xl">
						<li className="mb-10 text-2xl animate animate__slow" data-animation="animate__fadeIn">
							<p className="text-2xl font-medium animate animate__slow" data-animation="animate__fadeIn">Easy-fix</p>
							<p className="mb-2 text-xl font-light animate animate__slow animate__delay-1s" data-animation="animate__fadeIn">Streamlined solutions that are quick to implement and resolve issues efficiently</p>
						</li>
						<li className="mb-10 text-2xl animate animate__slow animate__delay-2s" data-animation="animate__fadeIn">
							<p className="text-2xl font-medium animate animate__slow animate__delay-2s" data-animation="animate__fadeIn">Budget-friendly</p>
							<p className="mb-2 text-xl font-light animate animate__slow animate__delay-3s" data-animation="animate__fadeIn">Cost-effective options without compromising on quality or effectiveness</p>
						</li>
						<li className="mb-10 text-2xl animate animate__slow animate__delay-4s" data-animation="animate__fadeIn">
							<p className="text-2xl font-medium animate animate__slow animate__delay-4s" data-animation="animate__fadeIn">Performance-oriented</p>
							<p className="mb-2 text-xl font-light animate animate__slow animate__delay-5s" data-animation="animate__fadeIn">Solutions designed to optimize performance and deliver exceptional results</p>
						</li>
						<li className="mb-10 text-2xl animate animate__slow animate__delay-6s" data-animation="animate__fadeIn">
							<p className="text-2xl font-medium animate animate__slow animate__delay-6s" data-animation="animate__fadeIn">Practical solution</p>
							<p className="mb-2 text-xl font-light animate animate__slow animate__delay-7s" data-animation="animate__fadeIn">Realistic and functional approaches that address problems effectively in everyday situations</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  );
};

export default HeroBottomSection;
