import React, { useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Icon } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';
import ContestCard from '../../components/ContestCard/ContestCard';
import { getActiveContests, getContestRules } from './Home.service';
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
    const { enqueueSnackbar } = useSnackbar();

    const [contests, setContests] = useState([]);
    const [rules, setRules] = useState([]);
    const [carouselSettings, setCarouselSettings] = useState(DEFAULT_CAROUSEL_SETTINGS);

    useEffect(() => {
        getContests.current();
        getRules.current();
    }, []);

    const getCarouselSettings = (slideLength) => {
        return {
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: slideLength < 4 ? slideLength : 4,
                    }
                },
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

    const getContests = useRef(() => { });
    getContests.current = () => {
        getActiveContests()
            .then(contestList => {
                setContests(contestList);
                setCarouselSettings(getCarouselSettings(contestList.length));
            })
            .catch(error => {
                enqueueSnackbar(JSON.stringify(error), { variant: 'error' });
            });
    }

    const getRules = useRef(() => { });
    getRules.current = () => {
        getContestRules()
            .then(rules => {
                setRules(rules);
            })
            .catch(error => {
                enqueueSnackbar(JSON.stringify(error), { variant: 'error' });
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
                    <h1 className="title">Incognito</h1>
                    <h5 className="tagline">The Hunt has begun</h5>
                </section>

                {
                    contests &&
                    contests.length > 0 &&
                    <section className="section-contest" id="contests">
                        <h1 className="section-title">Contests</h1>
                        <Carousel settings={carouselSettings} className="carousel-wrapper">
                            {
                                contests &&
                                contests.map(contest =>
                                    <ContestCard
                                        key={contest._id}
                                        id={contest._id}
                                        img={contest.img}
                                        title={contest.contestName}
                                        start={contest.startDate}
                                        started={contest.started}
                                        onPlayClick={playClickHandler}
                                        onLearderboardClick={leaderboardClickHandler}
                                    />
                                )
                            }
                        </Carousel>
                    </section>
                }

                <section className="section-rules" id="rules">
                    <h1 className="section-title">Rules are clues</h1>
                    <ol className="rules-wrapper">
                        {
                            rules &&
                            rules.map((rule, index) =>
                                <li className="each-rule" key={index}>{rule}</li>
                            )
                        }
                    </ol>
                </section>

                <section className="section-contact" id="contact">
                    <h1 className="section-title">Contact Us</h1>
                    <div className="contact-us-wrapper">
                        <h5 className="title">Found a Bug<span role="img" aria-label="">🐞</span>?</h5>
                        <p className="content">Feel free to contact us. Message us on Whatsapp or call us at</p>
                        <p className="content">
                            <span>
                                <a href="mailto:sebin.vincent@litmus7.com"><Icon>email</Icon></a>
                                <a href="tel:91 8086781913">Sebin : +91 8086781913</a>
                            </span>
                            <span>
                                <a href="mailto:benin.jose@litmus7.com"><Icon>email</Icon></a>
                                <a href="tel: 91 9633569522">Benin : +91 9633569522</a>
                            </span>
                        </p>
                        <div className="highlight-container">
                            <span className="label">Made with <Icon className="icon">favorite</Icon></span>
                            <span className="creators">@Litmus7</span>
                        </div>
                    </div>
                </section>
            </div>
        </AppContainer>
    );

};

export default Home;