const Cookings = ({ cookingData }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-xl max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Added Recipes: {cookingData.length}</h2>
      <hr className="mb-4" />
      {cookingData.length === 0 ? (
        <p className="text-sm text-gray-600">No recipes added yet!</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Time</th>
              <th className="py-2 px-4 border">Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">
                  <div className="w-16 h-16 overflow-hidden rounded-lg">
                    <img
                      className="object-cover w-full h-full"
                      src={item.recipeImage}
                      alt={item.recipeName}
                    />
                  </div>
                </td>
                <td className="py-2 px-4 border">{item.recipeName}</td>
                <td className="py-2 px-4 border">{item.preparingTime}</td>
                <td className="py-2 px-4 border">{item.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cookings;
