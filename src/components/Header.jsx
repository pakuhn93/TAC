import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/shops/magicitemshop">Magic Item Shop</Link>
            <Link to="/shops/magicitemcatalog">Magic Item Database</Link>
        </header>
    );
}