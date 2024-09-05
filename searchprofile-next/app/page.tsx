import SearchIcon from "@/components/icons/SearchIcon";

const HomePage = () => {
  return (
    <>
      <form className="flex items-center gap-2 rounded-xl bg-blue-900 p-2 flex-wrap">
        <span className="min-w-[20px]">
          <SearchIcon className="fill-blue-500" />
        </span>
        <input
          type="text"
          placeholder="Search Github username..."
          className="h-full flex-1"
        />
        <button className="rounded-lg bg-blue-500 p-4 text-white font-bold">
          Search
        </button>
      </form>
      <article>Contenido adicional</article>
    </>
  );
};

export default HomePage;
