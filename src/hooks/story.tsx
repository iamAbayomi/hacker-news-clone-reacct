import { useQuery } from "react-query";
import { INewsItem } from "../types";
import api from "../utils/api/index";
import { _errorHandler } from "../utils/helpers";

const onError = (err: any) => {
  _errorHandler(err);
};

export const useGetNewsItem = (id?: string) => {
  let detailedNewsItem: any = [];

  const getNewsItem = async () => {
    const firstResponse = await api.get(`topstories.json?print=pretty`);
    let allNewsId = firstResponse.data;

    for (let i = 0; i < 30; i++) {
      const response = await api.get(`/item/${allNewsId[i]}.json?print=pretty`);
      detailedNewsItem[i] = response.data;
    }
    return detailedNewsItem;
  };

  const { data, isLoading, isFetching } = useQuery("news", getNewsItem, {
    onError
  });
  let newsItem: INewsItem[] = data;
  return { newsItem, isLoading: isLoading || isFetching };
};
