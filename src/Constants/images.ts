export interface ImageAssets {
    [key: string]: string;
}

import logo from '../assets/logo.png'

import mainbg from '../assets/maing.png';

import smproductOne from '../assets/smproductone.png';
import smproductTwo from '../assets/smproducttwo.png';

import vectorOne from '../assets/vector.png';
import vectorTwo from '../assets/vector2.png';

export const IMAGES: ImageAssets = {
    LOGO: logo,
    MAIN_BG: mainbg,
    SM_PRODUCT_ONE: smproductOne,
    SM_PRODUCT_TWO: smproductTwo,
    VECTOR_ONE: vectorOne,
    VECTOR_TWO: vectorTwo,
};