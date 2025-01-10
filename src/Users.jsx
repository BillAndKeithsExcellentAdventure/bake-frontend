import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

// Create a column helper instance
const columnHelper = createColumnHelper();

const defaultData = [
  {
    id: 1,
    firstName: 'Nichole',
    lastName: 'Spiteri',
    email: 'nspiteri0@google.com',
    age: 45,
    visits: 649,
    progress: 22,
    title: 'Mrs',
  },
  {
    id: 2,
    firstName: 'Nathan',
    lastName: 'Scarrott',
    email: 'nscarrott1@amazon.de',
    age: 44,
    visits: 107,
    progress: 90,
    title: null,
  },
  {
    id: 3,
    firstName: 'Cammy',
    lastName: 'Carsberg',
    email: 'ccarsberg2@wunderground.com',
    age: 17,
    visits: 539,
    progress: 48,
    title: null,
  },
  {
    id: 4,
    firstName: 'Evanne',
    lastName: 'Tattam',
    email: 'etattam3@dagondesign.com',
    age: 31,
    visits: 672,
    progress: 88,
    title: null,
  },
  {
    id: 5,
    firstName: 'Freeland',
    lastName: 'Meron',
    email: 'fmeron4@twitter.com',
    age: 47,
    visits: 852,
    progress: 44,
    title: 'Mr',
  },
  {
    id: 6,
    firstName: 'Cathi',
    lastName: 'Sibun',
    email: 'csibun5@reverbnation.com',
    age: 63,
    visits: 755,
    progress: 39,
    title: 'Rev',
  },
  {
    id: 7,
    firstName: 'Emilia',
    lastName: 'Dodding',
    email: 'edodding6@linkedin.com',
    age: 18,
    visits: 777,
    progress: 2,
    title: 'Honorable',
  },
  {
    id: 8,
    firstName: 'Astra',
    lastName: 'Capel',
    email: 'acapel7@harvard.edu',
    age: 60,
    visits: 978,
    progress: 79,
    title: 'Dr',
  },
  {
    id: 9,
    firstName: 'Alla',
    lastName: 'Wabey',
    email: 'awabey8@ox.ac.uk',
    age: 38,
    visits: 383,
    progress: 5,
    title: 'Mrs',
  },
  {
    id: 10,
    firstName: 'Trina',
    lastName: 'Carryer',
    email: 'tcarryer9@163.com',
    age: 49,
    visits: 657,
    progress: 99,
    title: 'Mrs',
  },
  {
    id: 11,
    firstName: 'Charlot',
    lastName: "O'Luby",
    email: 'colubya@amazon.de',
    age: 43,
    visits: 299,
    progress: 95,
    title: 'Mrs',
  },
  {
    id: 12,
    firstName: 'Bernhard',
    lastName: 'Sawell',
    email: 'bsawellb@wiley.com',
    age: 58,
    visits: 605,
    progress: 55,
    title: 'Mrs',
  },
  {
    id: 13,
    firstName: 'Sigfried',
    lastName: 'Hostan',
    email: 'shostanc@topsy.com',
    age: 53,
    visits: 159,
    progress: 64,
    title: 'Honorable',
  },
  {
    id: 14,
    firstName: 'Carney',
    lastName: 'Baudy',
    email: 'cbaudyd@thetimes.co.uk',
    age: 46,
    visits: 527,
    progress: 53,
    title: 'Dr',
  },
  {
    id: 15,
    firstName: 'Zorah',
    lastName: 'Fordham',
    email: 'zfordhame@bizjournals.com',
    age: 46,
    visits: 69,
    progress: 43,
    title: 'Ms',
  },
  {
    id: 16,
    firstName: 'Bunnie',
    lastName: 'Lamberts',
    email: 'blambertsf@mediafire.com',
    age: 47,
    visits: 288,
    progress: 72,
    title: null,
  },
  {
    id: 17,
    firstName: 'Rosalind',
    lastName: 'Schust',
    email: 'rschustg@mail.ru',
    age: 73,
    visits: 316,
    progress: 91,
    title: 'Mrs',
  },
  {
    id: 18,
    firstName: 'Ilyssa',
    lastName: 'Dyet',
    email: 'idyeth@irs.gov',
    age: 28,
    visits: 487,
    progress: 2,
    title: null,
  },
  {
    id: 19,
    firstName: 'Justin',
    lastName: 'Bossel',
    email: 'jbosseli@odnoklassniki.ru',
    age: 37,
    visits: 530,
    progress: 69,
    title: null,
  },
  {
    id: 20,
    firstName: 'Winfred',
    lastName: 'Ralston',
    email: 'wralstonj@adobe.com',
    age: 42,
    visits: 212,
    progress: 90,
    title: 'Dr',
  },
  {
    id: 21,
    firstName: 'Corbin',
    lastName: 'Pretsell',
    email: 'cpretsellk@noaa.gov',
    age: 80,
    visits: 991,
    progress: 56,
    title: 'Honorable',
  },
  {
    id: 22,
    firstName: 'Darby',
    lastName: 'Bolderstone',
    email: 'dbolderstonel@go.com',
    age: 51,
    visits: 125,
    progress: 84,
    title: 'Dr',
  },
  {
    id: 23,
    firstName: 'Mersey',
    lastName: 'Buret',
    email: 'mburetm@time.com',
    age: 35,
    visits: 811,
    progress: 25,
    title: null,
  },
  {
    id: 24,
    firstName: 'Jean',
    lastName: 'Kleinholz',
    email: 'jkleinholzn@ow.ly',
    age: 57,
    visits: 874,
    progress: 59,
    title: 'Mrs',
  },
  {
    id: 25,
    firstName: 'Britte',
    lastName: 'Kennedy',
    email: 'bkennedyo@seesaa.net',
    age: 56,
    visits: 760,
    progress: 19,
    title: 'Ms',
  },
  {
    id: 26,
    firstName: 'Winnie',
    lastName: 'Shields',
    email: 'wshieldsp@nifty.com',
    age: 32,
    visits: 643,
    progress: 28,
    title: 'Mr',
  },
  {
    id: 27,
    firstName: 'Lulita',
    lastName: 'Colt',
    email: 'lcoltq@ucoz.com',
    age: 60,
    visits: 250,
    progress: 51,
    title: 'Ms',
  },
  {
    id: 28,
    firstName: 'Pen',
    lastName: 'Mortimer',
    email: 'pmortimerr@github.io',
    age: 71,
    visits: 366,
    progress: 45,
    title: null,
  },
  {
    id: 29,
    firstName: 'Parker',
    lastName: 'Bulcroft',
    email: 'pbulcrofts@auda.org.au',
    age: 62,
    visits: 962,
    progress: 6,
    title: null,
  },
  {
    id: 30,
    firstName: 'Tanhya',
    lastName: 'Mallinar',
    email: 'tmallinart@wix.com',
    age: 49,
    visits: 652,
    progress: 10,
    title: 'Mr',
  },
  {
    id: 31,
    firstName: 'Toni',
    lastName: 'Jellman',
    email: 'tjellmanu@npr.org',
    age: 55,
    visits: 96,
    progress: 73,
    title: 'Rev',
  },
  {
    id: 32,
    firstName: 'Marlon',
    lastName: 'McAnalley',
    email: 'mmcanalleyv@google.nl',
    age: 58,
    visits: 781,
    progress: 10,
    title: 'Ms',
  },
  {
    id: 33,
    firstName: 'Irina',
    lastName: 'Hemerijk',
    email: 'ihemerijkw@istockphoto.com',
    age: 29,
    visits: 821,
    progress: 40,
    title: null,
  },
  {
    id: 34,
    firstName: 'Bud',
    lastName: 'Winscomb',
    email: 'bwinscombx@baidu.com',
    age: 16,
    visits: 197,
    progress: 59,
    title: 'Honorable',
  },
  {
    id: 35,
    firstName: 'Seamus',
    lastName: 'Greatham',
    email: 'sgreathamy@wiley.com',
    age: 70,
    visits: 882,
    progress: 5,
    title: 'Dr',
  },
  {
    id: 36,
    firstName: 'Elspeth',
    lastName: 'Mars',
    email: 'emarsz@narod.ru',
    age: 45,
    visits: 820,
    progress: 56,
    title: 'Rev',
  },
  {
    id: 37,
    firstName: 'Adara',
    lastName: 'Statter',
    email: 'astatter10@marketwatch.com',
    age: 77,
    visits: 991,
    progress: 47,
    title: 'Honorable',
  },
  {
    id: 38,
    firstName: 'Maribeth',
    lastName: 'Lampke',
    email: 'mlampke11@comsenz.com',
    age: 66,
    visits: 555,
    progress: 79,
    title: null,
  },
  {
    id: 39,
    firstName: 'Maximilien',
    lastName: 'Wiffler',
    email: 'mwiffler12@oracle.com',
    age: 61,
    visits: 787,
    progress: 11,
    title: null,
  },
  {
    id: 40,
    firstName: 'Tony',
    lastName: 'Shawley',
    email: 'tshawley13@simplemachines.org',
    age: 23,
    visits: 455,
    progress: 20,
    title: 'Dr',
  },
  {
    id: 41,
    firstName: 'Julianna',
    lastName: 'Iacobetto',
    email: 'jiacobetto14@cyberchimps.com',
    age: 18,
    visits: 423,
    progress: 74,
    title: 'Dr',
  },
  {
    id: 42,
    firstName: 'Nedi',
    lastName: 'Tzuker',
    email: 'ntzuker15@tamu.edu',
    age: 15,
    visits: 467,
    progress: 84,
    title: null,
  },
  {
    id: 43,
    firstName: 'Gilemette',
    lastName: 'Flanagan',
    email: 'gflanagan16@fda.gov',
    age: 46,
    visits: 212,
    progress: 14,
    title: 'Rev',
  },
  {
    id: 44,
    firstName: 'Lannie',
    lastName: 'Winslet',
    email: 'lwinslet17@who.int',
    age: 34,
    visits: 134,
    progress: 12,
    title: null,
  },
  {
    id: 45,
    firstName: 'Thelma',
    lastName: 'Raspel',
    email: 'traspel18@gnu.org',
    age: 75,
    visits: 78,
    progress: 54,
    title: null,
  },
  {
    id: 46,
    firstName: 'Caitlin',
    lastName: 'Gorler',
    email: 'cgorler19@go.com',
    age: 51,
    visits: 875,
    progress: 86,
    title: 'Mr',
  },
  {
    id: 47,
    firstName: 'Miquela',
    lastName: 'Pridmore',
    email: 'mpridmore1a@geocities.jp',
    age: 74,
    visits: 531,
    progress: 85,
    title: 'Honorable',
  },
  {
    id: 48,
    firstName: 'Diane-marie',
    lastName: 'Cordsen',
    email: 'dcordsen1b@cyberchimps.com',
    age: 59,
    visits: 340,
    progress: 35,
    title: 'Rev',
  },
  {
    id: 49,
    firstName: 'Fairfax',
    lastName: 'Cossell',
    email: 'fcossell1c@amazon.co.uk',
    age: 56,
    visits: 871,
    progress: 85,
    title: 'Mrs',
  },
  {
    id: 50,
    firstName: 'Quillan',
    lastName: 'Cantos',
    email: 'qcantos1d@amazon.co.uk',
    age: 24,
    visits: 735,
    progress: 88,
    title: null,
  },
  {
    id: 51,
    firstName: 'Merrill',
    lastName: 'Venn',
    email: 'mvenn1e@vkontakte.ru',
    age: 13,
    visits: 567,
    progress: 73,
    title: null,
  },
  {
    id: 52,
    firstName: 'Krissy',
    lastName: 'Tison',
    email: 'ktison1f@cafepress.com',
    age: 53,
    visits: 80,
    progress: 34,
    title: 'Ms',
  },
  {
    id: 53,
    firstName: 'Dominica',
    lastName: 'Mattsson',
    email: 'dmattsson1g@sakura.ne.jp',
    age: 79,
    visits: 51,
    progress: 88,
    title: 'Mrs',
  },
  {
    id: 54,
    firstName: 'Danit',
    lastName: 'Mikalski',
    email: 'dmikalski1h@craigslist.org',
    age: 60,
    visits: 495,
    progress: 100,
    title: 'Honorable',
  },
  {
    id: 55,
    firstName: 'Jefferson',
    lastName: 'Mosedill',
    email: 'jmosedill1i@mlb.com',
    age: 58,
    visits: 273,
    progress: 22,
    title: 'Rev',
  },
  {
    id: 56,
    firstName: 'Mabelle',
    lastName: 'Mullineux',
    email: 'mmullineux1j@slate.com',
    age: 11,
    visits: 998,
    progress: 36,
    title: null,
  },
  {
    id: 57,
    firstName: 'Camella',
    lastName: 'Lillecrop',
    email: 'clillecrop1k@archive.org',
    age: 62,
    visits: 615,
    progress: 59,
    title: null,
  },
  {
    id: 58,
    firstName: 'Odella',
    lastName: 'Catto',
    email: 'ocatto1l@mozilla.com',
    age: 36,
    visits: 638,
    progress: 53,
    title: null,
  },
  {
    id: 59,
    firstName: 'Hazlett',
    lastName: 'Dart',
    email: 'hdart1m@sciencedaily.com',
    age: 34,
    visits: 687,
    progress: 75,
    title: 'Honorable',
  },
  {
    id: 60,
    firstName: 'Adrianne',
    lastName: 'McKinstry',
    email: 'amckinstry1n@twitter.com',
    age: 63,
    visits: 996,
    progress: 97,
    title: null,
  },
  {
    id: 61,
    firstName: 'Clemmy',
    lastName: 'Georgeot',
    email: 'cgeorgeot1o@nyu.edu',
    age: 78,
    visits: 7,
    progress: 48,
    title: null,
  },
  {
    id: 62,
    firstName: 'Rae',
    lastName: 'Urrey',
    email: 'rurrey1p@bigcartel.com',
    age: 30,
    visits: 587,
    progress: 13,
    title: null,
  },
  {
    id: 63,
    firstName: 'Dacy',
    lastName: 'Djorevic',
    email: 'ddjorevic1q@theatlantic.com',
    age: 67,
    visits: 465,
    progress: 70,
    title: null,
  },
  {
    id: 64,
    firstName: 'Ashbey',
    lastName: 'Lawler',
    email: 'alawler1r@rediff.com',
    age: 66,
    visits: 513,
    progress: 71,
    title: 'Mr',
  },
  {
    id: 65,
    firstName: 'Charline',
    lastName: 'Levine',
    email: 'clevine1s@creativecommons.org',
    age: 57,
    visits: 366,
    progress: 46,
    title: 'Rev',
  },
  {
    id: 66,
    firstName: 'Joela',
    lastName: 'Kubiczek',
    email: 'jkubiczek1t@twitpic.com',
    age: 22,
    visits: 745,
    progress: 87,
    title: 'Honorable',
  },
  {
    id: 67,
    firstName: 'Donella',
    lastName: 'Andrzejewski',
    email: 'dandrzejewski1u@newsvine.com',
    age: 66,
    visits: 224,
    progress: 24,
    title: null,
  },
  {
    id: 68,
    firstName: 'Emmerich',
    lastName: 'MacKissack',
    email: 'emackissack1v@ocn.ne.jp',
    age: 76,
    visits: 80,
    progress: 9,
    title: 'Rev',
  },
  {
    id: 69,
    firstName: 'Kalindi',
    lastName: 'Braden',
    email: 'kbraden1w@europa.eu',
    age: 10,
    visits: 668,
    progress: 52,
    title: 'Ms',
  },
  {
    id: 70,
    firstName: 'Cathee',
    lastName: 'Spratt',
    email: 'cspratt1x@xing.com',
    age: 76,
    visits: 224,
    progress: 50,
    title: 'Honorable',
  },
  {
    id: 71,
    firstName: 'Clemmie',
    lastName: 'Prahm',
    email: 'cprahm1y@un.org',
    age: 55,
    visits: 954,
    progress: 79,
    title: 'Mr',
  },
  {
    id: 72,
    firstName: 'Nedda',
    lastName: 'Samms',
    email: 'nsamms1z@uol.com.br',
    age: 78,
    visits: 245,
    progress: 66,
    title: 'Rev',
  },
  {
    id: 73,
    firstName: 'Itch',
    lastName: 'Kuhlmey',
    email: 'ikuhlmey20@eventbrite.com',
    age: 16,
    visits: 650,
    progress: 87,
    title: null,
  },
  {
    id: 74,
    firstName: 'Hersh',
    lastName: 'Yanele',
    email: 'hyanele21@walmart.com',
    age: 53,
    visits: 435,
    progress: 3,
    title: null,
  },
  {
    id: 75,
    firstName: 'Peta',
    lastName: 'Demogeot',
    email: 'pdemogeot22@privacy.gov.au',
    age: 31,
    visits: 295,
    progress: 70,
    title: 'Mrs',
  },
  {
    id: 76,
    firstName: 'Odetta',
    lastName: 'Aldiss',
    email: 'oaldiss23@mediafire.com',
    age: 73,
    visits: 247,
    progress: 36,
    title: 'Dr',
  },
  {
    id: 77,
    firstName: 'Waylon',
    lastName: 'Balm',
    email: 'wbalm24@usgs.gov',
    age: 43,
    visits: 447,
    progress: 45,
    title: null,
  },
  {
    id: 78,
    firstName: 'Raychel',
    lastName: 'Dundon',
    email: 'rdundon25@hatena.ne.jp',
    age: 32,
    visits: 194,
    progress: 46,
    title: 'Ms',
  },
  {
    id: 79,
    firstName: 'Wernher',
    lastName: 'Cabena',
    email: 'wcabena26@mac.com',
    age: 40,
    visits: 559,
    progress: 27,
    title: null,
  },
  {
    id: 80,
    firstName: 'Gilburt',
    lastName: 'Readwing',
    email: 'greadwing27@oaic.gov.au',
    age: 35,
    visits: 310,
    progress: 16,
    title: null,
  },
  {
    id: 81,
    firstName: 'Henrietta',
    lastName: 'Arendsen',
    email: 'harendsen28@naver.com',
    age: 59,
    visits: 840,
    progress: 36,
    title: 'Dr',
  },
  {
    id: 82,
    firstName: 'Jo',
    lastName: 'Peschmann',
    email: 'jpeschmann29@google.com.hk',
    age: 37,
    visits: 199,
    progress: 6,
    title: 'Mr',
  },
  {
    id: 83,
    firstName: 'Dori',
    lastName: 'Spriddle',
    email: 'dspriddle2a@wikimedia.org',
    age: 11,
    visits: 878,
    progress: 1,
    title: 'Rev',
  },
  {
    id: 84,
    firstName: 'Susanna',
    lastName: 'Bleakley',
    email: 'sbleakley2b@bloglovin.com',
    age: 63,
    visits: 383,
    progress: 66,
    title: 'Ms',
  },
  {
    id: 85,
    firstName: 'Derby',
    lastName: 'Chipman',
    email: 'dchipman2c@ucla.edu',
    age: 24,
    visits: 429,
    progress: 35,
    title: null,
  },
  {
    id: 86,
    firstName: 'Farrel',
    lastName: 'Pimlock',
    email: 'fpimlock2d@jalbum.net',
    age: 66,
    visits: 566,
    progress: 74,
    title: null,
  },
  {
    id: 87,
    firstName: 'Deb',
    lastName: 'Bentick',
    email: 'dbentick2e@mediafire.com',
    age: 25,
    visits: 83,
    progress: 1,
    title: null,
  },
  {
    id: 88,
    firstName: 'Borg',
    lastName: 'Pennoni',
    email: 'bpennoni2f@wordpress.com',
    age: 25,
    visits: 233,
    progress: 96,
    title: 'Honorable',
  },
  {
    id: 89,
    firstName: 'Christoper',
    lastName: 'Le Port',
    email: 'cleport2g@symantec.com',
    age: 62,
    visits: 192,
    progress: 38,
    title: null,
  },
  {
    id: 90,
    firstName: 'Marsha',
    lastName: 'Armfirld',
    email: 'marmfirld2h@mediafire.com',
    age: 14,
    visits: 367,
    progress: 35,
    title: 'Mrs',
  },
  {
    id: 91,
    firstName: 'Powell',
    lastName: 'Large',
    email: 'plarge2i@xinhuanet.com',
    age: 61,
    visits: 53,
    progress: 12,
    title: 'Mrs',
  },
  {
    id: 92,
    firstName: 'Carleton',
    lastName: 'Toop',
    email: 'ctoop2j@wisc.edu',
    age: 53,
    visits: 392,
    progress: 7,
    title: 'Ms',
  },
  {
    id: 93,
    firstName: 'Adrian',
    lastName: 'Geerits',
    email: 'ageerits2k@chronoengine.com',
    age: 55,
    visits: 973,
    progress: 15,
    title: 'Mr',
  },
  {
    id: 94,
    firstName: 'Florenza',
    lastName: 'Anglim',
    email: 'fanglim2l@ameblo.jp',
    age: 48,
    visits: 197,
    progress: 79,
    title: null,
  },
  {
    id: 95,
    firstName: 'Osbert',
    lastName: 'Ogelbe',
    email: 'oogelbe2m@hatena.ne.jp',
    age: 57,
    visits: 221,
    progress: 54,
    title: 'Mr',
  },
  {
    id: 96,
    firstName: 'Chick',
    lastName: 'Baggally',
    email: 'cbaggally2n@businesswire.com',
    age: 13,
    visits: 130,
    progress: 50,
    title: null,
  },
  {
    id: 97,
    firstName: 'Freddi',
    lastName: 'Brixham',
    email: 'fbrixham2o@dell.com',
    age: 64,
    visits: 977,
    progress: 52,
    title: 'Honorable',
  },
  {
    id: 98,
    firstName: 'Elayne',
    lastName: 'Crummie',
    email: 'ecrummie2p@huffingtonpost.com',
    age: 19,
    visits: 513,
    progress: 35,
    title: null,
  },
  {
    id: 99,
    firstName: 'Meghan',
    lastName: 'Casford',
    email: 'mcasford2q@bloglines.com',
    age: 18,
    visits: 775,
    progress: 66,
    title: 'Honorable',
  },
  {
    id: 100,
    firstName: 'Bay',
    lastName: 'Chisholm',
    email: 'bchisholm2r@paypal.com',
    age: 76,
    visits: 444,
    progress: 24,
    title: 'Mr',
  },
];

