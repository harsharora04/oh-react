import axios from "axios";
const CancelToken = axios.CancelToken;

const SEARCH_URL = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_CUSTOM_SEARCH_KEY}&cx=${process.env.REACT_APP_GOOGLE_SEARCH_ENGINE_ID}`

export let searchViaTermCancelToken = undefined;
export const searchViaTerm = (params) => {
    if (searchViaTermCancelToken) searchViaTermCancelToken();
    let url = SEARCH_URL,
        options = {
            url,
            params,
            cancelToken: new CancelToken((c) => searchViaTermCancelToken = c)
        };
    return axios(options)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
            return false;
        })
        .catch(_ => false);
}