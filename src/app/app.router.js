import { RouterComponent, defineRouter } from "rasengan";
import Home from "@app/home.page";
import AppLayout from "@app/app.layout";
import Trainings from "./trainings.page";
import Employers from "./employers.page";
import Signup from "./singnup.page";
import Login from "./login.page";
import Certifications from "./certifications";
import CertifPayment from "./certifPayment.page";
import CertificationTest from "./certification-test.page";
import Challenge from "./challenge.page";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [
    Home,
    Trainings,
    Employers,
    Login,
    Signup,
    Certifications,
    CertifPayment,
    CertificationTest,
  ],
  pages: [Home, Challenge],
})(AppRouter);
