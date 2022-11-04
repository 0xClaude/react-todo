import Head from "next/head"
import styles from "../styles/motodo.module.css"
import AddItem from "./additem"
import Footer from "./footer"
import ListItems from "./listitems"
import { useState } from "react"

export default function Home() {

  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <Head>
        <title>motodo v01a</title>
      </Head>

      <main className={styles.main}>
      <h1>Welcome to motodo</h1>
        <AddItem item={item} setItem={setItem} list={list} setList={setList} />
        <ListItems list={list} setList={setList} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}
