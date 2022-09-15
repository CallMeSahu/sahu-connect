import { useDispatch, useSelector } from "react-redux";
import { unfollowUser } from "../../pages/authentication/authSlice";
import { closeFollowingModal } from "./followModalSlice";

export function FollowingModal(){
  const { followingModal } = useSelector((state) => state.followingModal);
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const unfollowHandler = (_id) => {
    dispatch(unfollowUser({ followUserId: _id, token: token }));
  };

  return (
    <div
      className={`container fixed justify-center items-center ${
        followingModal ? "flex" : "hidden"
      }`}
    >
      <div className="w-1/3 bg-white px-3 py-3 flex flex-col rounded-lg sm:w-full md:w-3/4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Following</h2>
          <button
            className=" border-blue-400 px-1.5 py-0"
            onClick={() => {
              dispatch(closeFollowingModal());
            }}
          >
            <i className="bx bx-x text-lg"></i>
          </button>
        </div>
        {user?.following?.length > 0 ? (
          user.following.map((following) => (
            <div className="mt-6 w-full" key={following._id}>
              <ul className="flex flex-col">
                <li className="flex justify-between" key={following._id}>
                  <div className="flex gap-4">
                    <img
                      className={"h-10 w-10 object-cover rounded-full"}
                      src={following.avatar}
                      alt={following.avatar}
                    />
                    <div className="flex flex-col">
                      <h1>{`${following.firstName} ${following.lastName}`}</h1>
                      <span className="text-sm text-slate-500">
                        {following.username}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => unfollowHandler(following._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-0.5 cursor-pointer"
                  >
                    Unfollow
                  </button>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <div className="text-slate-500 mt-5 text-center font-semibold pb-5">
            No following
          </div>
        )}
      </div>
    </div>
  );
}