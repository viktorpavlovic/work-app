import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RegistrationWrapper } from "./components/RegistrationWrapper";
import "./RegistrationPage.scss";

export const RegistrationPage = () => {
  return (
    <div className="registration-page-div">
      <Header />
      <RegistrationWrapper />
      <Footer />
    </div>
  );
};
