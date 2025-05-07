import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import './App.css'
import Entry from './components/Entry.jsx'
import wall from './wall.jpeg'
import giza from './giza.jpeg'
import kili from './kili.jpeg'
import fuji from './fuji.jpeg'
import tower from  './tower.jpeg'
import zuma from './zuma.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Entry
	image = {fuji} 
        country='Japan' 
        site='Mount Fuji' 
        date='12 Jun 2024' 
        note='Welcome to Mount Fuji'
      />
      <Entry 
	image = {zuma}
        country='Nigeria' 
        site='Zuma Rock' 
        date='4 Oct 2024' 
        note='Located in Kaduna State'
      />
      <Entry 
	image = {kili}
        country='Tanzania' 
        site='Mount Kilimanjaro' 
        date='15 Aug 2024' 
        note='The highest mountain in Africa'
      />
      <Entry 
	image = {giza}
        country='Egypt' 
        site='Pyramids of Giza' 
        date='14 Mar 2024' 
        note='One of the Seven Wonders of the Ancient World'
      />
      <Entry 
	image ={tower}
        country='France' 
        site='Eiffel Tower' 
        date='20 Oct 2024' 
        note='A popular spot in Paris'
      />
      <Entry 
	image = {wall}
        country='China' 
        site='Great Wall' 
        date='30 Jan 2024' 
        note='One of the world wonders'
      />
    </>
  );
}

export default App;
