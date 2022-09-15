import { SinglePost } from "../home/components/SinglePost";
import { useSelector } from "react-redux";

export function AllPost(){
  const { allPosts } = useSelector((state) => state.post);

  return (
    <div className="w-5/6 xl:w-full px-1">
      <div className="flex flex-col">
          {allPosts.length !== 0 ? (
            [...allPosts]
              .reverse()
              .map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <></>
          )}
        </div>
    </div>
  )  
}


