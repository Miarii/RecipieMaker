import Recipie from "../Recipie/Recipie";

const Recipies = ({ recipiesData, setCookingData }) => {
  const handleAddToWantToCook = (recipe) => {
    setCookingData((prevCookingData) => [...prevCookingData, recipe]);
  };

  return (
    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipiesData.length > 0 ? (
        recipiesData.map((recipe) => (
          <Recipie
            key={recipe.recipeId}
            recipe={recipe}
            onAdd={handleAddToWantToCook}
          />
        ))
      ) : (
        <p className="text-center col-span-full">No recipes available!</p>
      )}
    </div>
  );
};

export default Recipies;
