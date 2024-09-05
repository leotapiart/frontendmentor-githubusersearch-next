import SearchIcon from "@/components/icons/SearchIcon";

const HomePage = () => {
  return (
    <>
      <form className="flex items-center gap-2 rounded-xl bg-blue-900 p-2 flex-wrap">
        <span className="min-w-[20px]">
          <SearchIcon className="fill-sky-500" />
        </span>
        <input
          type="text"
          placeholder="Search Github username..."
          className="h-14 flex-1 p-2 rounded-lg bg-transparent text-white placeholder:text-white 
          focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button className="rounded-lg bg-sky-500 p-4 text-white font-bold">
          Search
        </button>
      </form>
      <article>Contenido adicional</article>
    </>
  );
};

export default HomePage;
