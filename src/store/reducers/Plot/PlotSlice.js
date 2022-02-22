import { createSlice } from "@reduxjs/toolkit";
import { parsePlot } from "../../../utils/parsePlot";
import { SubCategories } from "../Categories/SubCategories";
import { getPlotData } from "./PlotThunks";

const initialState = {
    loading: false,
    error: "",
    plot: { datasets: [], labels: [] },
};

export const PlotSlice = createSlice({
    name: "plot",
    initialState,
    extraReducers: {
        [getPlotData.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.plot = parsePlot({ 
                plot: action.payload.plot, 
                categories: action.payload.categories 
            });
        },
        [getPlotData.pending.type]: (state, action) => {
            state.loading = true;
        },
        [getPlotData.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const plotReducer = PlotSlice.reducer;
