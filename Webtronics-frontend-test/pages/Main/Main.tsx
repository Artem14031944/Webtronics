import { FC } from 'react';
import FacePart from '../../components/PartsMain/FacePart/FacePart';
import AboutPart from '../../components/PartsMain/AboutPart/AboutPart';
import ProgrammingPart from '../../components/PartsMain/ProgrammingPart/ProgrammingPart';
import StepsPart from '../../components/PartsMain/StepsPart/StepsPart';
import AskedPart from '../../components/PartsMain/AskedPart/AskedPart';
import ReviewPart from '../../components/PartsMain/ReviewPart/ReviewPart';
import GalleryPart from '../../components/PartsMain/GalleryPart/GalleryPart';
import FormPart from '../../components/PartsMain/FormPart/FormPart';
import style from './Main.module.css';

const Main: FC = () => {
  return (
    <div className={style.main}>
      <FacePart/>
      <AboutPart/>
      <ProgrammingPart/>
      <StepsPart/>
      <AskedPart/>
      <ReviewPart/>
      <GalleryPart/>
      <FormPart/>
    </div>
  )
};

export default Main;