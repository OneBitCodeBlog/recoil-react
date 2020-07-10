import React, { Fragment } from 'react';
import Comment from './Comment';
import Form from './Form';

import { useRecoilState, useRecoilValue } from 'recoil';

import commentsState from '../../stores/atoms/CommentsAtom';
import CommentCountState from '../../stores/selectors/CommentCountSelector';

function Comments() {
  const [comments, setComments] = useRecoilState(commentsState);
  const commentCount = useRecoilValue(CommentCountState);

  return (
    <Fragment>
      <div>
        <h2>{commentCount} Comentários</h2>
        <hr />

        {comments.map((comment, index) => {
          return <Comment 
                   username={comment.username} 
                   text={comment.text} 
                   key={index}
                  />
        })}
      </div>
      <div>
        <Form setComments={setComments} comments={comments}/>
      </div>
    </Fragment>
  );
}


export default Comments;
