import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.map(item=>item.category==='dessert');
    const soup = menu.map(item=>item.category==='soup');
    const salad = menu.map(item=>item.category==='salad');
    const pizza = menu.map(item=>item.category==='pizza');
    const offered = menu.map(item=>item.category==='offered');
    return (
        <div>
            <h2>Our menu</h2>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>

            <h2 className="text-center text-2xl font-semibold">Todays Offer</h2>
            
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={"Dessert"} img={dessertImg}></MenuCategory>

            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>
            <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
        
            
        </div>
    );
};

export default Menu;