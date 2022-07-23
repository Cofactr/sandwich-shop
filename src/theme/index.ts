import {
    createTheme,
    createStyles,
    Theme,
    StyleRules
} from "@material-ui/core/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#366",
        },
        secondary: {
            main: "#cff"
        },
        background: {
            default: "#def"
        }
    }
});

export const styles: (theme: Theme) => StyleRules<string> = theme =>
    createStyles({
        root: {},
        app: {
            display: "flex",
            width: "100vw",
            flexDirection: "column",
            backgroundColor: theme.palette.background.default,
        },
        header: {
            display: "flex",
            width: "100%",
            height: "10vh",
            minHeight: "100px",
            backgroundColor: theme.palette.primary.main,
            alignItems: "center",
            
        },
        title: {
            color: theme.palette.secondary.main,
        },
        logo: {
            padding: "10px",
            marginLeft: "5vw",
            maxHeight: "10vh",
        },
        body: {
            display: "flex",
            width: "100%",
            height: "90vh",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        contentCard: {
            width: "40%",
            padding: "20px",
        }
    });
