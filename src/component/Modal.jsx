const Modal = ({ idx, modalVisibleId, setModalVisibleId }) => {
  const onCloseHandler = () => {
    setModalVisibleId("");
  };
  return (
    <>
      <div className={modalVisibleId === idx ? "d_block" : "d_none"}>
        <button onClick={onCloseHandler}>닫기</button>
      </div>
    </>
  );
};

export default Modal;
