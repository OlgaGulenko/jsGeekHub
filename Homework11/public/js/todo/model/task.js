let tasks = new TaskModel([
    {
        text: 'Brew coffee',
        done: true,
        date: new Date(1995, 11, 17).toLocaleString('ru', options)
    },
    {
        text: 'Write some code',
        done: false,
        date: new Date(2005, 11, 17).toLocaleString('ru', options)
    },
    {
        text: 'Sleep',
        done: false,
        date: new Date(2018, 01, 01).toLocaleString('ru', options)
    }
]);
