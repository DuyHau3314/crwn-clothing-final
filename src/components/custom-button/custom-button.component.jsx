import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-styles';
const CustomButton = (props) => {
  return <CustomButtonContainer>{props.children}</CustomButtonContainer>;
};

export default CustomButton;
