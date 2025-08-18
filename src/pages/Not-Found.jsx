import { Link } from 'react-router';
const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>404</h1>
      <p style={styles.p}>Oops! The page you're looking for doesn't exist.</p>
      <Link style={styles.link} to="/">
        ⇦ Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
    color: '#58a6ff',
  },
  h1: {
    fontSize: '72px',
    marginBottom: '20px',
  },
  link: {
    color: '#007bff',
    display: 'inline-block',
    marginTop: '40px',
    fontWeight: 'bold',
  },
  linkHover: {
    backgroundColor: '#4090db',
  },
  p: {
    color: ' #fff',
    fontSize: '20px',
  },
};

export default NotFoundPage;
