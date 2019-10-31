import React from 'react';
import { shallow } from 'enzyme';
import '../../../../configurations/setupTests';

import TodoItem from './TodoItem';

it('renders TodoItem without crashing', () => {
  shallow(<TodoItem />);
});
