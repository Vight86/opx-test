import { createBrowserRouter } from "react-router-dom";
import { CLetterRout } from "./Cletter";
import { DogsRoute } from "./Dogs";

export const router = createBrowserRouter([CLetterRout, DogsRoute]);