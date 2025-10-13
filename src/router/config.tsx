import  { type FC } from 'react'
import type { RouteProps } from "react-router";

export interface WrapperRouteProps extends RouteProps {
    /** document title id */
    titleId: string
    /** authorization？ */
    auth?: boolean
}

const PublicRoute = (props) => {
    return props.element
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, auth, ...props }) => {
    const WitchRoute = PublicRoute
    if (titleId) {
        document.title = titleId
    }
    return <WitchRoute {...props} />
}

export {WrapperRouteComponent}