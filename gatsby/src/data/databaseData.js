import React from 'react';
import {
  SiMysql,
  SiMariadb,
  SiFirebase,
  SiMongodb,
  SiCassandra,
  SiNeo4J,
} from 'react-icons/si';

export const dbData = {
  firebase: {
    type: 'react-icons',
    icon: SiFirebase,
    mark: 'Firebase',
    description: 'Firebase + react, authentication, configure',
    li: 'primary',
    color: 'quaternary',
  },
  mongodb: {
    type: 'react-icons',
    icon: SiMongodb,
    mark: 'MongoDB',
    description:
      'With graphql servers, headlesscms,node, express & react, gatsby, next ',
    color: 'quinary',
  },
  mysql: {
    type: 'react-icons',
    icon: SiMysql,
    mark: 'MySQL',
    description: 'With PHP, NestJS, creating models, entities relations',
    color: 'secondary',
  },
  mariadb: {
    type: 'react-icons',
    icon: SiMariadb,
    mark: 'MariaDB',
    description: 'NestJS + TypeORM + MySQL/MariaDB,entities and models',
    color: 'quinary',
  },
  cassandra: {
    type: 'react-icons',
    icon: SiCassandra,
    mark: 'Cassandra',
    description: 'Simple use, config, queries',
    color: 'primary',
  },
  neo4j: {
    type: 'react-icons',
    icon: SiNeo4J,
    mark: 'Neo4j',
    description:
      'graph database (GDB), simple queries, creating db, models and simple relations, syntax Cypher',
    color: 'tertiary',
  },
};
