import { getTime, setTime as setTimeService } from "../../services/time";

import Card from "../Card/Card";
import DescriptionFeature from "../DescriptionFeature/DescriptionFeature";
import Slider from "@material-ui/core/Slider";
import { useEffect } from "react";
import { useState } from "react";
import { withStyles } from "@material-ui/core";

const TinderSlider = withStyles({
  root: {
    color: "#fd5068",
  },
})(Slider);

const Timetomatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!time) {
      const data = getTime();
      if (!data) {
        setTime(1000);
        return;
      }

      setTime(data);
    }

    setTimeService(time);
  }, [time]);

  const convertMilisecondsOnSeconds = (time) => time / 1000;

  const handleChange = (event, newValue) => {
    setTime(newValue);
  };

  return (
    <div>
      <Card
        title="Tempo entre os Likes"
        subtitle={`${convertMilisecondsOnSeconds(time)} Seg`}
      >
        <TinderSlider
          value={time}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
          max={60000}
          step={1000}
          min={0}
        />
      </Card>
      <DescriptionFeature>
        Essas são suas preferências para sugerir um tempo entre um like e
        outros.
      </DescriptionFeature>
    </div>
  );
};

export default Timetomatch;
