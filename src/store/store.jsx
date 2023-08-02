import { configureStore } from "@reduxjs/toolkit";

import epinReducer from './epinSlice';
import packageReducer from './packageSlice';
import authReducer from './authSlice';
import memberReducer from './memberSlice';
import earningReducer from './earningSlice';
import withdrawlReducer from './withdrawlSlice';
import geneologyReducer from "./geneologySlice";
import userSlice from "./userSlice";
import directSponsorsSlice from "./directSponsorsSlice";
import homeSlice from "./homeSlice";

const store = configureStore({
    reducer: {
        epin: epinReducer,
        package: packageReducer,
        auth: authReducer,
        member: memberReducer,
        earning: earningReducer,
        withdrawl: withdrawlReducer,
        geneology: geneologyReducer,
        user: userSlice,
        directSponsor: directSponsorsSlice,
        home: homeSlice,
    }
});

export default store;