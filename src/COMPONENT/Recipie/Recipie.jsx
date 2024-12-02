import { useState } from "react";

const Recipe = ({ recipe, onAdd }) => {
  const {
    recipeName,
    recipeImage,
    shortDescription,
    preparingTime,
    calories,
    ingredients,
  } = recipe;

  // State to manage description expansion
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card bg-base-100 w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg mx-auto flex flex-col">
      <div className="p-4 flex-grow">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg">
          <figure>
            <img
              className="h-48 w-full object-cover"
              src={recipeImage}
              alt={recipeName}
            />
          </figure>
        </div>

        {/* Recipe Info Section */}
        <div className="card-body mt-4">
          <h2 className="card-title text-lg font-semibold flex items-center justify-between">
            {recipeName}
            <div className="badge badge-secondary">tasty</div>
          </h2>
          <p className="text-sm text-gray-700 my-2 h-16 overflow-hidden">
            {isExpanded
              ? shortDescription
              : `${shortDescription.substring(0, 100)}...`}
            <button
              onClick={handleToggleDescription}
              className="text-blue-500 ml-1 hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
          <div className="mt-4">
            <div className="font-bold mb-2">Ingredients:</div>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="card-actions p-4 flex justify-between items-center">
        <button
          onClick={() => onAdd(recipe)}
          className="btn btn-primary w-full"
        >
          Want to cook
        </button>
        <div className="flex gap-2 mt-2">
          <div className="badge badge-outline">{preparingTime}</div>
          <div className="badge badge-outline">{calories} kcal</div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
