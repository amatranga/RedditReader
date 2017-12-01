import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RedditReader from '../src/components/RedditReader';
import AllPosts from '../src/components/AllPosts';
import Search from '../src/components/Search';
import Post from '../src/components/Post';

describe('RedditReader child components', () => {
  const subreddits = ['News'];
  const wrapper = shallow(<RedditReader subreddits={subreddits} />);

  it('Should contain an "AllPosts" component', function() {
    expect(wrapper.find(AllPosts).to.have.length(1));
  });

  it('Should have a "Search" component', function() {
    expect(wrapper.find(Search).to.have.length(1));
  });

  it('Should have a "My Subreddits" section', function() {
    expect(wrapper.find(<h3>My Subreddits</h3>).to.have.length(1));
  });
});
