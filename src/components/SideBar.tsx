import AddTask from "./AddTask";
// import Button from "./Button";


export default function SideBar() {
    return(
        <section className="h-full md:flex md:justify-center md:items-center bg-[#f6fbfb] border-l border-black/[0.08] overflow-hidden px-[24px] pt-[15px] pb-[25px]">
            <AddTask/>
            {/* <div className="mt-auto space-y-2">
                <Button buttonType="secondary">Login</Button>
                <Button buttonType="secondary">Signup</Button>
            </div> */}
        </section>
    )
}