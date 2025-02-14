import { useEffect, useState } from "react";
import useMousePosition from "../../../hooks/15-useMousePosition";

const MouseApp = () => {

    const mousePosition=useMousePosition();

    return (
        <div>
            <h1>Mouse App</h1>
            <pre>{JSON.stringify(mousePosition.position, null, 2)}</pre>
        </div>

    );
}
export default MouseApp;