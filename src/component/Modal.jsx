// DetailMenuModal.js
const Modal = ({ menuId, setIsVisible }) => {
  const onSubmitBtn = () => {
    setIsVisible(false);
  };
  return (
    <div className="detail-menu-modal">
      <div>Modal 세부 내용들</div>
      <div className="detail-model-submit">
        <button onClick={() => onSubmitBtn()}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
