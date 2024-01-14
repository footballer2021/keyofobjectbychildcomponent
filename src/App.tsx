import { useState } from 'react';
import PointInput from './PointInput';

const App:React.FC = () => {

  const [points, setPoints] = useState({
    suica:0,
    toica:0,
    icoca:0
  });

  return (
    <>
      <PointInput name="suica" state={points} dispatch={setPoints}/>
      <PointInput name="toica" state={points} dispatch={setPoints}/> 
      <PointInput name="icoca" state={points} dispatch={setPoints}/> 
    </>
  );
}

export default App;