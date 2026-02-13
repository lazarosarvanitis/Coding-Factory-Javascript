const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'},
    ]
    
    // Traverse με forEach
     
    users.forEach(user => {
        console.log(user.firstname);
    });

    // map 

    const usersWithEmails = [
        {id: 1, firstname: 'Alice', email: "alice@aueb.gr" },
        {id: 2, firstname: 'Bob', email: "bob@aueb.gr" },
        {id: 3, firstname: 'Charlie', email: "charlie@aueb.gr" },
    ]

    const emails = usersWithEmails.map(user => {
        return user.email;
    });

    console.log(emails);

    // filter

    const activeUsers = [
        {id: 1, name: 'Alice', isActive: true},
        {id: 2, name: 'Bob', isActive: false},
        {id: 3, name: 'Charlie', isActive: true},
    ]

    const usersWithStatusTrue = activeUsers.filter(user => {
        user.isActive; // doesnt need return, true by default, false will be filtered out
        // return user.isActive === true;
    });

    console.log(usersWithStatusTrue);

    // reduce

    const cart = [
        {id: 1, name: "Laptop", price: 1000},
        {id: 2, name: "Phone", price: 500},
        {id: 3, name: "Tablet", price: 300},
    ]

    const totalPrice = cart.reduce((total, item) =>  total + item.price, 0); // 0 is the initial value of total, if we dont provide it, it will be the first item of the array, and the iteration will start from the second item

    console.log(totalPrice); // 1800

    // some

    const hasExpensiveItems = cart.some(item => item.price > 800); // true, because laptop is 1000
    console.log(hasExpensiveItems); 
    
    //every

    const allItemsExpensive = cart.every(item => item.price < 1500); // true, because all items are less than 1500

    console.log(allItemsExpensive); // true, because all items are less than 1500

    // flatmap

    const posts = [
        {id: 1, title: "Post 1", tags: ["javascript", "programming"]},
        {id: 2, title: "Post 2", tags: ["css", "design"]},
        {id: 3, title: "Post 3", tags: ["html", "web"]},
    ]

    const allTags = posts.flatMap(post => post.tags); // ["javascript", "programming", "css", "design", "html", "web"]

    console.log(allTags);