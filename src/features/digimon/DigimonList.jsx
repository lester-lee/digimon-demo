import DigimonCard from './DigimonCard';
import { useGetDigimonQuery } from './digimonSlice';

export default function DigimonList() {
  const { data: digimon } = useGetDigimonQuery();

  return (
    <ul>
      {digimon?.map((d) => (
        <DigimonCard key={d.id} digimon={d} />
      ))}
    </ul>
  );
}
