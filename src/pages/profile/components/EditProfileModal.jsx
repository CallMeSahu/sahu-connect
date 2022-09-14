import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { closeEditProfileModal } from "../profileModalSlice";
import { updateUserInfo } from "../userSlice";

export function EditProfileModal(){
  const { editProfileModal } = useSelector((state) => state.profileModal);
  const { token } = useSelector((state) => state.auth);
  const { authUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [updateUserData, setUpdateUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const updateUserInforHandler = () => {
    dispatch(updateUserInfo({ userData: { ...updateUserData }, token: token }));
    dispatch(closeEditProfileModal());
    toast.success("Profile Updated!");
  };

  useEffect(() => {
    setUpdateUserData({ ...authUser });
  }, [authUser]);

  const updateImageHandler = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sls1eclu");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dus3r5adq/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    setUpdateUserData({ ...updateImageHandler, avatar: file.secure_url });
    setLoading(false);
  };
  return(
    <div
      className={`container fixed justify-center items-center ${
        editProfileModal ? "flex" : "hidden"
      }`}
    >
      <div className="w-1/3 bg-white p-3 flex flex-col rounded-lg sm:w-full md:w-3/4">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg md:text-md font-bold">Edit Profile</h2>
          <button
            className=" border-blue-500 px-1.5"
            onClick={() => {
              dispatch(closeEditProfileModal());
            }}
          >
            <i className="bx bx-x text-lg"></i>
          </button>
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-md md:text-md">
              Avatar:
            </div>
              <div className="w-9/12 relative">
                <img
                  src={updateUserData?.avatar}
                  alt="user_image"
                  className="h-20 w-20 object-cover rounded-full sm:h-10 sm:w-10 "
                />
                <i className="text-slate-800 bx bxs-camera absolute top-12 left-14 text-lg cursor-pointer bg-white rounded-full px-1 border"></i>
                <input
                  type="file"
                  className="absolute opacity-0 w-8  top-7 left-7 cursor-pointer"
                  accept="image/jpeg, image/png, image/svg+xml, image/jpg, image/webp, image/apng, image/avif, image/gif,"
                  onChange={updateImageHandler}
                />
              </div>
          </div>
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-md md:text-md">
              FirstName:
            </div>
            <input
              value={updateUserData.firstName}
              onChange={(e) =>
                setUpdateUserData({
                  ...updateUserData,
                  firstName: e.target.value,
                })
              }
              className="border focus:outline-none py-2 px-3 w-9/12 rounded-md text-sm"
            />
          </div>
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-md md:text-md">
              LastName:
            </div>
            <input
              value={updateUserData.lastName}
              onChange={(e) =>
                setUpdateUserData({
                  ...updateUserData,
                  lastName: e.target.value,
                })
              }
              className="border focus:outline-none py-2 px-3 w-9/12 rounded-md text-sm"
            />
          </div>
          <div className="flex justify-between gap-4 mb-3">
            <div className="gap-2 text-slate-500 text-md md:text-md">Bio:</div>
            <input
              value={updateUserData.bio}
              onChange={(e) =>
                setUpdateUserData({ ...updateUserData, bio: e.target.value })
              }
              className="border focus:outline-none py-2 px-3 w-9/12 rounded-md text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              className={
                "w-full mt-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-2"
              }
              onClick={() => updateUserInforHandler()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

