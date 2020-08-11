import React from 'react';
import Comment from './Comment';
import './Comments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  // function submit (event){
  //   comments.push(event.textContent)
  // }
  // comments.addEventListener('submit', submit)


  return (
    <>
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
    { comments.map((comment) => 
      <Comment 
      comment = {comment}
      key={comment.id}
      />
    )}
    </div>
    <div className='newComment'>
      <input
      type='text'
      class= 'userName'
      placeholder = 'Username'
      />
      <input type='text' 
      className = 'addComment'
      placeholder = 'add comment'
      />
      <button>
    <FontAwesomeIcon icon={faComment} />
    </button>
    </div>
    
    </>
  );
};

export default Comments;
