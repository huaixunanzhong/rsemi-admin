import {type RouteObject, useRoutes} from "react-router";
import BasicLayout from "../layout/BasicLayout.tsx";
import {type FC} from "react";
import {WrapperRouteComponent} from "./config.tsx";

const routeList:RouteObject[]=[
    {
        path:"/",
        element:<WrapperRouteComponent element={<BasicLayout />} />
    }
]
const RenderRouter: FC = () => {
    return useRoutes(routeList)
}

export default RenderRouter