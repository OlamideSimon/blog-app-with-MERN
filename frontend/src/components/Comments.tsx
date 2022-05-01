import { Avatar } from '@mui/material';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getComment, reset } from '../features/comments/commentSlice';
import Spinner from './Spinner';

const Comments = ({id}: any) => {
    const dispatch = useAppDispatch();
    const { comments, isLoading, isError, message } = useAppSelector(
        (state) => state.comments
    );

    useEffect(() => {}, [])

    useEffect(() => {
    if (isError) {
        toast.error(message);
    }

    dispatch(getComment(id));

    return () => {
        dispatch(reset());
    };
    }, [id, dispatch, isError, message]);

    isLoading && <Spinner />;

  return (
      <>
        {comments.length > 0 ? (
        <div className="px-5 md:px-10">
            {comments?.map((comment: any) => (
            <div key={comment?._id} className="p-3">
                <div className="flex items-center space-x-2 w-36 text-sm">
                <Avatar sx={{ backgroundColor: "#b6fff4", color: "black" }}>
                    {comment?.name?.charAt(0)}
                </Avatar>
                <div className="w-full">
                    <h1 className="truncate">{comment?.name}</h1>
                    <p className="text-xs truncate">
                    {new Date(comment?.createdAt).toUTCString()}
                    </p>
                </div>
                </div>
                <div className="p-2">
                <p className="">{comment?.comment}</p>
                </div>
            </div>
            ))}
        </div>
        ) : (
        <div>
            <p>Be the first to comment</p>
        </div>
        )}
      </>
  )
}

export default Comments