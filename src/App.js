import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />
      <Routes />
    </>
  );
};

export default App;
