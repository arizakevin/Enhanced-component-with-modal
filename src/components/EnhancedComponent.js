import withModal from "../HOCs/withModal";
import ComponentToEnhance from "./ComponentToEnhance";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";

export default withModal(ComponentToEnhance, CustomButton, CustomModal);
