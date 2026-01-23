const people = [
  { name: 'Joko', age: 30, nationality: 'Indonesia' },
  { name: 'Ridwan Hanif', age: 40, nationality: 'Malaysia' },
  { name: 'Angelina Christie', age: 30, nationality: 'Indonesia' },
  { name: 'Songpatakot', age: 40, nationality: 'Thailand' },
  { name: 'Ryu Osaki', age: 50, nationality: 'Japan' },
  { name: 'Frank Ocean', age: 30, nationality: 'Canada' },
  { name: 'Grace Liu', age: 50, nationality: 'Singapore' },
  { name: 'Hadi Kurniawan', age: 40, nationality: 'Indonesia' },
  { name: 'Ivan', age: 30, nationality: 'Indonesia' },
  { name: 'Abdullah Judy', age: 60, nationality: 'Malaysia' }
];

const _ = require('lodash');

const filterByMaxAge = (data, maxAge) => {
  return data.filter(person => person.age < maxAge);
};

const groupByNationality = (data) => {
  return _.groupBy(data, 'nationality');
};

const processPeopleData = (data, maxAge) => {
  const filteredData = filterByMaxAge(data, maxAge);
  return groupByNationality(filteredData);
};

const result = processPeopleData(people, 35);
console.log(result);

