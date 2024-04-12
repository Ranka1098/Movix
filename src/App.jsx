import { createBrowserRouter ,Outlet} from "react-router-dom";
import Headers from "./components/Headers";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },

]);

export default appRouter;
