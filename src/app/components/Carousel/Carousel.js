import React from 'react';
import Slider from 'react-slick';
import Proptypes from 'prop-types';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DEFAULT_SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const Carousel = (props) => {
    const settings = { ...DEFAULT_SETTINGS, ...props.settings };

    return (
        <Slider {...settings} className={props.className}>
            {props.children}
        </Slider>
    );
};

Carousel.defaultProps = {
    className: '',
    settings: {},
};

Carousel.propTypes = {
    className: Proptypes.string,
    settings: Proptypes.object,
    children: Proptypes.node.isRequired
};

export default Carousel;