import { useGetDigimonQuery } from './digimonSlice';

export default function DigimonList() {
  const { data: digimon } = useGetDigimonQuery();

  return (
    <ul>
      {digimon?.map((d) => (
        <li key={d.name}>{d.name}</li>
      ))}
    </ul>
  );
}
