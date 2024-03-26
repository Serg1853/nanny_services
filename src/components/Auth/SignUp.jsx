import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function register(e) {
    e.preventDefault();
    if (!name && !email && !password) {
      setError('Please register');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError('');
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <form onSubmit={register}>
        <h2>Register</h2>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button>Register</button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      </form>
    </div>
  );
}

export default SignUp;
