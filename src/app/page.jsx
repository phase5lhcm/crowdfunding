import React from "react";
import Image from "next/image";
import homeStyles from "@/app/styles/Home.css";
import CallToActionCard from "./components/CallToActionCard";

const Home = () => {
  return (
    <main>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100%",
          height: "30%",
        }}
      >
        <Image
          src="/images/imageHeroDesktop.jpg"
          layout="fill"
          alt="Picture of the desktop"
          objectFit="cover"
        />
      </div>
      <div
        style={{
          paddingTop: "2em",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between", // moves "About, Discover & Get Started to the right"
          color: "#fff",
        }}
      >
        <div>
          <h4 style={{ paddingLeft: "3em" }}>Crowdfunding</h4>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-around",
            fontWeight: "bold",
          }}
        >
          <p>About</p>
          <p style={{ paddingLeft: "1em", paddingRight: "1em" }}>Discover</p>
          <p style={{ paddingRight: "3em" }}>Get Started</p>
        </div>
      </div>
      <CallToActionCard />
    </main>
  );
};
export default Home;
