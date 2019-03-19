import React, { useState } from "react";
import { ListGroupItemHeading, ListGroupItemText, Button } from "reactstrap";

const Post = props => {
  const { title, contents, id } = props.post;
  const { handleDelete, handleClickUpdate } = props;
  return (
    <>
      <div>
        <ListGroupItemHeading className="mb-3">{contents}</ListGroupItemHeading>
        <ListGroupItemText className="mb-1">{title}</ListGroupItemText>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <Button outline className="border-0" onClick={e => handleDelete(e, id)}>
          <i className="fas fa-trash-alt" />
        </Button>
        <Button outline className="border-0 pr-2" onClick={handleClickUpdate}>
          <i className="fas fa-edit" />
        </Button>
      </div>
    </>
  );
};

export default Post;
