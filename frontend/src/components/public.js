import { Link } from "react-router-dom";

const Public = () => {
  return (
    <>
      <main>
        <div>public</div>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </>
  );
};

export default Public;
