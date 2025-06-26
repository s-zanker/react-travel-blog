import './Home.css';

export function Home() {
  return (
    <div className='home'>
      <img
        //fallback for older browsers
        src='/img/dachzelt-hero-large.webp'
        srcSet='
          /img/dachzelt-hero-small.webp 640w,
          /img/dachzelt-hero-medium.webp 1280w,
          /img/dachzelt-hero-large.webp 1920w
        '
        sizes='100vw' //tells the browser, that the image will be 100% of the viewport (optional)
        alt='welcome to the travelblog'
        className='home__hero-img'
      />
      <div className='home__overlay'>
        <h1>Above the Ground</h1>
        <p>
          Discover freedom where the roof becomes your home and nature your
          neighbor
        </p>
      </div>
    </div>
  );
}
