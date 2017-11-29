import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Subreddit from '../src/components/Subreddit';

describe('Subreddit component', () => {
  const wrapper = shallow(<Subreddit subreddit='News' />);
  it('contains the title of the subreddit', () => {
    expect(wrapper.contains(<h4>News</h4>)).to.equal(true);
  });

  it('contains a button to remove a subreddit', () => {
    expect(wrapper.contains(<button className="btn btn-danger">Remove</button>)).to.equal(true);
  });
});
