import React, { useEffect, useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory, useParams } from 'react-router-dom';

import { getLeaderboard } from '../Contest.service';
import { formatDate } from '../../../../config/Utils';
import AppContainer from '../../../components/AppContainer/AppContainer';

import './LeaderboardPage.scss';


const LeaderboardPage = () => {

    const DEFAULT_PAGE = 1;
    const DEFAUT_PAGE_SIZE = 10;

    const params = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const [leaderboard, setLeaderboard] = useState([]);
    const [onPage, setOnPage] = useState(DEFAULT_PAGE);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        let contestId = params.id;
        getLeaderboardList.current(contestId);
        window.scrollTo(0, 0);
    }, [params.id]);

    const getLeaderboardList = useRef(()=>{});
    getLeaderboardList.current = (id, page = DEFAULT_PAGE, limit = DEFAUT_PAGE_SIZE) => {
        getLeaderboard(id, page, limit)
            .then(res => {
                if (res && res.contestName) {
                    setTitle(res.contestName);
                }
                setLeaderboard(res.leaderBoard);
                setTotalPages(res.totalPages);
            })
            .catch(error => {
                enqueueSnackbar(JSON.stringify(error), { variant: 'error' });
            });
    };

    const gotoPlay = () => {
        history.push(`/contest/${params.id}`);
    };

    const handlePaginationChange = (event, currentPage) => {
        setOnPage(currentPage);
        let contestId = params.id;
        if (contestId) {
            getLeaderboardList.current(contestId, currentPage);
        }
    };

    return (
        <AppContainer>
            <div className="leaderboard-wrapper">
                <article className="leaderboard-card-wrapper">
                    <div className="card-header-wrapper">
                        <h1 className="title">{`${title} Leaderboard`}</h1>
                        <Button variant="contained" color="primary" onClick={gotoPlay}>Play</Button>
                    </div>
                    <Pagination
                        count={totalPages}
                        page={onPage}
                        color="primary"
                        shape="rounded"
                        onChange={handlePaginationChange}
                        showFirstButton
                        showLastButton
                    />
                    <ul className="leaderboard-list-wrapper">
                        <li className="list-item-container">
                            <span className="rank">Rank</span>
                            <span className="name">Name</span>
                            <span className="level">Level</span>
                            <span className="time">Time Completed</span>
                        </li>
                        {
                            leaderboard &&
                                leaderboard.length > 0 ?
                                leaderboard.map((person, index) =>
                                    <li className="list-item-container" key={index}>
                                        <span className="rank">{`${((onPage - 1) * DEFAUT_PAGE_SIZE) + index + 1}.`}</span>
                                        <span className="name">{person.name}</span>
                                        <span className="level">{person.level}</span>
                                        <span className="time">{formatDate(person.completedIn, "MMM D, YYYY, hh : mm a")}</span>
                                    </li>
                                ) :
                                <div className="empty-container">Nothing here...</div>
                        }
                    </ul>
                    <Pagination
                        count={totalPages}
                        page={onPage}
                        color="primary"
                        shape="rounded"
                        onChange={handlePaginationChange}
                        showFirstButton
                        showLastButton
                    />
                </article>
            </div>
        </AppContainer>
    );

};

export default LeaderboardPage;