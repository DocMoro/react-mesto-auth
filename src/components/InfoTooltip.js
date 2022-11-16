import accept from '../images/accept.svg';
import fail from '../images/accept.svg';

export default function InfoTooltip({isRegisterPopup, loggedIn, onClose}) {
  return (
    <div className={`popup ${isRegisterPopup && "popup_active"}`}>
      <div className="popup__auth-container">
        <button type="button" className="popup__button-close button" aria-label="Закрыть" onClick={onClose}></button>
        <img className="popup__auth-image" src={loggedIn ? accept : fail}/>
        <h2 className="popup__auth-title">
        {
          loggedIn 
          ? 'Вы успешно зарегистрировались!'  
          : 'Что-то пошло не так! Попробуйте ещё раз.'
        }
        </h2>
      </div>
    </div>
  )
}