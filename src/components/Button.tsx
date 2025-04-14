type ButtonProps = {
    buttonType?: "primary" | "secondary";
    children: React.ReactNode;
}

export default function Button({buttonType, children}: ButtonProps) {

    return(
        <button className={`h-[40px] bg-[#42999a] hover:bg-[#457d7f] w-full text-white rounded-[5px] cursor-pointer
        ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`}>
            {children}
        </button>
    )
}