import React, { useEffect, useState } from 'react';

import { getActiveContests } from './Home.service';
import Carousel from '../../components/Carousel/Carousel';
import ContestCard from '../../components/ContestCard/ContestCard';
import AppContainer from '../../components/AppContainer/AppContainer';

import './Home.scss';


const DEFAULT_CAROUSEL_SETTINGS = {
    responsive: [
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 5,
            }
        },
    ]
};

const Home = () => {

    const [carouselSettings, setCarouselSettings] = useState(DEFAULT_CAROUSEL_SETTINGS);
    const [contests, setContests] = useState([]);

    useEffect(() => {
        getContests();
    }, []);

    const getCarouselSettings = (slideLength) => {
        return {
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: slideLength < 2 ? 1 : 2,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: slideLength < 3 ? slideLength : 3,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: slideLength < 4 ? slideLength : 4,
                    }
                },
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 5,
                    }
                },
            ]
        };
    }

    const getContests = () => {
        getActiveContests()
            .then(contestList => {
                setContests(contestList);
                setCarouselSettings(getCarouselSettings(contestList.length));
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <AppContainer>
            <div className="home-page-wrapper">
                <section className="section-hero">
                </section>
                <section component="section" className="section-contest">
                    
                    <Carousel settings={carouselSettings} className="carousel-wrapper">
                        {
                            contests &&
                            contests.map(contest =>
                                <ContestCard
                                    key={contest._id}
                                    id={contest._id}
                                    title={contest.contestName}
                                    start={contest.startDate}
                                />
                            )
                        }
                    </Carousel>
                </section>
            </div>
        </AppContainer>
    );

};

export default Home;