// Here you can see that using the withModal HOC is very simple,
// you just have to import the withModal HOC wherever you need it
// and pass it the component you want to enhance, the button and the modal.

import ComponentToEnhance from "./ComponentToEnhance";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";

import withModal from "../../HOCs/withModal";

export default withModal(ComponentToEnhance, CustomButton, CustomModal);
