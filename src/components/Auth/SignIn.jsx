import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function logIn(e) {
    e.preventDefault();
    if (!email && !password) {
      setError('Please login');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
        setError("Sorry we don't found user");
      });
  }
  return (
    <div>
      <form onSubmit={logIn}>
        <h2>Login</h2>

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
        <button>Login</button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      </form>
    </div>
  );
}

export default SignIn;
