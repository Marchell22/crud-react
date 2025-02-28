import ContactTable from "@/components/contact-table";
import Search from "@/components/search";
const contacts = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between mb-5 text-sm outline-2 rounded-sm" aria-placeholder="Search..."><Search></Search></div>
      <ContactTable/>
    </div>
  );
};

export default contacts;
