import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="grid justify-items-end w-[430px] h-[70px] bg-black mb-8">
      <button className="mx-5">
        <LiaShoppingBagSolid style={{color: 'white', fontSize: '32px'}} />
      </button>
    </header>
    )
};