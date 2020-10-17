import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const getActiveContests = () => {
    let url = ApiUrl.getUrl("getActiveContests");

    return Promise.resolve(ACTIVE_CONTEST);
    // return Api.get(url);
};

const ACTIVE_CONTEST = [
    {
        "active": true,
        "started": false,
        "_id": "5f676002598dbcc7eeb02c26",
        "contestName": "Alohamora",
        "startDate": "2020-09-28T16:00:00.000Z"
    }
]