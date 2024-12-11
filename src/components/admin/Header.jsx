// next ui
import { Button, Input, useDisclosure } from "@nextui-org/react";

// icons
import { PlusIcon } from "./icons/PlusIcon";
import { SearchIcon } from "./icons/SearchIcon";
import AddModal from "./AddModal";
import AddCard from "../../pages/AddCard";

function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%] font-[IRANSans] ",
            inputWrapper: "border-1",
          }}
          placeholder="سرچ کنید ....."
          size="sm"
          startContent={<SearchIcon className="text-default-300" />}
          //value={filterValue}
          variant="bordered"
          //onClear={() => setFilterValue("")}
          //onValueChange={onSearchChange}
        />
        <div className="flex gap-3 dark">
          <Button
            className="bg-foreground text-background font-[IRANSans]  "
            endContent={<PlusIcon />}
            size="sm"
            onPress={onOpen}
          >
            اضافه کردن
          </Button>
          <AddCard
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
          />
          {/* <AddModal isOpen={isOpen} onOpenChange={onOpenChange} /> */}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">Total x users</span>
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            //onChange={onRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Header;
