import React from 'react';
import Iframe from 'react-iframe';

import { BodyText, ResponsiveIframe } from '../style';

const Athlete = () => (
  <div>
    <BodyText>For me, being an athlete is about efficiency. I need to learn how to improve my swimming strokes, ride my bike with increasing power, and run incrementally faster to make it over the finish line.</BodyText>
    <BodyText>It's also about being organized. I track my race times in spreadsheets and stick to a diligent training schedule.</BodyText>
    <BodyText>Finally, it's about friendship. Some of my best friends are workout buddies -- we motivate each other to keep going.</BodyText>
    <BodyText>Want to train with me? Join me for a workout from June 25-Sept 8, 2018:</BodyText>
    <ResponsiveIframe>
    <Iframe 
      url="https://calendar.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=mi0nnqai8hjvapfuusmb2damfo%40group.calendar.google.com&amp;color=%2329527A&amp;ctz=America%2FLos_Angeles"
      style="border: 0" 
      width="90%" 
      height="90%" 
      frameborder="0" 
      scrolling="no" 
    />
    </ResponsiveIframe>
  </div>
)

export default Athlete;
