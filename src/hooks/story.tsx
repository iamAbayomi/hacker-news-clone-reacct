import { useQuery } from "react-query";
import api from "../utils/api/index";
import { _errorHandler } from "../utils/helpers";

const onError = (err: any) => {
  _errorHandler(err);
};

export const useGetNews = () => {
  const getNews = async () => {
    const response = await api.get(`topstories.json?print=pretty`);
    return response.data;
  };

  const { data, isLoading, isFetching } = useQuery("news", getNews, {
    onError
  });
  let news = data;
  return { news, isLoading: isLoading || isFetching };
};

export const useGetNewsItem = (id: string) => {
  const getNewsItem = async () => {
    const response = await api.get(`/item/${id}.json?print=pretty`);
    return response.data;
  };

  const { data, isLoading, isFetching } = useQuery("news", getNewsItem, {
    onError
  });
  let newsItem = data;
  return { newsItem, isLoading, isFetching };
};

function useGetAllNewsItem() {
  const { news, isLoading } = useGetNews();
  let newsItem: any = [];
  let i = 0;

  newsItem.forEach((item: any) => {
    i++;
    //let {} = useGetNewsItem(news[i]);
  });
}
