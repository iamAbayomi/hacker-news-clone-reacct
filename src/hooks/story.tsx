import { useQuery } from "react-query";
import { INewsItem } from "../types";
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

export const useGetNewsItemm = (id: string) => {
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

export const useGetNewsItem = (id?: string) => {
  let detailedNewsItem: any = [];

  const getNewsItem = async () => {
    const firstResponse = await api.get(`topstories.json?print=pretty`);
    let allNewsId = firstResponse.data;
    console.log("allNews id", allNewsId);

    // const response = await api.get(`/item/${id}.json?print=pretty`);
    // console.log("single news item", response.data);

    // allNewsId.map(async (item: any, index: number) => {
    //   const response = await api.get(`/item/${item}.json?print=pretty`);
    //   detailedNewsItem[index] = response.data;
    //   //console.log("item", item, "response ", response.data);
    // });

    for (let i = 0; i < 30; i++) {
      const response = await api.get(`/item/${allNewsId[i]}.json?print=pretty`);
      detailedNewsItem[i] = response.data;
    }

    return detailedNewsItem;
    //return response.data;
  };

  const { data, isLoading, isFetching } = useQuery("news", getNewsItem, {
    onError
  });
  let newsItem: INewsItem[] = data;
  return { newsItem, isLoading: isLoading || isFetching };
};
