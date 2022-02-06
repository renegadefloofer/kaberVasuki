import SongProfile from '../components/SongProfile';

const defaultURL =
  'https://yt3.ggpht.com/ytc/AKedOLSjdYxMo3XtRG7JkJPRVp5KKkqqY8GBZQA_GtoWAw=s900-c-k-c0x00ffffff-no-rj';

const MEDIA = [
  {
    id: 1,
    title: 'Nee Vekkam Kori',
    imgURL: defaultURL,
    file: 'neevekkam',
    ytLink: 'https://youtu.be/OajLQqyWXic',
  },
  {
    id: 2,
    title: 'Maaru',
    imgURL: defaultURL,
    file: 'maaru',
    ytLink: 'https://youtu.be/B3yBr0OhDug',
  },
  {
    id: 3,
    title: 'Mugamoodi',
    imgURL: defaultURL,
    file: 'mugamoodi',
    ytLink: 'https://youtu.be/O9oQ7QXDAsU',
  },
  {
    id: 4,
    title: 'Naveena Kaalam',
    imgURL:
      'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/272121736_4820704871323356_813544198944584540_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=T8ZHOYTBdn4AX_dtfyk&_nc_ht=scontent-atl3-1.xx&oh=00_AT9NYAoHlpZtjR5k7m_KdUY7gtKafGTw6OO3ldxCTuwXNw&oe=62032608',
    file: '',
    ytLink: 'https://youtu.be/-0mTs0XxJME',
  },
];

const Gallery = () => {
  return (
    <section>
      <h1>All Music Videos</h1>
      <ul>
        {MEDIA.map((song) => {
          return (
            <SongProfile
              key={song.id}
              imgUrl={song.imgURL}
              title={song.title}
              link={song.ytLink}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
