import emailImg from '../assets/email.png';

export default function Confirm() {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={emailImg}
          className="max-w-24 rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold">Confirme su Correo</h1>
          <p className="py-6">
            Le enviamos un correo con la confirmacion de su registro.
          </p>
        </div>
      </div>
    </div>
  );
}
