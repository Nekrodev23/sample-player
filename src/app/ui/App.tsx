import "./App.css";
import { Provider } from "react-redux";
import { store } from "../config/redux";
import { HomePage } from "../../pages";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { startup } from "../../shared/redux";

document.addEventListener("DOMContentLoaded", () => {
  store.dispatch(startup());
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
