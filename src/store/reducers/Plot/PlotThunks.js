import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootAPI } from "../../../api/RootAPI";
import { getCategories } from "../Categories/CategoriesThunks";

export const getPlotData = createAsyncThunk("getPlotData", async (_, thunkAPI) => {
    const { selectedCountry } = thunkAPI.getState().countryReducer;
    const { categories } = thunkAPI.getState().categoriesReducer;
    const { selectedRange } = thunkAPI.getState().rangeDateReducer;

    try {
        const response = await rootAPI.getPlotData({
            countryId: selectedCountry.id,
            dateFrom: selectedRange[0].toLocaleDateString("ru-RU"),
            dateTo: selectedRange[1].toLocaleDateString("ru-RU")
        });
        return { plot: response.data.data, categories };
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

