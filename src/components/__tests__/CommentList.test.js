import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2', 'comment 3']
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one li per comment', () => {
  expect(wrapper.find('li').length).toEqual(3);
});

it('shows the text for each comment', () => {
  expect(wrapper.render().text()).toContain('comment 1');
  expect(wrapper.render().text()).toContain('comment 2');
  expect(wrapper.render().text()).toContain('comment 3');
});
