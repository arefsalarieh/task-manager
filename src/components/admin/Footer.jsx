import { Pagination } from "@nextui-org/react";

function Footer() {
  return (
    <Pagination
      className="mt-5 flex justify-center"
      dir="ltr"
      loop
      showControls
      color="success"
      total={5}
      initialPage={1}
    />
  );
}

export default Footer;
