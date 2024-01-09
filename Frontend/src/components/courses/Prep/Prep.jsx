import React from "react";
import './prep.css';

const Preschool = () => {
  const json = {
    "programs": [
      {
        "id": 2,
        "name": "Preschool Learning Program",
        "description": "A program designed to foster early development through a variety of engaging activities.",
        "topics": [
          {
            "id": 201,
            "name": "Early Literacy and Writing",
            "description": "In preschool, children focus on letter recognition, writing practice, and early reading. They might begin writing their names and simple words.",
            "videoUrl": "https://www.youtube.com/watch?v=Rma2CK0zfEU",
            "activities": [
              {
                "id": 2001,
                "name": "Letter Recognition Games",
                "type": "Interactive",
                "description": "Engaging games to help children recognize letters."
              },
              {
                "id": 2002,
                "name": "Writing Practice Sessions",
                "type": "Interactive",
                "description": "Activities to encourage writing practice for preschoolers."
              }
            ]
          },
          {
            "id": 202,
            "name": "Math and Problem Solving",
            "description": "Preschoolers delve deeper into mathematical concepts, learning about patterns, shapes, and more advanced counting. Problem-solving skills are nurtured.",
            "videoUrl": "https://www.youtube.com/watch?v=igcoDFokKzU",
            "activities": [
              {
                "id": 2003,
                "name": "Pattern Recognition Games",
                "type": "Interactive",
                "description": "Games to help children recognize and create patterns."
              },
              {
                "id": 2004,
                "name": "Shape Exploration",
                "type": "Interactive",
                "description": "Activities to introduce preschoolers to different shapes."
              }
            ]
          },
          {
            "id": 203,
            "name": "Introduction to Geography and Cultural Studies",
            "description": "Preschool learners are introduced to basic geography concepts and learn about different cultures and traditions from around the world.",
            "videoUrl": "https://www.youtube.com/watch?v=pkjJsYsy5cA",
            "activities": [
              {
                "id": 2005,
                "name": "Geography Adventure",
                "type": "Interactive",
                "description": "Fun activities to introduce basic geography concepts."
              },
              {
                "id": 2006,
                "name": "Cultural Exploration",
                "type": "Interactive",
                "description": "Learning about different cultures and traditions through activities."
              }
            ]
          },
          {
            "id": 204,
            "name": "Physical Education and Movement",
            "description": "Physical activity and motor skill development are essential in preschool. Kids engage in fun exercises, games, and activities to promote physical fitness.",
            "videoUrl": "https://www.youtube.com/watch?v=-y5yuLuw7KQ",
            "activities": [
              {
                "id": 2007,
                "name": "Fun Exercises",
                "type": "Physical",
                "description": "Engaging exercises to promote physical fitness in preschoolers."
              },
              {
                "id": 2008,
                "name": "Motor Skills Development",
                "type": "Physical",
                "description": "Activities to enhance motor skills in young learners."
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div>
      <h1>{json.programs[0].name}</h1>
      <p>{json.programs[0].description}</p>

      {json.programs[0].topics.map((topic) => (
        <div key={topic.id}>
          <h2>{topic.name}</h2>
          <p>{topic.description}</p>
          <video controls width="400" height="300">
            <source src={topic.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <ul>
            {topic.activities.map((activity) => (
              <li key={activity.id}>
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
                <p>Type: {activity.type}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Preschool;