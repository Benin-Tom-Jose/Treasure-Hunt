import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const submitFeedback = (reqBody) => {
    let url = ApiUrl.getUrl("submitFeedback");

    return Api.post(url, reqBody);
};