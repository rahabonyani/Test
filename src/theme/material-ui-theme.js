import { createTheme } from "@material-ui/core/styles";

export default createTheme({
    direction: "rtl",
    shadows: Array(25).fill("none"),
    palette: {
        primary: {
            main: "#64B5F6",
            dark: "#527DA3",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: ["IRANSansWeb", "sans-serif"].join(","),
    },
});
