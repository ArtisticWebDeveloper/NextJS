import React, {useEffect, useState} from "react";
import Image from "next/image";
import { createStyles, getStylesRef } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const images = [
    '/associates/1.png',
    '/associates/2.png',
    '/associates/3.png',
    '/associates/4.png',
    '/associates/5.png',
];

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  }
}));

const Slider= () => {
	const { classes } = useStyles();
	const [count, setCount] = useState(0);
  
 	useEffect(() => {
		const el = document.querySelector('.mantine-Carousel-controls').lastChild;
	//Implementing the setInterval method
		const interval = setInterval(() => {
			el.click()
			setCount(count + 1);
		}, 4000);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [count]);
    return (
      <>
        <Carousel
          classNames={classes}
          height={100}
          slideSize="25%"
          slideGap="md"
          align="start"
          loop
          slidesToScroll={1}
          breakpoints={[
            { maxWidth: "md", slideSize: "70%", slideGap: 'md', draggable: false},
            { maxWidth: "sm", slideSize: "33.333%", slideGap: 'md', draggable: false },
          ]}
          >
        {images.map((image, i) => {
            return (
                <Carousel.Slide key={i}>
                  <Image src={image} alt={image} width={200} height={100} />
                </Carousel.Slide>
            );
          })}
        </Carousel>
      </>
    )
}

export default Slider;