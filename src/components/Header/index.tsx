import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
   const { cartQuantity } = useCart();

   return (
      <HeaderContainer>
         <div className="container">
            <NavLink to="/">
               <img src={coffeeLogoImg} />
            </NavLink>

            <HeaderButtonsContainer>

               <NavLink to="/completeOrder">
                  <HeaderButton variant="yellow">
                     {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                     <ShoppingCart size={24} weight="fill" />
                  </HeaderButton>
               </NavLink>
            </HeaderButtonsContainer>
         </div>
      </HeaderContainer>
   )
}