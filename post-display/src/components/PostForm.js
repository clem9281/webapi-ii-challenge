import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const PostForm = props => {
  const { handleAddPost, isUpdating } = props;
  const [title, setTitle] = useState(isUpdating ? props.post.title : "");
  const [contents, setContents] = useState(
    isUpdating ? props.post.contents : ""
  );
  return (
    <Form
      className="w-100"
      onSubmit={
        isUpdating
          ? e => {
              props.handleUpdatePost(e, props.post.id, {
                title: title,
                contents: contents
              });
              props.setIsUpdating(false);
            }
          : e => {
              handleAddPost(e, { title: title, contents: contents });
              setTitle("");
              setContents("");
            }
      }
    >
      <h4>{isUpdating ? "Edit Post" : "Create New Post"}</h4>
      <FormGroup>
        <Label for="Title">Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="contents">Text Area</Label>
        <Input
          type="textarea"
          name="contents"
          value={contents}
          onChange={e => setContents(e.target.value)}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default PostForm;
