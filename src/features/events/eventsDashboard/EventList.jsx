import React from "react";
import EventListItem from "./EventListItem";
import infiniteScroll from "react-infinite-scroller";
import InfiniteScroll from "react-infinite-scroller";

export default function EventList({
  events,
  getNextEvents,
  loading,
  moreEvents,
}) {
  return (
    <>
      {events.length !== 0 && (
        <InfiniteScroll
          pageStart={0}
          loadMore={getNextEvents}
          hasMore={!loading && moreEvents}
          initialLoad={false}
        >
          {events.map((event) => (
            <EventListItem event={event} key={event.id} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}
