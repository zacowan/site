"use client";
import PostCard from "@/components/PostCard";
import Anchor from "./Anchor";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

const MEDIUM_PROFILE_LINK = "https://medium.com/@zacowan";
const MEDIUM_RSS_FEED_URL = "https://medium.com/feed/@zacowan";
const RSS_2_JSON_URL = "https://api.rss2json.com/v1/api.json";

const RECENT_POSTS_LIMIT = 3;

interface RSSFeedItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: unknown;
  categories: string[];
}

const getFeedItems = async () => {
  const feed = await fetch(`${RSS_2_JSON_URL}?rss_url=${MEDIUM_RSS_FEED_URL}`);
  const json = await feed.json();
  const items = json.items as RSSFeedItem[];
  const itemsLimit =
    items.length < RECENT_POSTS_LIMIT ? items.length : RECENT_POSTS_LIMIT;
  return items.slice(0, itemsLimit);
};

interface RecentPostsProps extends ComponentPropsWithoutRef<"div"> {}

export default function RecentPosts(props: RecentPostsProps) {
  const [loading, setLoading] = useState(false);
  const [feedItems, setFeedItems] = useState<RSSFeedItem[]>([]);

  useEffect(() => {
    const call = async () => {
      setLoading(true);
      try {
        const items = await getFeedItems();
        setFeedItems(items);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    call();
  }, []);

  return (
    <div {...props}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {feedItems.length === 0 ? (
            <p>There&apos;s nothing here.</p>
          ) : (
            <>
              <ul className="space-y-4 block">
                {feedItems.map((item) => (
                  <li key={item.guid}>
                    <PostCard
                      href={item.link}
                      title={item.title}
                      date={item.pubDate}
                      categories={item.categories}
                    />
                  </li>
                ))}
              </ul>
              <Anchor className="block mt-4" href={MEDIUM_PROFILE_LINK}>
                View All
              </Anchor>
            </>
          )}
        </>
      )}
    </div>
  );
}
