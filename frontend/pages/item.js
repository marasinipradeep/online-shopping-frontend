import SingleItem from '../public/components/SingleItem';




export default function Item(props) {

    console.log(props.query.id)
    return (
      
        <div>
            <SingleItem id={props.query.id} />
        </div>
    )
}
