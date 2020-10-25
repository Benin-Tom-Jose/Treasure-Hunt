import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Tab, Tabs, TextField } from '@material-ui/core';

import AlertDialog from '../../../components/AlertDialog/AlertDialog';
import AppContainer from '../../../components/AppContainer/AppContainer';
import { getCurrentQuestion, submitContestAnswer } from '../Contest.service';

import './GamePage.scss';


const GamePage = () => {

    const TAB_QUESTION = "question";
    const TAB_CLUE = "clue";

    const params = useParams();
    const history = useHistory();
    const [answer, setAnswer] = useState("");
    const [showNext, setShowNext] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [currentTab, setCurrentTab] = useState("question");
    const [currentQuestion, setCurrentQuestion] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        let contestId = params.id;
        getQuestion(contestId);
    }, [params, params.id]);

    const getQuestion = (contestId) => {
        getCurrentQuestion(contestId)
            .then(response => {
                setCurrentQuestion(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleTabChange = (event, value) => {
        setCurrentTab(value);
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        if (validate()) setIsAlertOpen(true);
    };

    const handleAlertClose = () => {
        setIsAlertOpen(false);
    };

    const handleAlertActionClick = (isConfirmed) => {
        if (isConfirmed) {
            let reqBody = {
                contestId: params.id,
                answer
            };
            submitAnswer(reqBody);
        }
        setIsAlertOpen(false);
    };

    const validate = () => {
        let isValid = true;
        if (answer.trim()) {
            isValid = true
        }
        else {
            isValid = false
        }
        return isValid;
    };

    const submitAnswer = (reqBody) => {
        submitContestAnswer(reqBody)
            .then(status => {
                setAnswer("");
                setShowNext(true);
            })
            .catch(error => {
                console.log(error);
                setAnswer("");
            });
    };

    const handleNext = () => {
        getQuestion(params.id);
        setShowNext(false);
        setAnswer("");
    };

    return (
        <AppContainer>
            <div className="game-page-wrapper">
                <div className="current-question-wrapper">
                    <h1 className="section-title">Level <span className="level">{currentQuestion && currentQuestion.level}</span></h1>
                    <div className="question-container">
                        <section className="question-clue-section">
                            <Tabs
                                value={currentTab}
                                onChange={handleTabChange}
                                indicatorColor="primary"
                            >
                                <Tab label="Question" value={TAB_QUESTION} />
                                <Tab label="Clues" value={TAB_CLUE} />
                            </Tabs>

                            {
                                currentTab === TAB_QUESTION &&
                                <div className="item-container">
                                    <h6 className="title">{currentQuestion && currentQuestion.question}</h6>
                                    {
                                        currentQuestion &&
                                        <img
                                            src={currentQuestion.imageUrl}
                                            className="media"
                                            alt="media"
                                        />
                                    }
                                </div>
                            }

                            {
                                currentTab === TAB_CLUE &&
                                <>
                                    {
                                        currentQuestion && currentQuestion.clues &&

                                            currentQuestion.clues.length > 0 ?
                                            currentQuestion.clues.map((clue, index) =>
                                                <div className="item-container" key={clue.number}>
                                                    <h6 className="title">{`${index + 1}. ${clue.clueBody}`}</h6>
                                                    {
                                                        currentQuestion &&
                                                        <img
                                                            src={clue.image}
                                                            className="media"
                                                            alt="media"
                                                        />
                                                    }
                                                </div>
                                            ) :
                                            <div className="empty">No clues revealed yet.</div>
                                    }
                                </>
                            }

                        </section>
                        <section className="answer-section">
                            <div className="answer-container">
                                {
                                    showNext ?
                                        <>
                                            <h1 className="title">🎉 Congratulations !!! </h1>
                                            <p className="content">You have completed this level. You truely are a genius.</p>
                                            {
                                                currentQuestion && currentQuestion.lastQuestion ?
                                                    <>
                                                        <p className="more-questions">Stay tuned for more exciting questions.</p>
                                                        <h1 className="emoji">😜</h1>
                                                    </> :
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        className="btn-next"
                                                        onClick={handleNext}
                                                    >
                                                        Next
                                                    </Button>
                                            }
                                        </> :
                                        <>
                                            <TextField
                                                fullWidth
                                                value={answer}
                                                onChange={handleAnswerChange}
                                                label="Shoot your answer"
                                                variant="outlined"
                                                className="answer"
                                                autoFocus
                                            />
                                            <Button
                                                variant="contained"
                                                className="btn-submit"
                                                color="primary"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </Button>
                                        </>
                                }
                            </div>
                            <div className="notification-container">
                                <h1 className="title">😨 Stuck on a level?</h1>
                                <p className="description">
                                    Don't lose hope. Clues will be updated on regular intervals to make the hunt fun.
                                </p>
                                <p className="description">
                                    Check back later if you are stuck on a question and feels like murdering the guys running this.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
            <AlertDialog
                open={isAlertOpen}
                fullWidth
                maxWidth="xs"
                onClose={handleAlertClose}
                handleActionClick={handleAlertActionClick}
            />
        </AppContainer >
    )
};

export default GamePage;