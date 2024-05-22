"use client"

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./page.module.css";
import Navbar from "./_Navbar/Navbar";
import Para from "./_Home/Para";
import Card from "./_Card/Cardimg";
import Team from "./_Team/Team";
import SimpleFooter  from "./_Footer/SimpleFooter";

export default function Home() {
  return (
    <main className={styles.main}>
      <div >
      <Navbar/>
      <br />
      <Para/>
      <br />
      <Card/>
      <br />
      <Team/>
      <br />
      <SimpleFooter/>
      </div>
    </main>
  );
}
