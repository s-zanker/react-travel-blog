import './PostAuthor.css';

export function PostAuthor({ author }) {
  return (
    <div className='post-author'>
      <img src={author.img} alt={author.name} />
      <span>{author.name}</span>
    </div>
  );
}
