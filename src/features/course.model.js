export function getAll() {
  return courseModel;
}

export function getCoursesOfUser(userId) {
  const filteredCourses = courseModel.filter((course) =>
    course.students.some((students) => students.id == userId)
  );
  return filteredCourses;
}

export function updateLikes(courseId) {
  const filteredCourse = courseModel.filter((course) => course.id == courseId);
  filteredCourse[0].likes += 1;
  return courseModel;
}

const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 3291,
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Introduction to Node js",
    instructor: "Jessica Smith",
    description:
      "Learn the basics of Node js development and build your first Node js app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "your.image.here",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 11165,
    prerequisites: ["Basic JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Node js",
        content:
          "Overview of Node js, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your Express server",
        content: "Creating a simple Node js app using functional components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Introduction to Javascript",
    instructor: "Henry cleave",
    description: "Learn the basics of Javascript development.",
    enrollmentStatus: "InProgress", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "your.image.here",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM",
    location: "Online",
    likes: 10202,
    prerequisites: ["Basic HTMl, Css"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Javascript",
        content:
          "Overview of Javascript, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Learning Variables and Operators",
        content: "Going through variables and Operators.",
      },
      {
        week: 3,
        topic: "Learning Objects",
        content: "Going through Objects.",
      },
      {
        week: 4,
        topic: "Implementing Functions",
        content: "Going through Functions.",
      },
    ],
    students: [
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Introduction to HTML5",
    instructor: "Brian Sean",
    description: "Learn the basics of HTML.",
    enrollmentStatus: "InProgress", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "your.image.here",
    duration: "2 weeks",
    schedule: "Tuesdays and Thursdays, 1:00 PM - 2:00 PM",
    location: "Online",
    likes: 1023,
    prerequisites: ["No pre-requisites Needed"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "Overview of HTML, setting up your development environment.",
      },
      {
        week: 2,
        topic: "How internet works",
        content: "Going through working of internet.",
      },
      {
        week: 3,
        topic: "Learning HTML Tags",
        content: "Going through HTML Tags.",
      },
    ],
    students: [
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Introduction to CSS",
    instructor: "Kasey Johnson",
    description: "Learn the basics of CSS.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "your.image.here",
    duration: "4 weeks",
    schedule: "Tuesdays and Thursdays, 3:00 PM - 5:00 PM",
    location: "Online",
    likes: 4033,
    prerequisites: ["No pre-requisites Needed"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to CSS",
        content: "Overview of CSS, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Adding CSS",
        content: "Adding Inline, Internal and External CSS.",
      },
      {
        week: 3,
        topic: "Learning CSS selectors",
        content: "Going through CSS Selectors.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
    ],
  },
];
