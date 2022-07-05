import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";


import { getMovies } from "../../Store/Actions/Movies";
import {
  selectMovieInfo,
  selectMovies,
  selectSearchKeyword,
} from "../../Store/reduxSelector";
import MovieCard from "../MovieCard";

export default function Movies() {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const data = useSelector(selectMovies);
  const {
    ["page-num-requested"]: requestedPage,
    ["total-content-items"]: totalMovies,
  } = useSelector(selectMovieInfo);
  const searchKeyword = useSelector(selectSearchKeyword);

  const hasMore = Number(totalMovies) > data?.length;

  React.useEffect(() => {
    getPaginatedMovies();
  }, []);

  const getPaginatedMovies = (newPage) => {
    dispatch(getMovies(newPage || page));
  };

  const handlePagination = () => {
    const newPage = page + 1;
    const shouldFetchMore =
      !searchKeyword && hasMore && newPage > Number(requestedPage);
    if (shouldFetchMore) {
      getPaginatedMovies(newPage);
      setPage(newPage);
    }
  };

  return (
    <div className="p-4">
      {data?.length ? (
        <InfiniteScroll
          className="grid grid-cols-3 md:grid-cols-5 gap-5"
          dataLength={data.length}
          next={handlePagination}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {data?.map((item, index) => (
            <MovieCard
              key={index}
              title={item?.name}
              cover={require(`../../Assets/${item?.["poster-image"]}`)}
            />
          ))}
        </InfiniteScroll>
      ) : (
        <h3 className="text-white">No Data Found!</h3>
      )}
    </div>
  );
}
