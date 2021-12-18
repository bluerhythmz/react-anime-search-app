import axios from "axios";
import useAsync from "./useAsync";

export default function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return axios.get(url).then(res => {
      if (res.status === 200) return res
      return res.then(json => Promise.reject(json))
    }, dependencies)
  })
}