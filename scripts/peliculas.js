const peliculas = [
    {
        "id": 1,
        "price": 20,
        "title": "Harry Potter and the Sorcerer's Stone",
        "url": "https://www.imdb.com/title/tt0241527",
        "poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
        "description": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        "rating": 7.6,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNzQwOGYzNzItNDYzMy00ZThkLTkyNzgtMmY1MTY3ZjY4MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjI2Njk1MjM0M15BMl5BanBnXkFtZTgwNDUwMTEyMjI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTkyMDM1NDA5MV5BMl5BanBnXkFtZTgwMzE0ODAxMTI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTc1MDg0MDgzMV5BMl5BanBnXkFtZTcwOTIzNjUwNA@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNzQ4NDY2NDYyNF5BMl5BanBnXkFtZTcwNzIzNDc3Mw@@._V1_.jpg"
        ],
        "featured": true
    },
    {
        "id":2,
        "price": 25,
        "title": "The Godfather",
        "url": "https://www.imdb.com/title/tt0068646",
        "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "description": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        "rating": 9.2,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 3,
        "price": 15,
        "title": "The Dark Knight",
        "url": "https://www.imdb.com/title/tt0468569",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "rating": 9,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BOTAxNzI0NDE1NF5BMl5BanBnXkFtZTcwNjczMTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjE3NTU0NTQ5NF5BMl5BanBnXkFtZTcwNzczMTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTM1NTcwMTk4OV5BMl5BanBnXkFtZTcwOTczMTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTM1Njc5NTE0M15BMl5BanBnXkFtZTcwMDgzMTk2Mw@@._V1_.jpg"
        ],
        "featured": true
    },
    {
        "id": 4,
        "price": 20,
        "title": "The Godfather Part II",
        "url": "https://www.imdb.com/title/tt0071562",
        "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "rating": 9,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNDYwMjc5NDM5M15BMl5BanBnXkFtZTgwNTM3ODIxNjM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDI0Mzg1MDA4NF5BMl5BanBnXkFtZTgwMTM4NjIwMjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ5NTE0MDc0OV5BMl5BanBnXkFtZTgwOTI4NjIwMjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjEwNjg4NzM5MV5BMl5BanBnXkFtZTgwNjI4NjIwMjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTg5OTE1NzMyNl5BMl5BanBnXkFtZTgwMDM4NjIwMjE@._V1_.jpg"
        ],
        "featured": true
    },
    {
        "id": 5,
        "price": 25,
        "title": "The Lord of the Rings: The Return of the King",
        "url": "https://www.imdb.com/title/tt0167260",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "rating": 9,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNTg3Mzk3NDI0NF5BMl5BanBnXkFtZTcwNDU2MTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTk1ODY0NDg2M15BMl5BanBnXkFtZTcwNTU2MTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTMzNzQwODg2OV5BMl5BanBnXkFtZTcwMzE2MTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTgzODk0MTQ0Nl5BMl5BanBnXkFtZTcwNDE2MTk2Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNzcxNDk0NDI1Nl5BMl5BanBnXkFtZTcwNTE2MTk2Mw@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 6,
        "price": 25,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "url": "https://www.imdb.com/title/tt0120737",
        "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "rating": 8.8,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODg0Nzk2MDY0OV5BMl5BanBnXkFtZTcwNDEzNTU0NA@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODkyNDM4MDA3NV5BMl5BanBnXkFtZTcwNTEzNTU0NA@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTk0NTYwNTEyNV5BMl5BanBnXkFtZTcwNjEzNTU0NA@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ5Mzk1Mzc3N15BMl5BanBnXkFtZTcwNzEzNTU0NA@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 7,
        "price": 30,
        "title": "Forrest Gump",
        "url": "https://www.imdb.com/title/tt0109830",
        "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        "rating": 8.8,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZTY4NjcxNDctZmVjMC00NzM0LWIxYTctNjdhNzdlN2VkNjNiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjhlOWFmMmMtOGI5NC00NWJkLWE4OTUtMzA5NzE1MGZmYjM5XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjAwZDczYWYtMzM2Ny00YTkxLWExNmUtODAwZTUyNTk3NTQ0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMmNiOWE3OTktNWZjNC00NzUzLThkZWQtNWM5ZGM5ZjI3ZTFkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNGU5OWEzNDAtNzM5Zi00NGU0LThiNTYtMjMwOTVlMjkxYjM5XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 8,
        "price": 30,
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "url": "https://www.imdb.com/title/tt0080684",
        "poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "description": "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
        "rating": 8.7,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTU1Mjk0NTEzNV5BMl5BanBnXkFtZTgwNjI4NzUyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTYwNTk5OTE1OV5BMl5BanBnXkFtZTgwOTIwMzQyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjQzMjEzNjUxOF5BMl5BanBnXkFtZTgwNTEwMzQyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjAyNDU4NTIwN15BMl5BanBnXkFtZTgwNjEwMzQyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTU0MjYzNDgzOF5BMl5BanBnXkFtZTgwMDIwMzQyNDM@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 9,
        "price": 35,
        "title": "The Matrix",
        "url": "https://www.imdb.com/title/tt0133093",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "rating": 8.7,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BYjg1N2E0Y2YtYTdhOS00NDlhLTkxNTktNTQ0MmYyZGRhMzk4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjQ1NDAwMzI4Nl5BMl5BanBnXkFtZTgwMDkwMTEyMjI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNzM4OTkzMjcxOF5BMl5BanBnXkFtZTgwMTkxMjI1MTI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTMxMDg1MjY4OF5BMl5BanBnXkFtZTcwMTU3MTIxNA@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjQ4NTAzNTE2OV5BMl5BanBnXkFtZTcwMjU3MTIxNA@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 10,
        "price": 20,
        "title": "Interstellar",
        "url": "https://www.imdb.com/title/tt0816692",
        "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        "rating": 8.7,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTc0NDQ4MjkyOF5BMl5BanBnXkFtZTgwNDE2NzUzOTE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ0MjQ3NjE1MF5BMl5BanBnXkFtZTgwMzMyODgxMzE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTg4MTY3MDUyNl5BMl5BanBnXkFtZTgwMDMyODgxMzE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 11,
        "price": 25,
        "title": "Star Wars: Episode IV - A New Hope",
        "url": "https://www.imdb.com/title/tt0076759",
        "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg",
        "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        "rating": 8.6,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTk3MTkzNTk3Ml5BMl5BanBnXkFtZTgwOTcyMzQyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjE1NzI5OTAwMl5BMl5BanBnXkFtZTgwMTgyMzQyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjQwMjIzNTk3OF5BMl5BanBnXkFtZTgwMjgyMzQyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjQ3NTM2Nzk2Ml5BMl5BanBnXkFtZTgwNDgyMzQyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjUyNDE4MTAwOF5BMl5BanBnXkFtZTgwNTgyMzQyNDM@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 12,
        "price": 30,
        "title": "Back to the Future",
        "url": "https://www.imdb.com/title/tt0088763",
        "poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        "rating": 8.5,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BZjhiOTU5YmUtM2Y0NS00OTI2LWJiZjMtMTc3ZmQ1ZTZlMDg3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BYWM5ODM4NDMtNmQ2My00NTkxLTk5Y2MtZDlmNjIyYWYyODdiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BM2UzYzk5MGEtODg2OS00NDFmLThkMzEtOWRmY2U4MWMwNDNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTdjZjI5N2EtYWEyNS00ZjVlLTk4NGEtZjc3N2JkZTkxNDNiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTE0YTJhOTUtZTg2Yy00NzVmLWFjZjItMGI0NTU2ZTEwNDgwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 13,
        "price": 15,
        "title": "Spirited Away",
        "url": "https://www.imdb.com/title/tt0245429",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
        "rating": 8.6,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTgxMzMwMjg3M15BMl5BanBnXkFtZTgwMDM0NDE0ODE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTU3MjI5MzM2Ml5BMl5BanBnXkFtZTgwOTc1MTMyMDE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTgyOTQ4NjEzNF5BMl5BanBnXkFtZTgwODY1MTMyMDE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BODM2OTgyOTY1OV5BMl5BanBnXkFtZTgwOTY1MTMyMDE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTEzNzMwMDQ3OF5BMl5BanBnXkFtZTgwMTc1MTMyMDE@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 14,
        "price": 30,
        "title": "The Lion King",
        "url": "https://www.imdb.com/title/tt0110357",
        "poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
        "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "rating": 8.5,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTM2ODAwNTc0NV5BMl5BanBnXkFtZTcwMjQ2NTI3Ng@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTU4ODA5MTEyM15BMl5BanBnXkFtZTcwNDQ2NTI3Ng@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQxNDg1MzA2MV5BMl5BanBnXkFtZTcwNTQ2NTI3Ng@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTM4OTg5NzE4OF5BMl5BanBnXkFtZTcwNjQ2NTI3Ng@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTQxNzU4NTY2OF5BMl5BanBnXkFtZTcwNzQ2NTI3Ng@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 15,
        "price": 45,
        "title": "WALL·E",
        "url": "https://www.imdb.com/title/tt0910970",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
        "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        "rating": 8.4,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTMyOTk0NDMwMF5BMl5BanBnXkFtZTcwMzgwMzMzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDExNzM3Mzc2MV5BMl5BanBnXkFtZTcwMDIwMzMzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjE4MTcwMTM1Nl5BMl5BanBnXkFtZTcwMTIwMzMzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTI5NzY4NDQ3OV5BMl5BanBnXkFtZTcwNDIwMzMzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNzM0OTU2NzM0NV5BMl5BanBnXkFtZTcwNjIwMzMzMw@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 16,
        "price": 10,
        "title": "Coco",
        "url": "https://www.imdb.com/title/tt2380307",
        "poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
        "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        "rating": 8.4,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMjM2MzIwNDYyMV5BMl5BanBnXkFtZTgwMTEzMjMyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTgyMTA2ODMxNl5BMl5BanBnXkFtZTgwMzEzMjMyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTU4Njg3MDIxN15BMl5BanBnXkFtZTgwNDEzMjMyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjQ4NzA3MzgzNV5BMl5BanBnXkFtZTgwNTEzMjMyNDM@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjM2Mjc0OTAyNl5BMl5BanBnXkFtZTgwNzEzMjMyNDM@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 17,
        "price": 30,
        "title": "Toy Story",
        "url": "https://www.imdb.com/title/tt0114709",
        "poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
        "description": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
        "rating": 8.3,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BN2Q4NWY3ZTYtYWNjNi00OGExLWI0YTAtZDM0NTY5MDY3OWZhXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjFjMTdkOGQtZDJjZS00YzIzLWE1NTItZDdhYzY1NzE1Njg2XkEyXkFqcGdeQXVyMjg0NjA1Mzk@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTUyNTQwMTUwMl5BMl5BanBnXkFtZTgwOTI2OTYwMzI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ5NTc5NTYyM15BMl5BanBnXkFtZTcwMzk0MjIyNw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjY3Njk2MDgwM15BMl5BanBnXkFtZTcwNDk0MjIyNw@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 18,
        "price": 30,
        "title": "Avengers: Endgame",
        "url": "https://www.imdb.com/title/tt4154796",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "rating": 8.4,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTlmOGE2ZWMtODA4MS00M2Q0LTg5MDktYzY2MmYzOWRhZWVlXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNDQ1YjBkNGEtYzUxZi00NzUyLTgwZGUtYmFhZTkzYTJkOTk0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZmRmNjhmOGItNWMzNi00NTMyLTgzZTktY2UxMzQ4YjhhN2YxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZGFmYWU1OGUtYmUxNS00N2E4LTkxYmMtZGYxM2NmYzhjZjJkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZWQ5OGI3Y2EtNjVmMi00Zjc0LWEyMTgtODk3MDlmNGE2ZTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 19,
        "price": 25,
        "title": "Toy Story 3",
        "url": "https://www.imdb.com/title/tt0435761",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
        "description": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
        "rating": 8.3,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BNGU3OGQ5ZDMtNjgxYS00YTAzLTk0NGYtNDYxYWI5ODdhYTkwXkEyXkFqcGdeQXVyMjg0NjA1Mzk@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjUxZGZhNGEtNTc4Zi00ZTM4LWI2OTgtMjk5Njg1MDFiMzZiXkEyXkFqcGdeQXVyMjg0NjA1Mzk@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjAyMDM0MjAyNV5BMl5BanBnXkFtZTgwNDI4OTYwMzI@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjA5MjIyNTY2Ml5BMl5BanBnXkFtZTcwOTEwMTk1Mw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTMyNzk2NzY4OV5BMl5BanBnXkFtZTcwMDIwMTk1Mw@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 20,
        "price": 30,
        "title": "Up",
        "url": "https://www.imdb.com/title/tt1049413",
        "poster": "https://m.media-amazon.com/images/M/MV5BYjBkM2RjMzItM2M3Ni00N2NjLWE3NzMtMGY4MzE4MDAzMTRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        "description": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
        "rating": 8.3,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMjIxOTI4NzkyOV5BMl5BanBnXkFtZTcwNzQ5OTIzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTMyODc0ODI2OF5BMl5BanBnXkFtZTcwODQ5OTIzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQxMjI0NjY4OF5BMl5BanBnXkFtZTcwOTQ5OTIzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQxMDA0MDI4MV5BMl5BanBnXkFtZTcwMTU5OTIzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNzYxNTE5NTcwOF5BMl5BanBnXkFtZTcwMjU5OTIzMw@@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 21,
        "price": 20,
        "title": "My Neighbor Totoro",
        "url": "https://www.imdb.com/title/tt0096283",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "description": "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
        "rating": 8.1,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BODIwMTc0NDA4Ml5BMl5BanBnXkFtZTgwNDE3OTEwMjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTc2MDgzODgxNF5BMl5BanBnXkFtZTgwMzE3OTEwMjE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTUyODI0ODA1NV5BMl5BanBnXkFtZTgwNTA2MDIyMDE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjEyMzI0Nzc1N15BMl5BanBnXkFtZTgwNjA2MDIyMDE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTM4MjIxMjQ3N15BMl5BanBnXkFtZTgwNzA2MDIyMDE@._V1_.jpg"
        ],
        "featured": false
    },
    {
        "id": 22,
        "price": 45,
        "title": "Monsters, Inc.",
        "url": "https://www.imdb.com/title/tt0198781",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_.jpg",
        "description": "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
        "rating": 8.1,
        "images": [
            "https://m.media-amazon.com/images/M/MV5BMTY4Mzg1MzI5OF5BMl5BanBnXkFtZTgwMjg2NzgxMzE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjIzNDMxNDQyNV5BMl5BanBnXkFtZTgwMzg2NzgxMzE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNTMzNzY5NzQwOF5BMl5BanBnXkFtZTgwNDg2NzgxMzE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNjEzODAzMjUwNV5BMl5BanBnXkFtZTgwNTg2NzgxMzE@._V1_.jpg",
            "https://m.media-amazon.com/images/M/MV5BOTI3MTY2NTM3NV5BMl5BanBnXkFtZTgwNzg2NzgxMzE@._V1_.jpg"
        ],
        "featured": false
    }
]