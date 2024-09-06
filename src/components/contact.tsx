// src/components/Contact.tsx

import React, { FC } from 'react';
import RetroGrid from "./magicui/retro-grid";
import { Dock, DockIcon } from "./magicui/dock";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogleDrive, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  linkedin: (props: IconProps) => <FontAwesomeIcon icon={faLinkedin} {...props} />,
  envelope: (props: IconProps) => <FontAwesomeIcon icon={faEnvelope} {...props} />,
  house: (props: IconProps) => <FontAwesomeIcon icon={faHouse} {...props} />,
  whatsapp: (props: IconProps) => <FontAwesomeIcon icon={faWhatsapp} {...props} />,
};

const Contact: FC = () => {
  return (
    <section id="contact" className="text-white dark">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <img className='z-10' src='/logi.png' alt='Logo' />
        <div className="relative z-10">
          <Dock direction="middle">
            <DockIcon>
              <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer">
                <Icons.house className="size-6" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://www.linkedin.com/in/robin-leonardo-portillo-361439128/" target="_blank" rel="noopener noreferrer">
                <Icons.linkedin className="size-6" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="mailto:lportillo1313@gmail.com.com">
                <Icons.envelope className="size-6" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://wa.me/+14076246542" target="_blank" rel="noopener noreferrer">
                <Icons.whatsapp className="size-6" />
              </a>
            </DockIcon>
          </Dock>
        </div>
        <RetroGrid />
      </div>
    </section>
  );
};

export default Contact;
