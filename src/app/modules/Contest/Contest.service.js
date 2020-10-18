import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const getLeaderboard = (id, page, limit) => {
    let url = ApiUrl.getUrl("getLeaderboard", [id, page, limit]);

    return Promise.resolve(LEADERBOARD);
    // return Api.get(url);
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
