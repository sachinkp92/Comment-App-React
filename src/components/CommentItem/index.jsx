import "./index.css";

const CommentItem = ({ commentDetails }) => {
  let { name, comment } = commentDetails;
  return (
    <li className="comment-list">
      <div className="name-container">
        <div>
          <span>{name}</span>
          <p>{comment}</p>
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
