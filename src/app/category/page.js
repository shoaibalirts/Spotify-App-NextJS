import { getCategories, getPlayListAgainstCategory } from "@/lib/spotifyapi";
export default async function CategoryPage() {
  const categoryData = await getCategories();
  const categoryList = categoryData.categories.items;

  function fetchCategoryData(categoryId) {
    console.log("clicked");

    async function xyz() {
      const categoryList = await getPlayListAgainstCategory(categoryId);
    }
    xyz();
    console.log(categoryList);
  }
  return (
    <>
      <header>
        <h1>Categories List</h1>
      </header>
      <main>
        <ul>
          {categoryList.map((category) => (
            <li key={category.name} onClick={fetchCategoryData(category.id)}>
              {category.name}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
