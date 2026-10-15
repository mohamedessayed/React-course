import { Component, type ReactNode } from "react";

class Button extends Component {
    render(): ReactNode {
        return <button className="btn btn-primary capitalize">
            find out more
        </button>
    }
}

export default Button;