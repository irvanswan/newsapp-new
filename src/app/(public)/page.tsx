import HomepageCarrousel from "@/components/organisms/_homepage/Carrousel";
import HomepageCategories from "@/components/organisms/_homepage/Categories";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HomepageCarrousel />
      <HomepageCategories />
    </div>
  );
}
