import logo from '../assets/logo.png'

import mainbg from '../assets/maing.png';

import smproductOne from '../assets/smproductone.png';
import smproductTwo from '../assets/smproducttwo.png';

import vectorOne from '../assets/vector.png';
import vectorTwo from '../assets/vector2.png';

import loading from '../assets/loading.json';

import error from '../assets/error.svg';

import children from '../assets/children.jpg';
import casual from '../assets/casual.png';
import women from '../assets/women.png';

export const IMAGES = {
    LOGO: logo,
    MAIN_BG: mainbg,
    SM_PRODUCT_ONE: smproductOne,
    SM_PRODUCT_TWO: smproductTwo,
    VECTOR_ONE: vectorOne,
    VECTOR_TWO: vectorTwo,
    LOADING: loading,
    ERROR: error,
    CHILDREN: children,
    CASUAL: casual,
    WOMEN: women
} as const;

export const CATEGORY_IMAGES: Record<string, string> = {
    women: IMAGES.WOMEN,
    men: IMAGES.CASUAL,
    kids: IMAGES.CHILDREN,
    logo: IMAGES.LOGO
};