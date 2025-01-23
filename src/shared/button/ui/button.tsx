import useSneakerButtonState from "../model/useSneakerButtonState"

export default function button() {
    const {counter, isButtonDisabled, doClick} = useSneakerButtonState();
    console.log(`담긴 아이템 갯수: ${counter}`);
  return (
    <>
        <button
          onClick={doClick}
          disabled={isButtonDisabled}
          className={`w-[43px] h-[21px] ${isButtonDisabled ? 'bg-gray-400 text-black disabled:cursor-default' : 'bg-black text-white'} text-xs flex items-center justify-center rounded-2xl cursor-pointer`}>{isButtonDisabled ? "담김" : "담기"}</button>
    </>
  )
};
