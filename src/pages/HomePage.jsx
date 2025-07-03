import { useSelector } from "react-redux";

function HomePage() {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <p>Loading...</p>; // Or a spinner component
  }

  return (
    <div>
      <h3>Home Page</h3>
      <p>Welcome {user ? user.name : "Guest"}</p>
    </div>
  );
}

export default HomePage;
