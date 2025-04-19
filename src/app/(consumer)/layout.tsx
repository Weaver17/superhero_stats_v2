import Footer from "@/components/footer";
import Header from "@/components/header";

function ConsumerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ConsumerLayout;
