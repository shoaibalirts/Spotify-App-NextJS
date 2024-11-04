import Category from "@/app/category/category";
import { getCategories } from "@/lib/spotifyapi";
export default async function CategoryPage() {
  const categoryData = await getCategories();
  const categoryList = categoryData.categories.items;

  return (
    <>
      <h1>Categories List</h1>
      <main>
        <ul>
          {categoryList.map((category) => (
            <li key={category.name}>
              <Category catId={category.id} catName={category.name}>
                {category.name}
              </Category>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
