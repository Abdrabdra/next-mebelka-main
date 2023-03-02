import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithReauth } from "../rtkApi";

export default createApi({
  reducerPath: "applicationApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["application"],
  endpoints: () => ({}),
});
