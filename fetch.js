const dogsUrl = 'https://dog.ceo/api/breeds/image/random';

//quotes section:
let quotes = {};
let string = `“If there are no dogs in heaven, then when I die I want to go where they went.” — Will Rogers
“Did you ever notice that when you blow in a dog’s face he gets mad at you? But when you take him in a car, he sticks his head out the window.” — Steve Bluestone
“The dog is a gentleman; I hope to go to his heaven, not man’s.” — Mark Twain
“What do dogs do on their day off? Can’t lie around – that’s their job!”— George Carlin
“Anybody who doesn’t know what soap tastes like, never washed a dog.” — Franklin P. Jones
“In order to really enjoy a dog, one doesn’t merely try to train him to be semi-human. The point of it is to open oneself to the possibility of becoming partly a dog.” — Edward Hoagland
“Ever consider what our dogs must think of us? I mean, here we come back from a grocery store with the most amazing haul, chicken, pork, half a cow. They must think we’re the greatest hunters on earth!” — Anne Tyler
“No one appreciates the very special genius of your conversation as much as the dog does.”— Christopher Morley
“I once decided not to date a guy because he wasn’t excited to meet my dog. I mean, this was like not wanting to meet my mother.” —Bonnie Schacter
“If you think dogs can’t count, try putting three dog biscuits in your pocket and then give him only two of them.” — Phil Pastoret
“I don’t think twice about picking up my dog’s poop, but if another dog’s poop is next to it, I think, ‘Eww, dog poop!”— Jonah Goldberg
“Outside of a dog, a book is a man’s best friend. Inside of a dog it’s too dark to read.” — Groucho Marx
“Did you ever walk into a room and forget why you walked in? I think that is how dogs spend their lives.” — Sue Murphy
“A dog desires affection more than its dinner. Well – almost.” — Charlotte Gray
“Dogs teach us a very important lesson in life: The mail man is not to be trusted.” — Sian Ford
“A well trained dog will make no attempt to share your lunch. He will just make you feel so guilty that you cannot enjoy it.” — Helen Thomson
“There is no psychiatrist in the world like a puppy licking your face.” — Bernard Williams
“The average dog is a nicer person than the average person.” — Andy Rooney
“Dogs are great. Bad dogs, if you can really call them that, are perhaps the greatest of them all.” — John Grogan
“To his dog, every man is Napoleon; hence the constant popularity of dogs.” — Aldous Huxley
“I wonder if other dogs think poodles are members of a weird religious cult.” — Rita Rudner
“Dogs never bite me. Just humans.” — Marilyn Monroe
“In order to keep a true perspective of one’s importance, everyone should have a dog that will worship him and a cat that will ignore him.” — Derek Bruce
“When an 85 pound mammal licks your tears away, and then tries to sit on your lap, it’s hard to feel sad.” — Kristan Higgins
“Don’t accept your dog’s admiration as conclusive evidence that you are wonderful.” — Ann Landers
“My cats inspire me daily. They inspire me to get a dog!”— Greg Curtis
“You can say any foolish thing to a dog, and the dog will give you a look that says, ‘Wow, you’re right! I never would’ve thought of that!’ ” — Dave Barry
“I’ve seen a look in dogs’ eyes, a quickly vanishing look of amazed contempt, and I am convinced that dogs think humans are nuts.” —John Steinbeck
“It all started when my dog began getting free roll over minutes.” — Jay London
“My dog is worried about the economy because Alpo is up to $3.00 a can. That’s almost $21.00 in dog money.” — Joe Weinstein
“Reason number 106 why dogs are smarter than humans: once you leave the litter, you sever contact with your mothers.” — Jodi Picoult
“If I have any beliefs about immortality, it is that certain dogs I have known will go to heaven, and very, very few persons.” — James Thurber
“A boy can learn a lot from a dog — obedience, loyalty, and the importance of turning around three times before lying down.” — Robert Benchley
“It’s tough to stay married. My wife kisses the dog on the lips, yet she won’t drink from my glass.” — Rodney Dangerfield
“If you are a dog and your owner suggests that you wear a sweater suggest that he wear a tail.” — Fran Lebowitz
“A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down.” — Robert Benchley
“You want a friend in Washington? Get a dog.” — Harry Truman
“If aliens saw us walking our dogs and picking up their poop, who would they think is in charge?”
“If you’re uncomfortable around my dog, I’m happy to lock you in the other room when you come over.”
“Handle every situation like a dog. If you can’t eat it or play with it, just pee on it and walk away.”
“The reason a dog has so many friends is that he wags his tail instead of his tongue.”
“If your dog is fat, you aren’t getting enough exercise.”
“To err is human — to forgive, canine.”
“Some days you’re the dog; some days you’re the hydrant.”
“A dog can express more with his tail in minutes than his owner can express with his tongue in hours.”
“I feel sorry for people who don’t have dogs. I hear they have to pick up food they drop on the floor.”
“You can trust your dog to guard your house but never trust your dog to guard your sandwich.”
“No home decor is complete without dog hair.”
“The best therapist has fur and four legs.”
“Whoever said you can’t buy happiness forgot about puppies.”
“Without my dog my wallet would be full my house would be clean but my heart would be empty.”
“Nothing in the world is friendlier than a wet dog.”
“I work hard so my dog can have a better life.”
“If you want the best seat in the house, you’ll have to move the dog.”
“Every snack you make, every meal you bake, every bite you take…I’ll be watching you.”
“This home is filled with love and dog hair.”
“Beware! Dog can’t hold its licker.”
“Dogs are like potato chips. You can’t have just one.”
“Life without a dog is like an unsharpened pencil. It has no point.”
“Less people, more dogs.”
“Dogs are my favorite people.”
“If you’re uncomfortable around my dog, I’m happy to lock you in the other room when you come over.”
“The only person who understands me is my dog.”
“I don’t who care who dies in the movie, as long as the dog lives.”
“I am one dog short of crazy.”
“If our dog doesn’t like you, we probably won’t either.”
“It’s OK if you don’t like my dog, not everyone has good taste.”
“Choosing a dog may be the only chance you get to pick a relative.”
“Dogs over dudes.”
“Leave me only – I’m only speaking to dogs today.”
“The more people I meet, the more I love my dog.”
“When I die my dog gets everything.”`;
const quotesArray = string.split(`\n`);
quotesArray.forEach((quote) => {
    quotes[quotesArray.indexOf(quote)] = quote;
})
// console.log(quotes)
/////////


const container = document.getElementById("container")
const dogs = document.getElementById("dogs");
const getDogs = document.getElementById("getDogs")
const quoteSection = document.getElementById("quote")

getDogs.addEventListener("click", async () => {
    let randomIndex = Math.floor(Math.random() * quotesArray.length)
    const response = await fetch(dogsUrl)
    const data = await response.json();
    console.log("data", data) //this will log after the console.log that says fetching...
    let newDog = `<div><img class="doggoImg" src="${data.message}"/></div>`
    let newQuote = `<h3>${quotes[randomIndex]}</h3>`
    dogs.innerHTML = newDog
    quoteSection.innerHTML = newQuote;
    });