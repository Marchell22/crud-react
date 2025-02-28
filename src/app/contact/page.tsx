import ContactTable from "@/components/contact-table";
import Search from "@/components/search";
import {CreateButton} from "@/components/button"
const contacts = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5 text-sm outline-2 rounded-sm">
        <Search />
        <CreateButton/>
      </div>
      <ContactTable />
    </div>
  );
};

export default contacts;
