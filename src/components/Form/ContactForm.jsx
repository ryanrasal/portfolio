import { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
  };

  const validateMessage = () => {
    setIsMessageValid(message.trim() !== "");
  };

  const handleEmailSubmit = () => {
    const subject = "Message via Portfolio "; 
    const mailtoLink = `mailto:ryan.beaujot@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validateMessage();

    if (isEmailValid && isMessageValid) {
      handleEmailSubmit();
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col pb-10">
      <div className="border-t w-1/2 mx-auto" />
      <h2 className="text-primary uppercase text-center text-2xl py-4 font-bold tracking-wider">
        Contactez-nous
      </h2>
      {isSubmitted ? (
        <p>Votre message a été envoyé avec succès à ryan.beaujot@outlook.fr.</p>
      ) : (
        <form className="mx-auto md:w-[50vh]" onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Adresse e-mail :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className={
                !isEmailValid
                  ? "border-red-600 rounded-lg py-2 text-black border-2"
                  : "text-black py-2 border-2 rounded-lg"
              }
            />
            {!isEmailValid && (
              <p className="error">Veuillez entrer une adresse e-mail valide.</p>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={validateMessage}
              className={
                !isMessageValid
                  ? "invalid text-black border-2 "
                  : "text-black border-2"
              }
            />
            {!isMessageValid && (
              <p className="error">Veuillez entrer un message.</p>
            )}
          </div>
          <div className="flex mt-2">
            <button
              className="border-2 rounded-lg hover:bg-black hover:text-white w-full mx-auto p-2"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
