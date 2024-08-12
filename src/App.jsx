import { useDispatch } from "react-redux";
import "./App.css";
import AddForm from "./components/AddForm/AddForm";
import Posts from "./components/Posts/Posts";
import { useEffect } from "react";
import { fetchPosts } from "./redux/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <AddForm />
      <Posts />
    </>
  );
}

export default App;
