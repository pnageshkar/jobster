import { configureStore } from "@reduxjs/toolkit";
import allJobsSlice from "../features/alljobs/allJobsSlice";
import jobslice from "../features/job/jobslice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
    reducer : {
        user:userSlice,
        job: jobslice,
        alljobs: allJobsSlice,
    },
});
