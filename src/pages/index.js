import React from 'react';

import { LandingHero, Aims, Services } from '../components/Section/Landing';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingHero />
    <Aims />
    <Services />
  </Layout>
);

export default IndexPage;
