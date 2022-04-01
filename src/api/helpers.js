// import axios from "ts-axios-new";

// const ERR_OK = 0;

// // export function get(url) {
// //   return function (params = {}) {
// //     return axios
// //       .get(url, { params })
// //       .then((res) => {
// //         const { errno, data } = res.data;
// //         if (errno === ERR_OK) {
// //           return data;
// //         }
// //       })
// //       .catch(() => {});
// //   };
// // }
// export function get(url) {
//   return async function (params = {}) {
//     return axios
//       .get(url, { params })
//       .then((res) => {
//         const { errno, data } = res.data;
//         if (errno === ERR_OK) {
//           return data;
//         }
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   };
// }

import axios from "ts-axios-new";

const baseUrl = "/";
const ERR_OK = 0;

export function get(url) {
  return function (params = {}) {
    return axios
      .get(baseUrl + url, {
        params,
      })
      .then((res) => {
        const { errno, data } = res.data;
        if (errno === ERR_OK) {
          return data;
        }
      })
      .catch((e) => {});
  };
}
