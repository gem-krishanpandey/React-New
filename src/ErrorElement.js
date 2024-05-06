import { useRouteError } from "react-router-dom";


const ErrorElement = () => {
const err = useRouteError();

    return(
    <div>
        <h3>"OOPS"</h3>
        <h2>"Page not found"</h2>
        <h2>{err.status}</h2>
    </div>
    )
}


export default ErrorElement;