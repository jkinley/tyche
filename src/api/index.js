
export const fetchPlanets = async (pageNum = 1) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${pageNum}`);
  return res.json();
};

export const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};