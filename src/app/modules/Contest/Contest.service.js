import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const getLeaderboard = (id, page, limit) => {
    let url = ApiUrl.getUrl("getLeaderboard", [id, page, limit]);

    return Promise.resolve(LEADERBOARD);
    // return Api.get(url);
};

export const getCurrentQuestion = (contestId) => {
    let url = ApiUrl.getUrl("getCurrentQuestion", [contestId]);

    return Promise.resolve(CURRENT_QUESTION);
    // return Api.get(url);
};

export const submitContestAnswer = (reqBody) => {
    let url = ApiUrl.getUrl("submitContestAnswer");

    return Promise.resolve(true);
    // return Api.post(url, reqBody);
};

const LEADERBOARD = {
    "totalPages": 2,
    "leaderBoard": [
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Sebin vincent",
            "level": 4,
            "completedIn": "2020-09-26T10:40:16.753Z"
        },
        {
            "name": "Benin Tom Jose",
            "level": 4,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
        {
            "name": "Anand C",
            "level": 4,
            "completedIn": "2020-09-26T12:40:16.753Z"
        },
        {
            "name": "Amjad S",
            "level": 3,
            "completedIn": "2020-09-26T11:40:16.753Z"
        },
    ]
};

const CURRENT_QUESTION = {
    "contestId": "5f684e30cb92acde514be75e",
    "questionId": "5f6ee35e1444e7caddff4028",
    "question": "What is your name?",
    "imageUrl": "https://cdn.eso.org/images/thumb300y/eso1907a.jpg",
    "level": 1,
    "clues": [
        {
            "number": 1,
            "clueBody": "Clue 1",
            "image": "https://cdn.eso.org/images/thumb300y/eso1907a.jpg"
        },
        {
            "number": 2,
            "clueBody": "Clue 1",
            "image": "https://cdn.eso.org/images/thumb300y/eso1907a.jpg"
        }
    ],
    "lastQuestion": false
};
