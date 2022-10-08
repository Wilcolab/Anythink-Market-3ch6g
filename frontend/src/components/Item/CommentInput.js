import React, { useState } from "react";
import agent from "../../agent";

export default function CommentInput(props) {
  const [body, setBody] = useState("");

  async function createComment(ev) {
    ev.preventDefault();
    const payload = await agent.Comments.create(props.slug, {
      body: body,
    });

    props.onSubmit(payload);
    setBody("");
  }

  return (
    <form className="card comment-form m-2" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={setBody}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={this.props.currentUser.image}
          className="user-pic mr-2"
          alt={this.props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
}
