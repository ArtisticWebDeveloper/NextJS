import React, {useEffect} from "react";
import { useInView  } from "react-intersection-observer";

// import the icons you need
import {
	faComputer,
	faBriefcase,
	faUserNurse,
	faGears,
	faBrain,
	faMoneyBillTrendUp,
	faSeedling,
	faDatabase,
	faSyringe,
	faChalkboardUser,
	faGlobe,
	faChartLine,
	faEnvelopesBulk,
	faDna,
	faLandmarkFlag,
	faPhotoFilm,
	faScaleBalanced,
	faPeopleArrows,
	faIcons,
	faHotel
} from "@fortawesome/free-solid-svg-icons";

import subjectsList from "../content/subject";
import Subject from "./Subject";

const SubjectsSection = (prop) => {

	const innerBackground ={
		backgroundImage: `url('/help_background.png')`,
		backgroundPosition: 'top top',
		  backgroundRepeat: 'repeat',
	};

	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});

	useEffect(() => {
		if(inView){
			const el = document.querySelector('.subjects');
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
			}, 1000);
		}
	}, [inView, entry]);

  return (
	<div className="hero min-h-screen relative bg-beige subjects">
		<div className="hero-content text-neutral-content min-w-full pt-20 lg:pt-5 opacity-0">
			<div className="p-3 lg:p-5" style={innerBackground}>
				<div ref={ref} className="col-span-12 p-5 lg:px-20 lg:pt-10 lg:py-5 bg-slate-100 rounded-2xl">
					<h1 className="animate animate__slower mb-10 text-4xl lg:text-6xl font-bold text-black text-center uppercase" data-animation="animate__fadeIn">
						subjects
					</h1>
					<p className="animate animate__slower mb-5 text-black text-2xl lg:text-4xl font-bold leading-10 capitalize" data-animation="animate__fadeInUp">Navigating Academic Success: Unleashing Expertise Across Varied Subjects!</p>
					<p className="animate animate__slower mb-5 animate__delay-2s text-black text-lg lg:text-xl font-medium" data-animation="animate__fadeInUp">ProExamPals takes immense pride in its team of highly accomplished Master's and Ph.D. level experts, featuring numerous top Ivy League graduates. Their profound knowledge spans a wide range of subjects. Anchored by our US-based experts, we stand by your side, ensuring you excel in exams, tests, assignments, papers, and entire courses.</p>
					<p className="animate animate__slower mb-5 animate__delay-3s text-black text-lg lg:text-xl font-medium" data-animation="animate__fadeInUp">With us as your trusted companions, academic success becomes an achievable reality.</p>
					<div className="mb-10 grid grid-col-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4">
						<div className="animate animate__slower animate__delay-4s" data-animation="animate__fadeIn">
							<Subject title='Computer Science' icon={faComputer} />
						</div>
						<div className="animate animate__slower animate__delay-4s" data-animation="animate__fadeIn">
							<Subject title='Business and Management' icon={faBriefcase} />
						</div>
						<div className="animate animate__slower animate__delay-4s" data-animation="animate__fadeIn">
							<Subject title='Nursing and Healthcare' icon={faUserNurse} />
						</div>
						<div className="animate animate__slower animate__delay-4s" data-animation="animate__fadeIn">
							<Subject title='Engineering' icon={faGears} />
						</div>
						<div className="animate animate__slower animate__delay-5s" data-animation="animate__fadeIn">
							<Subject title='Psychology' icon={faBrain} />
						</div>
						<div className="animate animate__slower animate__delay-5s" data-animation="animate__fadeIn">
							<Subject title='Economics' icon={faMoneyBillTrendUp} />
						</div>
						<div className="animate animate__slower animate__delay-5s" data-animation="animate__fadeIn">
							<Subject title='Environmental Science' icon={faSeedling} />
						</div>
						<div className="animate animate__slower animate__delay-5s" data-animation="animate__fadeIn">
							<Subject title='Data Science and Analytics' icon={faDatabase} />
						</div>
						<div className="animate animate__slower animate__delay-6s" data-animation="animate__fadeIn">
							<Subject title='Medicine and Pharmacy' icon={faSyringe} />
						</div>
						<div className="animate animate__slower animate__delay-6s" data-animation="animate__fadeIn">
							<Subject title='Education' icon={faChalkboardUser} />
						</div>
						<div className="animate animate__slower animate__delay-6s" data-animation="animate__fadeIn">
							<Subject title='Information Technology' icon={faGlobe} />
						</div>
						<div className="animate animate__slower animate__delay-6s" data-animation="animate__fadeIn">
							<Subject title='Finance and Accounting' icon={faChartLine} />
						</div>
						<div className="animate animate__slower animate__delay-7s" data-animation="animate__fadeIn">
							<Subject title='Marketing and Digital Marketing' icon={faEnvelopesBulk} />
						</div>
						<div className="animate animate__slower animate__delay-7s" data-animation="animate__fadeIn">
							<Subject title='Biotechnology and Biochemistry' icon={faDna} />
						</div>
						<div className="animate animate__slower animate__delay-7s" data-animation="animate__fadeIn">
							<Subject title='Political Science and International Relations' icon={faLandmarkFlag} />
						</div>
						<div className="animate animate__slower animate__delay-7s" data-animation="animate__fadeIn">
							<Subject title='Communication and Media Studies' icon={faPhotoFilm} />
						</div>
						<div className="animate animate__slower animate__delay-8s" data-animation="animate__fadeIn">
							<Subject title='Law and Legal Studies' icon={faScaleBalanced} />
						</div>
						<div className="animate animate__slower animate__delay-8s" data-animation="animate__fadeIn">
							<Subject title='Sociology' icon={faPeopleArrows} />
						</div>
						<div className="animate animate__slower animate__delay-8s" data-animation="animate__fadeIn">
							<Subject title='Graphic Design and Multimedia' icon={faIcons} />
						</div>
						<div className="animate animate__slower animate__delay-8s" data-animation="animate__fadeIn">
							<Subject title='Hospitality and Tourism Management' icon={faHotel} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default SubjectsSection;
