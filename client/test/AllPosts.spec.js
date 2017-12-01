import React from 'react';
import AllPosts from '../src/components/AllPosts';
import Post from '../src/components/Post';
import postFixture from './fixtures/postFixture';
import { expect } from 'chai';
import { Shallow } from 'enzyme';

describe('AllPosts component', function() {
  const wrapper = shallow(<AllPosts posts={postFixture}/>);
  
  it('Should render the correct number of Post components', function() {
    expect(wrapper.find(Post).to.have.length(postFixture.length));
  });
});
