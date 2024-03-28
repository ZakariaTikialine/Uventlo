function Modal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      id="modal-container"
      className=" fixed bg-gray-600/50 inset-0 flex justify-center z-40 items-center"
    >
      <div className=" flex justify-center items-center text-center bg-white py-8 px-20 rounded-md shadow-lg z-50 ">
        {children}
      </div>
    </section>
  );
}
export default Modal;
