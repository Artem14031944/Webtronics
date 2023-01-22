import { FC } from 'react';
import Image from 'next/image';
import icon_divece from '../../../../../../public/mosaicTwoDivece.svg';
import icon_developer from '../../../../../../public/mosaicTwodeveloper.svg';
import icon_developer_big from '../../../../../../public/mosaicTwoBig.svg';
import style from './GalleryMosaicTwoPhoto.module.css';

const GalleryMosaicTwoPhoto: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.bigPhoto}>
        <Image
          src={icon_developer_big}
          alt={'developer_big'}
          width={600}
          height={434}
        />
      </div>
      <div className={style.smallPhoto}>
        <Image
          src={icon_developer}
          alt={'developer'}
          width={288}
          height={209}
        />
        <Image
          src={icon_divece}
          alt={'divece'}
          width={288}
          height={201}
        />
      </div>
    </div>
  )
}

export default GalleryMosaicTwoPhoto