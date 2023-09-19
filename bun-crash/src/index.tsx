// import fetchUSer from "./githubAPI";

// (async () => {
//     const userData = await fetchUSer("sonersg");
//     console.log(userData);
//     document.querySelector("h1").innerHTML = JSON.stringify(userData);
// })();

///////////////////////
///// react
//////////////////////

import React from "react";
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

const App = () => {
    const [count, setcount] = React.useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setcount(prv => prv + 1)}>increment</button>
        </div>
    );
};

root.render(<App />);
