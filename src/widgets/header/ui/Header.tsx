import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Header() {
    return (
        <header className="w-[430px] h-[70px] bg-black grid justify-items-end">
            <button className="mx-5">
                <LiaShoppingBagSolid style={{color: 'white', fontSize: '32px'}} />
            </button>
        </header>
    )
};