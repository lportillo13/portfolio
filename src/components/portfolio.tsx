import React, { FC } from 'react';

// Define the type for the props of the Card component
interface CardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;  // Added link property
}

const Card: FC<CardProps> = ({ title, description, tags, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-[#040910] rounded-xl shadow-lg max-w-xs mx-auto fade-in">
      <div className="relative">
        {/* Image or visual */}
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#040910]"></div>
      </div>
      <div className="p-4">
        <h2 className="text-xl text-white mb-2">{title}</h2>
        <div className="flex flex-wrap mt-4">
          {tags.map((tag, index) => (
            <div className='gradient-border' key={index}>
              <span
                className=" text-gray-300 text-xs px-2 py-1 mr-2 portfolio_tags"
              >
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

const CardGrid: FC = () => {
  const cardData = [
    {
      title: 'www.arribas.com',
      description:
        'Animating widths with react-spring, use-measure and interpolation',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
      image: '/img/arribas.com-min.png',
      link: 'https://www.arribas.com',
    },
    {
      title: 'www.blueskyequipmentrental.com',
      description:
        'Using CSS variables with the useSpring hook and animation chains',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/blueskyequipmentrental.com-min.png',
      link: 'https://www.blueskyequipmentrental.com',
    },
    {
      title: 'www.brandcoders.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/brandcoders.com-min.png',
      link: 'https://www.brandcoders.com',
    },
    {
      title: 'www.cssupplyfl.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/cssupplyfl.com-min.png',
      link: 'https://www.cssupplyfl.com',
    },
    {
      title: 'www.endless-storage.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/endless-storage.com-min.png',
      link: 'https://www.endless-storage.com',
    },
    {
      title: 'www.grandholidaylightingorlando.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/grandholidaylightingorlando.com-min.png',
      link: 'https://www.grandholidaylightingorlando.com',
    },
    {
      title: 'www.lifeboattrustservices.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/lifeboattrustservices.com-min.png',
      link: 'https://www.lifeboattrustservices.com',
    },
    {
      title: 'www.livetrends.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/livetrends.com-min.png',
      link: 'https://www.livetrends.com',
    },
    {
      title: 'www.mssoa.org',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/mssoa.org-min.png',
      link: 'https://www.mssoa.org',
    },
    {
      title: 'www.randaindustries.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/randaindustries.com-min.png',
      link: 'https://www.randaindustries.com',
    },
    {
      title: 'www.storageinternetmarketing.com',
      description:
        'Introduction to using the useTrail hook as part of a wrapper component',
        tags: ['WordPress', 'Sass', 'JS', 'Bootstrap'],
        image: '/img/storageinternetmarketing.com-min.png',
      link: 'https://www.storageinternetmarketing.com',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          tags={card.tags}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

const Portfolio: FC = () => {
  return (
    <section id="portfolio" className="container h-full flex flex-col items-center my-16 text-white">
      <h2
        className="font-display text-center text-[3.5rem] font-semibold mb-20 text-white dark:text-white md:leading-[5rem]"
      >My Last Projects<span className="text-[#39ff14]">.</span></h2>
      <CardGrid />
    </section>
  );
};

export default Portfolio;
