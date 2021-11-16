const people = [
  {
    id: 1,
    name: 'Subin',
    age: 18,
    gender: 'female',
  },
  {
    id: 2,
    name: 'Aubin',
    age: 11,
    gender: 'male',
  },
  {
    id: 3,
    name: 'Bubin',
    age: 22,
    gender: 'female',
  },
  {
    id: 4,
    name: 'Cubin',
    age: 19,
    gender: 'female',
  },
  {
    id: 5,
    name: 'Dubin',
    age: 18,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
