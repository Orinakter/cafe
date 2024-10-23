
import PropTypes from 'prop-types';
const CardSection = ({list}) => {
    return (
        <div className="grid grid-cols-2 gap-6 w-2/3 mt-10">
            {list.map(item=>(
                <div key={item.recipe_id} className="rounded-xl border-2 p-4 mb-4">
                    <img src= {item.recipe_image} alt="" className="h-[250px] rounded-xl" />
                    <h1 className="text-center font-bold mt-2">{item.recipe_name}</h1>

                </div>

            ))}
        </div>
    );
};


CardSection.propTypes = {
    list : PropTypes.array,
}


export default CardSection;