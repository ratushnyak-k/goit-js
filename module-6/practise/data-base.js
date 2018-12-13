const users = [
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'nouaman',
      last: 'van hoesel',
    },
    address: {
      street: '2776 lijnmarkt',
      city: 'voorst',
      state: 'drenthe',
      postcode: 39846,
      coordinates: {
        latitude: '41.0065',
        longitude: '-40.1004',
      },
      timezone: {
        offset: '-5:00',
        description: 'Eastern Time (US & Canada), Bogota, Lima',
      },
    },
    email: 'nouaman.vanhoesel@example.com',
    isFriend: true,
    login: {
      uuid: 'ad448e15-6bc0-4f85-b55e-bc1429255ca7',
      username: 'goldentiger738',
      password: 'evolutio',
      salt: 'ATXc7Hv7',
      md5: 'faebde15741e0ccf827c8e3b44ba329f',
      sha1: '9add60b6293acfe8e28f0111c86cbd47a5dfd0ad',
      sha256: '405872afcf6b2486d3b4eacf27b54c8652f649a2a43b136d8b9585f93de48775',
    },
    dob: {
      date: '1986-11-10T09:18:57Z',
      age: 32,
    },
    registered: {
      date: '2003-06-21T11:00:57Z',
      age: 15,
    },
    phone: '(161)-337-6480',
    cell: '(349)-777-7934',
    id: '52776929',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/26.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/26.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/26.jpg',
    },
    nat: 'NL',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'derek',
      last: 'montgomery',
    },
    address: {
      street: '2041 station road',
      city: 'carrigtwohill',
      state: 'cork city',
      postcode: 24756,
      coordinates: {
        latitude: '58.2460',
        longitude: '-166.8867',
      },
      timezone: {
        offset: '+2:00',
        description: 'Kaliningrad, South Africa',
      },
    },
    email: 'derek.montgomery@example.com',
    isFriend: false,
    login: {
      uuid: '57fbccce-5794-4cba-b4f9-53983c32211a',
      username: 'tinykoala624',
      password: '4417',
      salt: 'fgQaKz6r',
      md5: 'e64a611e643b6822730a6f3cc0b9be7b',
      sha1: '2a9c872f6297fa062d8142b049e3e0c649dbc3e9',
      sha256: 'b18a4e1fd0be2d82620565629e6b8f3b8ca5e68bc68b453cd237eaf371dca4ed',
    },
    dob: {
      date: '1953-02-22T13:00:44Z',
      age: 65,
    },
    registered: {
      date: '2010-03-10T03:57:11Z',
      age: 8,
    },
    phone: '031-993-7214',
    cell: '081-492-4822',
    id: '6545239T',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/21.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/21.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/21.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'darryl',
      last: 'kuhn',
    },
    address: {
      street: '1006 bollinger rd',
      city: 'st. louis',
      state: 'california',
      postcode: 42196,
      coordinates: {
        latitude: '-88.3266',
        longitude: '32.8016',
      },
      timezone: {
        offset: '-4:00',
        description: 'Atlantic Time (Canada), Caracas, La Paz',
      },
    },
    email: 'darryl.kuhn@example.com',
    isFriend: true,
    login: {
      uuid: '6e40e692-735f-4e5c-8277-f47d34b86934',
      username: 'orangebutterfly185',
      password: 'henry',
      salt: 'hJpWiSl3',
      md5: 'b7a373353027934fb9dfcd0d35853f67',
      sha1: '824d252af5333135b3ddaa6f769a8ced8bf7fe74',
      sha256: '9be3a4460b4e7948f094a1ea4cdbfd8ae98b15a0b8d11c04caa57aa2d8aa3d7d',
    },
    dob: {
      date: '1995-05-23T15:25:03Z',
      age: 23,
    },
    registered: {
      date: '2008-11-18T14:02:48Z',
      age: 10,
    },
    phone: '(494)-874-5110',
    cell: '(546)-538-0444',
    id: '728-87-9223',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/5.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/5.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
    },
    nat: 'US',
  },
  {
    gender: 'female',
    name: {
      title: 'ms',
      first: 'rosalyn',
      last: 'hudson',
    },
    address: {
      street: '1337 herbert road',
      city: 'lusk',
      state: 'fingal',
      postcode: 56483,
      coordinates: {
        latitude: '86.2663',
        longitude: '178.8286',
      },
      timezone: {
        offset: '-9:00',
        description: 'Alaska',
      },
    },
    email: 'rosalyn.hudson@example.com',
    isFriend: false,
    login: {
      uuid: '538410d1-5194-4c2b-ae68-11f606f7dc78',
      username: 'brownbutterfly125',
      password: 'crescent',
      salt: 'ZHpUpOcl',
      md5: '922f58c3dc9da4f2d8670ced520a2707',
      sha1: '81860740895651bcff9e4b76ea6ed2ab3e5f8539',
      sha256: '1cdd003e97d1e3edb1f065fe37a06e1c79180250cc0dd4098eca18977b293089',
    },
    dob: {
      date: '1964-12-20T20:08:54Z',
      age: 53,
    },
    registered: {
      date: '2002-10-18T17:04:05Z',
      age: 16,
    },
    phone: '071-621-8181',
    cell: '081-770-4204',
    id: '9457139T',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/24.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/24.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'steffen',
      last: 'tjore',
    },
    address: {
      street: 'sjøgangen 614',
      city: 'åneby',
      state: 'nordland',
      postcode: '3213',
      coordinates: {
        latitude: '-66.0826',
        longitude: '-132.3931',
      },
      timezone: {
        offset: '+5:30',
        description: 'Bombay, Calcutta, Madras, New Delhi',
      },
    },
    email: 'steffen.tjore@example.com',
    isFriend: true,
    login: {
      uuid: '086a85d0-777c-44de-be33-59dc7e124948',
      username: 'blackswan937',
      password: 'whatever',
      salt: 'untx0guw',
      md5: '260fade95a358ffadd48a62b51e5581f',
      sha1: '261b570a9c9ee11f8e7306bc53c181241650b82c',
      sha256: 'ffffc47fe684907f0fb47dbd6156e803ed4d28b6133ccb83cd4f919fe8d1acb4',
    },
    dob: {
      date: '1995-01-11T15:24:35Z',
      age: 23,
    },
    registered: {
      date: '2017-05-30T20:56:12Z',
      age: 1,
    },
    phone: '72723500',
    cell: '99462152',
    id: '11019535004',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/59.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/59.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/59.jpg',
    },
    nat: 'NO',
  },
  {
    gender: 'female',
    name: {
      title: 'mademoiselle',
      first: 'fiona',
      last: 'hubert',
    },
    address: {
      street: '7001 rue du moulin',
      city: 'kriechenwil',
      state: 'fribourg',
      postcode: 6583,
      coordinates: {
        latitude: '58.8346',
        longitude: '12.2767',
      },
      timezone: {
        offset: '+4:00',
        description: 'Abu Dhabi, Muscat, Baku, Tbilisi',
      },
    },
    email: 'fiona.hubert@example.com',
    isFriend: false,
    login: {
      uuid: '3c4a0243-1060-44da-82d2-c2bb07317f78',
      username: 'yellowladybug878',
      password: 'cookie',
      salt: '6o3k0oWf',
      md5: '21ca432dcc2a620265e4cc77127bfe66',
      sha1: 'c784d73dc70e9f65554aa922fe4a134719a0dc82',
      sha256: '951a6bcb7b9b3a861049c0c44a9be1352fde191fd5fa51eec822e079caf66197',
    },
    dob: {
      date: '1986-11-09T16:35:20Z',
      age: 32,
    },
    registered: {
      date: '2003-03-18T16:05:53Z',
      age: 15,
    },
    phone: '(276)-676-2339',
    cell: '(355)-453-7748',
    id: '756.3605.8460.18',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/78.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg',
    },
    nat: 'CH',
  },
  {
    gender: 'female',
    name: {
      title: 'ms',
      first: 'roxane',
      last: 'brun',
    },
    address: {
      street: '5761 avenue vauban',
      city: 'lille',
      state: 'eure-et-loir',
      postcode: 73587,
      coordinates: {
        latitude: '51.8684',
        longitude: '-117.0848',
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin',
      },
    },
    email: 'roxane.brun@example.com',
    isFriend: true,
    login: {
      uuid: '5fd2ddbf-cf75-4535-af15-5f2eefe9a4c3',
      username: 'brownduck751',
      password: 'club',
      salt: 'VKU1DwPj',
      md5: '9191eaaad7123d0321038db9f62c82d6',
      sha1: 'db75062d20d56e5ea96f161243056d3d0109bb5e',
      sha256: 'ea534a6dd717b6b31e7c68717a7797a6e565d3a04966a4a57657806015207e09',
    },
    dob: {
      date: '1959-08-03T18:40:32Z',
      age: 59,
    },
    registered: {
      date: '2013-09-05T09:06:36Z',
      age: 5,
    },
    phone: '01-42-52-61-82',
    cell: '06-98-90-57-47',
    id: '2NNaN19594132 33',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/85.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/85.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/85.jpg',
    },
    nat: 'FR',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'vilho',
      last: 'honkala',
    },
    address: {
      street: '4149 hämeentie',
      city: 'ilmajoki',
      state: 'north karelia',
      postcode: 35583,
      coordinates: {
        latitude: '-28.6750',
        longitude: '15.6028',
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris',
      },
    },
    email: 'vilho.honkala@example.com',
    isFriend: false,
    login: {
      uuid: '00ee7b33-9340-453f-9759-bd73fe3d2f3c',
      username: 'ticklishostrich136',
      password: 'artist',
      salt: '9E2hmYwo',
      md5: 'f374e0c2107160e6ee63009c0a73b034',
      sha1: 'cc9b676474cb88533fd1d43537e3024ba048c217',
      sha256: 'c93e00400f400f9916ec047a8094984cd4068ae825d5741755c59ec07c8b7b8a',
    },
    dob: {
      date: '1952-03-14T04:41:32Z',
      age: 66,
    },
    registered: {
      date: '2018-04-20T08:25:11Z',
      age: 0,
    },
    phone: '04-300-375',
    cell: '046-159-36-32',
    id: 'NaNNA895undefined',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/15.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/15.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/15.jpg',
    },
    nat: 'FI',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'taha',
      last: 'kleppe',
    },
    address: {
      street: 'hagtornveien 9623',
      city: 'slettebrotane',
      state: 'vest-agder',
      postcode: '7080',
      coordinates: {
        latitude: '-72.6934',
        longitude: '-88.6747',
      },
      timezone: {
        offset: '-8:00',
        description: 'Pacific Time (US & Canada)',
      },
    },
    email: 'taha.kleppe@example.com',
    isFriend: false,
    login: {
      uuid: 'f7dc0c29-4c9a-4c94-85e5-89795cc6c590',
      username: 'yellowgorilla701',
      password: 'cars',
      salt: 'V209EQ41',
      md5: 'f3b8650f679897512908329a4f36f9f1',
      sha1: '842f827bd2f52581de20078dbd013190fc809654',
      sha256: '1b3c5377f36d8563d1797b958511539086d862c7e8838cbdd0c1207118c7d766',
    },
    dob: {
      date: '1970-11-06T19:51:32Z',
      age: 48,
    },
    registered: {
      date: '2016-12-27T22:45:33Z',
      age: 1,
    },
    phone: '64483921',
    cell: '99066794',
    id: '06117018804',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/68.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/68.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg',
    },
    nat: 'NO',
  },
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'adriana',
      last: 'mæhle',
    },
    address: {
      street: 'trollsvingen 5435',
      city: 'alsvåg',
      state: 'sør-trøndelag',
      postcode: '8004',
      coordinates: {
        latitude: '14.7409',
        longitude: '124.7215',
      },
      timezone: {
        offset: '-3:00',
        description: 'Brazil, Buenos Aires, Georgetown',
      },
    },
    email: 'adriana.mæhle@example.com',
    isFriend: true,
    login: {
      uuid: '7903d78e-1be9-4264-bc9c-d75a2333b4be',
      username: 'bigkoala541',
      password: 'modem',
      salt: 'Y969sh0a',
      md5: '5506382c0c73174e2505e2d8f4f90387',
      sha1: 'b970d1b6ffe7b8c6a1db6c64b0c9d55612e0134f',
      sha256: 'ad17ec140be2bd4232cd15f32f89a621e6a3d3cc1a4a010a3ff0e1a462ad1740',
    },
    dob: {
      date: '1981-08-10T03:55:58Z',
      age: 37,
    },
    registered: {
      date: '2002-12-21T10:17:58Z',
      age: 15,
    },
    phone: '78211550',
    cell: '95248340',
    id: '10088123978',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/18.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/18.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
    },
    nat: 'NO',
  },
];

