import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SeoSocial from '../components/seo';

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <SeoSocial
        title={title}
        description={description}
        image={image}
        path={path}
      />
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
