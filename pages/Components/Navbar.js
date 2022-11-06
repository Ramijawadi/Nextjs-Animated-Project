import Link from 'next/link'

const Navbar = () => {
    return (
        <>

          <nav>
                <Link className='active' href="/"> PROFILE</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/contact">CONTACT</Link>
                <Link href="/gallery">GALLERY</Link>
                
            </nav>

              
           <div className='acceuil'>
         
         <div className='contenu'>
         
             <h2>PROJECT</h2>
             <p> Plug you WebSite and enjoy ...</p>
             
             <img className='laptop' src='laptopp.png' />
             <button type='button'> Get Started</button>
          </div>
          </div>
         <img src='back.svg' className='fond-curvy' />
        
</>
    );
}

export default Navbar;