import { SinglePost } from "../home/components/SinglePost";
import { UserProfile } from "./components/UserProfile";
import { useDispatch, useSelector } from "react-redux";


export function Profile(){
  const { userPosts } = useSelector((state) => state.post);
  
  
  return (
    <div className="w-5/6 xl:w-full px-1 mb-8">
      <div className="w-full">
          <UserProfile />
          {userPosts.length > 0 ? (
            [...userPosts]
              .reverse()
              .map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <div className="text-center font-bold text-lg mt-10 text-slate-500">
              <h1>No Post</h1>
            </div>
          )}
        </div>
    </div>
  )
}

