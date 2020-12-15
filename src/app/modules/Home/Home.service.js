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
    "You can try your luck as much as you want for each question. And if you are tired, come again after sometime. We will wait for you at the same level.",
    "Sometimes you have to connect all the clues and question statements to reach the answer.",
    "If you feel some pictures are too small, Why don’t you use your mousewheel to zoom in a bit?",
    "All answers should be submitted in lowercase. Format includes no spaces, no capital cases and no special characters. Eg. Windows 10 => windows10, ravi’s mother -> ravismother, 30/05/1997 -> 30051997 www.google.com => wwwgooglecom",
    "The ranking will be based on who finishes the most questions, in minimum time. So if you have some answer in your mind, it'll be costly to keep it there.",
    "Sometimes you might have to try all permutations of an expected answer to get the correct answer. Ex sachin, sachintendulkar, sachinrameshtendulkar",
    "Google is your best friend. And our images are in love with your Google Lens.",
    "Clues will be released from time to time not on regular intervals.",
    "Dear hackers, Don’t even think about it. We ban like hell :)",
    "And finally, if you find some questions are too difficult, remember it’s not a game of luck. It’s I N C O G N I T O ."
];