import { useState } from 'react';
import { Box } from '@mui/material';

import { HeroBanner, SearchExercises, Exercises } from '../components/';

const Home = () => {

// define state for exercises and body parts
  
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (

    <Box>

      <HeroBanner />

      <SearchExercises 
                    setExercises={setExercises} 
                    bodyPart={bodyPart} 
                    setBodyPart={setBodyPart} 
                    />
      <Exercises 
                    setExercises={setExercises} 
                    exercises={exercises} 
                    bodyPart={bodyPart} 
                    />
    </Box>

  );
};

export default Home;