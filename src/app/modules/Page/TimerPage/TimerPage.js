import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getLaunchDateTime } from '../../../../config/Utils';

import './TimerPage.scss';


const TimerPage = () => {
    const history = useHistory();
    const [snowEl, setSnowEl] = useState();
    const LAUNCH_DATETIME = getLaunchDateTime();

    useEffect(() => {
        setSnowEl(snow());
    }, [])

    const calculateTimeLeft = (date = LAUNCH_DATETIME) => {
        let launchDate = window.launchDate || date;
        let difference = +new Date(launchDate) - +new Date();
        let timeLeft = {};

        if (difference > 1000) {
            timeLeft = {
                day: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minute: Math.floor((difference / 1000 / 60) % 60),
                second: Math.floor((difference / 1000) % 60)
            };
        }
        else {
            history.push('/');
        }

        return timeLeft;

    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div
                key={interval}
                className="countdownProp"
                date-count={timeLeft[interval] === 1 ? `${interval}` : `${interval}s`}
            >
                {timeLeft[interval]}
            </div>
        );
    });

    const snow = (amount = 100) => {
        let random = (min, max) => {
            return Math.random() * (max - min) + min;
        }

        return (
            <svg className="snow" xmlns="http://www.w3.org/2000/svg">
                {
                    [...Array(amount)].map((x, i) =>
                        <circle key={i} className="particle" r={random(1, 3)} cx={`${random(1, 100)}%`} cy={`-${random(1, 100)}`} />
                    )
                }
            </svg>
        );
    }

    return (
        <main className="timer-page-wrapper">
            {/* <iframe width="0" height="0" allow="autoplay" title="audio" style={{ "display": "none" }}
                src="https://www.youtube.com/embed/oo4UtaN9DHY?autoplay=1">
            </iframe> */}
            <section className="countdownSection">
                <div className="decorations">
                    <div className="decoration" data-pos="bottom left"></div>
                    <div className="decoration" data-pos="top right"></div>
                    {snowEl}
                    <div className="santaWrapper">
                        <div className="santa">
                            <div className="hat">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="face">
                                <div className="eyeBrows left"></div>
                                <div className="eyeBrows right"></div>
                                <div className="eye left"></div>
                                <div className="eye right"></div>
                                <div className="nose"></div>
                                <div className="cheek left"></div>
                                <div className="cheek right"></div>
                                <div className="beard">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="sweater"></div>
                                <div className="hand left">
                                    <div className="inner"></div>
                                </div>
                                <div className="hand right"></div>
                            </div>
                        </div>
                        <div className="rope"></div>
                        <div className="rope back"></div>
                        <div className="sled"></div>
                        <div className="reindeer">
                            <div className="face">
                                <div className="ear"></div>
                                <div className="horn right"></div>
                                <div className="horn left"></div>
                            </div>
                            <div className="body">
                                <div className="foot front">
                                    <div className="inner">
                                        <div className="extension"></div>
                                    </div>
                                </div>
                                <div className="foot back">
                                    <div className="inner">
                                        <div className="extension"></div>
                                    </div>
                                </div>
                                <div className="tail"></div>
                            </div>
                        </div>
                        <div className="reindeer second">
                            <div className="rope"></div>
                            <div className="face">
                                <div className="ear"></div>
                                <div className="horn right"></div>
                                <div className="horn left"></div>
                            </div>
                            <div className="body">
                                <div className="foot front">
                                    <div className="inner">
                                        <div className="extension"></div>
                                    </div>
                                </div>
                                <div className="foot back">
                                    <div className="inner">
                                        <div className="extension"></div>
                                    </div>
                                </div>
                                <div className="tail"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="counterWrapper">
                        <p>Only</p>
                        <div className="countdown">
                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                        </div>
                        <p>until <strong>INCOGNITO</strong></p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TimerPage;