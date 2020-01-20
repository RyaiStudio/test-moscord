const peoples = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },
  {
    name: 'Ham',
    department: 'IT',
    gender: 'M'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  }
];

// list by classify gender
function listByGender(sex = 'M') {
  return peoples.filter(people => people.gender == sex);
}

// list by group
function groupByDepartment() {
  return peoples.reduce((acc, cur) => {
    acc[cur.department] = [...(acc[cur.department] || []), cur];
    return acc;
  }, []);
}

const $males = listByGender('M');
console.log('males:', $males); // males

const $females = listByGender('F');
console.log('females:', $females); // females

const $groups = groupByDepartment();
console.log('groups: ', $groups);
