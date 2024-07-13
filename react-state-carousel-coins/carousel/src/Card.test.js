import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it('renders Card component without crashing', () => {
  const props = {
    caption: 'Test Caption',
    src: 'test-image.jpg',
    currNum: 1,
    totalNum: 5,
  };

  render(<Card {...props} />);
});

it('matches snapshot for Card component', () => {
  const props = {
    caption: 'Test Caption',
    src: 'test-image.jpg',
    currNum: 1,
    totalNum: 5,
  };

  const { container } = render(<Card {...props} />);
  expect(container).toMatchSnapshot();
});