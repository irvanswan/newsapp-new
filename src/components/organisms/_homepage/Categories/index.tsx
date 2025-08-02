import Text from "@/components/atoms/Text/Text";

const HomepageCategories = () => {
  return (
    <section className="w-full flex flex-col bg-transparent min-h-[20dvh]">
      <div className="flex w-full justify-between p-10">
        <Text
          value="category"
          type="span"
          className="capitalize text-Dark text-title-1-bold"
        />
        <Text
          value="category"
          type="span"
          className="capitalize text-Blue text-body-1"
        />
      </div>
    </section>
  )
}

export default HomepageCategories;