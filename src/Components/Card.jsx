import qrcode from "../assets/image-qr-code.png";

function Card() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white  w-[250px] rounded-xl shadow-xl">
        <div className="flex justify-center p-3 ">
          <img className="rounded-xl w-[250px] " src={qrcode} alt="qrcode" />
        </div>
        <div className="px-6">
          <p className="text-[17px]/[22px] font-[900] text-[#1f3251] text-center my-2 ">
            Improve your front-end skills by building projects
          </p>
          <p className="text-[12px]/[15px] mb-7 text-[#7b879d] text-center ">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
