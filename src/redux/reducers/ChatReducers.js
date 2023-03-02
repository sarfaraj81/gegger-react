const initialState = {
    proposalNewMessages: {},
  };
  export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case "NEW_MESSAGE":
        console.log('dispatch done');
        let oldmessages=state.proposalNewMessages[action.payload.proposal_id]?state.proposalNewMessages[action.payload.proposal_id]:[]
        return { ...state, proposalNewMessages: {...state.proposalNewMessages, [action.payload.proposal_id]:[...oldmessages,action.payload] }};
      default:
        return state;
    }
  };