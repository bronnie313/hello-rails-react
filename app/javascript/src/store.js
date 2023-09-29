import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './features/greeting/greetingSlice';

export const store = configureStore({
    reducer: {
        messages: greetingSlice,
    },
})