import React, { useState } from "react";
import agent from "../../agent";

export default function CommentInput(props) {
  const [body, setBody] = useState("");

  const createComment = async (ev) => {
    ev.preventDefault();
    const tmpBody = body;
    setBody("");
    const payload = await agent.Comments.create(props.slug, {
      body: tmpBody,
    });
  };

  return (
    <form className="card comment-form m-2" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={props.currentUser.image}
          className="user-pic mr-2"
          alt={props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
}
