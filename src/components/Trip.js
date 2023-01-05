import React from "react";
import TripData from "./TripData";
import "./TripStyle.css";

import japan from "../assets/japan.jpeg";
import belgium from "../assets/belgm1.jpeg";
import italy from "../assets/Italy.jpeg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>
        Gain pleasure while you explore nature in it's beauty, can't you see how
        nature is beautiful?
      </p>

      <div className="tripcard">
        <TripData
          image={japan}
          heading="Trip in Japan 🇯🇵"
          text="Japan attracted 31.88 million international tourists in 2019.
           Japan has 21 World Heritage Sites, including Himeji Castle, Historic Monuments of Ancient Kyoto and Nara. 
           Popular foreigner attractions include Tokyo and Hiroshima, Mount Fuji,
           ski resorts such as Niseko in Hokkaido, Okinawa, riding the shinkansen and taking advantage of Japan's hotel and hotspring network."
        />
        <TripData
          image={belgium}
          heading="Trip in Belgium 🇧🇪"
          text="Tourism in Belgium is one of Belgium's industries. 
          Its accessibility from elsewhere in Europe makes it a popular tourist destination.
           The tourist industry generates 2.8% of Belgium's gross domestic product and employs 3.3% of the working population (142,000 people).
           6.7 million people travelled to Belgium in 2005.Two-thirds of them come from the larger nearby countries - France, 
          The Netherlands, the United Kingdom, and Germany; there are also many tourists from Spain and Italy."
        />
        <TripData
          image={italy}
          heading="Trip in Italy 🇮🇹"
          text="With 65 million tourists per year (2019) according to ISTAT, Italy is the fifth most visited country in international tourism arrivals, 
          but the second after Spain in terms of nights spent in hotel, with 220,7 million foreign visitor nights spent and a total of 436,7 million nights. 
          According to 2018 estimates by the Bank of Italy, 
          the tourism sector directly generates more than five percent of the national GDP (13 percent when also considering the indirectly generated GDP) and represents over six percent of the employed."
        />
      </div>
    </div>
  );
};

export default Trip;
