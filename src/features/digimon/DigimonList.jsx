import { useGetDigimonQuery } from './digimonSlice';
import { Link } from 'react-router-dom';

import './DigimonList.scss';

function DigimonCard({ digimon }) {
  return (
    <li>
      <h3>{digimon.name}</h3>
      <img src={digimon.image} />
      <Link to={`/digimon/${digimon.id}`}> See Details</Link>
    </li>
  );
}

export default function DigimonList() {
  const { data: digimon } = useGetDigimonQuery();

  return (
    <ul className="digimon-list">
      {digimon?.map((d) => (
        <DigimonCard key={d.id} digimon={d} />
      ))}
    </ul>
  );
}
