import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-items bg-fixed bg-opacity-10 text-white pt-8">
            <SectionTitle
            subHeading={'Check It Out'}
            heading={'Featured Items'}
            ></SectionTitle>
           <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-20 px-36">
           <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>September 22, 2023</p>
                <p className="uppercase">where can i get some?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolor qui voluptatem fugiat, at, assumenda fuga, ab non ipsum labore reprehenderit quo deserunt laboriosam quibusdam animi. Iusto, minus. Ducimus praesentium consectetur doloribus veniam sunt, vel dolorem quis hic illum quae laborum quaerat. Perferendis assumenda obcaecati fuga dignissimos suscipit ab voluptate.</p>
                <button className="btn btn-outline border-0 border-b-2 text-white">Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;