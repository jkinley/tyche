
const baseURL = "https://swapi.dev/api";

export const fetchPlanets = async (pageNum = 1) => {
  const res = await fetch(`${baseURL}/planets/?page=${pageNum}`);
  return res.json();
};

export const fetchPlanetById = async (id) => {
  const res = await fetch(`${baseURL}/planets/${id}`);
  return res.json();
};

export const fetchPeople = async () => {
  const res = await fetch(`${baseURL}/people`);
  return res.json();
};

export const fetchPeopleById = async (id) => {
  const res = await fetch(`${baseURL}/people/${id}`);
  return res.json();
};