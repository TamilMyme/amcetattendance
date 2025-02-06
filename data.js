// Dummy data for users (faculty members)
const users = [
    // CSE Department
    {
        userId: "cse_year1",
        password: "cse123_1",
        department: "CSE",
        year: 1
    },
    {
        userId: "cse_year2",
        password: "cse123_2",
        department: "CSE",
        year: 2
    },
    {
        userId: "cse_year3",
        password: "cse123_3",
        department: "CSE",
        year: 3
    },
    {
        userId: "cse_year4",
        password: "cse123_4",
        department: "CSE",
        year: 4
    },
    // AIDS Department
    {
        userId: "aids_year1",
        password: "aids123_1",
        department: "AIDS",
        year: 1
    },
    {
        userId: "aids_year2",
        password: "aids123_2",
        department: "AIDS",
        year: 2
    },
    {
        userId: "aids_year3",
        password: "aids123_3",
        department: "AIDS",
        year: 3
    },
    {
        userId: "aids_year4",
        password: "aids123_4",
        department: "AIDS",
        year: 4
    }
];

// Dummy student data
const students = {
    CSE: {
        1: [
            { id: 1, name: "John Doe", phone: "1234567890" },
            { id: 2, name: "Jane Smith", phone: "2345678901" },
            { id: 3, name: "Michael Johnson", phone: "3456789012" },
            { id: 4, name: "Emily Davis", phone: "4567890123" },
            { id: 5, name: "William Brown", phone: "5678901234" },
            { id: 6, name: "Olivia Wilson", phone: "6789012345" },
            { id: 7, name: "James Taylor", phone: "7890123456" },
            { id: 8, name: "Sophia Anderson", phone: "8901234567" },
            { id: 9, name: "Alexander Lee", phone: "9012345678" },
            { id: 10, name: "Emma Martinez", phone: "0123456789" }
        ],
        2: [
            { id: 11, name: "Daniel White", phone: "1234567890" },
            { id: 12, name: "Ava Thomas", phone: "2345678901" },
            { id: 13, name: "Joseph Garcia", phone: "3456789012" },
            { id: 14, name: "Mia Robinson", phone: "4567890123" },
            { id: 15, name: "David Clark", phone: "5678901234" },
            { id: 16, name: "Sofia Rodriguez", phone: "6789012345" },
            { id: 17, name: "Matthew Lewis", phone: "7890123456" },
            { id: 18, name: "Victoria Lee", phone: "8901234567" },
            { id: 19, name: "Andrew Walker", phone: "9012345678" },
            { id: 20, name: "Chloe Hall", phone: "0123456789" }
        ],
        3: [
            { id: 21, name: "Christopher Allen", phone: "1234567890" },
            { id: 22, name: "Isabella Young", phone: "2345678901" },
            { id: 23, name: "Ethan King", phone: "3456789012" },
            { id: 24, name: "Madison Wright", phone: "4567890123" },
            { id: 25, name: "Joshua Lopez", phone: "5678901234" },
            { id: 26, name: "Elizabeth Hill", phone: "6789012345" },
            { id: 27, name: "Ryan Scott", phone: "7890123456" },
            { id: 28, name: "Sarah Green", phone: "8901234567" },
            { id: 29, name: "Nathan Adams", phone: "9012345678" },
            { id: 30, name: "Abigail Baker", phone: "0123456789" }
        ],
        4: [
            { id: 31, name: "Tyler Nelson", phone: "1234567890" },
            { id: 32, name: "Hannah Carter", phone: "2345678901" },
            { id: 33, name: "Brandon Mitchell", phone: "3456789012" },
            { id: 34, name: "Samantha Perez", phone: "4567890123" },
            { id: 35, name: "Kevin Roberts", phone: "5678901234" },
            { id: 36, name: "Lauren Turner", phone: "6789012345" },
            { id: 37, name: "Justin Phillips", phone: "7890123456" },
            { id: 38, name: "Rachel Campbell", phone: "8901234567" },
            { id: 39, name: "Benjamin Parker", phone: "9012345678" },
            { id: 40, name: "Michelle Evans", phone: "0123456789" }
        ]
    },
    AIDS: {
        1: [
            { id: 41, name: "Aaron Morris", phone: "1234567890" },
            { id: 42, name: "Rebecca Edwards", phone: "2345678901" },
            { id: 43, name: "Gregory Collins", phone: "3456789012" },
            { id: 44, name: "Nicole Stewart", phone: "4567890123" },
            { id: 45, name: "Stephen Sanders", phone: "5678901234" },
            { id: 46, name: "Katherine Price", phone: "6789012345" },
            { id: 47, name: "Eric Long", phone: "7890123456" },
            { id: 48, name: "Christina Ross", phone: "8901234567" },
            { id: 49, name: "Bryan Powell", phone: "9012345678" },
            { id: 50, name: "Tiffany Hughes", phone: "0123456789" }
        ],
        2: [
            { id: 51, name: "Patrick Butler", phone: "1234567890" },
            { id: 52, name: "Angela Foster", phone: "2345678901" },
            { id: 53, name: "Keith Simmons", phone: "3456789012" },
            { id: 54, name: "Maria Bryant", phone: "4567890123" },
            { id: 55, name: "George Hayes", phone: "5678901234" },
            { id: 56, name: "Andrea Russell", phone: "6789012345" },
            { id: 57, name: "Craig Griffin", phone: "7890123456" },
            { id: 58, name: "Lisa Ford", phone: "8901234567" },
            { id: 59, name: "Alan Hamilton", phone: "9012345678" },
            { id: 60, name: "Amy Graham", phone: "0123456789" }
        ],
        3: [
            { id: 61, name: "Roger Sullivan", phone: "1234567890" },
            { id: 62, name: "Julie Wallace", phone: "2345678901" },
            { id: 63, name: "Ralph Woods", phone: "3456789012" },
            { id: 64, name: "Denise Cole", phone: "4567890123" },
            { id: 65, name: "Bruce West", phone: "5678901234" },
            { id: 66, name: "Virginia Jordan", phone: "6789012345" },
            { id: 67, name: "Philip Reynolds", phone: "7890123456" },
            { id: 68, name: "Lori Fisher", phone: "8901234567" },
            { id: 69, name: "Johnny Ellis", phone: "9012345678" },
            { id: 70, name: "Kathy Harrison", phone: "0123456789" }
        ],
        4: [
            { id: 71, name: "Gerald Gibson", phone: "1234567890" },
            { id: 72, name: "Teresa McDonald", phone: "2345678901" },
            { id: 73, name: "Harold Marshall", phone: "3456789012" },
            { id: 74, name: "Beverly Owens", phone: "4567890123" },
            { id: 75, name: "Lawrence Henry", phone: "5678901234" },
            { id: 76, name: "Joyce Kennedy", phone: "6789012345" },
            { id: 77, name: "Peter Shaw", phone: "7890123456" },
            { id: 78, name: "Frances Grant", phone: "8901234567" },
            { id: 79, name: "Douglas Duncan", phone: "9012345678" },
            { id: 80, name: "Alice Johnston", phone: "0123456789" }
        ]
    }
}; 