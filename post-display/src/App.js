import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Container, ListGroup } from "reactstrap";
import PostArea from "./components/PostArea";
import PostForm from "./components/PostForm";

class App extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    try {
      const posts = await axios.get("http://localhost:5000/api/posts");
      console.log(posts);
      this.setState({ posts: posts.data });
    } catch (error) {
      console.log(error);
    }
  }
  handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const posts = await axios.delete(`http://localhost:5000/api/posts/${id}`);
      this.setState({ posts: posts.data });
    } catch (error) {
      console.log(error);
    }
  };
  handleAddPost = async (e, newPost) => {
    e.preventDefault();
    try {
      const posts = await axios.post(
        "http://localhost:5000/api/posts",
        newPost
      );
      this.setState({ posts: posts.data });
    } catch (error) {
      console.log(error);
    }
  };
  handleUpdatePost = async (e, id, newPostInfo) => {
    e.preventDefault();
    try {
      const posts = await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        newPostInfo
      );
      this.setState({ posts: posts.data });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.state.posts) {
      return (
        <section className="App bg-light min-vh-100">
          <Container>
            <Row>
              <Col
                xs={{ size: 12 }}
                md={{ size: 8, offset: 2 }}
                lg={{ size: 6, offset: 3 }}
              >
                <h2>Posts</h2>
                <ListGroup className="my-3">
                  {this.state.posts.map(post => (
                    <PostArea
                      post={post}
                      key={post.id}
                      handleDelete={this.handleDelete}
                      handleUpdatePost={this.handleUpdatePost}
                    />
                  ))}
                </ListGroup>
                <PostForm handleAddPost={this.handleAddPost} />
              </Col>
            </Row>
          </Container>
        </section>
      );
    }
    return <div />;
  }
}

export default App;
