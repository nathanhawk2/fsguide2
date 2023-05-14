import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className='public'>
            <header>
                <h1>Welcome to <span className='nowrap'>Recipe E-Book</span></h1>
            </header>
            <main className='public__main'>
                <p>Generic Bio</p>
                <address className='public__addr'>Address info
                    <a href='tel:+17043651237'>(704) 365-1237</a>
                </address>
                <br />
                <p>Creator: Nathan</p>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    )
    return content
};

export default Public;