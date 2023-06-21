import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Provider } from "react-redux";
import store from "./store/index.ts";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}
