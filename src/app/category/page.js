import Category from "@/app/category/category";
import { getCategories } from "@/lib/spotifyapi";
import Header from "@/components/header";
export default async function CategoryPage() {
  const categoryData = await getCategories();
  const categoryList = categoryData.categories.items;

  return (
    <>
      <Header navLinks={["playlist", "category", "usersavedalbums"]}>
        All Categories
      </Header>
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
