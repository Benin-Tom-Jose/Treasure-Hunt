import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Rating } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogContent, Icon, IconButton, TextField } from '@material-ui/core';

import { submitFeedback } from '../Feedback.service';
import { setIsFeedbackModalOpen } from '../Feedback.actions';

import './FeedbackForm.scss';


const FeedbackForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const showFeedback = useSelector(state => state.FeedbackReducer.showFeedbackModal);

    useEffect(() => {
        if (showFeedback) {
            setTimeout(() => {
                setIsModalOpen(true);
            }, 20000)
        }
    }, [showFeedback])

    const handleClose = () => {
        setIsModalOpen(false);
        dispatch(setIsFeedbackModalOpen(false));
    };

    const handleRatingChange = (e, value) => {
        setRating(value);
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const validate = ({ rating }) => {
        let isValid = true;

        if (rating === 0) {
            enqueueSnackbar("Please add a rating.", { variant: 'warning' });
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = () => {
        let reqBody = { feedback, rating };
        if (!validate(reqBody)) return;
        submitFeedback(reqBody)
            .then(res => {
                enqueueSnackbar("Thank you for you valuable feedback.", { variant: 'success' });
                handleClose();
            })
            .catch(error => {
                enqueueSnackbar(JSON.stringify(error), { variant: 'error' });
            });
    };

    return (
        <Dialog
            open={isModalOpen}
            className="feedback-form-wrapper"
            fullWidth
            maxWidth="xs"
        >
            <DialogContent className="feedback-form-container">
                <IconButton onClick={handleClose} className="btn-close"><Icon>close</Icon></IconButton>
                <p className="content">How would you rate your experience?</p>
                <Rating
                    name="rating"
                    defaultValue={0}
                    value={rating}
                    precision={0.25}
                    onChange={handleRatingChange}
                    icon={
                        <Icon fontSize="large">favorite</Icon>
                    }
                />
                <TextField
                    className="comments"
                    label="Comments"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    fullWidth
                    multiline
                    rows={2}
                    rowsMax={4}
                />
                <Button color="primary" variant="contained" onClick={handleSubmit}>Send</Button>
            </DialogContent>
        </Dialog>
    );
};

export default FeedbackForm;