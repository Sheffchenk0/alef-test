const ADD_CHILDREN = 'ADD_CHILDREN';
const SET_PARENT = 'SET_PARENT';

const initialState = {
  children: [],
  parent: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CHILDREN: {
      return {
        ...state,
        children: [...payload],
      };
    }
    case SET_PARENT: {
      return {
        ...state,
        parent: {
          ...payload,
        },
      };
    }

    default:
      return state;
  }
}

export const addChildren = (children) => {
  return { type: ADD_CHILDREN, payload: children };
};
export const addParent = ({ name, age }) => {
  return { type: SET_PARENT, payload: { name, age } };
};
export const saveData = (parent, children) => (dispatch) => {
  dispatch(addChildren(children));
  dispatch(addParent(parent));
};
