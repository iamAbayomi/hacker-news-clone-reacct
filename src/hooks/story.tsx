import { useQuery } from "react-query";
import api from "../utils/api/index";
import { _errorHandler } from "../utils/helpers";

export const useGetNews = () => {
  const getNews = async () => {
    const response = await api.get(`topstories.json?print=pretty`);
    return response.data;
  };

  const onError = (err: any) => {
    _errorHandler(err);
  };

  const { data, isLoading, isFetching } = useQuery("news", getNews, {
    onError
  });
  let news = data?.data;
  return { news, isLoading: isLoading || isFetching };
};
