import { environment } from "environments/environment";

export class APIUrls {
    public static APIBaseURL = environment.apiURL;

    public static login = `${APIUrls.APIBaseURL}/login`;
}