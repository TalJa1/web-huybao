export const homeListStudent = [
  {
    name: "Phạm Quang Huy",
    class: "11a1",
    id: "123456789",
    fee: "đ 3.000.000",
  },
  {
    name: "Nguyễn Văn A",
    class: "11a2",
    id: "987654321",
    fee: "đ 2.500.000",
  },
  {
    name: "Trần Thị B",
    class: "11a3",
    id: "456789123",
    fee: "đ 3.200.000",
  },
  {
    name: "Lê Văn C",
    class: "11a4",
    id: "789123456",
    fee: "đ 2.800.000",
  },
  {
    name: "Hoàng Thị D",
    class: "11a5",
    id: "321654987",
    fee: "đ 3.100.000",
  },
  {
    name: "Phạm Văn E",
    class: "11a6",
    id: "654987321",
    fee: "đ 2.900.000",
  },
  {
    name: "Nguyễn Thị F",
    class: "11a7",
    id: "123789456",
    fee: "đ 3.300.000",
  },
  {
    name: "Trần Văn G",
    class: "11a8",
    id: "987321654",
    fee: "đ 2.700.000",
  },
  {
    name: "Lê Thị H",
    class: "11a9",
    id: "456123789",
    fee: "đ 3.400.000",
  },
  {
    name: "Hoàng Văn I",
    class: "11a10",
    id: "789654123",
    fee: "đ 2.600.000",
  },
];
const additionalNames = [
  "Nguyễn Văn B",
  "Trần Thị C",
  "Lê Văn D",
  "Hoàng Thị E",
  "Phạm Văn F",
  "Nguyễn Thị G",
  "Trần Văn H",
  "Lê Thị I",
  "Hoàng Văn J",
  "Phạm Thị K",
  "Nguyễn Văn L",
  "Trần Thị M",
  "Lê Văn N",
  "Hoàng Thị O",
  "Phạm Văn P",
  "Nguyễn Thị Q",
  "Trần Văn R",
  "Lê Thị S",
  "Hoàng Văn T",
  "Phạm Thị U",
  "Nguyễn Văn V",
  "Trần Thị W",
  "Lê Văn X",
  "Hoàng Thị Y",
  "Phạm Văn Z",
];

// Function to generate more students
const generateMoreStudents = (baseList: any[], count: number) => {
  const newList = [...baseList];
  let nameIndex = 0;

  baseList.forEach((student, index) => {
    for (let i = 1; i <= count; i++) {
      if (nameIndex >= additionalNames.length) {
        nameIndex = 0; // Reset index if we run out of names
      }
      newList.push({
        name: additionalNames[nameIndex],
        class: student.class,
        id: `${student.id}${i}`,
        fee: student.fee,
      });
      nameIndex++;
    }
  });

  return newList;
};

// Generate 5 more students for each class
export const extendedHomeListStudent = generateMoreStudents(homeListStudent, 5);

export const StudentAvatar = [
  require("../assets/home/1.png"),
  require("../assets/home/1.png"),
  require("../assets/home/3.png"),
  require("../assets/home/4.png"),
  require("../assets/home/5.png"),
  require("../assets/home/6.png"),
  require("../assets/home/7.png"),
];

export const OnlineStudent = [
  {
    name: "Nguyễn Thị Huyền",
    class: "11a1",
  },
  {
    name: "Trần Văn Minh",
    class: "11a2",
  },
  {
    name: "Lê Thị Lan",
    class: "11a3",
  },
  {
    name: "Phạm Văn Tuấn",
    class: "11a4",
  },
  {
    name: "Nguyễn Thị Mai",
    class: "11a5",
  },
  {
    name: "Hoàng Văn Bình",
    class: "11a6",
  },
];
