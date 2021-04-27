import { FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { RiGatsbyLine } from 'react-icons/ri';
import { BsPhone } from 'react-icons/bs';
import { SiCplusplus } from 'react-icons/si';
import React from 'react';
import { NestLogo, NextLogo } from '../assets/images/icons';

export const data = {
  react: {
    type: 'react-icons',
    icon: FaReact,
    mark: 'React',
    description:
      ' (styled components, redux,mobx, axios, unit tests, GraphQl) + TS/ES6',
    li: 'pri',
  },
  gatsby: {
    type: 'react-icons',
    icon: RiGatsbyLine,
    mark: 'Gatsby',
    description:
      'SanityIO (headless cms), fetching data from api, creating graphiql nodes, SEO, writing hooks',
    color: 'sec',
  },
  next: {
    type: 'svg',
    icon: <NextLogo width="60px" height="60px" className="svg" />,
    mark: 'NextJS',
    description:
      '+ KeystoneJS (Node graphql server & TS & mongodb), Apollo Client mutations, fetching caching, loading',
    color: 'ter',
  },
  node: {
    type: 'react-icons',
    icon: FaNodeJs,
    mark: 'NodeJs',
    description:
      ' + express, ajax, rest api, authentication, schemas, email, mvc, middleware + mongodb',
    color: 'qua',
  },
  php: {
    type: 'react-icons',
    icon: FaPhp,
    mark: 'PHP',
    description: 'MVC, Routing, + composer, guzzle',
    color: 'qui',
  },
  nest: {
    type: 'svg',
    icon: <NestLogo width="60px" height="60px" className="svg" />,
    mark: 'PHP',
    description:
      '(NodeJS framework) in learning.. + MySQL & MariaDB or mongoose + TS,CRON auth, validation, mails',
    color: 'sen',
  },
  python: {
    type: 'react-icons',
    icon: FaPython,
    mark: 'Python',
    description: 'Pandas, numpy, matplotlib, scikit-learne',
    color: 'qui',
  },
  reactNative: {
    type: 'react-icons',
    icon: BsPhone,
    mark: 'React Native',
    description: ' Simple apps, not complicated',
    color: 'qua',
  },
  cpp: {
    type: 'react-icons',
    icon: SiCplusplus,
    mark: 'C++',
    description: ' Very often used in college, object, data structures',
    color: 'pri',
  },
};
