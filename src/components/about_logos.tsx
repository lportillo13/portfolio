import React from 'react';
import { cn } from "../lib/utils";
import Marquee from "./magicui/marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faReact, faJs, faWordpress, faSass, faJava, faCss3Alt, faGithubAlt, faHtml5, faBootstrap, faCpanel } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition type

const reviews = [
  { id: 1, icon: faPhp },
  { id: 2, icon: faReact },
  { id: 3, icon: faWordpress },
  { id: 4, icon: faSass },
  { id: 5, icon: faJava },
  { id: 6, icon: faCss3Alt },
  { id: 7, icon: faGithubAlt },
  { id: 8, icon: faHtml5 },
  { id: 9, icon: faBootstrap },
  { id: 10, icon: faCpanel },
  { id: 11, icon: faJs },
];

const firstRow = reviews.slice(reviews.length / 2);
const secondRow = reviews.slice(0, reviews.length / 2);

interface ReviewCardProps {
  icon: IconDefinition; // Define the type for the icon prop
}

const ReviewCard: React.FC<ReviewCardProps> = ({ icon }) => {
  return (
    <figure
      className={cn(
        "relative md:h-40 w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <FontAwesomeIcon icon={icon} /> {/* Render the FontAwesomeIcon here */}
      </div>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative logos-carousel flex h-[900px] w-full flex-row items-center justify-center overflow-hidden rounded-lg shadow-none">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} icon={review.icon} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} icon={review.icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black dark:from-background"></div>
    </div>
  );
}
