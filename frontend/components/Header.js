import Nav from './Nav'

export default function Header() {
    return (
        <div>
            <div className="bar">
                <a href="">Slick Fits</a>

                <Nav/>
            </div>

            <div className="sub-bar">
                <p >Search</p>
            </div>

            <div>Cart</div>

        </div>
    )
}
