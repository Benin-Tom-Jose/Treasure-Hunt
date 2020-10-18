import React from 'react';
import Proptypes from 'prop-types';
import { Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import { formatDate, getAsset } from '../../../config/Utils';

import './ContestCard.scss';


const ContestCard = (props) => {

    return (
        <Card component="article" className="contest-card-wrapper">
            <CardMedia
                className="media"
                image={props.img ? props.img : getAsset("bg-landscape-2.jpg", "img")}
            />
            <CardContent className="card-content-wrapper">
                <h1 className="title">{props.title}</h1>
                <label className="label">Starts At</label>
                <h2 className="start">{formatDate(props.start, "MMM D, YYYY, hh : mm a")}</h2>
                <CardActions className="card-action-wrapper">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => props.onPlayClick(props.id)}
                    >
                        Play
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => props.onLearderboardClick(props.id)}
                    >
                        Leaderboard
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );

};

ContestCard.defaultProps = {
    id: '',
    title: '',
    img: '',
    start: '',
    onPlayClick: () => { },
    onLearderboardClick: () => { },
};

ContestCard.propTypes = {
    id: Proptypes.string,
    title: Proptypes.string,
    image: Proptypes.string,
    start: Proptypes.string,
    onPlayClick: Proptypes.func,
    onLearderboardClick: Proptypes.func
};

export default ContestCard;