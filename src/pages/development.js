import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { Building } from '../components/Section/WeAreBuilding';

const DevelopmentPage = () => {
  return (
    <Layout>
      <SEO title="Development" />
      <Building />
    </Layout>
  );
};

export default DevelopmentPage;
