import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage; // => Refers to this object inside the Redux store:

export const retrievePopularDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDishes
);

export const retrieveNewDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
);