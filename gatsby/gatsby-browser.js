import React from 'react';
import Layout from './src/components/Layout';
import 'normalize.css';
import { LangProvider } from './src/components/LanguageContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
export function wrapRootElement({ element }) {
  return <LangProvider>{element}</LangProvider>;
}
