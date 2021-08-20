import React, { useEffect, useState } from "react";
import styles from "./legend.module.css";
import LegendIcons from "./LegendIcons/LegendIcons";

const Legend = () => {
  const [azLegendData, setAZLegendData] = useState(null);
  const [isLegendOpen, setLegendOpen] = useState(false);

  const AZLegendURL =
    "https://dev.staging.gohunt.com/server/rest/services/AZ/GoHuntMap/MapServer/legend?f=pjson";
  const CALegendURL =
    "https://dev.staging.gohunt.com/server/rest/services/CA/GoHuntMap/MapServer/legend?f=pjson";
  const COLegendURL =
    "https://dev.staging.gohunt.com/server/rest/services/CA/GoHuntMap/MapServer/legend?f=pjson";

  useEffect(() => {
    fetch(CALegendURL)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAZLegendData(result);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);

  const toggleLegend = () => {
    setLegendOpen(!isLegendOpen);
  };

  return (
    <div className={styles.legendContainerMain}>
      <div>
        <button className={styles.legendButton} onClick={toggleLegend}>
          Open Legend
        </button>
      </div>
      {isLegendOpen ?
        <div className={styles.legendContainer}>
         {
          azLegendData ? (
            azLegendData["layers"].map((element) => {
              return (
                <div>
                  <div className={styles.legendTitle}>
                    <span>
                      <b>
                        {element.layerName} ({element.layerId})
                      </b>
                    </span>
                  </div>
                  <div className={styles.legendIcon}>
                    {element["legend"].map((legendArr) => {
                      console.log(legendArr.imageData);
                      return (
                        <LegendIcons
                          imageData={legendArr.imageData}
                          height={legendArr.height}
                          width={legendArr.width}
                          label={legendArr.label}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading Data</p>
        )}
      </div> : <spa></spa> }
    </div>
  );
};

export default Legend;
