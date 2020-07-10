import { atom } from 'recoil';

const commentsState = atom({
  key: 'commentsState', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      username: "Leonardo",
      text: "Este comentário vem direto do Atom!"
    } // default value (aka initial value)
  ], 
});

export default commentsState;