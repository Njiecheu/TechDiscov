import { RouterComponent, defineRouter } from "rasengan";
import Challenge from "@app/challenge/page/challenge.page";
import ChallengeLayout from "@app/challenge/layout/challenge.layout";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: ChallengeLayout,
  pages: [Challenge],
})(AppRouter);
