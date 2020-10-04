import Api from "../../../config/Api";
import ApiUrl from "../../../config/ApiUrl";

export const getGoogleAccessToken = (tokenId) => {
    let url = ApiUrl.getUrl("googleLogin");
    let ReqBody = { tokenId };

    return Api.post(url, ReqBody);
};