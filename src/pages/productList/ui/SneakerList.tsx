import Card from "@/shared/card/ui/Card";

export default function SneakerList() {
  return (
    <div className="grid grid-col-1">
      <div className="flex flex-col items-start gap-2 mb-8">
        <p className="text-3xl font-semibold">신발 상품 목록</p>
        <p className="text-sm font-normal">현재 6개의 상품이 있습니다.</p>
      </div>
      <Card />
    </div>
  )
}