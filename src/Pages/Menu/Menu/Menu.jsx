import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'



const Menu = () => {
    return (
        <div>
            <h2>Our menu</h2>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            
        </div>
    );
};

export default Menu;