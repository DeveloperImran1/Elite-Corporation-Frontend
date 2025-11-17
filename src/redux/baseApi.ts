import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["USER", "ORDER", "USERS", "ORDERS", "ADMIN_STATS", "ME", "REVIEW"],
  endpoints: () => ({}),
});
