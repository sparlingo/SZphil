import gql from 'graphql-tag'

export const ADD_VOTE_MUTATION = gql`
  mutation updateVotes($id: Int!) {
    update_choicess(where: {id: {_eq: $id}},
    _inc: {votes: 1}) {
      affected_rows
    }
  }
`;

export const ALL_CHAR_QUERY = gql`
  query choices {
    choices(order_by: {id: asc}) {
      id
      name
    }
  }
`;

export const ALL_VOTES_SUBSCRIPTION = gql`
  subscription allVotes {
    theVotes: characters(order_by: {id: asc}) {
      label: name
      data: votes
    }
  }
`;