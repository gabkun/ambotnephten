import React from 'react';
import './Courses.css'; 

const Courses = () => {
  return (
    <div className="learning-program">
      <h2>Nursery Learning Program:</h2>
      <div className="program-description">
        <h3>Introduction to Colors and Shapes</h3>
        <p>In the nursery program, children are introduced to a variety of colors and basic shapes. They learn to identify and differentiate colors and shapes through fun and interactive activities.</p>
      </div>
      
      <div className="program-description">
        <h3>Early Language Development</h3>
        <p>Nursery students start building their language skills through storytelling, nursery rhymes, and basic vocabulary. They learn to express themselves and understand simple sentences.</p>
      </div>
      <div className="program-description">
        <h3>Numbers and Counting</h3>
        <p>Basic numeracy skills are introduced through counting games and activities. Nursery learners become familiar with numbers and begin to understand simple counting concepts.</p>
        <a href="/Nursery" className="button secondary-button">VIEW NOW</a>
      </div>
      <div className="program-description">
      
      </div>

      <h2>Kindergarten Learning Program:</h2>
      <div className="program-description">
        <h3>Reading Readiness</h3>
        <p>Kindergarten students develop pre-reading skills through phonics activities and the introduction of sight words. They start recognizing and reading simple words and sentences.</p>
      </div>
      <div className="program-description">
        <h3>Math Fundamentals</h3>
        <p>Kindergarteners build on their numeracy skills with more advanced counting, addition, and subtraction. They learn about basic concepts like time and money.</p>
      </div>
      <div className="program-description">
        <h3>Science and Nature Exploration</h3>
        <p>Kindergarten is a time for young learners to explore the natural world around them. They might discover basic concepts in life sciences, earth sciences, and physical sciences through hands-on activities.</p>
      </div>
      <div className="program-description">
        <h3>Art and Creativity</h3>
        <p>Creative expression is encouraged in kindergarten through art, music, and imaginative play. Children get to unleash their creativity and make their own masterpieces.</p>
        <a href="/Kinder" className="button secondary-button">VIEW NOW</a>
      </div>

      <h2>Preschool Learning Program:</h2>
      <div className="program-description">
        <h3>Early Literacy and Writing</h3>
        <p>In preschool, children focus on letter recognition, writing practice, and early reading. They might begin writing their names and simple words.</p>
      </div>
      <div className="program-description">
        <h3>Math and Problem Solving</h3>
        <p>Preschoolers delve deeper into mathematical concepts, learning about patterns, shapes, and more advanced counting. Problem-solving skills are nurtured.</p>
      </div>
      <div className="program-description">
        <h3>Introduction to Geography and Cultural Studies</h3>
        <p>Preschool learners are introduced to basic geography concepts and learn about different cultures and traditions from around the world.</p>
      </div>
      <div className="program-description">
        <h3>Physical Education and Movement</h3>
        <p>Physical activity and motor skill development are essential in preschool. Kids engage in fun exercises, games, and activities to promote physical fitness.</p>
        <a href="/Prep" className="button secondary-button">VIEW NOW</a>
      </div>
      
    </div>
  );
}

export default Courses;