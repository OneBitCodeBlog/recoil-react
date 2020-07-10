import { selector } from 'recoil';
import commentsState from '../atoms/CommentsAtom';


const commentsCountState = selector({
  key: 'commentsCountState',
  get: ({get}) => {
    const comments = get(commentsState);

    return comments.length;
  }
});

export default commentsCountState;