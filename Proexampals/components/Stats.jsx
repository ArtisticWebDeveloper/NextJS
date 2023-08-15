import React, { useState, useEffect } from "react";
import { InView  } from "react-intersection-observer";
import { Chart } from "chart.js";

const StatsSection = () => {
	const handlePopup = (e) => {
        e.preventDefault();
        const el = document.querySelector('#contact_popup');
		el.style.display = 'block';
    };
	const bannerStyle = {
		backgroundImage: `url('/stats.png')`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover'
	}
	const [animated, setAnimated] = useState(false);
	const ani = (inView, entry) => {
		if(inView && !animated) {
			setAnimated(true);
			const elms = document.querySelectorAll('.counter');
			document.querySelectorAll('.stats-heading').forEach(e => e.classList.add('animate__fadeInUp'));
			document.querySelector('.stats-text').classList.add('animate__fadeInUp');
			document.querySelector('.stats-btn').classList.add('animate__fadeInUp');
			elms.forEach((counter) => {
				counter.parentElement.classList.add('animate__animated');
				counter.parentElement.classList.add('animate__fadeInUp');
				counter.innerText = '0';
				const updateCounter = () => {
					const target = +counter.getAttribute('data-counter');
					const c = +counter.innerText;
					const increment = target / 50;

					if( c < target) {
						if(target < 10) {
							counter.innerText = `${Math.ceil(c + 1)}`;
						} else {
							counter.innerText = `${Math.ceil(c + increment)}`;
						}
						setTimeout(updateCounter, 70);
					} else {
						counter.innerText = target
					}
				};
				updateCounter();
			});

		}
	}
	useEffect(() => {
        var ctx = document.getElementById('stats_chart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [60, 70, 30, 80, 100, 120, 135],
                    label: "Applied",
                    borderColor: "rgb(112, 111, 179)",
                    backgroundColor: "rgb(112, 111, 179,0.6)",
                }, {
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Accepted",
                    borderColor: "rgb(48, 155, 227)",
                    backgroundColor: "rgb(48, 155, 227,0.6)",
                }, {
                    data: [12, 50, 70, 46, 60, 90, 140],
                    label: "Rejected",
                    borderColor: "rgb(74, 210, 197)",
                    backgroundColor: "rgb(74, 210, 197, 0.6)",
                }
                ]
            },
			options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						display: false
					}],
					yAxes: [{
						gridLines:{
							display: false //this will remove all the x-axis grid lines
						}
					}]
				},
            },
        });
    }, [animated])
  return (
	<InView as="div" onChange={(inView, entry) => ani(inView, entry)}>
		<div className="hero relative" style={bannerStyle}>
			<div className="hero-overlay bg-opacity-30"></div>
			<div className="hero-content text-neutral-content min-w-full pt-20 lg:py-20">
				<div className="grid grid-cols-12 w-full px-5 lg:px-20">
					<h3 className="animate__animated stats-heading mb-10 text-4xl col-span-12 block md:hidden font-bold text-white capitalize">
						pro exam pals facts and figures!
					</h3>
					<div className=" col-span-12 lg:col-span-5 pr-0 pb-10 lg:pb-0 lg:pr-10 ">
						<div className="flex flex-col">
							<h1 className="my-1 text-center mg:text-left lg:mt-20 text-6xl font-bold text-pxp"><span className="counter" data-counter="7">7</span>k+</h1>
							<p className="my-1  text-center mg:text-left  font-bold xl:font-semibold xl:text-3xl text-white uppercase">Completed Orders</p>
							<div className='bg-chart pt-3 pr-3 pl-3 rounded-xl w-full h-fit my-auto shadow-xl hidden md:block'>
								<canvas id='stats_chart'></canvas>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-7">
						<h3 className="animate__animated stats-heading hidden md:block mb-10 text-3xl font-bold text-white capitalize">
							pro exam pals facts and figure!
						</h3>
						<div className="lg:flex lg:justify-between lg:items-center">
							<div className="mb-10 lg:mb-0 flex flex-col justify-center">
								<h1 className=" text-center mg:text-left  my-1 text-6xl font-bold text-pxp"><span className="counter" data-counter="98">98</span>%</h1>
								<p className="text-center mg:text-left  my-1 font-bold xl:text-2xl xl:font-semibold text-white uppercase">success rate</p>
							</div>
							<div className="text-center mg:text-left  mb-10 lg:mb-0 flex flex-col justify-center">
								<h1 className=" text-center mg:text-left  my-1 text-6xl font-bold text-pxp"><span className="counter" data-counter="350">350</span>+</h1>
								<p className="my-1 font-bold xl:font-semibold xl:text-2xl text-white uppercase">active clients</p>
							</div>
							<div className="mb-10 lg:mb-0 flex flex-col justify-center">
								<h1 className="my-1 text-center mg:text-left text-6xl font-bold text-pxp"><span className="counter" data-counter="180">180</span>+</h1>
								<p className="my-1 text-center mg:text-left font-bold xl:font-semibold xl:text-2xl text-white uppercase">professionals</p>
							</div>
						</div>
						<p className="animate__animated animate__delay-2s my-5 text-lg text-white stats-text">
							Our website offers comprehensive online class solutions, covering a wide range of subjects and courses. With our expertise, we ensure seamless online exams and provide reliable support for your online learning journey. Let us handle your online classes while you focus on other priorities.
						</p>
						<button className="animate__animated animate__delay-5s o-btn uppercase bg-black rounded-none text-white text-base font-normal md:text-xl lg:px-20 py-3 lg:py-4 h-auto w-full lg:w-auto stats-btn" onClick={handlePopup}>Enroll Today</button>
					</div>
				</div>
			</div>
		</div>
	</InView>
  );
};

export default StatsSection;
