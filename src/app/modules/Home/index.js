import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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

    const history = useHistory();

    const [contests, setContests] = useState([]);
    const [carouselSettings, setCarouselSettings] = useState(DEFAULT_CAROUSEL_SETTINGS);

    useEffect(() => {
        getContests();
    }, []);

    const getCarouselSettings = (slideLength) => {
        return {
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: slideLength < 4 ? slideLength : 4,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: slideLength < 2 ? 1 : 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
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

    const playClickHandler = (id) => {
        history.push(`contest/${id}`);
    };

    const leaderboardClickHandler = (id) => {
        history.push(`contest/${id}/leaderboard`);
    };

    return (
        <AppContainer>
            <div className="home-page-wrapper">

                <section className="section-hero">
                </section>

                <section className="section-contest">
                    <h1 className="section-title">Contests</h1>
                    <Carousel settings={carouselSettings} className="carousel-wrapper">
                        {
                            contests &&
                            contests.map(contest =>
                                <ContestCard
                                    key={contest._id}
                                    id={contest._id}
                                    title={contest.contestName}
                                    start={contest.startDate}
                                    onPlayClick={playClickHandler}
                                    onLearderboardClick={leaderboardClickHandler}
                                />
                            )
                        }
                    </Carousel>
                </section>

                <section className="section-rules">
                    <h1 className="section-title">Rules and Regulations</h1>
                    <ol className="rules-wrapper">
                        <li className="each-rule">The ranking will be based on who finishes the most questions, in minimum time.</li>
                        <li className="each-rule">Answer should be in full forms. Format includes no spaces, all lower case and no special characters.</li>
                        <li className="each-rule">Hints will be provided from time to time on the question page itself.</li>
                        <li className="each-rule">Clock starts ticking once your account is created. This time will be taken into account in the leaderboard.</li>
                        <li className="each-rule">The team deserves all rights to take necessary actions for smooth conduction of event.</li>
                        <li className="each-rule">Google is your best friend. Yo Boolean!</li>
                        <li className="each-rule">Dear hackers, we ban like hell :)</li>
                    </ol>
                </section>

                <section className="section-contact">
                    <h1 className="section-title">Contact Us</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.169326450383!2d76.36234058108714!3d10.009865432153964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf36a6e02a19%3A0xa6b354aa42298fbb!2sLitmus7%20Systems%20Consulting!5e0!3m2!1sen!2sin!4v1603022524595!5m2!1sen!2sin" title="map" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </section>
            </div>
        </AppContainer>
    );

};

export default Home;