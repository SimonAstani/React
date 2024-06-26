import { myName } from "./Footer";

console.log(myName)
function Heading(props) {
    console.log(props)
    return (
        <h1>Hello, {props.firstName}</h1>
    )
}

export default Heading;
