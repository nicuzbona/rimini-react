import react, { useContext } from "react";
import Context from "../../store/context";
import {
  startGoogleLogin,
  startFacebookLogin,
  startGithubLogin,
  startTwitterLogin,
} from "../../actions/auth";
import { makeStyles, mergeClasses } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { SvgIcon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // background: "url(./images/assets/auth/bg.jpg)",
    background:
      "linear-gradient(to bottom, rgba(181, 181, 181, 0.98), rgba(181, 181, 181, 0.90)), url(./images/assets/auth/bg.jpg) 1% 1%",
  },

  title: {
    width: "90%",
    height: "20%",
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "1.5em",
    fontWeight: 900,
    color: "#404040",
  },

  buttonsArea: {
    width: "65%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  fbRoot: {
    background: "#4267b2",
  },
  gRoot: {
    background: "white",
    color: "#404040",
    "&:hover": {
      background: "#f5f5eb",
    },
  },
  githubRoot: {
    background: "#24292e",
    color: "white",
    "&:hover": {
      background: "black",
    },
  },
  twitterRoot: {
    background: "rgb(113, 201, 248);",
    color: "white",
    "&:hover": {
      background: "rgb(29,161,242);",
    },
  },
  label: {
    display: "flex",
    justifyContent: "flex-start",
    textTransform: "none",
    fontSize: "1.05em",
  },
  startIcon: {
    marginRight: "10px",
  },
}));

export default function LogginScreen() {
  const classes = useStyles();
  const { globalState, globalDispatch } = useContext(Context);

  const googleLogin = () => {
    startGoogleLogin().then((result) => {
      globalDispatch({
        type: "LOGIN",
        payload: { ...result.additionalUserInfo.profile },
      });
    });
  };

  const facebookLogin = () => {
    startFacebookLogin().then((result) => {
      console.log("result", result);
      globalDispatch({
        type: "LOGIN",
        payload: { ...result.additionalUserInfo.profile },
      });
    });
  };

  const githubLogin = () => {
    startGithubLogin().then((result) => {
      console.log("result", result);
      globalDispatch({
        type: "LOGIN",
        payload: { ...result.additionalUserInfo.profile },
      });
    });
  };

  const twitterLogin = () => {
    startTwitterLogin().then((result) => {
      console.log("twitter login result", result);
      globalDispatch({
        type: "LOGIN",
        payload: { ...result.additionalUserInfo.profile },
      });
    });
  };
  return (
    <div className={classes.divRoot}>
      {/* this message is for development purposes only */}
      <span className={classes.title}>
        You need to log in in order to unlock this feature
      </span>
      <div className={classes.buttonsArea}>
        <Button
          variant="contained"
          color="primary"
          className={`${classes.label} ${classes.gRoot}`}
          onClick={googleLogin}
          startIcon={
            <SvgIcon viewBox="0 0 533.5 544.3" className={classes.startIcon}>
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </SvgIcon>
          }
        >
          Sign in with Google
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={facebookLogin}
          className={`${classes.label} ${classes.fbRoot}`}
          startIcon={
            <SvgIcon viewBox="0 0 512 512" className={classes.startIcon}>
              <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0" />
            </SvgIcon>
          }
        >
          Sign in with Facebook
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={githubLogin}
          className={`${classes.label} ${classes.githubRoot}`}
          startIcon={
            <SvgIcon viewBox="0 0 16 16" className={classes.startIcon}>
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </SvgIcon>
          }
        >
          Sign in with Github
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={twitterLogin}
          className={`${classes.label} ${classes.twitterRoot}`}
          startIcon={
            <SvgIcon viewBox="0 0 24 24" className={classes.startIcon}>
              <path
                fill="#fff"
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
              ></path>
            </SvgIcon>
          }
        >
          Sign in with Twitter
        </Button>
      </div>
    </div>
  );
}
