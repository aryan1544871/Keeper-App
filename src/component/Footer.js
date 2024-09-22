function Footer() {
    var date = new Date ();

    return (
          <footer>
            <p>
             Copyright © {date.getFullYear()}
            </p>
        </footer>
    );
  }
  
  export default Footer;
  