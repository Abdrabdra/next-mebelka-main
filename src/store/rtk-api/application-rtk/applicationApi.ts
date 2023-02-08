import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "../rtkApi"

export default createApi({
	reducerPath: "applicationApi",
	baseQuery: baseQuery,
	tagTypes: ["application"],
	endpoints: () => ({})
})
