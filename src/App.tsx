import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import { prodAction } from "./redux/slices/product/product.slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(prodAction.GET_ALL_REQUEST());
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
