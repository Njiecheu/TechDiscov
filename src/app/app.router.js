import { RouterComponent, defineRouter } from "rasengan";
import Home from "@app/home.page";
import AppLayout from "@app/app.layout";
import challengeRouter from "./challenge/challenge.router";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [challengeRouter],
  layout: AppLayout,
  pages: [Home],
})(AppRouter);
