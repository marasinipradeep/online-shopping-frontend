import Reset from '../public/components/Reset';
export default function sell(props) {
    return (
        <div>
         <p>Reset Your Password {props.query.resetToken}</p>
         <Reset resetToken={props.query.resetToken}/>
        </div>
    )
}
