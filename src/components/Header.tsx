import { Component, type ReactNode } from "react";
import Button from "./layouts/Button";

class Header extends Component {
    render(): ReactNode {
        return <header className="theme-header">
            <div className="container m-bottom">
                <h1 className="capitalize">
                your favorite one page <br /> multi purpose template
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum explicabo laboriosam et.</p>
            </div>
            

            <Button />

        </header>
    }
}

export default Header