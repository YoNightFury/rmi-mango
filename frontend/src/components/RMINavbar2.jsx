import './RMINavbar2.css'
function RMINavbar2() {
  return (
    <nav className='navbar'>
      <div className='navdiv'>
        <div class="logo"><a href="/"> </a> </div>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faqs">FAQs</a></li>

        </ul>

      </div>
      <div>

        <button><a href="/signin">SignIn</a></button>
        <button><a href="/signup">SignUp</a></button>
      </div>

    </nav>
  );
}

export default RMINavbar2;