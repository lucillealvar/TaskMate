import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="flex justify-center items-center font-love bg-teal-200 h-screen w-screen flex-col">
      <Banner />
      <main className="relative bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
       grid grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-[7fr_4fr] md:grid-rows-[59px_1fr] overflow-hidden h-[50vh] ">
        <Header />
        <TaskList />
        <SideBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
