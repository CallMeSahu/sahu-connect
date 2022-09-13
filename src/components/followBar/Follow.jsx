import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { followUserHandler } from "../../pages/authentication/authSlice";
import { useNavigate } from "react-router-dom";

export function Follow(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const [suggestedUser, setSuggestedUser] = useState([]);

  useEffect(() => {
    setSuggestedUser(
      allUsers
        ?.filter((item) => item.username !== user.username)
        ?.filter(
          (item) => !user.following.find((itemTwo) => itemTwo._id === item._id)
        )
        ?.slice(0, 4)
    );
  }, [user, allUsers]);

  const followerHandler = (_id) => {
    dispatch(followUserHandler({ followUserId: _id, token: token }));
  };

  return(
    <div className="w-full px-2 pb-2 lg:hidden sticky top-0 lg:w-0">
      <div className="xl:mx-1 mt-10 mr-10 bg-white rounded-md shadow border px-4 pb-3">
        <h1 className="py-4 font-semibold px-3">Suggestions</h1>
        {suggestedUser?.length > 0 ? (
          suggestedUser.map((suggestedUser) => (
            <div key={suggestedUser._id}>
              <div className="flex border-t-2 py-2 px-2 hover:bg-slate-50">
                <div className="w-1/6">
                  <img
                    className="h-9 w-9 rounded-full self-cente cursor-pointer object-cover "
                    src={suggestedUser.avatar}
                    alt={suggestedUser.avatar}
                  />
                </div>
                <div className="flex justify-between w-5/6 cursor-pointer ">
                  <div
                    className="flex flex-col cursor-pointer"
                    onClick={() => {
                      user.username === suggestedUser?.username
                        ? navigate("/profile")
                        : navigate(`/profile/${suggestedUser.username}`);
                    }}
                  >
                    <span className="text-sm font-semibold">{`${suggestedUser.firstName} ${suggestedUser.lastName}`}</span>
                    <span className="text-xs">{suggestedUser.username}</span>
                  </div>
                  <button
                    onClick={() => followerHandler(suggestedUser._id)}
                    className="py-1 border px-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
                  >
                    + Follow
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-slate-500 text-center font-semibold pb-5">
            No suggestion
          </div>
        )}
      </div>
    </div>
  )
}

