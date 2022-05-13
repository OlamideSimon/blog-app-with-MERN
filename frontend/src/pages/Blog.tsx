import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { postComment } from "../features/comments/commentSlice";
import image1 from "../imgs/28.svg";
import image2 from "../imgs/29.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "../components/Comments";

const Blog = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const { comment, name, email } = formData;
  const {
    selectedBlog: { _id, body, description, index, title },
  } = useAppSelector((state) => state.selected);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const image = index % 2 === 0 ? image1 : image2;

  useEffect(() => {})

  useEffect(() => {
    if (!_id) {
      navigate("/");
    }
  }, [_id, navigate]);

  const sendComment = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || comment.length === 0) {
      toast.error("All fields are required");
    } else {
      const sendData = {
        _id,
        data: {
          name,
          email,
          comment,
        },
      };
      dispatch(postComment(sendData));
      toast.info('Your comment has been sent for review')
      setFormData({ name: "", email: "", comment: "" });
    }
  };

  const onChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-screen text-[#b6fff4] overflow-x-hidden">
        <div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className=" min-w-screen">
                <img
                  src={image}
                  alt=""
                  width={300}
                  className="bg-[#b6fff4]"
                  draggable="false"
                />
              </div>
              <div className="absolute bottom-1 left-0 bg-[#C71585] text-[#b6fff4] p-1 h-fit">
                <p className="text-sm">{description}</p>
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10 divide-y-4 divide-[#b6fff4]">
            <div className="text-5xl font-light mb-3">
              <p>{title}</p>
            </div>
            <div>
              <p>{body}</p>
            </div>
          </div>
          <form onSubmit={sendComment} className="w-60 p-4 space-y-3">
            <p className="text-lg font-semibold">Leave A Reply</p>
            <div className="border rounded-tl-xl px-1">
              <input
                type="text"
                placeholder="*Enter Name"
                name="name"
                className="bg-transparent focus:outline-none w-full"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="border rounded-tl-xl px-1">
              <input
                type="email"
                placeholder="*Enter Email"
                className="bg-transparent focus:outline-none w-full"
                value={email}
                name="email"
                onChange={onChange}
              />
            </div>
            <div className="border rounded-tl-xl px-1">
              <textarea
                placeholder="*Enter Comment"
                value={comment}
                name="comment"
                onChange={onChange}
                className="bg-transparent focus:outline-none w-full h-full resize-none"
                cols={20}
              />
            </div>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#b6fff4", color: "black" }}
              type="submit"
            >
              Publish
            </Button>
          </form>
          <Comments id={_id} />
        </div>
      </div>
    </>
  );
};

export default Blog;
