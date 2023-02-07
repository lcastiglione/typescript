interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

interface Student {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

let student: Student = {
    firstName: "Peter",
    lastName: "Parker",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

let employee2: Employee =student

console.log(employee2.fullName())

interface IceCream {
    flavor: string;
    scoops: number;
 }

 interface Sundae extends IceCream {
     sauce: 'chocolate' | 'caramel' | 'strawberry';
     nuts?: boolean;
     whippedCream?: boolean;
     instructions?: string;
 }

 let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 2, sauce: 'caramel'}));

interface IceCreamArray {
    [index: number]: string;
}

let myIceCream2: IceCreamArray;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream2[0];
console.log(myStr); // Imprime en consola 'chocolate'

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();