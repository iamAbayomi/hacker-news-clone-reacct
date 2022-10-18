import { useInfiniteQuery, useQuery } from "react-query";
import { INewsItem } from "../types";
import api from "../utils/api/index";
import { _errorHandler } from "../utils/helpers";

const onError = (err: any) => {
  _errorHandler(err);
};

export const useGetNewsItem = (step: number) => {
  let detailedNewsItem: any = [];

  const getNewsItem = async () => {
    const firstResponse = await api.get(`topstories.json?print=pretty`);
    let allNewsId = firstResponse.data;

    for (let i = 0; i < step; i++) {
      const response = await api.get(`/item/${allNewsId[i]}.json?print=pretty`);
      detailedNewsItem[i] = response.data;
    }
    return detailedNewsItem;
  };

  const { data, isLoading, isFetching } = useQuery(
    ["news", step],
    getNewsItem,
    {
      onError
    }
  );
  let newsItem: INewsItem[] = data;
  return { newsItem, isLoading: isLoading || isFetching };
};

export const useGetPaginatedNewsItem = () => {
  let detailedNewsItem: any = [];
  const getNewsItem = async (step: number) => {
    const firstResponse = await api.get(`topstories.json?print=pretty`);
    let allNewsId = firstResponse.data;
    for (let i = 0; i < step; i++) {
      const response = await api.get(`/item/${allNewsId[i]}.json?print=pretty`);
      detailedNewsItem[i] = response.data;
    }
    return detailedNewsItem;
  };

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("news", ({ pageParam = 30 }) => getNewsItem(pageParam), {
      onError,
      getNextPageParam: (lastPage, pages) => {
        return lastPage ? pages.length + 30 : null;
      }
    });
  let newsItem: any[] = [];

  // data &&
  data?.pages.map((page) => page.map((item: any) => newsItem.push(item)));
  return {
    newsItem,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage
  };
};

export const useGetNewStories = () => {
  let newStoriesResponse: any = [];
  const getNewStories = async (step: number) => {
    const allNewStories = await api.get(`newstories.json?print=pretty`);
    let allNewStoriesID = allNewStories.data;
    for (let i = 0; i < step; i++) {
      const response = await api.get(
        `/item/${allNewStoriesID[i]}.json?print=pretty`
      );
      newStoriesResponse[i] = response.data;
    }
    return newStoriesResponse;
  };

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      "newstories",
      ({ pageParam = 30 }) => getNewStories(pageParam),
      {
        onError,
        getNextPageParam: (lastPage, pages) => {
          return lastPage ? pages.length + 30 : null;
        }
      }
    );
  let newStories: any[] = [];
  data?.pages.map((page) => page.map((item: any) => newStories.push(item)));
  return {
    newStories,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage
  };
};
