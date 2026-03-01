import Text from "@/components/atoms/Text/Text";
import Styles from './HomepageCategory.module.css';

const HomepageCategories = () => {
  return (
    <section className={Styles.HomepageCategory}>
      <div className="flex w-full items-center justify-between p-10">
        <Text
          value="category"
          type="span"
          formatted
          className="capitalize text-slate-700 dark:text-white text-title-1-bold"
        />
        <Text
          value="more"
          type="span"
          formatted
          className="capitalize text-slate-700 dark:text-white text-body-1"
        />
      </div>
    </section>
  )
}

export default HomepageCategories;