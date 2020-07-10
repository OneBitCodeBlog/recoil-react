import React, { useState } from 'react';


function Form(props) {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setComments([...props.comments, {username: username, text: text}])
    setUsername('')
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <strong>Deixe seu comentário:</strong>
        </div>
        <div>
          <input 
            type="text" 
            name="username" 
            placeholder='Nome de usuário' 
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <textarea 
            type="text" 
            name="text" 
            placeholder='Seu comentário...' 
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Form;