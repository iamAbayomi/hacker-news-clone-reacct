import api from "@/utils/api";
import { _errorHandler } from "@/utils/helpers";
import { useInfiniteQuery } from "react-query";

const onError = (err: any) => {
  _errorHandler(err);
};
export const useGetCustomStories = (url: string, queryName: string) => {
  let customStoriesResponse: any[] = [];
  const getCustomStories = async (step: number) => {
    const storiesresponse = await api.get(`${url}.json?print=pretty`);
    let storiesresponseID = storiesresponse.data;
    for (let i = 0; i < step; i++) {
      const response = await api.get(
        `/item/${storiesresponseID[i]}.json?print=pretty`
      );
      customStoriesResponse[i] = response.data;
    }
    return customStoriesResponse;
  };

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      queryName,
      ({ pageParam = 30 }) => getCustomStories(pageParam),
      {
        onError,
        getNextPageParam: (lastPage, pages) => {
          return lastPage ? pages.length + 30 : null;
        }
      }
    );

  let customStories: any[] = [];
  data?.pages.map((page) => page.map((item: any) => customStories.push(item)));
  return {
    customStories,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  };
};
