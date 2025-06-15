import './PostImage.css';

export function PostImage({
  source,
  altTxt = 'post image',
  variant = 'default',
}) {
  const fallback = '/img/placeholder.jpg';

  const handleError = (e) => {
    e.target.src = fallback;
  };

  const className = `post-image__${variant}`;

  return (
    <>
      <img
        src={source}
        alt={altTxt}
        onError={handleError}
        className={className}
      />
    </>
  );
}
