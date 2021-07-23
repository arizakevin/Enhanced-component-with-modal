import React, { useState } from "react";

const withModal = (Component, CustomButton, CustomModal) => () => {
    const [modalVisible, setModalVisible] = useState(false);

    const ButtonWithCallback = () => { return CustomButton(modalVisible, setModalVisible) }

    return (
      <>
        <CustomModal visible={modalVisible} callback={setModalVisible} />
        <Component CustomButton={ButtonWithCallback} />
      </>
    );
}

export default withModal;
