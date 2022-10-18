import api from "@/utils/api";
import { _errorHandler } from "@/utils/helpers";
import { useInfiniteQuery } from "react-query";

const onError = (err: any) => {
  _errorHandler(err);
};

export const useGetShowStories = () => {
  let showStoriesResponse: any[] = [];
  const getShowStories = async (step: number) => {
    const storiesresponse = await api.get(`showstories.json?print=pretty`);
    let storiesresponseID = storiesresponse.data;
    for (let i = 0; i < step; i++) {
      const resposne = await api.get(
        `/item/${storiesresponseID[i]}.json?print=pretty`
      );
      showStoriesResponse[i] = resposne.data;
    }
    return showStoriesResponse;
  };

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      "showStories",
      ({ pageParam = 30 }) => getShowStories(pageParam),
      {
        onError,
        getNextPageParam: (lastPage, pages) => {
          return lastPage ? pages.length + 30 : null;
        }
      }
    );

  let showStories: any[] = [];

  data?.pages.map((page) => page.map((item: any) => showStories.push(item)));
  return {
    showStories,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  };
};
