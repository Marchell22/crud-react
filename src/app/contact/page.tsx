import ContactTable from "@/components/contact-table";
import Pagination from '@/components/pagination';
import Search from "@/components/search";
import {CreateButton} from "@/components/button"
import { getContactsPages } from "../../../lib/data";



const contacts = async ({searchParams}:{searchParams?:{ query?:string; page?:string;}
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getContactsPages(query)
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5 text-sm outline-2 rounded-sm">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages}></Pagination>
      </div>
    </div>
  );
};

export default contacts;
