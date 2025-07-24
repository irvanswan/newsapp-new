import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <NavigationMenu className={Styles.Navbar}>
          <h5 className={Styles.title}>
            News Today
          </h5>
        </NavigationMenu>

    )
}

export default Navbar;