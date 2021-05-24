import React from 'react';
import {
  SiFigma,
  SiJetbrains,
  SiMongodb,
  SiPostman,
  SiInkscape,
  SiGimp,
  SiVisualstudiocode,
  SiTrello,
} from 'react-icons/si';
import { GoTools } from 'react-icons/go';
import { FaGitAlt, FaSourcetree, FaMobile } from 'react-icons/fa';
import { BsTerminal } from 'react-icons/bs';
import { JustinmindLogo, NextLogo } from '../assets/images/icons';

export const tData = {
  figma: {
    type: 'react-icons',
    icon: SiFigma,
    mark: 'Figma',
    description: 'Very well knowledge, creating mockups, projects, prototypes',
    li: 'primary',
    color: 'secondary',
  },
  jetbrains: {
    type: 'react-icons',
    icon: SiJetbrains,
    mark: 'Jetbrains ide',
    description:
      'WebStorm and PHPStorm, webstorm is my main ide to create web apps',
    color: 'tertiary',
  },
  tools: {
    type: 'react-icons',
    icon: GoTools,
    mark: 'DevTools',
    description: 'Apollo devtools, React devtools, Redux devtools',
    color: 'primary',
  },
  compass: {
    type: 'react-icons',
    icon: SiMongodb,
    mark: 'Compass',
    description: 'Mongodb Compass to connect with db',
    color: 'quinary',
  },
  git: {
    type: 'react-icons',
    icon: FaGitAlt,
    mark: 'git',
    description:
      'Merging, creating branches, commits, basic setup, knowledge of github and bitbucket',
    color: 'quaternary',
  },
  inkscape: {
    type: 'react-icons',
    icon: SiInkscape,
    mark: 'Inkscape',
    description: 'Simple images edit',
    color: 'senary',
  },
  gimp: {
    type: 'react-icons',
    icon: SiGimp,
    mark: 'Gimp',
    description: 'Creating logos, layers, edit images ',
    color: 'primary',
  },
  trello: {
    type: 'react-icons',
    icon: SiTrello,
    mark: 'Trello',
    description: 'I really like for tasks',
    color: 'secondary',
  },
  sourcetree: {
    type: 'react-icons',
    icon: FaSourcetree,
    mark: 'Sourcetree',
    description: 'I like connect with bitbucket',
    color: 'quaternary',
  },
  mobile: {
    type: 'react-icons',
    icon: BsTerminal,
    mark: 'Terminal',
    description: 'My best terminal is ZSH,i know commands for bash',
    color: 'tertiary',
  },
  justinmind: {
    type: 'svg',
    icon: <JustinmindLogo width="60px" height="60px" className="svg" />,
    mark: 'JustinMind',
    description: 'creating mockups',
    color: 'senary',
  },
};
