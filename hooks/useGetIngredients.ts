const useGetIngredients = (data: any) => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (data?.[`strIngredient${i}`]?.length !== 0) {
      ingredients.push(
        '‣ ' + data?.[`strMeasure${i}`] + ' ' + data?.[`strIngredient${i}`]
      );
    }
  }
  return ingredients;
};

export default useGetIngredients;
