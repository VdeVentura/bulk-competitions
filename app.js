//  888b     d888                  888             888      888
//  8888b   d8888                  888             888      888
//  88888b.d88888                  888             888      888
//  888Y88888P888  .d88b.  888d888 888888  8888b.  888      888
//  888 Y888P 888 d88""88b 888P"   888        "88b 888      888
//  888  Y8P  888 888  888 888     888    .d888888 888      Y8P
//  888   "   888 Y88..88P 888     Y88b.  888  888 888       "
//  888       888  "Y88P"  888      "Y888 "Y888888 888      888
//
//
//  Y88b   d88P                                                                     888                                                                         888
//   Y88b d88P                                                                      888                                                                         888
//    Y88o88P                                                                       888                                                                         888
//     Y888P  .d88b.  888  888       8888b.  888d888 .d88b.       88888b.   .d88b.  888888      88888b.  888d888 .d88b.  88888b.   8888b.  888d888 .d88b.   .d88888
//      888  d88""88b 888  888          "88b 888P"  d8P  Y8b      888 "88b d88""88b 888         888 "88b 888P"  d8P  Y8b 888 "88b     "88b 888P"  d8P  Y8b d88" 888
//      888  888  888 888  888      .d888888 888    88888888      888  888 888  888 888         888  888 888    88888888 888  888 .d888888 888    88888888 888  888
//      888  Y88..88P Y88b 888      888  888 888    Y8b.          888  888 Y88..88P Y88b.       888 d88P 888    Y8b.     888 d88P 888  888 888    Y8b.     Y88b 888
//      888   "Y88P"   "Y88888      "Y888888 888     "Y8888       888  888  "Y88P"   "Y888      88888P"  888     "Y8888  88888P"  "Y888888 888     "Y8888   "Y88888
//                                                                                              888                      888
//                                                                                              888                      888
//                                                                                              888                      888

const http = require("http");
const querystring = require("querystring");
const _ = require("lodash/core");

// const HOST = 'ss-core.herokuapp.com';
// const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0LCJyb2xlcyI6W10sImxhbmciOiJlbiIsImp0aSI6ImMzMWIwNjgzLTJlN2QtNDVkMy04OTAyLTY1MGI2Yjg2NDk2NCIsImlhdCI6MTQ5MzY1NDA1N30.MSup22vSHxG_hi0lnkieL2pNr7BUkUoSWFKboczNd5s";
// const ALIANZA_ID = 4;
const DISCIPLINE = 1;
const SUBDISCIPLINE = 4;

const CATEGORIES = {
  professional: 21, // This is pointing to OPEN
  sub23: 2,
  sub22: 3,
  sub21: 4,
  sub20: 5,
  sub19: 6,
  sub18: 7,
  sub17: 8,
  sub16: 9,
  sub15: 10,
  sub14: 11,
  sub13: 12,
  sub12: 13,
  sub11: 14,
  sub10: 15,
  sub9: 16,
  sub8: 17,
  sub7: 18,
  sub6: 19,
  sub5: 20
};

const GENDERS = {
  masculine: 1,
  femenine: 2,
  mixed: 3
};

