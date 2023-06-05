

const FoodCard = ({item}) => {
    console.log(item)
    const {name, image, price, recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Food Image"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 hover:bg-yellow-500 border-b-2 border-yellow-500 cursor-pointer  mt-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
