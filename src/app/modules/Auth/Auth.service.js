import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const getGoogleAccessToken = (tokenId) => {
    let url = ApiUrl.getUrl("googleLogin");
    let reqBody = { tokenId };

    return Api.post(url, reqBody);
};