import './IconButton.css';

export function IconButton({ onBtnClick, btnText, Icon }) {
  return (
    <button onClick={() => onBtnClick()} className='icon-button'>
      {Icon && <span className='icon-button__icon'>{Icon}</span>}
      {btnText && <span className='icon-button__text'>{btnText}</span>}
    </button>
  );
}
