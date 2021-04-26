import firebase from "firebase";
import ThemeActions from "@redux/reducers/theme/actions";

const darkColor = "#222222";
const lightColor = "#FEFEFE";

export const initializeTheme = () => {
  let store =
    typeof window !== "undefined" ? window.__NEXT_REDUX_WRAPPER_STORE__ : false;
  const activeTheme = store?.getState().theme.theme;
  let root = document.documentElement;
  console.log("initializing theme", activeTheme);
  if (activeTheme === "light") {
    store.dispatch(ThemeActions.setTheme("light"));
    root.style.setProperty("--theme", lightColor);
    root.style.setProperty("--themeText", darkColor);
  } else {
    store.dispatch(ThemeActions.setTheme("dark"));
    root.style.setProperty("--theme", darkColor);
    root.style.setProperty("--themeText", lightColor);
  }
};

export const switchTheme = () => {
  let store =
    typeof window !== "undefined" ? window.__NEXT_REDUX_WRAPPER_STORE__ : false;
  const activeTheme = store?.getState().theme.theme;
  let root = document.documentElement;
  if (activeTheme === "light") {
    store.dispatch(ThemeActions.setTheme("dark"));
    root.style.setProperty("--theme", darkColor);
    root.style.setProperty("--themeText", lightColor);
  } else {
    store.dispatch(ThemeActions.setTheme("light"));
    root.style.setProperty("--theme", lightColor);
    root.style.setProperty("--themeText", darkColor);
  }
};

export const getAuthState = async () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("User just logged innn", user);
      var uid = user.uid;
      // ...
    } else {
      console.log("User just logged outttt", user);
    }
  });
};

export const signOut = async () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });
};
