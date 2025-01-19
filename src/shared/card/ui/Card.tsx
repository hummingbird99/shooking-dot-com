'use client';

import Image from 'next/image';
import useCardContents from '../model/useCardContents';
import { SneakerItem } from 'sneakerData';

export default function Card() {
    const {contents, loading, error} = useCardContents();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="grid grid-cols-2 gap-3">
          {contents.map((item: SneakerItem) => (
            <div key={item.id} className="bg-gray-200 w-[184px] h-[246px] rounded-2xl">
              <div className='relative w-[184px] h-[115px] overflow-hidden rounded-t-2xl'>
                <Image src={item.image} alt='Picture of the merchandise' width={184} height={115} className='rounded-t-2xl' />
              </div>
                <div>
                    <p>{item.itemId}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            </div>
          ))}
        </div>
  )
}