import LazyLoad from "react-lazy-load";

const ManuCard = ({ obj }) => {

    const { name, recipe, price, image } = obj;
    return (
        <div className="flex  ">
            <div className="flex justify-center items-center gap-4">
                <LazyLoad>
                    <img className="rounded-md" width={60} src={image} alt="" />
                </LazyLoad>
                <div>
                    <h3 className="text-green-800 text-xl font-semibold">{name}----------</h3>
                    <p>{recipe}</p>
                </div>
            </div>
            <p className="text-green-600 text-xl font-semibold ">${price}</p>
        </div>
    );
};

export default ManuCard;