import Article from '../components/Article';
const NEWS = [
  {
    id: 1,
    source: 'www.thehindu.com',
    published: '24th February, 2015',
    author: 'Parshathy J. Nath',
    title: 'Songs of a rebel',
    content:
      'Azhagu Puratchi (Beautiful Revolution) is the first ever crowd-funded Tamil music album. With the help of Supportive Cities, a platform that helps off-beat artists, they raised about Rs. 87,000. The album was out online last December. The songs were written by Kaber during his college days and are full of rebellious outbursts, quirky images and philosophical musings.',
  },
  {
    id: 2,
    source: 'www.cinemaexpress.com',
    published: '21st October, 2020',
    author: 'Ashameera Aiyappan',
    title: 'Kaber Vasuki: Music saved me from an emotional crisis',
    content:
      'If you are a listener of Tamil indie music, you have probably heard about Kaber Vasuki. The indie musician is known for his philosophical, brutally honest lyrics that are designed to penetrate your soul...His themes choices are transient, and so are his influences...Films were doors that opened though he did not go knocking (He has composed a song in Dharala Prabhu, and has projects like Rocky and Aelay in the pipeline)',
  },
  {
    id: 3,
    source: 'www.republicworld.com',
    published: '28th May, 2021',
    author: 'Aakash Mishra',
    title: 'Kaber Vasuki Sells NFT Of Phone-demo Of His Song For Rs 1.5 Crore',
    content:
      'Singer Kaber Vasuki auctions the first-ever phone demo of his song Vasanam for the price of 50 ETH. The NFT is bought by Metakovan whose fund bought Beeple’s Everyday for a whopping $69.3 million in March 2021. This is the biggest reported sale of NFT by an Indian artist amid unprecedented interest in digital works...Metakovan praised Kaber Vasuki’s music and said that his music has helped him in filling up a vacuum he felt even after listening to Beatles or Pink Floyd.',
  },
];

const About = () => {
  return (
    <div>
      {NEWS.map((article) => {
        return (
          <Article
            key={article.id}
            source={article.source}
            published={article.published}
            title={article.title}
            content={article.content}
          />
        );
      })}
    </div>
  );
};

export default About;
