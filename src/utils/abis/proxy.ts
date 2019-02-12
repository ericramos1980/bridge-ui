import { AbiItem } from 'web3-utils';

export default [
  {
    constant: false,
    inputs: [{ name: 'newImplementation', type: 'address' }],
    name: 'upgradeTo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'newImplementation', type: 'address' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'newAdmin', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: '_implementation', type: 'address' },
      { name: '_data', type: 'bytes' },
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'constructor',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'previousAdmin', type: 'address' },
      { indexed: false, name: 'newAdmin', type: 'address' },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'implementation', type: 'address' }],
    name: 'Upgraded',
    type: 'event',
  },
  {
    constant: false,
    inputs: [{ name: 'data', type: 'bytes' }],
    name: 'applyProposal',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
