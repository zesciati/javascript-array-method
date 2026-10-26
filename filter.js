const students = [
  { id: 1, name: "Rina", score: 85, class: "A", active: true },
  { id: 2, name: "Budi", score: 55, class: "B", active: true },
  { id: 3, name: "Sari", score: 92, class: "A", active: false },
  { id: 4, name: "Andi", score: 70, class: "B", active: true },
  { id: 5, name: "Dewi", score: 48, class: "A", active: true },
  { id: 6, name: "Eko", score: 78, class: "C", active: false },
];

const passGrade = students.filter(student => student.score >= 60);
const twoConditionFilter = students.filter(student => student.class === "A" && student.active === true);
const eitherConditionFilter = students.filter(student => student.score > 90 || student.class === "C");
const byNameFilter = students.filter(student => student.name.startsWith("A") || student.name.startsWith("B"));
const nameMapFilter = students.filter(student => student.active && student.score >= 60).map((student) =>{
  return student.name;
});

const removeId = 6;
const oneItemFilter = students.filter(student => student.id !== removeId);

console.log(passGrade);
console.log(twoConditionFilter);
console.log(eitherConditionFilter);
console.log(byNameFilter);
console.log(nameMapFilter);
console.log(oneItemFilter);