# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

film = Category.create(name: "Film Titles")
cities = Category.create(name: "City Names")
history = Category.create(name: "Historical Figures")
tv = Category.create(name: "TV Show Titles");
book = Category.create(name: "Book Titles")
bchar = Category.create(name: "Book Characters");

Word.create(word: "It's a Wonderful Life", category: film)
Word.create(word: "The Godfather", category: film)
Word.create(word: "Lord of the Rings: The Return of the King", category: film)
Word.create(word: "The Sound of Music", category: film)
Word.create(word: "There's Something about Mary", category: film)
Word.create(word: "Avatar", category: film)
Word.create(word: "The Hurt Locker", category: film)

Word.create(word: "London", category: cities)
Word.create(word: "Washington DC", category: cities)
Word.create(word: "Rome", category: cities)
Word.create(word: "Jerusalem", category: cities)
Word.create(word: "Reykjavik", category: cities)
Word.create(word: "Copenhagen", category: cities)
Word.create(word: "Amsterdam", category: cities)
Word.create(word: "Hong Kong", category: cities)
Word.create(word: "Inverness", category: cities)

Word.create(word: "George Washington", category: history)
Word.create(word: "Joan of Arc", category: history)
Word.create(word: "Queen Victoria", category: history)
Word.create(word: "Alexander Hamilton", category: history)
Word.create(word: "Ghangis Khan", category: history)
Word.create(word: "Leonardo da Vinci", category: history)
Word.create(word: "Winston Churchill", category: history)
Word.create(word: "Billy the Kid", category: history)

Word.create(word: "Doctor Who", category: tv)
Word.create(word: "Friends", category: tv)
Word.create(word: "Grey's Anatomy", category: tv)
Word.create(word: "Scooby-Doo, Where are You!", category: tv)
Word.create(word: "Frasier", category: tv)
Word.create(word: "Gilligan's Island", category: tv)
Word.create(word: "I Love Lucy", category: tv)
Word.create(word: "Justified", category: tv)
Word.create(word: "Game of Thrones", category: tv)
Word.create(word: "Psych", category: tv)
Word.create(word: "Endeavour", category: tv)
Word.create(word: "Mr. Robot", category: tv)

Word.create(word: "The Chronicles of Narnia", category: book)
Word.create(word: "The Hobbit", category: book)
Word.create(word: "Sense and Sensibility", category: book)
Word.create(word: "Harry Potter and the Chamber of Secrets", category: book)
Word.create(word: "A Tale of Two Cities", category: book)
Word.create(word: "Robinson Crusoe", category: book)
Word.create(word: "Treasure Island", category: book)
Word.create(word: "Eragon", category: book)

Word.create(word: "Hermoine Granger", category: bchar)
Word.create(word: "Frodo Baggins", category: bchar)
Word.create(word: "David Copperfield", category: bchar)
Word.create(word: "Jane Eyre", category: bchar)
Word.create(word: "Emma Woodhouse", category: bchar)
Word.create(word: "Winnie the Pooh", category: bchar)
Word.create(word: "Daenerys Targaryen", category: bchar)

