

class Book{

    constructor(title,author, price, rating){
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
    }

    static show(book){
        console.log('book',book);
        
    }
}

class BookManager{

    constructor(){
        this.books=[
            new Book("The Accursed God","Vivek Dutta Mishra",299, 4.3),
            new Book("The Brethren","John Grisham",150, 4),
            new Book("Sons of Fortune","Jeffrey Archer",350, 4.8),
            new Book("Summons","John Grisham",200, 3.9),
        ]
    }

    getAll(){
        return this.books;
    }

    getBooksByAuthor(author){
        console.log(`${author} Books`);
		console.log('price\trating\tauthor\ttitle');
		for(let book of books){
			if book.author == author:
				console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }

    getBooksInPriceRange(min,max){
        console.log(`Books in ${min} and ${max} price range `);
		console.log('price\trating\tauthor\ttitle');
		for(let book of books){
			if book.price < max and book.price > min:
				console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }

    getBooksInRatingRange(min,max){
		console.log(`Books in ${min} and ${max} rating range `);
		console.log('price\trating\tauthor\ttitle');
		for(let book of books){
			if book.rating < max and book.rating > min:
				console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);

    }

    search(text){
		console.log(`Books in which contains ${text} in title`);
		console.log('price\trating\tauthor\ttitle');
		for(let book of books){
			if book.title.includes(text):
				console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);

    }
}


function showBooks(books,message=''){

    console.log(message);
    console.log('price\trating\tauthor\ttitle');
    for(let book of books){
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }

}


let manager=new BookManager();

showBooks(manager.getAll(), "All Books");


showBooks(manager.getBooksByAuthor("John Grisham"),"Books by John Grisham");

