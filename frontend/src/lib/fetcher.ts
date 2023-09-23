import axiosClient from "../config/AxiosClient"

const fetcher = async (url: string) => await axiosClient(url);

export default fetcher;