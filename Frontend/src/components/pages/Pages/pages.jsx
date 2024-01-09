import React from 'react';
import './pages.css';
import gabrielImage from './Img/gabriel.jpg';
import nephtenImage from './Img/nephten.jpg';

function TeamMember({ name, role, description, imageSrc }) {
  return (
    <div className="team-member">
      <img src={imageSrc} alt={name} className="team-member-image" />
      <div className="team-member-details">
        <h3>{name}</h3>
        <p><strong>{role}</strong></p>
        <p>{description}</p>
      </div>
    </div>
  );
}

const Testimonial = ({ author, text }) => (
  <div>
    <p>"{text}"</p>
    <p>- {author}</p>
  </div>
);

const Pages = () => (
  <div>
    <h1>Our Team</h1>
    <TeamMember
      name="Gabriel Malanday"
      role="CEO"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      imageSrc={gabrielImage} // Use the imported image
    />
    <TeamMember
      name="Nephten Ilon"
      role="CTO"
      description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      imageSrc={nephtenImage} // Use the imported image
    />

    <h1>Testimonials</h1>
    <Testimonial
      author="Happy Customer 1"
      text="Amazing team! They delivered exactly what we needed on time and with great quality."
    />
    <Testimonial
      author="Satisfied Client 2"
      text="Working with this team was a pleasure. Their professionalism and expertise made the project a success."
    />
  </div>
);

export default Pages;
