const columns = [
  { name: "شناسه", uid: "id" },
  { name: "عنوان", uid: "title" },
  { name: "توضیحات کوتاه", uid: "describe" },
  { name: "نقش", uid: "role" },
  { name: "اصلی/فرعی بودن", uid: "isMain" },
  { name: "نهاد", uid: "section" },
  // { name: "توضیحات اصلی", uid: "mainDescribe" },
  { name: "عملیات ها", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

export { columns, statusOptions };
