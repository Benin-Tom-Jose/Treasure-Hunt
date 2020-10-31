import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const getActiveContests = () => {
    let url = ApiUrl.getUrl("getActiveContests");

    return Api.get(url);
};

export const getContestRules = () => {
    // let url = ApiUrl.getUrl("getContestRules");

    // return Api.get(url);
    return Promise.resolve(CONTEST_RULES);
};

const CONTEST_RULES = [
    "The ranking will be based on who finishes the most questions, in minimum time.",
    "Answer should be in full forms. Format includes no spaces, all lower case and no special characters.",
    "Hints will be provided from time to time on the question page itself.",
    "Clock starts ticking once your account is created. This time will be taken into account in the leaderboard.",
    "The team deserves all rights to take necessary actions for smooth conduction of event.",
    "Google is your best friend. Yo Boolean!",
    "Dear hackers, we ban like hell :)"
];