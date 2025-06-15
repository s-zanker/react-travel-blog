import './PostDate.css';

export function PostDate({ date, Icon }) {
  const visitDate = new Date(date).toLocaleDateString('de-DE');
  return (
    <div className='post-date'>
      {Icon && <span className='post-date__icon'>{Icon}</span>}
      <span>{visitDate}</span>
    </div>
  );
}
