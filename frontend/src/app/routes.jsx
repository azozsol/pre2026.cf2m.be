import { createBrowserRouter } from "react-router";
import { RootLayout } from "../components/layout/RootLayout";
import { ContactPage } from "../pages/ContactPage";
import { FormationPage } from "../pages/FormationPage";
import { HistoryPage } from "../pages/HistoryPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PixelAndCoPage } from "../pages/PixelAndCoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "formations/:slug",
        Component: FormationPage,
      },
      {
        path: "notre-histoire",
        Component: HistoryPage,
      },
      {
        path: "pixel-and-co",
        Component: PixelAndCoPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);
