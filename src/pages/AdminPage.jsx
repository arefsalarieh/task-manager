import Content from "../components/admin/Content";
import Footer from "../components/admin/Footer";
import Header from "../components/admin/Header";

function AdminPage() {
  return (
    <div
      dir="rtl"
      className="dark text-foreground bg-background w-screen  p-8 flex flex-col"
    >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export {AdminPage};
