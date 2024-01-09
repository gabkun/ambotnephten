import React from "react";
import './kinder.css';

const Kinder = () => {
  const json = {
    "programs": [
      {
        "id": 1,
        "name": "Kindergarten Learning Program",
        "description": "A program designed for young learners to introduce them to foundational concepts.",
        "topics": [
          {
            "id": 101,
            "name": "Reading Readiness",
            "description": "Kindergarten students develop pre-reading skills through phonics activities and the introduction of sight words. They start recognizing and reading simple words and sentences.",
            "videoUrl": "https://www.youtube.com/watch?v=kKnwrCQwIvo",
            "activities": [
              {
                "id": 1001,
                "name": "Phonics Practice",
                "type": "Interactive",
                "description": "Activities to strengthen phonics skills and improve reading readiness."
              },
              {
                "id": 1002,
                "name": "Sight Words Recognition",
                "type": "Interactive",
                "description": "Games to help children recognize and read common sight words."
              }
            ]
          },
          {
            "id": 102,
            "name": "Math Fundamentals",
            "description": "Kindergarteners build on their numeracy skills with more advanced counting, addition, and subtraction. They learn about basic concepts like time and money.",
            "videoUrl": "https://www.youtube.com/watch?v=mjlsSYLLOSE",
            "activities": [
              {
                "id": 1003,
                "name": "Advanced Counting Games",
                "type": "Interactive",
                "description": "Games to reinforce counting skills with more complexity."
              },
              {
                "id": 1004,
                "name": "Introduction to Money",
                "type": "Interactive",
                "description": "Activities to introduce basic concepts of money and currency."
              }
            ]
          },
          {
            "id": 103,
            "name": "Science and Nature Exploration",
            "description": "Kindergarten is a time for young learners to explore the natural world around them. They might discover basic concepts in life sciences, earth sciences, and physical sciences through hands-on activities.",
            "videoUrl": "https://www.youtube.com/watch?v=Bf8V7cF8t48",
            "activities": [
              {
                "id": 1005,
                "name": "Nature Walk and Observation",
                "type": "Exploration",
                "description": "Outdoor activities to observe and explore nature."
              },
              {
                "id": 1006,
                "name": "Simple Science Experiments",
                "type": "Hands-on",
                "description": "Basic science experiments to introduce scientific concepts."
              }
            ]
          },
          {
            "id": 104,
            "name": "Art and Creativity",
            "description": "Creative expression is encouraged in kindergarten through art, music, and imaginative play. Children get to unleash their creativity and make their own masterpieces.",
            "videoUrl": "https://www.youtube.com/watch?v=1UPxCSQt_kc",
            "activities": [
              {
                "id": 1007,
                "name": "Art and Craft Sessions",
                "type": "Creative",
                "description": "Craft activities to foster creativity and artistic expression."
              },
              {
                "id": 1008,
                "name": "Music and Movement",
                "type": "Creative",
                "description": "Sessions to explore music and movement for creative development."
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

export default Kinder;