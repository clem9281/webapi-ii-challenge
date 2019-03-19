import React, { useState } from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";
import PostForm from "./PostForm";
import Post from "./Post";

const PostArea = props => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { handleDelete, handleUpdatePost } = props;
  return (
    <ListGroupItem className="d-flex justify-content-between">
      {isUpdating ? (
        <PostForm
          isUpdating={isUpdating}
          post={props.post}
          handleUpdatePost={handleUpdatePost}
          setIsUpdating={setIsUpdating}
        />
      ) : (
        <Post
          post={props.post}
          handleDelete={handleDelete}
          handleClickUpdate={setIsUpdating}
        />
      )}
    </ListGroupItem>
  );
};

export default PostArea;