const products = [
  {
    ProductId: 'HT-1000',
    Category: 'Laptops',
    MainCategory: 'Computer Systems',
    TaxTarifCode: '1',
    SupplierName: 'Very Best Screens',
    WeightMeasure: 4.2,
    WeightUnit: 'KG',
    Description:
      'Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',
    Name: 'Notebook Basic 15',
    DateOfSale: '2017-03-26',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1000.jpg',
    Status: 'Available',
    Quantity: 10,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 956,
    Width: 30,
    Depth: 18,
    Height: 3,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1001',
    Category: 'Laptops',
    MainCategory: 'Computer Systems',
    TaxTarifCode: '1',
    SupplierName: 'Very Best Screens',
    WeightMeasure: 4.5,
    WeightUnit: 'KG',
    Description:
      'Notebook Basic 17 with 2,80 GHz quad core, 17" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',
    Name: 'Notebook Basic 17',
    DateOfSale: '2017-04-17',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1001.jpg',
    Status: 'Available',
    Quantity: 20,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 1249,
    Width: 29,
    Depth: 17,
    Height: 3.1,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1002',
    Category: 'Laptops',
    MainCategory: 'Computer Systems',
    TaxTarifCode: '1',
    SupplierName: 'Very Best Screens',
    WeightMeasure: 4.2,
    WeightUnit: 'KG',
    Description:
      'Notebook Basic 18 with 2,80 GHz quad core, 18" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',
    Name: 'Notebook Basic 18',
    DateOfSale: '2017-01-07',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1002.jpg',
    Status: 'Available',
    Quantity: 10,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 1570,
    Width: 28,
    Depth: 19,
    Height: 2.5,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1003',
    Category: 'Laptops',
    MainCategory: 'Computer Systems',
    TaxTarifCode: '1',
    SupplierName: 'Smartcards',
    WeightMeasure: 4.2,
    WeightUnit: 'KG',
    Description:
      'Notebook Basic 19 with 2,80 GHz quad core, 19" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',
    Name: 'Notebook Basic 19',
    DateOfSale: '2017-04-09',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1003.jpg',
    Status: 'Available',
    Quantity: 15,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 1650,
    Width: 32,
    Depth: 21,
    Height: 4,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1007',
    Category: 'Accessories',
    MainCategory: 'Computer Components',
    TaxTarifCode: '1',
    SupplierName: 'Technocom',
    WeightMeasure: 0.2,
    WeightUnit: 'KG',
    Description: 'Digital Organizer with State-of-the-Art Storage Encryption',
    Name: 'ITelO Vault',
    DateOfSale: '2017-05-17',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1007.jpg',
    Status: 'Available',
    Quantity: 15,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 299,
    Width: 32,
    Depth: 22,
    Height: 3,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1010',
    Category: 'Accessories',
    MainCategory: 'Computer Systems',
    TaxTarifCode: '1',
    SupplierName: 'Very Best Screens',
    WeightMeasure: 4.3,
    WeightUnit: 'KG',
    Description:
      'Notebook Professional 15 with 2,80 GHz quad core, 15" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro',
    Name: 'Notebook Professional 15',
    DateOfSale: '2017-02-22',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1010.jpg',
    Status: 'Available',
    Quantity: 16,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 1999,
    Width: 33,
    Depth: 20,
    Height: 3,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1011',
    Category: 'Laptops',
    MainCategory: 'Computer Systems',
    TaxTarifCode: '1',
    SupplierName: 'Very Best Screens',
    WeightMeasure: 4.1,
    WeightUnit: 'KG',
    Description:
      'Notebook Professional 17 with 2,80 GHz quad core, 17" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro',
    Name: 'Notebook Professional 17',
    DateOfSale: '2017-01-02',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1011.jpg',
    Status: 'Available',
    Quantity: 17,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 2299,
    Width: 33,
    Depth: 23,
    Height: 2,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1020',
    Category: 'Accessories',
    MainCategory: 'Computer Components',
    TaxTarifCode: '1',
    SupplierName: 'Technocom',
    WeightMeasure: 0.16,
    WeightUnit: 'KG',
    Description:
      'Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications',
    Name: 'ITelO Vault Net',
    DateOfSale: '2017-05-08',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1020.jpg',
    Status: 'Available',
    Quantity: 14,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 459,
    Width: 10,
    Depth: 1.8,
    Height: 17,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1021',
    Category: 'Accessories',
    MainCategory: 'Computer Components',
    TaxTarifCode: '1',
    SupplierName: 'Technocom',
    WeightMeasure: 0.18,
    WeightUnit: 'KG',
    Description:
      'Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link',
    Name: 'ITelO Vault SAT',
    DateOfSale: '2017-06-30',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1021.jpg',
    Status: 'Available',
    Quantity: 50,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 149,
    Width: 11,
    Depth: 1.7,
    Height: 18,
    DimUnit: 'cm',
  },
  {
    ProductId: 'HT-1022',
    Category: 'Accessories',
    MainCategory: 'Computer Components',
    TaxTarifCode: '1',
    SupplierName: 'Technocom',
    WeightMeasure: 0.2,
    WeightUnit: 'KG',
    Description: '32 GB Digital Assistant with high-resolution color screen',
    Name: 'Comfort Easy',
    DateOfSale: '2017-03-02',
    ProductPicUrl: 'test-resources/sap/ui/demokit/explored/img/HT-1022.jpg',
    Status: 'Available',
    Quantity: 30,
    UoM: 'PC',
    CurrencyCode: 'EUR',
    Price: 1679,
    Width: 84,
    Depth: 1.5,
    Height: 14,
    DimUnit: 'cm',
  },
];

// https://github.com/SAP/openui5/blob/master/src/sap.ui.demokit/test/sap/ui/demokit/explored/products.json