import { MdOutlineShoppingBag } from "react-icons/md";
import "./CartWidget.css"

export default function CartWidget (){

    const itemCount = 5;

    return (
        <>
            <div className="cart-widget">
            <MdOutlineShoppingBag className="cartIcon" />
            {itemCount > 0 && (
            <span className="notification">{itemCount}</span>
                )}
            </div>
        </>
    )
}