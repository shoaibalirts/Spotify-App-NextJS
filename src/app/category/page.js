import Category from "@/app/category/category";
import { getCategories } from "@/lib/spotifyapi";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default async function CategoryPage() {
  const titlePage = "All Categories";
  const categoryData = await getCategories();
  const categoryList = categoryData.categories.items;

  return (
    <>
      <Header navLinks={["playlist", "usersavedalbums", "featured"]}>
        {titlePage}
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
      <Footer />
    </>
  );
}
