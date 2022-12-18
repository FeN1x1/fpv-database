import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <main
        data-theme="cupcake"
        className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-300"
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
