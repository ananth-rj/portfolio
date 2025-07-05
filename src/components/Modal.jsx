function Modal({ title, children, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg text-center"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {title && (
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
