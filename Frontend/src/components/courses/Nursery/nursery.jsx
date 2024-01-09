import React from "react";
import './nursery.css';


const Nursery = () => {
  const json = {
    "programs": [
        {
          "id": 1,
          "name": "Nursery Learning Program",
          "description": "A program designed for young learners to introduce them to foundational concepts.",
          "topics": [
            {
              "id": 101,
              "name": "Introduction to Colors and Shapes",
              "description": "Children explore a variety of colors and basic shapes through engaging and interactive activities.",
              "videoUrl": "https://www.youtube.com/watch?v=MnOKD_I6vSU",
              "activities": [
                {
                  "id": 1001,
                  "name": "Color Matching Game",
                  "type": "Interactive",
                  "description": "A fun game to help children identify and match different colors."
                },
                {
                  "id": 1002,
                  "name": "Shape Sorting Activity",
                  "type": "Interactive",
                  "description": "An activity to teach children about basic shapes through sorting."
                }
              ]
            },
            {
              "id": 102,
              "name": "Early Language Development",
              "description": "Nursery students begin building their language skills through storytelling, nursery rhymes, and basic vocabulary.",
              "videoUrl": "https://www.youtube.com/watch?v=izqfrq_vpv4",
              "activities": [
                {
                  "id": 1003,
                  "name": "Storytelling Session",
                  "type": "Interactive",
                  "description": "Engaging storytelling sessions to enhance language development."
                },
                {
                  "id": 1004,
                  "name": "Nursery Rhyme Sing-along",
                  "type": "Interactive",
                  "description": "Fun sessions where children learn nursery rhymes and sing along."
                }
              ]
            },
            {
              "id": 103,
              "name": "Numbers and Counting",
              "description": "Basic numeracy skills are introduced through counting games and activities.",
              "videoUrl": "https://www.youtube.com/watch?v=D0Ajq682yrA",
              "activities": [
                {
                  "id": 1005,
                  "name": "Counting Game",
                  "type": "Interactive",
                  "description": "An interactive game to help children grasp basic counting concepts."
                },
                {
                  "id": 1006,
                  "name": "Number Recognition Activity",
                  "type": "Interactive",
                  "description": "An activity to familiarize nursery learners with numbers and their recognition."
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

export default Nursery;