import { request, GraphQLClient, gql } from 'graphql-request';
import { useEffect, useState } from 'react'


export default function Home() {
  const [items, setItems] = useState([])
  useEffect(()=> {
    async function fetchData() {
      const endpoint = "/api/graphql"
      const graphqlClient = new GraphQLClient(endpoint, {});
      const query = gql`
      query {
        getCards {
          id
          name
          email
        }
      }
      `
      const data = await graphqlClient.request(query);
      return data
    }
    fetchData()
    .then(data => {
      setItems(data.getCards)
    })
    .catch(console.error);

  },[])
  /*async function onClick() {
    const endpoint = "/api/graphql"
    const graphqlClient = new GraphQLClient(endpoint, {});
    const query = gql`
    query {
      getCards {
        id
        name
        email
      }
    }
    `
    const data = await graphqlClient.request(query);
    console.log(data)
    // post
    const mutation = gql`
      mutation AddCard($input: CardInput!){
        addCard(input: $input) {
          id
          name
        }
      }

    `
    const variables = {
      input: values,
    }
    const data = await graphqlClient.request(mutation,variables);
    console.log(data)
    
    // delete
    const mutation = gql`
    mutation {
      deleteCard(id: "2") {
        id
        name
        email
      }
    }
    `
    const data = await graphqlClient.request(mutation);
    console.log(data)
    
  }*/
  return (
    <div className=" bg-white flex justify-around items-center w-full min-h-screen">
      {
                    items.map((item,index) => {
                        return <div className=''>
                          {item.name}
                        </div>
                    })
                }
      {/* <button className=' py-5 px-4 bg-blue-700 text-white rounded-3xl'>Click me</button> */}
    </div>
  )
}
