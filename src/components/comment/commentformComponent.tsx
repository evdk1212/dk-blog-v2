import React, { useState } from 'react'
import {db} from '../../firebase.js'

type PostIdProps = {
  postId: any;
};

const CommentFormComponent = ({ postId }: PostIdProps) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!name || !comment) {
      alert('Please enter your name and comment');
      return;
    }

    try {
      const docRef = await db.collection('posts').doc(postId).collection('comments').add({
        name,
        comment,
        createdAt: new Date(),
      });
      console.log('Comment added with ID:', docRef.id);
      setName('');
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Error adding comment');
    }
  };

  return (
    <>
      <div className="card mt-5 shadow-effect card-custom">
        <div className="card-body">
          <h4>Leave a Comment</h4>
          <p>You can leave a comment about this post!</p>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" className="form-control mt-1" placeholder="Enter your name here" value={name} onChange={(event) => setName(event.target.value)} />
              <div className="alert alert-danger">Name field is required</div>
            </div>
            <div className="form-group mt-3">
              <label>Comment</label>
              <textarea className="form-control mt-1" placeholder="Add your comment here!" value={comment} onChange={(event) => setComment(event.target.value)}></textarea>
              <div className="alert alert-danger">Comment field is required</div>
            </div>
            <button className="btn btn-info mt-3 btn-theme" onClick={handleSubmit}>Add a comment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentFormComponent;
