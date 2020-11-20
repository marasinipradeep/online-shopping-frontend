import UpdateItem from '../public/components/UpdateItem';
export default function update({query}) {
    return (
     
        <div>
        {console.log(`Query.Id inside updatae is ${query.id}`)}
         <UpdateItem id={query.id}/>
        </div>
    )
}
