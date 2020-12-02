import Signup from  '../public/components/Signup';
import styled from 'styled-components';
import Signin from '../public/components/Signin';

const Columns = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
grid-gap:20px;
`

 function signup() {
    return (
        <Columns>
          <Signup/>
          <Signin/>
        </Columns>
    )
}

export default signup;
