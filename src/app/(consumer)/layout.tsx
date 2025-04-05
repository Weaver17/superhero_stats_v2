import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function ConsumerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default ConsumerLayout;
