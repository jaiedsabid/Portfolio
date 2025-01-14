import React from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import {
  BlogsHistory,
  ContributionsGraph,
  Introduction,
  Details
} from './components';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About | itsrakesh</title>
        <meta name="description" content="Know more about me." />
        <meta property="og:title" content="About Rakesh Potnuru" />
        <meta property="og:description" content="Know more about me." />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/about_og_2JsfcGOYj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644150922090"
        />
        <meta property="twitter:title" content="About Rakesh Potnuru" />
        <meta property="twitter:description" content="Know more about me." />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/about_og_2JsfcGOYj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644150922090"
        />
      </Helmet>
      <Introduction />
      <ContributionsGraph />
      <BlogsHistory />
      <Details />
      <BackToTop />
    </React.Fragment>
  );
};

export default About;
