import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import axios from "axios";
import Swal from "sweetalert2";

export default function Profile() {
  const { currentUser } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser?.displayName);
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      if (!photoURL) {
        axios
          .patch(
            `${import.meta.env.VITE_BASE_API_URL}/user/${currentUser.email}`,
            {
              displayName,
              photoURL: currentUser.photoURL,
            }
          )
          .then((response) => {
            if (response.status === 200) {
              Swal.fire("Welcome!", "Profile Updated Successfully!", "success");
              setLoading(false);
            }
          });
      } else {
        const formData = new FormData();
        formData.append("image", photoURL);

        setLoading(true);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMAGE_UPLOAD_API
          }`,
          formData
        );

        if (response?.data?.status === 200) {
          const photoURL = response.data.data.display_url;

          axios
            .patch(
              `${import.meta.env.VITE_BASE_API_URL}/user/${currentUser.email}`,
              {
                displayName,
                photoURL,
              }
            )
            .then((response) => {
              if (response.status === 200) {
                Swal.fire(
                  "Welcome!",
                  "Profile Updated Successfully!",
                  "success"
                );
                setPhotoURL(photoURL);
                setLoading(false);
              }
            });
        }
      }
      setModal(false);
    } catch (error) {
      setLoading(false);
      Swal.fire("Ops!", error.message, "error");
    }
  };

  return (
    <div className="text-center">
      <div className="max-w-7xl mx-auto p-10 md:p-20 flex justify-center items-center">
        <div>
          <img
            src={photoURL}
            alt="profile_photo"
            className="rounded-full w-40 h-40 mx-auto"
          />
          <h1 className="font-bold text-secondary2 text-4xl mt-5">
            {displayName}
          </h1>
          <h6>{currentUser?.email}</h6>
        </div>
      </div>
      {/* The button to open modal */}
      <Button onClick={() => setModal(!modal)}>Edit Profile</Button>

      {/* Put this part before </body> tag */}
      {modal && (
        <div className="">
          <div
            onClick={() => setModal(false)}
            className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
          ></div>
          <div className="rounded w-3/4 overflow-auto lg:w-2/5 bg-white p-2 md:p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <form onSubmit={updateProfile} className="text-left p-5 md:p-10">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setDisplayName(e.target.value)}
                  defaultValue={displayName}
                  className="w-full px-4 py-2 rounded text-slate-700 focus:outline-none shadow"
                />
              </div>

              <Upload
                beforeUpload={() => false}
                onChange={(info) => setPhotoURL(info.file)}
              >
                <Button icon={<UploadOutlined />}>Change Profile Photo</Button>
              </Upload>
              <input
                disabled={loading}
                type="submit"
                className={`${
                  loading && "disabled cursor-not-allowed opacity-50"
                } mt-5 w-full col-span-2 bg-primary text-white cursor-pointer px-4 py-2 rounded hover:bg-secondary focus:outline-none`}
                value={loading ? "Please Wait..." : "Update"}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
