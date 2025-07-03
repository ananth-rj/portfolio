import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go back home</Link>
    </div>
  );
}
