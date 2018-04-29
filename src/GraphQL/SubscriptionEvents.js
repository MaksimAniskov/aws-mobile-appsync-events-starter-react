import gql from "graphql-tag";

export default gql(`
subscription {
  subscribeToEvents {
    id
  }
}`);
