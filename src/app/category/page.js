import Category from "@/app/category/category";
import { getCategories } from "@/lib/spotifyapi";
import Header from "@/components/header";
import Footer from "@/components/footer";
import classes from "./category.module.css";
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
        <h2 className={classes.header}>Categories</h2>
        <ul>
          {categoryList.map((category, index) => (
            <li key={category.name}>
              <Category
                catId={category.id}
                catName={category.name}
                index={index}
              >
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
