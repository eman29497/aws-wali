"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Yeh chhota component search params handle karega
function SearchComponent() {
  const params = useSearchParams();
  
  let cities = [
    { roll: 1, name: "ali" },
    { roll: 2, name: "rameez" },
    { roll: 3, name: "aqsa" },
    { roll: 4, name: "yahya" }
  ];

  let ciyFound = cities.find((city) => city.roll == params.get('roll'));

  return (
    <>
      <h1>{ciyFound ? ciyFound.name : "Not Found"}</h1>
      <h1>{params.get('name')}</h1>
    </>
  );
}

// Yeh main Page component hai
export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchComponent />
      </Suspense>
      <p>asd</p>
      <p>asdasdas</p>
    </div>
  );
}