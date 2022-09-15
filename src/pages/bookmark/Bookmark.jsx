/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../home/components/SinglePost";

export function Bookmark(){
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const [bookmark, setBookmark] = useState(allPosts);

  const bookmarkPosts = allPosts.filter((post) =>
    post.bookmark.some((item) => item.username === user.username)
  );

  useEffect(() => {
    setBookmark(bookmarkPosts);
  }, [allPosts]);

  return (
    <div className="w-5/6 xl:w-full px-1 h-full">
      {bookmark.length > 0 ? (
        bookmark.map((post) => <SinglePost key={post._id} post={post} />)
      ) : (
        <div className="text-center font-bold text-lg mt-3 text-slate-500">
          <h1>No Bookmarks</h1>
        </div>
      )}
    </div>
  );
}
