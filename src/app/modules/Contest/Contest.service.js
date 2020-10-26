import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const getLeaderboard = (id, page, limit) => {
    let url = ApiUrl.getUrl("getLeaderboard", [id, page, limit]);

    return Api.get(url);
};

export const getCurrentQuestion = (contestId) => {
    let url = ApiUrl.getUrl("getCurrentQuestion", [contestId]);

    return Api.get(url);
};

export const submitContestAnswer = (reqBody) => {
    let url = ApiUrl.getUrl("submitContestAnswer");

    return Api.post(url, reqBody);
};
