import { DocumentData } from 'firebase/firestore';
import React from 'react';

type commentsProps = {
  comments: DocumentData[];
};

const commentlistComponent = ({ comments }: commentsProps) => {
  return (
    <>
      {comments.map((comment) => (
        <div className="comment-box mt-3" key={comment.id}>
          <h6 className="mb-0">{comment.name}</h6>
          <small className="text-danger">
            LAST UPDATED -{' '}
            {new Date(comment.createdAt?.toDate()).toLocaleDateString()}
          </small>
          <div className="mt-3 mb-3">{comment.comment}</div>
          <a className="mt-1">Reply</a>
          <a className="mt-1 ms-3">View Reply</a>
        </div>
      ))}
    </>
  );
};

export default commentlistComponent;
