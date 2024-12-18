import { useState, useMemo } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "./icons/VerticalDotsIcon";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { useDeleteTasks, useTasks } from "./hooks/useTasks";
import { useQueryClient } from "@tanstack/react-query";
import { columns } from "./data";
import TaskDetail from "./TaskDetail";

function Content() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [detail, setDetail] = useState({});
  const [selectedTask, setSelectedTask] = useState(null);

  // modals
  const { isOpen: isOpenDelete, onOpenChange: onOpenChangeDelete } =
    useDisclosure();
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onOpenChange: onOpenChangeAdd,
  } = useDisclosure();
  const {
    isOpen: isOpenDetail,
    onOpen: onOpenDetail,
    onOpenChange: onOpenChangeDetail,
  } = useDisclosure();

  // query:
  const { tasks, isLoading, isError } = useTasks();
  const { mutate } = useDeleteTasks();
  const queryClient = useQueryClient();
  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    const handleDelete = (id) => {
      mutate(id, {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
        onError: (error) => console.log(error),
      });
    };

    const handleTaskDetail = (id) => {
      onOpenDetail();
      const detail = tasks.filter((item) => item.id === id);
      setDetail(detail[0]);
    };

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200 dark text-white">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="font-[IRANSans]" dir="rtl">
                <DropdownItem onPress={() => handleTaskDetail(user.id)}>
                  اطلاعات بیشتر
                </DropdownItem>

                <DropdownItem
                  onPress={() => {
                    setSelectedTask(user); // Set the task data
                    onOpenAdd(); // Open the edit modal
                  }}
                >
                  ویرایش
                </DropdownItem>
                <DropdownItem
                  onPress={() => handleDelete(user.id)}
                  color="danger"
                >
                  حذف کردن
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      case "isMain":
        return cellValue === true ? "فعال" : "غیر فعال";

      default:
        return cellValue;
    }
  };

  if (isLoading)
    return (
      <Spinner
        className="mt-10 font-[IRANSans]"
        label="درحال بارگزاری ..."
        color="default"
      />
    );

  if (isError)
    return (
      <h1 className="text-[20px] m-auto font-[IRANSans]">مشکلی پیش آمده</h1>
    );

  return (
    <>
      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper:
              "after:bg-foreground after:text-background text-background",
          },
        }}
        style={{ fontFamily: "IRANSans", marginTop: "40px" }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "end" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody emptyContent={"No users found"} items={tasks}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* modals: */}
      <DeleteModal isOpen={isOpenDelete} onOpenChange={onOpenChangeDelete} />

      <TaskDetail
        isOpen={isOpenDetail}
        onOpenChange={onOpenChangeDetail}
        detail={detail}
      />
      <EditModal
        isOpen={isOpenAdd}
        onOpenChange={onOpenChangeAdd}
        task={selectedTask}
      />
    </>
  );
}

export default Content;
