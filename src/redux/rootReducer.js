import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";
import authReducer from "./slices/auth";
import conversationReducer from "./slices/conversation";
//Slices

const rootPeristConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //Whitelist: [],
  //Blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  conversation: conversationReducer,
});

export { rootPeristConfig, rootReducer };
