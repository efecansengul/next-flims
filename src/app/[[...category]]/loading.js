import CategoriesLoading from "@/_components/categories/loading";
import FeaturedLoading from "@/_components/fetured-movie/loading";

function Loading() {
  return (
    <div>
      <FeaturedLoading />
      <CategoriesLoading />
    </div>
  );
}
export default Loading;
