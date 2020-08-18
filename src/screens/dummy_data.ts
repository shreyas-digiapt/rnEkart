import React from 'react';

const DATA = [
  {
    type: 'viewPager',
    data: ['green', 'red', 'blue', 'yellow'],
  },
  {
    type: 'staticTitle',
    data: 'This is the title',
  },
  {
    type: 'horList',
    data: {
      category: 'L1',
      catData: [
        {name: 'leaf 1', coloor: 'purple'},
        {name: 'leaf 2', coloor: 'blue'},
        {name: 'leaf 3', coloor: 'green'},
        {name: 'leaf 4', coloor: 'yellow'},
        {name: 'leaf 5', coloor: 'orange'},
      ],
    },
  },
  {
    type: 'horList',
    data: {
      category: 'L2',
      catData: [
        {name: 'leaf 1', coloor: 'orange'},
        {name: 'leaf 2', coloor: 'purple'},
        {name: 'leaf 3', coloor: 'blue'},
        {name: 'leaf 4', coloor: 'green'},
        {name: 'leaf 5', coloor: 'yellow'},
      ],
    },
  },
  {
    type: 'horList',
    data: {
      category: 'L3',
      catData: [
        {name: 'leaf 1', coloor: 'yellow'},
        {name: 'leaf 2', coloor: 'orange'},
        {name: 'leaf 3', coloor: 'purple'},
        {name: 'leaf 4', coloor: 'blue'},
        {name: 'leaf 5', coloor: 'green'},
      ],
    },
  },
  {
    type: 'staticTitle',
    data: 'Welcome',
  },
  {
    type: 'horList',
    data: {
      category: 'L4',
      catData: [
        {name: 'leaf 1', coloor: 'green'},
        {name: 'leaf 2', coloor: 'yellow'},
        {name: 'leaf 3', coloor: 'orange'},
        {name: 'leaf 4', coloor: 'purple'},
        {name: 'leaf 5', coloor: 'blue'},
      ],
    },
  },
  {
    type: 'horList',
    data: {
      category: 'L5',
      catData: [
        {name: 'leaf 1', coloor: 'blue'},
        {name: 'leaf 2', coloor: 'green'},
        {name: 'leaf 3', coloor: 'yellow'},
        {name: 'leaf 4', coloor: 'orange'},
        {name: 'leaf 5', coloor: 'purple'},
      ],
    },
  },
  {
    type: '4grid',
    data: {
      category: 'Recomonded',
      catData: [
        {name: 'leaf 1', coloor: 'blue'},
        {name: 'leaf 2', coloor: 'green'},
        {name: 'leaf 3', coloor: 'yellow'},
        {name: 'leaf 4', coloor: 'orange'},
      ],
    },
  },
];

export default DATA;