const COMPETITIONS = [
  {
    title: "JUGOtv Copa Alianza",
    logoUrl: "https://somosport-s3.s3.amazonaws.com/2dfa32659b06db20b8596a7434d626bcb4218b2ba81a50fbf9125e58580086cb.png",
    description: "JUGOtv Copa Alianza",
    meta:'{"rules_en":"https://somosport-s3.s3.amazonaws.com/e55d45c4b408595422362a33599fa053cf080d89c2108e2dea442544a0187eb8.pdf", "rules_es":"https://somosport-s3.s3.amazonaws.com/311ea6224e192b296e285db4b3b664017cd50a6cd87085720d4e1066b4968cd9.pdf", "waiver":"https://somosport-s3.s3.amazonaws.com/2474b00a010ddc852a04e187b439e787e906fc7ff82b804fd0ad0065fbabdc87.pdf", "number" : 1}',
    seasons: [
      {
        title: "Phoenix",
        start: "2017-05-20T00:00:00-04:00",
        end: "2017-05-21T00:00:00-04:00",
        city: "Phoenix",
        categories: [
          {
            title: "Phoenix Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Houston",
        start: "2017-06-03T00:00:00-04:00",
        end: "2017-06-04T00:00:00-04:00",
        city: "Houston",
        categories: [
          {
            title: "Houston Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Dallas",
        start: "2017-06-17T00:00:00-04:00",
        end: "2017-06-18T00:00:00-04:00",
        city: "Dallas",
        categories: [
          {
            title: "Dallas Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Atlanta",
        start: "2017-06-24T00:00:00-04:00",
        end: "2017-06-25T00:00:00-04:00",
        city: "Atlanta",
        categories: [
          {
            title: "Atlanta Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Chicago",
        start: "2017-07-15T00:00:00-04:00",
        end: "2017-07-16T00:00:00-04:00",
        city: "Chicago",
        categories: [
          {
            title: "Chicago Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Denver",
        start: "2017-07-29T00:00:00-04:00",
        end: "2017-07-30T00:00:00-04:00",
        city: "Denver",
        categories: [
          {
            title: "Denver Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          }
        ]
      },
      {
        title: "New York",
        start: "2017-08-05T00:00:00-04:00",
        end: "2017-08-06T00:00:00-04:00",
        city: "New York",
        categories: [
          {
            title: "New York Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-04T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Los Angeles",
        start: "2017-08-19T00:00:00-04:00",
        end: "2017-08-20T00:00:00-04:00",
        city: "Los Angeles",
        categories: [
          {
            title: "Los Angeles Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          }
        ]
      },
      {
        title: "San Francisco",
        start: "2017-08-26T00:00:00-04:00",
        end: "2017-08-27T00:00:00-04:00",
        city: "San Francisco",
        categories: [
          {
            title: "San Francisco Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-24T00:00:00-04:00"
          }
        ]
      },
      {
        title: "El Paso",
        start: "2017-09-09T00:00:00-04:00",
        end: "2017-09-10T00:00:00-04:00",
        city: "El Paso",
        categories: [
          {
            title: "El Paso Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Miami",
        start: "2017-09-23T00:00:00-04:00",
        end: "2017-09-24T00:00:00-04:00",
        city: "Miami",
        categories: [
          {
            title: "Miami Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 999.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          }
        ]
      }
    ]
  },
  {
    title: "Nissan Copita Alianza",
    logoUrl: "https://somosport-s3.s3.amazonaws.com/eaa39a70d24dbaffa11b70ec1fc40ce683e2e14bbf3cf212a6e524c4c076849a.png",
    description: "Nissan Copita Alianza",
    meta:'{"rules_en":"https://somosport-s3.s3.amazonaws.com/256e2ab3730a938cba9533308a3ad778fb7ab31c098e9ffd173b7d0fd93ee51b.pdf", "rules_es":"https://somosport-s3.s3.amazonaws.com/fe544c6806ef8843cc37aa94ce54215db44ca900743597458246c2e9cdcbea66.pdf", "waiver":"https://somosport-s3.s3.amazonaws.com/d777fd60ebdd1562f77527c6567a2076bf0430a6a74f2ff21a976fd06f16149f.pdf", "number" : 2}',
    seasons: [
      {
        title: "Phoenix",
        start: "2017-05-20T00:00:00-04:00",
        end: "2017-05-21T00:00:00-04:00",
        city: "Phoenix",
        categories: [
          {
            title: "Phoenix Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          },
          {
            title: "Phoenix Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          },
          {
            title: "Phoenix Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          },
          {
            title: "Phoenix Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          },
          {
            title: "Phoenix Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          },
          {
            title: "Phoenix Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Houston",
        start: "2017-06-03T00:00:00-04:00",
        end: "2017-06-04T00:00:00-04:00",
        city: "Houston",
        categories: [
          {
            title: "Houston Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          },
          {
            title: "Houston Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          },
          {
            title: "Houston Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          },
          {
            title: "Houston Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          },
          {
            title: "Houston Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          },
          {
            title: "Houston Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Dallas",
        start: "2017-06-17T00:00:00-04:00",
        end: "2017-06-18T00:00:00-04:00",
        city: "Dallas",
        categories: [
          {
            title: "Dallas Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          },
          {
            title: "Dallas Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          },
          {
            title: "Dallas Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          },
          {
            title: "Dallas Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          },
          {
            title: "Dallas Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          },
          {
            title: "Dallas Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Atlanta",
        start: "2017-06-24T00:00:00-04:00",
        end: "2017-06-25T00:00:00-04:00",
        city: "Atlanta",
        categories: [
          {
            title: "Atlanta Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          },
          {
            title: "Atlanta Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          },
          {
            title: "Atlanta Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          },
          {
            title: "Atlanta Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          },
          {
            title: "Atlanta Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Chicago",
        start: "2017-07-15T00:00:00-04:00",
        end: "2017-07-16T00:00:00-04:00",
        city: "Chicago",
        categories: [
          {
            title: "Chicago Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          },
          {
            title: "Chicago Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          },
          {
            title: "Chicago Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          },
          {
            title: "Chicago Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          },
          {
            title: "Chicago Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          },
          {
            title: "Chicago Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Denver",
        start: "2017-07-29T00:00:00-04:00",
        end: "2017-07-30T00:00:00-04:00",
        city: "Denver",
        categories: [
          {
            title: "Denver Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          },
          {
            title: "Denver Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          },
          {
            title: "Denver Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          },
          {
            title: "Denver Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          },
          {
            title: "Denver Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          },
          {
            title: "Denver Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          }
        ]
      },
      {
        title: "New York",
        start: "2017-08-05T00:00:00-04:00",
        end: "2017-08-06T00:00:00-04:00",
        city: "New York",
        categories: [
          {
            title: "New York Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          },
          {
            title: "New York Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          },
          {
            title: "New York Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          },
          {
            title: "New York Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          },
          {
            title: "New York Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          },
          {
            title: "New York Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Los Angeles",
        start: "2017-08-19T00:00:00-04:00",
        end: "2017-08-20T00:00:00-04:00",
        city: "Los Angeles",
        categories: [
          {
            title: "Los Angeles Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          },
          {
            title: "Los Angeles Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          },
          {
            title: "Los Angeles Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          },
          {
            title: "Los Angeles Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          },
          {
            title: "Los Angeles Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          },
          {
            title: "Los Angeles Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          }
        ]
      },
      {
        title: "San Francisco",
        start: "2017-08-26T00:00:00-04:00",
        end: "2017-08-27T00:00:00-04:00",
        city: "San Francisco",
        categories: [
          {
            title: "San Francisco Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-25T00:00:00-04:00"
          },
          {
            title: "San Francisco Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-25T00:00:00-04:00"
          },
          {
            title: "San Francisco Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-25T00:00:00-04:00"
          },
          {
            title: "San Francisco Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-25T00:00:00-04:00"
          },
          {
            title: "San Francisco Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-25T00:00:00-04:00"
          }
        ]
      },
      {
        title: "El Paso",
        start: "2017-09-09T00:00:00-04:00",
        end: "2017-09-10T00:00:00-04:00",
        city: "El Paso",
        categories: [
          {
            title: "El Paso Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          },
          {
            title: "El Paso Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          },
          {
            title: "El Paso Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          },
          {
            title: "El Paso Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          },
          {
            title: "El Paso Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          },
          {
            title: "El Paso Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Miami",
        start: "2017-09-23T00:00:00-04:00",
        end: "2017-09-24T00:00:00-04:00",
        city: "Miami",
        categories: [
          {
            title: "Miami Sub 18",
            categoryType: CATEGORIES.sub18,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          },
          {
            title: "Miami Sub 16",
            categoryType: CATEGORIES.sub16,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          },
          {
            title: "Miami Sub 12",
            categoryType: CATEGORIES.sub12,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          },
          {
            title: "Miami Sub 10",
            categoryType: CATEGORIES.sub10,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 299.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          },
          {
            title: "Miami Sub 8",
            categoryType: CATEGORIES.sub8,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          },
          {
            title: "Miami Sub 6",
            categoryType: CATEGORIES.sub6,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 249.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          }
        ]
      }
    ]
  },
  {
    title: "Copa Coca-Cola®",
    logoUrl: "https://somosport-s3.s3.amazonaws.com/974d1e27badc5ac02f9fe057916b629872247b65db762dafa219768576708e7a.png",
    description: "Copa Coca-Cola®",
    meta:'{"rules_en":"https://somosport-s3.s3.amazonaws.com/3ef19eb387d4628287fc5424401545e40bc538a4b407918534946b244369c77e.pdf", "rules_es":"https://somosport-s3.s3.amazonaws.com/0e1e11d98141eb368e90b8455ac095e801c379e01932da2ae01d359d9b66182a.pdf", "waiver":"https://somosport-s3.s3.amazonaws.com/7e46592ab5067b7f76bf0c345a57392de9628f2ab21dad5e1d24f1e8c50a6515.pdf", "number" : 4}',
    seasons: [
      {
        title: "Phoenix",
        start: "2017-05-20T00:00:00-04:00",
        end: "2017-05-21T00:00:00-04:00",
        city: "Phoenix",
        categories: [
          {
            title: "Phoenix Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-19T00:00:00-04:00"
          },
          {
            title: "Phoenix Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-19T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Houston",
        start: "2017-06-03T00:00:00-04:00",
        end: "2017-06-04T00:00:00-04:00",
        city: "Houston",
        categories: [
          {
            title: "Houston Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          },
          {
            title: "Houston Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Dallas",
        start: "2017-06-17T00:00:00-04:00",
        end: "2017-06-18T00:00:00-04:00",
        city: "Dallas",
        categories: [
          {
            title: "Dallas Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          },
          {
            title: "Dallas Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Atlanta",
        start: "2017-06-24T00:00:00-04:00",
        end: "2017-06-25T00:00:00-04:00",
        city: "Atlanta",
        categories: [
          {
            title: "Atlanta Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          },
          {
            title: "Atlanta Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Chicago",
        start: "2017-07-15T00:00:00-04:00",
        end: "2017-07-16T00:00:00-04:00",
        city: "Chicago",
        categories: [
          {
            title: "Chicago Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          },
          {
            title: "Chicago Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Denver",
        start: "2017-07-29T00:00:00-04:00",
        end: "2017-07-30T00:00:00-04:00",
        city: "Denver",
        categories: [
          {
            title: "Denver Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          },
          {
            title: "Denver Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          }
        ]
      },
      {
        title: "New York",
        start: "2017-08-5T00:00:00-04:00",
        end: "2017-08-6T00:00:00-04:00",
        city: "New York",
        categories: [
          {
            title: "New York Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          },
          {
            title: "New York Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Los Angeles",
        start: "2017-08-19T00:00:00-04:00",
        end: "2017-08-20T00:00:00-04:00",
        city: "Los Angeles",
        categories: [
          {
            title: "Los Angeles Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          },
          {
            title: "Los Angeles Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          }
        ]
      },
      {
        title: "San Francisco",
        start: "2017-08-26T00:00:00-04:00",
        end: "2017-08-27T00:00:00-04:00",
        city: "San Francisco",
        categories: [
          {
            title: "San Francisco Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-24T00:00:00-04:00"
          },
          {
            title: "San Francisco Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-24T00:00:00-04:00"
          }
        ]
      },
      {
        title: "El Paso",
        start: "2017-09-09T00:00:00-04:00",
        end: "2017-09-10T00:00:00-04:00",
        city: "El Paso",
        categories: [
          {
            title: "El Paso Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          },
          {
            title: "El Paso Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Miami",
        start: "2017-09-23T00:00:00-04:00",
        end: "2017-09-24T00:00:00-04:00",
        city: "Miami",
        categories: [
          {
            title: "Miami Sub 14 Masculino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.masculine,
            teamQuantity: 16,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          },
          {
            title: "Miami Sub 14 Femenino",
            categoryType: CATEGORIES.sub14,
            gender: GENDERS.femenine,
            teamQuantity: 8,
            maximumSummoned: 18,
            price: 369.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          }
        ]
      }
    ]
  },
  {
    title: "Alianza Femenil",
    logoUrl: "https://somosport-s3.s3.amazonaws.com/46364d37616e8836f283b3e54d6898d309baa0e8245c993edaf038ce3be0f944.png",
    description: "Alianza Femenil",
    meta:'{"rules_en":"https://somosport-s3.s3.amazonaws.com/703913d2fc8656febff10178ca99fb22ca155923a98c1314849d6f0112596d5b.pdf", "rules_es":"https://somosport-s3.s3.amazonaws.com/8d00071a435c3fe5eaee1d46bf95b4db767c5d9261a9b039147f1f217d40c4df.pdf", "waiver":"https://somosport-s3.s3.amazonaws.com/c07d5f3d32d5962f538b742fdd6deb876787e6ba72dc229005b6bf9ad026e8db.pdf", "number" : 3}',
    seasons: [
      {
        title: "Phoenix",
        start: "2017-05-20T00:00:00-04:00",
        end: "2017-05-21T00:00:00-04:00",
        city: "Phoenix",
        categories: [
          {
            title: "Phoenix Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Houston",
        start: "2017-06-03T00:00:00-04:00",
        end: "2017-06-04T00:00:00-04:00",
        city: "Houston",
        categories: [
          {
            title: "Houston Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Atlanta",
        start: "2017-06-24T00:00:00-04:00",
        end: "2017-06-25T00:00:00-04:00",
        city: "Atlanta",
        categories: [
          {
            title: "Atlanta Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Chicago",
        start: "2017-07-15T00:00:00-04:00",
        end: "2017-07-16T00:00:00-04:00",
        city: "Chicago",
        categories: [
          {
            title: "Chicago Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Denver",
        start: "2017-07-29T00:00:00-04:00",
        end: "2017-07-30T00:00:00-04:00",
        city: "Denver",
        categories: [
          {
            title: "Denver Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Los Angeles",
        start: "2017-08-19T00:00:00-04:00",
        end: "2017-08-20T00:00:00-04:00",
        city: "Los Angeles",
        categories: [
          {
            title: "Los Angeles Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          }
        ]
      },
      {
        title: "San Francisco",
        start: "2017-08-26T00:00:00-04:00",
        end: "2017-08-27T00:00:00-04:00",
        city: "San Francisco",
        categories: [
          {
            title: "San Francisco Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-24T00:00:00-04:00"
          }
        ]
      },
      {
        title: "El Paso",
        start: "2017-09-09T00:00:00-04:00",
        end: "2017-09-10T00:00:00-04:00",
        city: "El Paso",
        categories: [
          {
            title: "El Paso Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Miami",
        start: "2017-09-23T00:00:00-04:00",
        end: "2017-09-24T00:00:00-04:00",
        city: "Miami",
        categories: [
          {
            title: "Miami Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.femenine,
            teamQuantity: 16,
            maximumSummoned: 20,
            price: 369.00,
            start: "2017-07-23T00:00:00-04:00",
            end: "2017-09-21T00:00:00-04:00"
          }
        ]
      }
    ]
  },
  {
    title: "Telemundo Deportes 3v3",
    logoUrl: "https://somosport-s3.s3.amazonaws.com/9687715a40885ce7e307aa369caa2138a030020e160b8368c17f6529c3300d17.png",
    description: "Telemundo Deportes 3v3",
    meta:'{"rules_en":"https://somosport-s3.s3.amazonaws.com/63919ec80cdb819d3b534e1ced1ec6a35d92bdf0a95b45013deae7960ce2ff54.pdf", "rules_es":"https://somosport-s3.s3.amazonaws.com/737df862a1e2256b2c249ffd6513fef9f07003305ee9a912942d6b662a9b93b7.pdf", "waiver":"https://somosport-s3.s3.amazonaws.com/9aedf8973d6c51ca0c90262837b732a0a3adf6ce593729cb2eeb5e60b255733b.pdf", "number" : 5}',
    seasons: [
      {
        title: "Phoenix",
        start: "2017-05-21T00:00:00-04:00",
        end: "2017-05-21T00:00:00-04:00",
        city: "Phoenix",
        categories: [
          {
            title: "Phoenix Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-03-20T00:00:00-04:00",
            end: "2017-05-18T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Houston",
        start: "2017-06-04T00:00:00-04:00",
        end: "2017-06-04T00:00:00-04:00",
        city: "Houston",
        categories: [
          {
            title: "Houston Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-04-03T00:00:00-04:00",
            end: "2017-06-01T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Dallas",
        start: "2017-06-18T00:00:00-04:00",
        end: "2017-06-18T00:00:00-04:00",
        city: "Dallas",
        categories: [
          {
            title: "Dallas Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-04-17T00:00:00-04:00",
            end: "2017-06-15T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Atlanta",
        start: "2017-06-25T00:00:00-04:00",
        end: "2017-06-25T00:00:00-04:00",
        city: "Atlanta",
        categories: [
          {
            title: "Atlanta Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-04-24T00:00:00-04:00",
            end: "2017-06-22T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Chicago",
        start: "2017-07-16T00:00:00-04:00",
        end: "2017-07-16T00:00:00-04:00",
        city: "Chicago",
        categories: [
          {
            title: "Chicago Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-05-15T00:00:00-04:00",
            end: "2017-07-13T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Denver",
        start: "2017-07-30T00:00:00-04:00",
        end: "2017-07-30T00:00:00-04:00",
        city: "Denver",
        categories: [
          {
            title: "Denver Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-05-29T00:00:00-04:00",
            end: "2017-07-27T00:00:00-04:00"
          }
        ]
      },
      {
        title: "New York",
        start: "2017-08-06T00:00:00-04:00",
        end: "2017-08-06T00:00:00-04:00",
        city: "New York",
        categories: [
          {
            title: "New York Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-06-05T00:00:00-04:00",
            end: "2017-08-03T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Los Angeles",
        start: "2017-08-20T00:00:00-04:00",
        end: "2017-08-20T00:00:00-04:00",
        city: "Los Angeles",
        categories: [
          {
            title: "Los Angeles Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-06-19T00:00:00-04:00",
            end: "2017-08-17T00:00:00-04:00"
          }
        ]
      },
      {
        title: "San Francisco",
        start: "2017-08-27T00:00:00-04:00",
        end: "2017-08-27T00:00:00-04:00",
        city: "San Francisco",
        categories: [
          {
            title: "San Francisco Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-06-26T00:00:00-04:00",
            end: "2017-08-24T00:00:00-04:00"
          }
        ]
      },
      {
        title: "El Paso",
        start: "2017-09-10T00:00:00-04:00",
        end: "2017-09-10T00:00:00-04:00",
        city: "El Paso",
        categories: [
          {
            title: "El Paso Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-07-09T00:00:00-04:00",
            end: "2017-09-07T00:00:00-04:00"
          }
        ]
      },
      {
        title: "Miami",
        start: "2017-09-24T00:00:00-04:00",
        end: "2017-09-24T00:00:00-04:00",
        city: "Miami",
        categories: [
          {
            title: "Miami Adultos",
            categoryType: CATEGORIES.professional,
            gender: GENDERS.masculine,
            teamQuantity: 32,
            maximumSummoned: 7,
            price: 199.00,
            start: "2017-07-29T00:00:00-04:00",
            end: "2017-09-27T00:00:00-04:00"
          }
        ]
      }
    ]
  }
];

// Creates a group given a phaseId
function createGroup(phaseId) {
  const postData = querystring.stringify({
    name: "A",
    phase_id: phaseId
  });

  const options = {
    hostname: HOST,
    path: "/api/v1.0/group",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization-Token": TOKEN,
      "Content-Length": Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, function(response) {
    // Continuously update stream with data
    var body = "";

    response.on("data", function(d) {
      body += d;
    });

    response.on("end", function() {
      const newGroup = JSON.parse(body);
      console.log(newGroup);
    });
  });

  req.on("error", e => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
}

// Creates a Phase given a categoryId
function createPhase(categoryId) {

  const postData = querystring.stringify({
    name: "Initial",
    position: 1,
    category_id: categoryId
  });

  const options = {
    hostname: HOST,
    path: "/api/v1.0/phase",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization-Token": TOKEN,
      "Content-Length": Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, function(response) {
    // Continuously update stream with data
    var body = "";

    response.on("data", function(d) {
      body += d;
    });

    response.on("end", function() {
      const newPhase = JSON.parse(body);
      console.log(newPhase);
      createGroup(newPhase.id)
    });
  });

  req.on("error", e => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
}

// Creates a Category given a seasonId
function createCategory(seasonId, category) {
  const postData = querystring.stringify({
    category_type_id: category.categoryType,
    coach_maximum_participant: 0,
    coach_minimum_participant: 0,
    gender_id: category.gender,
    image_url: "",
    inscription_ends_at: category.end,
    inscription_init_at: category.start,
    name: category.title,
    other_maximum_participant: 0,
    other_minimum_participant: 0,
    participant_maximum: 100,
    participant_minimum: 0,
    player_maximum_participant: 0,
    player_maximum_summoned: category.maximumSummoned,
    player_minimum_participant: 0,
    player_minimum_summoned: 9,
    season_id: seasonId,
    team_quantity: 4,
    meta: '{"price":"' + category.price + '"}',
    is_published: true
  });

  const options = {
    hostname: HOST,
    path: "/api/v1.0/category",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization-Token": TOKEN,
      "Content-Length": Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, function(response) {
    // Continuously update stream with data
    var body = "";

    response.on("data", function(d) {
      body += d;
    });

    response.on("end", function() {
      const newCategory = JSON.parse(body).data;
      console.log(newCategory);
      createPhase(newCategory.id)
    });
  });

  req.on("error", e => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
}

// Creates a season given a competitionId
function createSeason(competitionId, season) {
  const postData = querystring.stringify({
    competition_id: competitionId,
    ends_at: season.end,
    game_title: "",
    init_at: season.start,
    name: season.title,
    meta: '{"ciudad":"' + season.city + '"}'
  });

  const options = {
    hostname: HOST,
    path: "/api/v1.0/season",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization-Token": TOKEN,
      "Content-Length": Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, function(response) {
    // Continuously update stream with data
    var body = "";

    response.on("data", function(d) {
      body += d;
    });

    response.on("end", function() {
      const newSeason = JSON.parse(body).data;
      console.log(newSeason);
      _.map(season.categories, category => {
        createCategory(newSeason.id, category);
      });
    });
  });

  req.on("error", e => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
}

// creates a new competition
function createCompetition(competition) {
  // Data to be written in the post body
  const postData = querystring.stringify({
    name: competition.title,
    created_by_id : ALIANZA_ID,
    description: "",
    meta: competition.meta,
    discipline_id: DISCIPLINE,
    subdiscipline_id: SUBDISCIPLINE,
    competition_type_id: 1,
    img_url: competition.logoUrl
  });

  // Options passed into the http request
  const options = {
    hostname: HOST,
    path: "/api/v1.0/competition",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization-Token": TOKEN,
      "Content-Length": Buffer.byteLength(postData)
    }
  };

  // The request
  const req = http.request(options, function(response) {
    // Getting the body as per documented in Node js
    var body = "";
    response.on("data", function(d) {
      body += d;
    });

    // Data reception is done

    response.on("end", function() {
      const newCompetition = JSON.parse(body).data;
      console.log(body)
      console.log(newCompetition);
      _.map(competition.seasons, season => {
        createSeason(newCompetition.id, season);
      });
    });
  });

  // In case something goes wrong
  req.on("error", e => {
    console.log(`problem with request: ${e.message}`);
  });

  // Write data to request body
  req.write(postData);
  req.end();
}

// Just getting the competitions to check that they've been created
function getCompetitions() {
  // Options passed into the http request
  const options = {
    hostname: HOST,
    path: "/api/v1.0/competition",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization-Token": TOKEN
    }
  };

  // The request
  return http
  .request(options, function(response) {
    // Getting the body as per documented in Node js
    var body = "";
    response.on("data", function(d) {
      body += d;
    });

    // Data reception is done
    response.on("end", function() {
      const parsed = JSON.parse(body);
      console.log(parsed);
    });
  })
  .end();
}

function youAreNotPrepared() {
  _.map(COMPETITIONS, competition => {
    createCompetition(competition);
  });
}

// Now mortals! FOLLOW ME..... INTO THE ABYSS (Illidan ROCKS!)
youAreNotPrepared();
