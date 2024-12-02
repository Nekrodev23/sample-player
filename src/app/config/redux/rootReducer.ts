import { combineReducers } from "@reduxjs/toolkit";
import { reducer as slides } from "../../../entities/slide/model";

export const rootReducer = combineReducers({ slides });
