const users = [
    {
        _id: '1',
        username: 'rajkumar',
        name: 'Raj Kumar',
        password: 'raj123',
        profilePicture: 'raj_profile.jpg',
        gender: 'male',
    },
    {
        _id: '2',
        username: 'anitalamba',
        name: 'Anita Lamba',
        password: 'anita123',
        profilePicture: 'anita_profile.jpg',
        gender: 'female',
    },
    {
        _id: '3',
        username: 'vijayverma',
        name: 'Vijay Verma',
        password: 'vijay123',
        profilePicture: 'vijay_profile.jpg',
        gender: 'male',
    },
    {
        _id: '4',
        username: 'smritichatterjee',
        name: 'Smriti Chatterjee',
        password: 'smriti123',
        profilePicture: 'smriti_profile.jpg',
        gender: 'female',
    },
    {
        _id: '5',
        username: 'arjunreddy',
        name: 'Arjun Reddy',
        password: 'arjun123',
        profilePicture: 'arjun_profile.jpg',
        gender: 'male',
    },
];

const transactions = [
    {
        _id: '1',
        userId: '1',
        description: 'Grocery Shopping',
        paymentType: 'CASH',
        category: 'Groceries',
        amount: 1500.0,
        location: 'Mumbai',
        date: '2024-01-10',
    },
    {
        _id: '2',
        userId: '2',
        description: 'Online Course Subscription',
        paymentType: 'CARD',
        category: 'Education',
        amount: 2500.0,
        location: 'Delhi',
        date: '2024-01-15',
    },
    {
        _id: '3',
        userId: '3',
        description: 'Electricity Bill Payment',
        paymentType: 'CASH',
        category: 'Utilities',
        amount: 1200.0,
        location: 'Chennai',
        date: '2024-01-20',
    },
    {
        _id: '4',
        userId: '4',
        description: 'Flight Ticket Booking',
        paymentType: 'CARD',
        category: 'Travel',
        amount: 8000.0,
        location: 'Kolkata',
        date: '2024-01-25',
    },
    {
        _id: '5',
        userId: '5',
        description: 'Monthly Rent',
        paymentType: 'CASH',
        category: 'Housing',
        amount: 15000.0,
        location: 'Hyderabad',
        date: '2024-01-30',
    },
];

export { users, transactions };
