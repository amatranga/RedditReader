import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RedditReader from '../src/RedditReader';

describe('RedditReader component', () => {
  const subreddits = ['News', 'BestOf', 'AskReddit'];
  const wrapper = shallow(<RedditReader subreddits={subreddits} />);
});
