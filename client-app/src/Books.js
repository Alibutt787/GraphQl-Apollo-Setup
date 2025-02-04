import React from 'react'
import { useQuery, gql ,useMutation } from '@apollo/client';

const Get_Books = gql`
  query GetInfo {
   books {
      author,
      title,
      age
    }
  }
`;

const Add_Books = gql`
  mutation addBooks($title: String!,$author: String!,$age: String!) {
    addBooks(
      input:{ title: $title ,author: $author , age:$age}
      ){
      title
      author
      age
    }
  }
`;

export const Books = () => {


    const [addbookss] = useMutation(Add_Books);
    const { loading, error, data } = useQuery(Get_Books);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error :(</h2>;

    const {books} = data;
    return (
        <div>
            <h2>BOOK Info</h2>
            <table border="2" width="500">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((data, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{data.title} </td>
                                <td>{data.author} </td>
                                <td> {data.age}</td>

                            </tr>)

                    })}
                </tbody>
                <tfoot>
                    <tr><td colSpan="3"><b> Data Coming from GQL Server By ali butt</b></td></tr>
                </tfoot>
            </table>
            <button 
            onClick={()=>addbookss({variables:{
              title:"samina",author:"kausar",age:"50"}
              })}>Add DATA into table</button>
        </div>
    )
}
