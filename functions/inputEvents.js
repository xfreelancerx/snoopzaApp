
import { setColor } from '../RTK/colorSlice';

export const focusHandler = (dispatch) => {
    dispatch(setColor("rgb(118,154,178)"));
  };

export   const blurHandler = (dispatch) => {
    dispatch(setColor("rgba(112, 112, 112, 1)"));
  };

   