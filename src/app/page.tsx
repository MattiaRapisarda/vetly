import Navbar from "./navbar";
import Header from "./header";
import QEA from "./qea";

export default function Home() {
  return (
    <div className="flex flex-col w-full"> {/* Aggiungi min-h-screen e flex flex-col */}
      <Navbar />
      <Header />
      <QEA />
    </div>
  );
}