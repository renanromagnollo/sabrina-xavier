import Image from "next/image";
import styles from "./page.module.css";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Home() {
  return (
      <main style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                  }}>
        <UnderConstruction/>
      </main>

  );
}
