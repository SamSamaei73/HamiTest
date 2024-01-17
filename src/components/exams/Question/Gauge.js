import React, { useState, useEffect, useRef } from "react";
import "../../../css/exams/Gauge.css";
import GaugeChart from "react-gauge-chart";
function useEffectSkipFirst(fn, arr) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, arr);
}

const Gauge = ({
  userFinalCode,
  userFinalNumber,
  userScorePercentSeriesData,
}) => {
  const [dPercent, setDPercent] = useState(null);
  const [iPercent, setIPercent] = useState(null);
  const [sPercent, setSPercent] = useState(null);
  const [cPercent, setCPercent] = useState(null);
  const [dSegment, setDSegment] = useState(null);
  const [iSegment, setISegment] = useState(null);
  const [sSegment, setSSegment] = useState(null);
  const [cSegment, setCSegment] = useState(null);

  useEffect(() => {
    if (userScorePercentSeriesData) {
      //sdfsd
    }
  }, []);

  useEffectSkipFirst(() => {
    setDPercent(
      userScorePercentSeriesData.filter((item) => item.Name === "D")[0]
        .userScorePercent
    );
    //console.log("dprecent:", dPercent);
    setIPercent(
      userScorePercentSeriesData.filter((item) => item.Name === "I")[0]
        .userScorePercent
    );
    setSPercent(
      userScorePercentSeriesData.filter((item) => item.Name === "S")[0]
        .userScorePercent
    );
    setCPercent(
      userScorePercentSeriesData.filter((item) => item.Name === "C")[0]
        .userScorePercent
    );

    setDSegment(
      userScorePercentSeriesData.filter((item) => item.Name === "D")[0]
        .userScoreCode
    );
    setISegment(
      userScorePercentSeriesData.filter((item) => item.Name === "I")[0]
        .userScoreCode
    );
    setSSegment(
      userScorePercentSeriesData.filter((item) => item.Name === "S")[0]
        .userScoreCode
    );
    setCSegment(
      userScorePercentSeriesData.filter((item) => item.Name === "C")[0]
        .userScoreCode
    );
  }, [userScorePercentSeriesData]);

  return (
    <div id="Gauge">
      <div className="GaugeTitle">
        <input type="text" value={userFinalCode} readOnly />
        <label>الگوی شما :</label>
      </div>
      <section className="mainForGauge">
        <div className="gaugePart">
          <div className="gaugeInfo"></div>
          <GaugeChart
            id="gauge-chart4"
            nrOfLevels={10}
            arcPadding={0.1}
            percent={dPercent}
            cornerRadius={3}
            formatTextValue={(value) => value}
            textColor="#FF6060"
            style={{ width: "100%" }}
            colors={["#FFBBBB", "#FF1818"]}
            needleColor={"red"}
          />
          <h3 style={{ color: "#ff1818" }}>D</h3>

          <div className="gaugeInfo">
            <label>SEGMENT =</label>
            <input type="text" value={parseFloat(dSegment)} readOnly />
          </div>
        </div>

        <div className="gaugePart">
          <div className="gaugeInfo"></div>
          <GaugeChart
            id="gauge-chart4"
            nrOfLevels={10}
            arcPadding={0.1}
            percent={iPercent}
            cornerRadius={3}
            formatTextValue={(value) => value}
            textColor="#F5AB2A"
            style={{ width: "100%" }}
            colors={["#ECEFA4", "#F98404"]}
            needleColor={"#F98404"}
          />
          <h3 style={{ color: "#F98404" }}>I</h3>

          <div className="gaugeInfo">
            <label>SEGMENT =</label>
            <input type="text" value={parseFloat(iSegment)} readOnly />
          </div>
        </div>

        <div className="gaugePart">
          <div className="gaugeInfo"></div>
          <GaugeChart
            id="gauge-chart4"
            nrOfLevels={10}
            arcPadding={0.1}
            percent={cPercent}
            cornerRadius={3}
            formatTextValue={(value) => value}
            textColor="#1694D1"
            style={{ width: "100%" }}
            colors={["#A1E3D8", "#001E6C"]}
            needleColor={"#001E6C"}
          />
          <h3 style={{ color: "#001E6C" }}>C</h3>

          <div className="gaugeInfo">
            <label>SEGMENT =</label>
            <input type="text" value={parseFloat(cSegment)} readOnly />
          </div>
        </div>

        <div className="gaugePart">
          <div className="gaugeInfo"></div>
          <GaugeChart
            id="gauge-chart4"
            nrOfLevels={10}
            arcPadding={0.1}
            percent={sPercent}
            cornerRadius={3}
            formatTextValue={(value) => value}
            textColor="#02C374"
            style={{ width: "100%" }}
            colors={["#B4FF9F", "#005555"]}
            needleColor={"#B4FF9F"}
          />
          <h3 style={{ color: "#005555" }}>S</h3>

          <div className="gaugeInfo">
            <label>SEGMENT =</label>
            <input type="text" value={parseFloat(sSegment)} readOnly />
          </div>
        </div>
      </section>
      <div className="GaugeTitle">
        <input type="text" value={userFinalNumber} readOnly />
        <label>کد الگوی شما :</label>
      </div>
    </div>
  );
};

export default Gauge;
