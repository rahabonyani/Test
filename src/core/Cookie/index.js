import Cookies from "js-cookie";

export const setCookies = (cookiesName, cookiesProps) => {
    let d = new Date();
    d.setTime(d.getTime() + 2 * 3600 * 1000);
    Cookies.set(cookiesName, cookiesProps, { path: "/", expires: d });
};

export const removeCookies = (cookiesName) => {
    Cookies.remove(cookiesName);
};
