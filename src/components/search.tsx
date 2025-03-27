"use client"
import { IoSearch } from 'react-icons/io5';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
const search = () => {

  const searchParams = useSearchParams();
  const Pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch = useDebouncedCallback((term : string) => {
    console.log(term)
    const params = new URLSearchParams(searchParams)
    if(term){
      params.set("query", term)
    }else{
      params.delete("query")
    }
    replace(`${Pathname}?${params.toString()}`)
  }, 500)
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full border border-gray-200 py-2 pl-5"
        placeholder="Search..."
        onChange={(e) => handleSearch (e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <IoSearch className="absolute left-0 top-2 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default search;
