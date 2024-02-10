import { useState } from "react";

import "./App.css";
import { v4 as uuidv4 } from "uuid";
import CommentItem from "./components/CommentItem";

function App() {
  // const [count, setCount] = useState(0);
  const [commentsList, setCommentList] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  let onName = (event) => {
    setName(event.target.value);
  };

  let onComment = (event) => {
    setComment(event.target.value);
  };

  let onAddComment = (event) => {
    event.preventDefault();

    let newComment = {
      id: uuidv4,
      name,
      comment,
    };
    setName("");
    setComment("");
    setCommentList([...commentsList, newComment]);
  };

  return (
    <>
      <div className="app-container">
        <div className="container">
          <h1>Comments</h1>
          <div className="form-container">
            <form onSubmit={onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input type="text" className="name" onChange={onName} />
              <textarea className="comment" onChange={onComment}></textarea>
              <br />
              <button className="add-button">Add Comment</button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <p className="heading">Comments</p>
          <ul>
            {commentsList.map((eachComment) => (
              <CommentItem commentDetails={eachComment} key={eachComment.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
