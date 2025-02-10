import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  return (
    <div className="p-6">
     <h1>Welcome to Calculator Zone</h1>
    </div>
  );
};

export default Home;