const defaultColumns = [
  columnHelper.accessor('firstName', {
    header: 'First Name',
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    minSize: 250,
    size: 270, //set column size for this column
  }),
  columnHelper.accessor('age', {
    header: 'Age',
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    footer: (props) => {
      // Calculate the total visits
      const totalVisits = props.table
        .getFilteredRowModel()
        .rows.reduce((sum, row) => sum + row.original.visits, 0);
      return <>Total: {totalVisits}</>;
    },
  }),
  columnHelper.accessor('progress', {
    header: 'Progress',
  }),
  columnHelper.accessor('title', {
    header: 'Title',
  }),
];

const TableWithFooter = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const [columns] = React.useState(() => [...defaultColumns]);

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      minSize: 60,
      maxSize: 800,
    },
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  /**
   * Instead of calling `column.getSize()` on every render for every header
   * and especially every data cell (very expensive),
   * we will calculate all column sizes at once at the root table level in a useMemo
   * and pass the column sizes down as CSS variables to the <table> element.
   */
  const columnSizeVars = React.useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    }
    return colSizes;
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);

  //demo purposes
  const [enableMemo, setEnableMemo] = React.useState(true);

  return (
    <>
      {/* Here in the <table> equivalent element (surrounds all table head and data cells), we will define our CSS variables for column sizes */}
      <div
        {...{
          className: 'divTable',
          style: {
            ...columnSizeVars, //Define column sizes on the <table> element
            width: table.getTotalSize(),
          },
        }}
      >
        <div className="thead">
          {table.getHeaderGroups().map((headerGroup) => (
            <div
              {...{
                key: headerGroup.id,
                className: 'tr',
              }}
            >
              {headerGroup.headers.map((header) => (
                <div
                  {...{
                    key: header.id,
                    className: 'th',
                    style: {
                      width: `calc(var(--header-${header?.id}-size) * 1px)`,
                    },
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  <div
                    {...{
                      onDoubleClick: () => header.column.resetSize(),
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* When resizing any column we will render this special memoized version of our table body */}
        {table.getState().columnSizingInfo.isResizingColumn ? (
          <MemoizedTableBody table={table} />
        ) : (
          <TableBody table={table} />
        )}
        <div className="tfoot">
          {table.getFooterGroups().map((footerGroup) => (
            <div
              {...{
                key: footerGroup.id,
                className: 'tr',
              }}
            >
              {footerGroup.headers.map((header) => (
                <div
                  {...{
                    key: header.id,
                    className: 'th',
                    style: {
                      width: `calc(var(--header-${header?.id}-size) * 1px)`,
                    },
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                  <div
                    {...{
                      onDoubleClick: () => header.column.resetSize(),
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//un-memoized normal table body component - see memoized version below
function TableBody({ table }) {
  return (
    <div
      {...{
        className: 'tbody',
      }}
    >
      {table.getRowModel().rows.map((row) => (
        <div
          {...{
            key: row.id,
            className: 'tr',
          }}
        >
          {row.getVisibleCells().map((cell) => {
            return (
              <div
                {...{
                  key: cell.id,
                  className: 'td',
                  style: {
                    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
                  },
                }}
              >
                {cell.renderValue()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

//special memoized wrapper for our table body that we will use during column resizing
export const MemoizedTableBody = React.memo(
  TableBody,
  (prev, next) => prev.table.options.data === next.table.options.data
);

export default TableWithFooter;
