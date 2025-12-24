
import { Idea } from './types';

export const DEFAULT_IDEAS: Idea[] = [
  {
    id: 'relativity',
    idNumber: '#E1915',
    title: 'Theory of General Relativity',
    category: 'Physics',
    description: 'Before 1915, gravity was understood as a force—a mysterious tug that pulled apples to the ground and kept planets in orbit. Albert Einstein changed everything by proposing that gravity isn\'t a force at all, but a consequence of the geometry of the universe itself.',
    quote: '"Space-time tells matter how to move; matter tells space-time how to curve." — John Archibald Wheeler',
    origin: '1915, Albert Einstein',
    complexity: 3,
    tags: ['astrophysics', 'einstein', 'cosmology', 'math'],
    size: 'xl',
    x: 45,
    y: 45,
    year: '1915',
    author: 'Albert Einstein',
    readTime: '25 min read',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPVVFj-s2fqHJe12dtFWfdBF-2G5j9-oCW6OOuSvoNQnkIVJYkTuqlL2apGlKvTIwGpb8eLLEjLOegfwEaaF51Xobf55EGpFVg1TlsUmNT3PHqa9B4yJFwJT8BU728WDF6EQgXJZ6QuHzMOKn9YTiiEEh8qJrYhxPU42np8bZ9epZzvSyBeWu3B7vExixg2ITJDd6IJBF9oSWeLxlqfKhGJ6eu6jtYn1fH8auhcL-Lq51O7dhPEbS5weCGZwN28FVogzs18hWtYoSV',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'General relativity stands as one of the twin pillars of modern physics, alongside quantum mechanics. While Newton\'s laws of motion and gravity had reigned supreme for over two centuries, they began to show cracks when applied to extreme conditions. Einstein’s insight was to reimagine the stage on which the universe plays out: space and time are not a rigid backdrop, but a flexible fabric.'
      },
      {
        id: 'origins',
        title: 'Origins of the Idea',
        content: 'Following his publication of Special Relativity in 1905, Einstein began a decade-long struggle to incorporate gravity into his relativistic framework. The journey was fraught with mathematical dead ends and conceptual hurdles. He realized that a person in free fall would not feel their own weight—a thought he later described as the "happiest thought of my life."'
      },
      {
        id: 'equivalence',
        title: 'The Equivalence Principle',
        content: 'At the heart of general relativity lies the Equivalence Principle. It posits that there is no experiment a local observer can perform to distinguish between being in a gravitational field and accelerating in deep space. If you were in a windowless rocket ship accelerating at 9.8 m/s², it would feel exactly like standing on Earth.'
      },
      {
        id: 'spacetime',
        title: 'Curvature of Spacetime',
        content: 'To explain this, Einstein proposed that mass and energy warp the structure of space-time. Think of a bowling ball placed on a trampoline; it creates a dip. A marble rolled nearby will curve around the bowling ball, not because of a mysterious force, but because it is following the curved surface of the trampoline.'
      }
    ],
    connectedIdeas: [
      { id: '1', title: 'Quantum Mechanics', category: 'Physics', level: 2, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp0YFh_MFDxdaHRLpb14S94ouAJNtSrDMpi_OrV_4jJOKWNU2c2lRXlVx40TYfP3nwUPdZ5lFpGtPvlBUoBYdrEO1fXOB4Tn-cBhHBVKlbDgU1Z3c3nGkKs_3bvWqadCmh8Xm8TjlxE2tbb95AciwBl3fC5X-mTBpIugwSRP_X69s28DdHJAMTwVFPW8VWlzOuFYdPehwxtSxXbTWmcR47eOzp6cOQhzxK3tzquqqjJe_jth1g-RyFIvqqVcyfP2l7NcxNrt8qHVHs' },
      { id: '2', title: 'Special Relativity', category: 'Physics', level: 3, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFgMzNX6OEGIYq5ugObBo8YKrnSZW_Qf2ZRP0yDHYkRq4Hr5WybXSV13hcQzyz99hlzDAo0DHk__cZyKsqJlWC6Nto7zDVMCNzNTWumQFZUWOzCf9hpwfuIOZWvi8VODBIKW9gRXTA3KzZnOZZUfKuQgyJdTka0VxwIE9FvJTIWg91PWv-_oqLcnZ4iffqdmJ5K8wSBcmqXMWbq5kYwSdEkWqwQWCWJdoQfKrNXTzm8Bn4Nv-rvbvhBAHnGRmxioXa2eL6I6rfBrZt' },
      { id: '3', title: 'Newtonian Gravity', category: 'Physics', level: 2, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfyD4sy8gj6xoJo0y1WHWAc9KgEG1Req_uaxa7TIv0xbCe92Lv7z9KomjTTPqR20JGsitLVpBhZWUaMgR6HE-aF-x8U7-rnFjtU9z7PbmEHOZtD7Wwg8TDKLJ3wTAKHDoM8E6rlvFgBv8jxQKQXBMHHyPJqMjHltWFJ9F4KFE3xwVMa2mJiv7qOlwtw_aYUvexMwI3LwvXjfvbv_ySQN-hdx5JiqHErEqH3LZpo0crFuken9qIyBV6_OMyVBNAus6Mx3zAYYD0irU-' }
    ]
  },
  {
    id: '1',
    idNumber: '#1001',
    title: 'Minimalism',
    category: 'Lifestyle & Aesthetics',
    description: 'A tool that can assist you in finding freedom. Freedom from fear. Freedom from worry.',
    quote: 'Own less, live more.',
    origin: '20th Century, Art Movement',
    complexity: 1,
    tags: ['Simplicity', 'Aesthetics', 'Lifestyle'],
    size: 'lg',
    x: 15,
    y: 20
  },
  {
    id: '2',
    idNumber: '#2002',
    title: 'Entropy',
    category: 'Physics & Thermodynamics',
    description: 'A thermodynamic quantity representing the unavailability of a system\'s thermal energy for conversion into mechanical work.',
    quote: 'Order tends toward chaos.',
    origin: '1850, Rudolf Clausius',
    complexity: 3,
    tags: ['Physics', 'Thermodynamics', 'Systems'],
    size: 'md',
    x: 12,
    y: 65
  },
  {
    id: '4',
    idNumber: '#4004',
    title: 'Stoicism',
    category: 'Philosophy',
    description: 'The endurance of pain or hardship without the display of feelings and without complaint.',
    quote: 'We suffer more in imagination than in reality.',
    origin: '3rd Century BC, Athens',
    complexity: 2,
    tags: ['Resilience', 'Ethics', 'Virtue'],
    size: 'xl',
    x: 65,
    y: 75
  },
  {
    id: '10',
    idNumber: '#8020',
    title: 'The Pareto Principle',
    category: 'Economics & Business',
    quote: '"Why 80% of consequences come from 20% of causes."',
    description: 'This principle serves as a reminder that the relationship between inputs and outputs is often not balanced. In many situations, a minority of causes, inputs, or effort usually lead to a majority of the results, outputs, or rewards.',
    fullContent: 'Vilfredo Pareto originally observed this in 1896 regarding land ownership in Italy, noting that 80% of the land was owned by 20% of the population. Since then, it has been applied universally—from software engineering where 20% of the bugs cause 80% of the crashes, to sales where 20% of clients produce 80% of revenue.',
    origin: '1896, Italy',
    complexity: 2,
    tags: ['Productivity', 'Strategy', 'Mathematics'],
    size: 'lg',
    x: 50,
    y: 35
  }
];

export const CATEGORIES = [
  'Philosophy',
  'Physics',
  'Art & Design',
  'Psychology',
  'Technology',
  'Sociology',
  'Economics'
];
