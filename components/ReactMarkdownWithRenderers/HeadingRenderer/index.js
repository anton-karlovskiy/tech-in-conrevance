
import React from 'react';

import theme from '../../../styles/theme';

const flatten = (text, child) => {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

const GitHubAnchor = ({ slug, color }) => (
  <a id={`user-content-${slug}`} className='anchor' aria-hidden='true' href={`#${slug}`}>
    <svg className='octicon octicon-link' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'>
      <path stroke={color} fillRule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z' />
    </svg>
  </a>
);

const HeadingRenderer = props => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  const HeadingChildren = () => (
    <>
      <GitHubAnchor slug={slug} color={theme.palette.text.primary} />
      {props.children}
    </>
  );
  return React.createElement('h' + props.level, {id: slug}, <HeadingChildren />);
};

export default HeadingRenderer;
