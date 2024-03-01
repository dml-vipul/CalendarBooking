// import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query';
// import { REFRESH_TOKEN, getBaseUrl } from './constants';
// import { getLocalStroage, setLocalStorage } from './asyncStorage/storage';

// const baseQuery = fetchBaseQuery({
//     baseUrl: getBaseUrl(),
//     prepareHeaders: async (headers, { }) => {
//         // Retrieve the token from AsyncStorage
//         const token = await getLocalStroage('token');
//         // Set the Authorization header if a token is available
//         console.log('token :: header =>', token);
//         if (token) {
//             headers.set('Authorization', `Bearer ${token}`);
//         }
//         // Add other common headers if needed
//         // headers.set('content-type', 'application/json');
//         return headers;
//     },
//     timeout: 30000,
// });

// const baseQueryInstance: BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions);
//     console.log(result, "result")
//     if (result.error && result.error.status === 401) {
//         // try to get a new token
//         const refreshResult = await baseQuery(REFRESH_TOKEN, api, extraOptions);
//         // console.log("refreshResult =>", JSON.stringify(refreshResult))
//         if (refreshResult.data) {
//             // store the new token
//             setLocalStorage('token', refreshResult.data);
//             // retry the initial query
//             result = await baseQuery(args, api, extraOptions);
//         } else {

//         }
//     }
//     if (result.error && result.error.status === 405) {

//     }
//     return result;
// };
// export default baseQueryInstance;
