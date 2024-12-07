import dealer2 from './img/2.png';
import dealer3 from './img/3.png';
import dealer4 from './img/4.png';
import dealer5 from './img/5.png';
import dealer6 from './img/6.png';
import dealer7 from './img/7.png';
import dealer8 from './img/8.png';
import dealer9 from './img/9.png';
import dealer10 from './img/10.png'; 
import dealerA from './img/A.png';
import hard7 from './img/a7.png';
import hard8 from './img/8.png';
import hard9 from './img/9.png';
import hard10 from './img/10.png';
import hard11 from './img/11.png';
import hard12 from './img/12.png';
import hard13 from './img/13.png';
import hard14 from './img/14.png';
import hard15 from './img/15.png';
import hard16 from './img/16.png';
import hard17 from './img/17.png';
import soft13 from './img/s13.png';
import soft14 from './img/s14.png';
import soft15 from './img/s15.png';
import soft16 from './img/s16.png';
import soft17 from './img/s17.png';
import soft18 from './img/s18.png';
import soft19 from './img/s19.png';
import soft20 from './img/s20.png';
import pair2 from './img/2s.png';
import pair3 from './img/3s.png';
import pair4 from './img/4s.png';
import pair5 from './img/5s.png';
import pair6 from './img/6s.png';
import pair7 from './img/7s.png';
import pair8 from './img/8s.png';
import pair9 from './img/9s.png';
import pair10 from './img/10s.png';
import pair11 from './img/As.png';

export const dealerData = [
  { content : dealer2, name : '2', busting :35},
  { content : dealer3, name : '3', busting :37},
  { content : dealer4, name : '4', busting :40},
  { content : dealer5, name : '5', busting :42},
  { content : dealer6, name : '6', busting :42},
  { content : dealer7, name : '7', busting :26},
  { content : dealer8, name : '8', busting :24},
  { content : dealer9, name : '9', busting :23},
  { content : dealer10, name : '10', busting :23},
  { content : dealerA, name : 'A', busting :17},
];



export const hardData = [
  {
    name : hard7,
    content : "7",
    leftcob : 0,
    rowdata : [
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard8,
    content : "8",
    leftcob : 0,
    rowdata : [
      'HIT',
      'HIT',
      'HIT',
      'Double or Hit',
      'Double or Hit',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard9,
      content : "9",
    leftcob : 0,
    rowdata : [
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard10,
    content : "10",
    leftcob : 0,
    rowdata : [
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'HIT',
    ]
  },
  {
    name : hard11,
    content : "11",
    leftcob : 0,
    rowdata : [
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
      'Double or Hit',
    ]
  },
  {
    name : hard12,
    content : "12",
    leftcob : 31,
    rowdata : [
      'HIT',
      'HIT',
      'STAND',
      'STAND',
      'STAND',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard13,
    content : "13",
    leftcob : 39,
    rowdata : [
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard14,
    content : "14",
    leftcob : 56,
    rowdata : [
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard15,
    content : "15",
    leftcob : 58,
    rowdata : [
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard16,
    content : "16",
    leftcob : 62,
    rowdata : [
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]
  },
  {
    name : hard17,
      content : "17+",
    leftcob : 69,
    rowdata : [
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
      'STAND',
    ]
  },
];
  export const softData = [
    {
      name : soft13,
      content : "A,2",
      leftcob : 39,
      rowdata : [
        'HIT',
        'HIT',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : soft14,
      content : "A,3",
      leftcob : 56,
      rowdata : [
        'HIT',
        'HIT',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : soft15,
      content : "A,4",
      leftcob : 58,
      rowdata : [
        'HIT',
        'HIT',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : soft16,
      content : "A,5",
      leftcob : 62,
      rowdata : [
        'HIT',
        'HIT',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : soft17,
      content : "A,6",
      leftcob : 69,
      rowdata : [
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : soft18,
      content : "A,7",
      leftcob : 77,
      rowdata : [
        'STAND',
        'Double or Stand',
        'Double or Stand',
        'Double or Stand',
        'Double or Stand',
        'STAND',
        'STAND',
        'HIT',
        'HIT',
        'STAND',
      ]
    },
    {
      name : soft19,
      content : "A,8",
      leftcob : 85,
      rowdata : [
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'Double or Stand',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
      ]
    },
    {
      name : soft20,
      content : "A,9",
      leftcob : 92,
      rowdata : [
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
      ]
    },
  ];
  export const pairData = [
    {
      name : pair2,
      content : "2+2",
      busting : 0,
      rowData : [
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : pair3,
      content : "3+3",
      busting : 0,
      rowData : [
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : pair4,
      content : "4+4",
      busting : 0,
      rowData : [
        'HIT',
        'HIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : pair5,
      content : "5+5",
      busting : 0,
      rowData : [
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'Double or Hit',
        'HIT',
        'HIT',
      ]
    },
    {
      name : pair6,
      content : "6+6",
      busting : 0,
      rowData : [
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'HIT',
        'HIT',
        'HIT',
        'HIT',
      ]
    },
    {
      name : pair7,
      content : "7+7",
      busting : 0,
      rowData : [
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'HIT',
        'STAND',
        'HIT',
      ]
    },
    {
      name : pair8,
      content : "8+8",
      busting : 0,
      rowData : [
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
      ]
    },
    {
      name : pair9,
      content : "9+9",
      busting : 0,
      rowData : [
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'STAND',
        'SPLIT',
        'SPLIT',
        'STAND',
        'STAND',
      ]
    },
    {
      name : pair10,
      content : "10+10",
      busting : 0,
      rowData : [
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
        'STAND',
      ]
    },
    {
      name : pair11,
      content : "A+A",
      busting : 31,
      rowData : [
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
        'SPLIT',
      ]
    },
  ];
  export const playData = [
    0,
    0,
    0,
    0,
    0,
    31,
    39,
    56,
    58,
    62,
    69,
    85,
    92,
    0,
    0,
    0,
    0,
    31,
    56,
    62,
    77,
    92,
    31,
    39,
    56,
    58,
    62,
    69,
    77,
    85,
    92,
    0
  ];