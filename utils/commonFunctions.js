import firebase from "firebase";
import db from "@config/firebaseConfig";
import ThemeActions from "@redux/reducers/theme/actions";
import AuthActions from "@redux/reducers/auth/actions";
import _ from "lodash-es";
import { message } from "antd";
import fetchHelper from "./apiHelper";
import siteConfig from "@config/siteConfig";

const darkColor = "#222222";
const lightColor = "#FEFEFE";

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const validateImage = (file) => {
  const isJpg = file.type === "image/jpeg";
  if (!isJpg) {
    message.error("You can only upload JPG file!");
    return;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 3MB!");
  }
  return isJpg && isLt2M;
};

export const initializeTheme = () => {
  let store =
    typeof window !== "undefined" ? window.__NEXT_REDUX_WRAPPER_STORE__ : false;
  const activeTheme = store?.getState().theme.theme;
  let root = document.documentElement;
  // console.log("initializing theme", activeTheme);
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
  return new Promise(async (resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(false);
      }
    });
  });
};

export const getUpdatedUser = async (fauth, callback = () => {}) => {
  let store =
    typeof window !== "undefined" ? window.__NEXT_REDUX_WRAPPER_STORE__ : false;

  await db
    .collection("users")
    .doc(fauth.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        store.dispatch(AuthActions.setUserData(fauth, doc.data()));
        callback(true);
      } else {
        store.dispatch(AuthActions.setUserData({}, {}));
        callback(true);
      }
    })
    .catch((error) => {
      console.log("Error getting user Doc:", error);
      callback(false);
    });
};

export const signOut = async () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      let store =
        typeof window !== "undefined"
          ? window.__NEXT_REDUX_WRAPPER_STORE__
          : false;
      store.dispatch(AuthActions.setUserData({}, {}));
      return true;
    })
    .catch((error) => {
      return error;
    });
};

export const getActiveSource = (src, isActive = false) => {
  if (isActive) {
    let result = src;
    if (_.endsWith(src, "svg")) {
      result = _.replace(src, ".svg", "-active.svg");
    }
    if (_.endsWith(src, "png")) {
      result = _.replace(src, ".png", "-active.png");
    }
    if (_.endsWith(src, "jpg")) {
      result = _.replace(src, ".jpg", "-active.jpg");
    }
    if (_.endsWith(src, "jpeg")) {
      result = _.replace(src, ".jpeg", "-active.jpeg");
    }
    return result;
  }
  return src;
};

export const uploadPhoto = async (imageToUpload, id) => {
  return new Promise(async (resolve, reject) => {
    var fd = new FormData();
    fd.append("file", imageToUpload);
    fd.append("upload_preset", "profile_pic");
    fd.append("public_id", id);

    let url = siteConfig.cloud.apiBaseUrl;
    try {
      const res = await fetchHelper(url, fd, "POST", {}, true);
      resolve(res);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
