import React from 'react';
import Iframe from 'react-iframe';

import { BodyText } from '../style';

const Athlete = () => (
  <div>
    <BodyText>For me, being an athlete is about efficiency. I need to learn how to improve my swimming strokes, ride my bike with increasing power, and run incrementally faster to make it over the finish line.</BodyText>
    <BodyText>It's also about being organized. I track my race times in spreadsheets and stick to a diligent training schedule.</BodyText>
    <BodyText>Finally, it's about friendship. Some of my best friends are workout buddies -- we motivate each other to keep going.</BodyText>
    <BodyText>Want to train with me? Join me for a workout from June 25-Sept 8:</BodyText>
    <Iframe 
      url="https://calendar.google.com/calendar/embed?src=mi0nnqai8hjvapfuusmb2damfo%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
      style="border: 0" 
      width="600" 
      height="400" 
      frameborder="0" 
      scrolling="no" 
    />
  </div>
)

export default Athlete;
