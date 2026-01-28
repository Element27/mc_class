// api
// promises
// fetch
// async await

// synchronous vs asynchronous

// console.log('Start');
// console.log('Start2');
// console.log('Start3');

// setTimeout(()=>{
//     console.log('Hello from setTimeout');
// }, 2000)

// console.log('Start4');
// console.log('Start5');
// console.log('Start6');

//  fetch(`${url}${inpWord}`)
//         .then((response) => response.json())

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const input = document.getElementsByTagName("input")[0];
const btn = document.getElementsByTagName("button")[0];
const def = document.getElementById("def");

// [
//     {
//         "word": "son",
//         "phonetic": "/sɒn/",
//         "phonetics": [
//             {
//                 "text": "/sɒn/",
//                 "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/son-uk.mp3",
//                 "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9027480",
//                 "license": {
//                     "name": "BY 3.0 US",
//                     "url": "https://creativecommons.org/licenses/by/3.0/us"
//                 }
//             },
//             {
//                 "text": "/sɒn/",
//                 "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/son-us.mp3",
//                 "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1157896",
//                 "license": {
//                     "name": "BY-SA 3.0",
//                     "url": "https://creativecommons.org/licenses/by-sa/3.0"
//                 }
//             }
//         ],
//         "meanings": [
//             {
//                 "partOfSpeech": "noun",
//                 "definitions": [
//                     {
//                         "definition": "One's male offspring.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "Before the birth of the man's child, he said: \"I want a son, not a daughter.\""
//                     },
//                     {
//                         "definition": "A male adopted person in relation to his adoptive parents.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "A male person who has such a close relationship with an older or otherwise more authoritative person that he can be regarded as a son of the other person.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "A male person considered to have been significantly shaped by some external influence.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "He was a son of the mafia system."
//                     },
//                     {
//                         "definition": "A male descendant.",
//                         "synonyms": [],
//                         "antonyms": [],
//                         "example": "The pharaohs were believed to be sons of the Sun."
//                     },
//                     {
//                         "definition": "A familiar address to a male person from an older or otherwise more authoritative person.",
//                         "synonyms": [],
//                         "antonyms": []
//                     },
//                     {
//                         "definition": "An informal address to a friend or person of equal authority.",
//                         "synonyms": [],
//                         "antonyms": []
//                     }
//                 ],
//                 "synonyms": [],
//                 "antonyms": [
//                     "daughter",
//                     "father",
//                     "mother",
//                     "parent"
//                 ]
//             }
//         ],
//         "license": {
//             "name": "CC BY-SA 3.0",
//             "url": "https://creativecommons.org/licenses/by-sa/3.0"
//         },
//         "sourceUrls": [
//             "https://en.wiktionary.org/wiki/son"
//         ]
//     },

// ]

function renderDefinition(data) {
  const title = document.createElement("h1");
  const phone = document.createElement("p");
  const definition = document.createElement("p");
  const pos = document.createElement("p");

  console.log(data)

  const rend = data.map((item) => {
    title.Text = item.word;
    phone.innerText = item.phonetic;

    def.appendChild(title);
    def.appendChild(phone);

    item.meanings.map((meaning) => {
      pos.innerText = "Part of Speech: " + meaning.partOfSpeech;

      def.appendChild(pos);

      meaning.definitions.map((defn) => {
        definition.innerText = "Definition: " + defn.definition;
        def.appendChild(definition);
      });
    });

    // return [title, phone, pos, definition];
  });

//   console.log(rend)
// def.appendChild(rend[0]);
// def.appendChild(rend[1]);
// def.appendChild(rend[2]);
// def.appendChild(rend[3]);

}

btn.addEventListener("click", async () => {
  console.log(input.value);

  const resp = await fetch(
    // https://api.dictionaryapi.dev/api/v2/entries/en/dino
    `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`,
  ).then((res) => {
    // console.log(res.json());
    const data = res.json();

    return data;
});
renderDefinition(resp);

//   console.log(resp);
});
// console.log("after")
