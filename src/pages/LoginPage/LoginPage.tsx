import { Header } from "../../components/Header";
import { LoginWrapper } from "./components/LoginWrapper";
import { Footer } from "../../components/Footer";
import "./login-page.scss";
export const LoginPage = () => {
  return (
    <div className="div-login-page">
      <Header />
      <LoginWrapper />
      <Footer />
    </div>
  );
};
