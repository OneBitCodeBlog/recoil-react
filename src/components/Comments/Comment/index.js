import React from 'react';

function Comment(props) {

  return (
    <div>
      <p>
        <strong>{props.username}:</strong> {props.text}
      </p>
      <hr />
    </div>
  );
}

export default Comment;